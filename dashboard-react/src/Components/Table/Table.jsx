import React from "react"

import Row from "./Row";

function Table(props) {

    const { data = [], columns = [] } = props;
    let columns2=["id", "images", "name", "price", "description","products_categories", "url_detail"];

    return(
        <div className="col-lg-12 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800" >Listado de Productos</h5>
            </div>
            <div className="card-body">
                <div className="row">

        <table className="table">
            <thead>
            <tr>
                {
                    columns.map((column, i) => <th key={column + " " + i}>{ column }</th> )
                }
            </tr>
            </thead>
            <tbody>
                { data.map((element, i) => <Row key={ element.title + i } rowData={element} columns={columns2}/>) }
            </tbody>

        </table>
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Table;