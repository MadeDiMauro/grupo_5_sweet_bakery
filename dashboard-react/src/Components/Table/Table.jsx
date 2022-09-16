import React from "react"

import Row from "./Row";

function Table(props) {

    const { data = [], columns = [] } = props;


    return(
        <table className="table">
            <thead>
            <tr>
                {
                    columns.map((column, i) => <th key={column + " " + i}>{ column }</th> )
                }
            </tr>
            </thead>
            <tbody>
                { data.map((element, i) => <Row key={ element.title + i } rowData={element} columns={columns}/>) }
            </tbody>

        </table>
    )
}

export default Table;