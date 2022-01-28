import React from 'react';

const Grid = ({config, data}) => (
    <table>
        <thead>
        <tr>
            {config.map(({title}) => <th>{title}</th>)}
        </tr>
        </thead>
        <tbody>
        {
            data.map((dataItem) =>
                <tr>
                    {
                        config.map(({field, component}) =>
                            <td>{component ? component({data: dataItem[field]}) : dataItem[field]}</td>
                        )}
                </tr>
            )}
        </tbody>
    </table>
);

export default Grid;