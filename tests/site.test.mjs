import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const root = resolve('dist/analog/public');
const read = path => readFileSync(resolve(root, path), 'utf8');

test('navigation exposes Projects on the home page', () => {
  assert.match(read('index.html'), /href="\/projects"[^>]*>\s*✨ Projects\s*</);
});
test('Projects is rendered with Still and a details link', () => {
  const html = read('projects/index.html');
  assert.match(html, /<h1[^>]*>\s*Projects\s*<\/h1>/);
  assert.match(html, /href="\/projects\/still"/);
  assert.match(html, /Still/);
  assert.match(html, /href="https:\/\/github\.com\/logeshkannan96\/clonebox"/);
  assert.ok(existsSync(resolve(root, 'projects/clonebox-preview.png')));
});
test('Still details render at a direct URL with a full-page launch link', () => {
  const html = read('projects/still/index.html');
  assert.match(html, /<h1[^>]*>\s*Still\s*<\/h1>/);
  assert.match(html, /href="\/projects\/preview\/still\/"/);
  assert.match(html, /images stay on your device/i);
  assert.ok(existsSync(resolve(root, 'projects/still-preview.png')));
});
test('the nested preview has its own entry point and assets under the nested base', () => {
  const html = read('projects/preview/still/index.html');
  assert.match(html, /<title>Still/);
  const assets = [...html.matchAll(/(?:src|href)="(\/projects\/preview\/still\/assets\/[^" ]+)"/g)];
  assert.ok(assets.length >= 2, 'Expected app JavaScript and CSS at the nested preview path');
  for (const [, path] of assets) assert.ok(existsSync(resolve(root, path.slice(1))), path);
});
