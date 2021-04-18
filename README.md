# Data Dump Toolbox for Data Studio

Attempt to dump data from a dashboard

## Supported Data Formats:
Excel File. Dimensions and Metrics Supported

## Getting Started:
yarn
yarn start

## To populate local test data:
Edit Main Component to return:

return <div>{JSON.stringify(props)}</div>;
Copy Value from report in GDS, and save in localData.json

This is consumed in index.js
const localData = require('./localData.json');

## ASIS: Build Process:
1. yarn build:dev
2. copy files from /build into your gs:// location

## TOBE: Build Process:
1. Fill in your GS:// link in package.json
2. yarn build:dev
3. yarn push:dev

## Credits
Forked from: anvilinsights/data-studio-react-starter
Uses React Export Excel: rdcalle/react-export-excel
