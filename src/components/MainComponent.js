import React from 'react';
import DataDump from "./DataDump";


const MainComponent = props => {
    if (!props.fields || !props.tables || !props.tables.DEFAULT) {
        // TODO replace with Vantage Spinner
        return <div>Loading...</div>;
    }

    // return <div>{JSON.stringify(props)}</div>;

    // GDS does not allow access to localStorage
    // GDS does not allow access to  window.parent.document.dispatchEvent(event)
    // GDS does allow access to window.location.href

    return (
        <React.Fragment>
            <DataDump {...props} />
        </React.Fragment>
    );
};

export default MainComponent;
