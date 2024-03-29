import React from "react";
import Logo from '../../Assets/images/nombre-sweet-bakery-dorado.png';

function SideBar() {

    return(
        <ul className="navbar-nav bg-dark text-white sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/"> 
				<div className="sidebar-brand-icon ">
					<img className="w-100" src={Logo} alt="Sweet Bakery" />
				</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Últimos</span>
				</a>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Categorias</span></a>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Productos</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default SideBar;