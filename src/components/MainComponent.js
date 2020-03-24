import React from 'react';
import DataDump from "./DataDump";


const MainComponent = props => {
    if (!props.fields || !props.tables || !props.tables.DEFAULT) {
        // TODO replace with Vantage Spinner
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <DataDump {...props} />
        </React.Fragment>
    );
};

export default MainComponent;
