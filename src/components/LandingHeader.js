import React from 'react'
import "./Login.css";
import { useNavigate,} from "react-router-dom";
const LandingPageHeader = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
    }
    return (
        <>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        CRUD APP
                        </div>
                    <ul id="navigation" className="navbar-nav signout">

                        <li className="nav-item active">
                            <button
                                id="active" className="nav-link "
                                aria-current="page"
                                href="#"
                                onClick={handleClick}
                            >
                                Sign In
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default LandingPageHeader