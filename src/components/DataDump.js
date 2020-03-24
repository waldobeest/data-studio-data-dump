import React from "react";
import ReactExport from "react-export-excel";
import {getDataSetFromProps} from '../service/DataService'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const styles = {
    button: {
        boxShadow: '0px 10px 14px -7px #3e8277',
        background: 'linear-gradient(to bottom, #2bb09a 5%, #8ae3d4 100%)',
        backgroundColor: '#2bb09a',
        borderRadius: '8px',
        display: 'inline-block',
        cursor: 'pointer',
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '13px 32px',
        textDecoration: 'none',
        textShadow: '0px 1px 0px #2f6627',
    }
}

const DumpData = ({fields, tables, sheetName}) => {
    const dataSet = getDataSetFromProps({tables, fields})

    if (dataSet.length > 0) {
        return (
            <ExcelFile element={<button style={styles.button}>Download Data</button>}>
                <ExcelSheet data={dataSet} name={sheetName ? sheetName : "Data"}>
                    {Object.keys(dataSet[0]).map((key, index) => {
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