import React from "react";
import LastMovie from '../../../../Assets/images/mandalorian.jpg';
import GenresInDB from "../../../GenresInDB/GenresInDB";
import ContentRowMovies from "./ContentRowMovies";

function ContentRowTop() {

	let infoTarjetas = [
		{
			title: "Movies in Data Base",
			color: "border-left-primary",
			icon: "fas fa-film",
			value: 21
		},
		{
			title: "Total awards",
			color: "border-left-success",
			icon: "fas fa-award",
			value: 79
		},
		{
			title: "Actors quantity",
			color: "border-left-warning",
			icon: "fas fa-user",
			value: 49
		}
	]


    return(
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/* <!-- Content Row Movies--> */}
					<div className="row">
						{
							infoTarjetas.map(function(unaTarjeta){
								return <ContentRowMovies key={ unaTarjeta.title } title={unaTarjeta.title} icon={ unaTarjeta.icon } color={ unaTarjeta.color } value={ unaTarjeta.value } />
							})
						}
					</div>
					{/* <!-- End movies in Data Base --> */}

	
					{/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
						{/* <!-- Last Movie in DB --> */}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={ {width: "40rem"} } src={LastMovie} alt=" Star Wars - Mandalorian " />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/* <!-- End content row last movie in Data Base --> */}





						{/* <!-- Genres in DB --> */}
						<GenresInDB />





					</div>
				</div>
    )
}

export default ContentRowTop;