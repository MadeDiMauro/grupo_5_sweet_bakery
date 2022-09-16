import React from "react";
import { useEffect, useState } from 'react';
import CategoriasInDB from "../../../CategoriasInDB/CategoriasInDB";
import ContentRowProducts from "./ContentRowProducts";

function ContentRowTop() {
	let [isLoading, setIsLoading] = useState(true);
	let [countProducts, setCountProducts] = useState(0);
	let [countCategories, setCountCategories] = useState(0);
	let [countUsers, setCountUsers] = useState(0);
	let [idLastProduct, setIdLastProduct] = useState(0);
	let [lastProduct, setLastProduct] = useState({
		id: 0,
		name: "",
		price: 0,
		description: "",
		image: "",
		url_detail: ""
	});

	useEffect(() => {
		fetch('http://localhost:3000/api/products')
			.then((response) => response.json())
			.then((products) => {
				//console.log("últimoproducto: "+products.meta.products[products.meta.products.length-1].name)
				setCountProducts(products.meta.count);
				setCountCategories(products.meta.countByCategory.length);
				setIdLastProduct(products.meta.products.length);
				console.log("Id: " + idLastProduct);
				setIsLoading(false);
			});

	});

	useEffect(() => {
		fetch('http://localhost:3000/api/products/' + idLastProduct)
			.then((response) => response.json())
			.then((product) => {
				setLastProduct({
					id: product.meta.product.id,
					name: product.meta.product.name,
					price: product.meta.product.price,
					description: product.meta.product.description,
					image: product.meta.product.images[0].url_image,
					url_detail: product.meta.product.url_detail
				});
			}).catch((error) => {
				console.log("Inicio de api")
			});
	}, [idLastProduct]);

	useEffect(() => {
		fetch('http://localhost:3000/api/users')
			.then((response) => response.json())
			.then((users) => {
				//console.log(users)
				setCountUsers(users.meta.total);
				setIsLoading(false);
			});
	}, []);


	let infoTarjetas = [
		{
			title: "Total de productos",
			color: "border-left-warning",
			icon: "fas fa-store",
			value: countProducts
		},
		{
			title: "Total de categorias",
			color: "border-left-warning",
			icon: "fas fa-tags",
			value: countCategories
		},
		{
			title: "Total de usuarios",
			color: "border-left-warning",
			icon: "fas fa-user",
			value: countUsers
		}
	]


	return (
		<div className="container-fluid">

			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			{/* <!-- Content Row Movies--> */}
			<div className="row">
				{
					isLoading && <h3>Cargando...</h3>
				}
				{
					infoTarjetas.map(function (unaTarjeta) {
						return <ContentRowProducts key={unaTarjeta.title} title={unaTarjeta.title} icon={unaTarjeta.icon} color={unaTarjeta.color} value={unaTarjeta.value} />
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
							<h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
						</div>
						<div className="card-body">
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4 shadow-sm" style={{ width: "40rem" }} src={lastProduct.image} alt={lastProduct.name} />
							</div>
							<h2>{lastProduct.name}</h2>
							<p>Precio: $ {lastProduct.price}</p>
							<p>{lastProduct.description}</p>
							<a className="btn btn-warning" target="_blank" rel="noreferrer" href={lastProduct.url_detail} >Ver detalle</a>
						</div>
					</div>
				</div>
				{/* <!-- End content row last movie in Data Base --> */}
				{/* <!-- Categorias in DB --> */}
			<CategoriasInDB />

			</div>


			






	
		</div >
	)
}

export default ContentRowTop;