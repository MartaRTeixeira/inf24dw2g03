// TopBar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/TopBar.css";
import AuthContext from "./authContext";
import Login from "./login";
import Logout from "./logout";

const TopBar = () => {
    const { authenticated } = useContext(AuthContext);

    return (
        <div className="top-bar">
            <nav>
                <ul>
                    <li>
                        <Link to="/person">Persons</Link>
                    </li>
                    <li>
                        <Link to="/animal">Animals</Link>
                    </li>
                    <li>
                        <Link to="/volunteer">Volunteers</Link>
                    </li>
                    <li>
                        <Link to="/adoption">Adoptions</Link>
                    </li>
                </ul>
            </nav>

            <div className="login-status">
                {authenticated ? (
                    <Link to="/perfil">
                        {" "}
                        <img
                            src={localStorage.getItem("userImg")}
                            alt="Profile"
                            className="profile-image"
                        />
                    </Link>
                ) : (
                    <></>
                )}

                <span className={authenticated ? "online" : "offline"}>
                    {authenticated ? `${localStorage.getItem("userName")}` : "Offline"}
                </span>
                {authenticated ? (
                    <Logout className="auth-button" />
                ) : (
                    <Login className="auth-button" />
                )}
            </div>
        </div>
    );
};

export default TopBar;