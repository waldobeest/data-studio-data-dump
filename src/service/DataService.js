const getDataSetFromProps = ({tables, fields}) => {
    const metrics = fields.metricID.map((m) => {
        return m.name
    });

    const dimensions = fields.dimID.map((d) => {
        return d.name
    });

    const dataSet = [];

    tables.DEFAULT.forEach((el) => {
        const dataRow = {};
        dimensions.forEach((dim, dimIndex) => {
            el.dimID.forEach((el2, elIndex) => {
                if (elIndex === dimIndex) {
                    dataRow[dim] = el2
                }
            })
        });

        metrics.forEach((met, metIndex) => {
            el.metricID.forEach((el3, elIndex) => {
                if (elIndex === metIndex) {
                    dataRow[met] = el3
                }
            })
        });
        dataSet.push(dataRow)
    });
    return dataSet
};

export {getDataSetFromProps}