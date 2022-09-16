import React, { Component } from "react";
import Categoria from "./Subcomponents/Categoria";

class CategoriasInDB extends Component {

    constructor() {
        super();
        this.state = {
            categorias: []
        }
    }


    async componentDidMount() {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
           this.setState({categorias: data.meta.countByCategory});
    }    

   /*  handleMouse = () => {
        let h5 = document.querySelector("h5.card-body");
        h5.classList.add("bg-secondary  ")
    } */
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" /*onMouseOver={ (e) => e.target.parentNode.nextElementSibling.classList.add("bg-secondary") }*/ >Cantidad de productos por categoría</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            {
                                this.state.categorias.length === 0 && <h3>Cargando...</h3>
                            }
                            {
                               this.state.categorias.map(categoria => <Categoria key={categoria.categoria} name={categoria.categoria} cantidad={categoria.cantidad} />)
                            }
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoriasInDB;