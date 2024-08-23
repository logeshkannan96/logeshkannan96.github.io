const s=`---
title: Docker CLI Commands
slug: docker-cli-commands
date: 23 Aug, 24
---

<h2 id="list-container-id-of-all-containers">List container id of all containers</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> ps</span><span style="color:#6CB6FF"> -a</span><span style="color:#6CB6FF"> -q</span></span></code></pre>
<h2 id="run-a-container-in-detached-mode">Run a container in detached mode</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> run</span><span style="color:#6CB6FF"> -d</span><span style="color:#6CB6FF"> --name</span><span style="color:#96D0FF"> container-name</span><span style="color:#96D0FF"> image:tag</span><span style="color:#ADBAC7"> </span></span></code></pre>
<p>The paremeter <code>-d</code> or <code>--detach</code> runs container in the background and prints the container ID</p>
<h2 id="stream-logs-of-a-running-container">Stream logs of a running container</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> logs</span><span style="color:#6CB6FF"> -f</span><span style="color:#96D0FF"> container-name</span></span></code></pre>
<h2 id="run-a-container-with-resource-limits-and-logging">Run a container with resource limits and logging</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> run</span><span style="color:#6CB6FF"> -d</span><span style="color:#6CB6FF"> --name</span><span style="color:#96D0FF"> myapp</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --cpus</span><span style="color:#6CB6FF"> 0.5</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --memory</span><span style="color:#96D0FF"> 512m</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --memory-reservation</span><span style="color:#96D0FF"> 256m</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --oom-kill-disable</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --log-driver</span><span style="color:#96D0FF"> json-file</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --log-opt</span><span style="color:#96D0FF"> max-size=10m</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#6CB6FF">  --log-opt</span><span style="color:#96D0FF"> max-file=</span><span style="color:#6CB6FF">3</span><span style="color:#F47067"> \\</span></span>
<span class="line"><span style="color:#96D0FF">  image:tag</span></span></code></pre>
<p>Runs a container with specific CPU and memory limits, disables OOM killer, and configures JSON file logging with rotation.</p>
<h2 id="run-a-container-with-environment-variables">Run a container with environment variables</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> run</span><span style="color:#6CB6FF"> -e</span><span style="color:#96D0FF"> VAR1=value1</span><span style="color:#6CB6FF"> -e</span><span style="color:#96D0FF"> VAR2=value2</span><span style="color:#96D0FF"> image:tag</span><span style="color:#ADBAC7"> </span></span></code></pre>
<h2 id="run-a-container-with-a-env-file">Run a container with a .env file</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> run</span><span style="color:#6CB6FF"> --env-file=.env</span><span style="color:#96D0FF"> image:tag</span><span style="color:#ADBAC7"> </span></span></code></pre>
<h2 id="remove-all-the-stopped-containers">Remove all the stopped containers</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> container</span><span style="color:#96D0FF"> prune</span></span></code></pre>
<h2 id="disk-usage-of-containers">Disk usage of containers</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> ps</span><span style="color:#6CB6FF"> --size</span><span style="color:#768390"> # docker ps -s</span></span></code></pre>
<h2 id="docker-container-id-by-image-id-or-name">Docker container ID by image id or name</h2>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">docker</span><span style="color:#96D0FF"> ps</span><span style="color:#6CB6FF"> -aqf</span><span style="color:#96D0FF"> "ancestor=&#x3C;image-name-with-tag or image-id>"</span></span></code></pre>
`;export{s as default};
