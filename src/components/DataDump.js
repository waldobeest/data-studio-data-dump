import React from "react";
import ReactExport from "react-export-excel";
import {getDataSetFromProps} from '../service/DataService'

const SvgWithXlink = (props)=> {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props.style} shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M68.162 216.841h159.274v-64.832H407.06v64.832h163.892L319.728 461.285 68.162 216.841zM320 540.987l247.468-.709 23.658-112.017 48.875 1.607v178.939H0v-178.94l48.886-1.606 23.658 112.017 247.456.709zM227.436 31.182H407.06v24.083H227.436V31.182zm0 48.544H407.06v49.146H227.436V79.726z"/></svg>
    );
}


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const styles = {
    button: {
        boxShadow: '0px 10px 14px -7px #3e8277',
        background: 'linear-gradient(to bottom, #2bb09a 5%, #8ae3d4 100%)',
        backgroundColor: '#2bb09a',
        borderRadius: '20px',
        display: 'inline-block',
        cursor: 'pointer',
        color: '#ffffff',
        padding: '8px',
    }
}

const DumpData = ({fields, tables, sheetName}) => {
    const dataSet = getDataSetFromProps({tables, fields})

    if (dataSet.length > 0) {
        return (
            <ExcelFile element={<button style={styles.button}><SvgWithXlink style={{width: '15px', height: '15px', fill: 'white'}}/></button>}>
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