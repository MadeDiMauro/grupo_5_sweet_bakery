import React from "react";
import { useEffect, useState } from 'react';
import Logo from '../../Assets/images/nombre-sweet-bakery-dorado.png';
import Cookies from 'js-cookie';

function Topbar() {
    let [userLogin, setUserLogin] = useState({
        meta: {
            name: "anonimo",
            avatar: Logo
        }
    });

    console.log("Cookie de sesión usuario: " + Cookies.get('idUserSession'));
    useEffect(() => {
        if (Cookies.get('idUserSession') == undefined) {
            setUserLogin({
                meta: {
                    name: "anonimo",
                    avatar: Logo
                }
            });
        } else {
            fetch('http://localhost:3000/api/users/' + Cookies.get('idUserSession'))
                .then((response) => response.json())
                .then((user) => {
                    console.log(user);
                    setUserLogin(user);
                }).catch((error) => {
                    console.log(error);

                });
        }

    }, []);
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i className="fas fa-bell fa-fw"></i>
                        {/* <!-- Counter - Alerts --> */}
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i className="fas fa-envelope fa-fw"></i>
                        {/* <!-- Counter - Messages --> */}
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userLogin.meta.name}</span>
                        <img className="img-profile rounded-circle" src={userLogin.meta.avatar} alt={userLogin.meta.name} width="60" />
                    </a>
                </li>

            </ul>

        </nav>
    )
}

export default Topbar;