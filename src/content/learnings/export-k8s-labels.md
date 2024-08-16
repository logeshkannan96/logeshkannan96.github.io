---
title: Exporting k8s pvc labels to csv
slug: exporting-k8s-pvc-labels
date: 22 Jul, 24
---

NodeJs code to map all persistent disks with its labels to a csv file. The below code group all the persistent disks with the same label `run`.

```js
const pvcData = require('./pvc_data.json');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const items = pvcData.items;

const pvclist = items.map((item, i) => {
    const itemFound = items.find((findItem, j) => {
        if(i === j) {
            return false;
        }
        if(findItem.metadata.labels.run === item.metadata.labels.run) {
            return true;
        }
    });

    if(itemFound) {
       item.metadata.labels = itemFound.metadata.labels;
    }

    return {
        name: item.metadata.name,
        age: Math.ceil((new Date() - new Date(item.metadata.creationTimestamp))/(1000 * 3600 * 24)),
        creationTimestamp: item.metadata.creationTimestamp,
        ...item.metadata.labels,
    };
});

const csvWriter = createCsvWriter({
    path: 'pvclist.csv',
    header: [
        { id: 'run', title: 'Key' },
        { id: 'name', title: 'Name' },
        { id: 'age', title: 'Age' },
        { id: 'creationTimestamp', title: 'Creation Timestamp' }
    ]
});

csvWriter
    .writeRecords(pvclist)
    .then(() => console.log('CSV file has been written successfully'))
    .catch(error => console.error('Error writing CSV file:', error));
