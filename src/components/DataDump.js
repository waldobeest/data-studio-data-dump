import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DumpData = ({fields, tables, sheetName}) => {
    const metrics = fields.metricID.map((m) => {
        return m.name
    })

    const dimensions = fields.dimID.map((d) => {
        return d.name
    })

    const dataSet = []

    tables.DEFAULT.forEach((el) => {
        // This is the values
        const dataRow = {}
        // For each field, find the value
        dimensions.forEach((dim, dimIndex) => {
            el.dimID.forEach((el2, elIndex) => {
                if (elIndex === dimIndex) {
                    dataRow[dim] = el2
                }
            })
        })

        metrics.forEach((met, metIndex) => {
            el.metricID.forEach((el3, elIndex) => {
                if (elIndex === metIndex) {
                    dataRow[met] = el3
                }
            })
        })

        dataSet.push(dataRow)
    })

    if (dataSet.length > 0) {
        return (
            <ExcelFile element={<button>Download Data</button>}>
                <ExcelSheet data={dataSet} name={sheetName ? sheetName : "Data"}>
                    {Object.keys(dataSet[0]).map((key, index) => {
                        console.log(key)
                        return <ExcelColumn label={key} value={key} key={key}/>
                    })}
                </ExcelSheet>
            </ExcelFile>
        );
    } else {
        <div>Zero Rows in Specified Data</div>;
    }
}

export default DumpData