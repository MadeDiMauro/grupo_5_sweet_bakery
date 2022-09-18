import React from "react";
import Topbar from "../Topbar/Topbar";
import ContentRowTop from "./SubComponents/ContentRowTop/ContentRowTop";
import Footer from "../Footer/Footer";
import Table from "../Table/Table";

class ContentWrapper extends React.Component {

	constructor() {
		super();
		this.state = {
			products: [],
			columnTables: []
		}
	}

	async componentDidMount() {
		const response = await fetch("http://localhost:3000/api/products");
		const data = await response.json();
		console.log(data.meta)
		let columnas = ["Id", "Imagen", "Nombre", "Precio", "Descripción", "Categoria", "Detalle"];
		this.setState({ products: data.meta.products, columnTables: columnas })
	 }

	render() {

		return(
			<div id="content-wrapper" className="d-flex flex-column">
	
				{/* <!-- Main Content --> */}
				<div id="content">
	
					{/* <!-- Topbar --> */}
					<Topbar />
					{/* <!-- End of Topbar --> */}
	
					{/* <!-- Content Row Top --> */}
					<ContentRowTop />
					{/* <!--End Content Row Top--> */}
				</div>
				{/* <!-- End of MainContent --> */}
	
	
				<Table data={ this.state.products } columns={this.state.columnTables} />
	
				{/* <!-- Footer --> */}
				<Footer />
				{/* <!-- End of Footer --> */}
	
			</div>
		)
	}
}

export default ContentWrapper;