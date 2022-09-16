import React from "react";

function Categoria(props) {

    return (
        <div className="col-lg-6 mb-3">
            <div className="card bg-light text-secondary ">
                <div className="card-body">
                    <div className="bold h4">
                        {props.name}
                    </div>
                    <div>
                        Cantidad: {props.cantidad}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categoria;