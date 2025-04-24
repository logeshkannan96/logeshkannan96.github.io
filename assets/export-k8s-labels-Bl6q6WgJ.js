const s=`---
title: Exporting k8s pvc labels to csv
slug: exporting-k8s-pvc-labels
date: 22 Jul, 24
---

<p>NodeJs code to map all persistent disks with its labels to a csv file. The below code group all the persistent disks with the same label <code>run</code>.</p>
<pre class="shiki github-dark-dimmed" style="background-color:#22272e;color:#adbac7" tabindex="0"><code><span class="line"><span style="color:#F47067">const</span><span style="color:#6CB6FF"> pvcData</span><span style="color:#F47067"> =</span><span style="color:#DCBDFB"> require</span><span style="color:#ADBAC7">(</span><span style="color:#96D0FF">'./pvc_data.json'</span><span style="color:#ADBAC7">);</span></span>
<span class="line"><span style="color:#F47067">const</span><span style="color:#6CB6FF"> createCsvWriter</span><span style="color:#F47067"> =</span><span style="color:#DCBDFB"> require</span><span style="color:#ADBAC7">(</span><span style="color:#96D0FF">'csv-writer'</span><span style="color:#ADBAC7">).createObjectCsvWriter;</span></span>
<span class="line"><span style="color:#F47067">const</span><span style="color:#6CB6FF"> items</span><span style="color:#F47067"> =</span><span style="color:#ADBAC7"> pvcData.items;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067">const</span><span style="color:#6CB6FF"> pvclist</span><span style="color:#F47067"> =</span><span style="color:#ADBAC7"> items.</span><span style="color:#DCBDFB">map</span><span style="color:#ADBAC7">((</span><span style="color:#F69D50">item</span><span style="color:#ADBAC7">, </span><span style="color:#F69D50">i</span><span style="color:#ADBAC7">) </span><span style="color:#F47067">=></span><span style="color:#ADBAC7"> {</span></span>
<span class="line"><span style="color:#F47067">    const</span><span style="color:#6CB6FF"> itemFound</span><span style="color:#F47067"> =</span><span style="color:#ADBAC7"> items.</span><span style="color:#DCBDFB">find</span><span style="color:#ADBAC7">((</span><span style="color:#F69D50">findItem</span><span style="color:#ADBAC7">, </span><span style="color:#F69D50">j</span><span style="color:#ADBAC7">) </span><span style="color:#F47067">=></span><span style="color:#ADBAC7"> {</span></span>
<span class="line"><span style="color:#F47067">        if</span><span style="color:#ADBAC7">(i </span><span style="color:#F47067">===</span><span style="color:#ADBAC7"> j) {</span></span>
<span class="line"><span style="color:#F47067">            return</span><span style="color:#6CB6FF"> false</span><span style="color:#ADBAC7">;</span></span>
<span class="line"><span style="color:#ADBAC7">        }</span></span>
<span class="line"><span style="color:#F47067">        if</span><span style="color:#ADBAC7">(findItem.metadata.labels.run </span><span style="color:#F47067">===</span><span style="color:#ADBAC7"> item.metadata.labels.run) {</span></span>
<span class="line"><span style="color:#F47067">            return</span><span style="color:#6CB6FF"> true</span><span style="color:#ADBAC7">;</span></span>
<span class="line"><span style="color:#ADBAC7">        }</span></span>
<span class="line"><span style="color:#ADBAC7">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067">    if</span><span style="color:#ADBAC7">(itemFound) {</span></span>
<span class="line"><span style="color:#ADBAC7">       item.metadata.labels </span><span style="color:#F47067">=</span><span style="color:#ADBAC7"> itemFound.metadata.labels;</span></span>
<span class="line"><span style="color:#ADBAC7">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067">    return</span><span style="color:#ADBAC7"> {</span></span>
<span class="line"><span style="color:#ADBAC7">        name: item.metadata.name,</span></span>
<span class="line"><span style="color:#ADBAC7">        age: Math.</span><span style="color:#DCBDFB">ceil</span><span style="color:#ADBAC7">((</span><span style="color:#F47067">new</span><span style="color:#DCBDFB"> Date</span><span style="color:#ADBAC7">() </span><span style="color:#F47067">-</span><span style="color:#F47067"> new</span><span style="color:#DCBDFB"> Date</span><span style="color:#ADBAC7">(item.metadata.creationTimestamp))</span><span style="color:#F47067">/</span><span style="color:#ADBAC7">(</span><span style="color:#6CB6FF">1000</span><span style="color:#F47067"> *</span><span style="color:#6CB6FF"> 3600</span><span style="color:#F47067"> *</span><span style="color:#6CB6FF"> 24</span><span style="color:#ADBAC7">)),</span></span>
<span class="line"><span style="color:#ADBAC7">        creationTimestamp: item.metadata.creationTimestamp,</span></span>
<span class="line"><span style="color:#F47067">        ...</span><span style="color:#ADBAC7">item.metadata.labels,</span></span>
<span class="line"><span style="color:#ADBAC7">    };</span></span>
<span class="line"><span style="color:#ADBAC7">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067">const</span><span style="color:#6CB6FF"> csvWriter</span><span style="color:#F47067"> =</span><span style="color:#DCBDFB"> createCsvWriter</span><span style="color:#ADBAC7">({</span></span>
<span class="line"><span style="color:#ADBAC7">    path: </span><span style="color:#96D0FF">'pvclist.csv'</span><span style="color:#ADBAC7">,</span></span>
<span class="line"><span style="color:#ADBAC7">    header: [</span></span>
<span class="line"><span style="color:#ADBAC7">        { id: </span><span style="color:#96D0FF">'run'</span><span style="color:#ADBAC7">, title: </span><span style="color:#96D0FF">'Key'</span><span style="color:#ADBAC7"> },</span></span>
<span class="line"><span style="color:#ADBAC7">        { id: </span><span style="color:#96D0FF">'name'</span><span style="color:#ADBAC7">, title: </span><span style="color:#96D0FF">'Name'</span><span style="color:#ADBAC7"> },</span></span>
<span class="line"><span style="color:#ADBAC7">        { id: </span><span style="color:#96D0FF">'age'</span><span style="color:#ADBAC7">, title: </span><span style="color:#96D0FF">'Age'</span><span style="color:#ADBAC7"> },</span></span>
<span class="line"><span style="color:#ADBAC7">        { id: </span><span style="color:#96D0FF">'creationTimestamp'</span><span style="color:#ADBAC7">, title: </span><span style="color:#96D0FF">'Creation Timestamp'</span><span style="color:#ADBAC7"> }</span></span>
<span class="line"><span style="color:#ADBAC7">    ]</span></span>
<span class="line"><span style="color:#ADBAC7">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7">csvWriter</span></span>
<span class="line"><span style="color:#ADBAC7">    .</span><span style="color:#DCBDFB">writeRecords</span><span style="color:#ADBAC7">(pvclist)</span></span>
<span class="line"><span style="color:#ADBAC7">    .</span><span style="color:#DCBDFB">then</span><span style="color:#ADBAC7">(() </span><span style="color:#F47067">=></span><span style="color:#ADBAC7"> console.</span><span style="color:#DCBDFB">log</span><span style="color:#ADBAC7">(</span><span style="color:#96D0FF">'CSV file has been written successfully'</span><span style="color:#ADBAC7">))</span></span>
<span class="line"><span style="color:#ADBAC7">    .</span><span style="color:#DCBDFB">catch</span><span style="color:#ADBAC7">(</span><span style="color:#F69D50">error</span><span style="color:#F47067"> =></span><span style="color:#ADBAC7"> console.</span><span style="color:#DCBDFB">error</span><span style="color:#ADBAC7">(</span><span style="color:#96D0FF">'Error writing CSV file:'</span><span style="color:#ADBAC7">, error));</span></span></code></pre>
`;export{s as default};
