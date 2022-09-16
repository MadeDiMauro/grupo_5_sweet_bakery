import React, { Component } from "react";
import Genre from "./Subcomponents/Genre";

class GenresInDB extends Component {

    constructor() {
        super();
        this.state = {
            genres: []
        }
    }


    async componentDidMount() {
        const response = await fetch("http://localhost:3001/api/genres");
        const data = await response.json();
        
            this.setState({genres: data.data});

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
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={ (e) => e.target.parentNode.nextElementSibling.classList.add("bg-secondary") } >Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            {
                                this.state.genres.length == 0 && <h3>Cargando...</h3>
                            }
                            {
                               this.state.genres.map(genre => <Genre key={genre.name} name={genre.name} />)
                            }
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenresInDB;