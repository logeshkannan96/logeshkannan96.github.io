const s=`---
title: Linux Users Groups
slug: linux-users-groups
date: 16 Aug, 24
---

<h2 id="users-and-groups">Users and Groups</h2>
<p>The file /etc/passwd in linux systems maintains the UID and GID and the file /etc/group contains the GID. To view the UID and GID without viewing /etc/passwd and /etc/group we can use the command </p>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F69D50">id</span></span></code></pre>
<p>This prints both UID and GID.</p>
`;export{s as default};
