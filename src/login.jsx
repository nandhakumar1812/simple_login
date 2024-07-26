// import React from "react";
// import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login(){

    const navigate = useNavigate();

    function logged_in(){

        navigate("/logged");

    }

    return (
        <div className="login-page">
            <div className="container-right">
                <div className="login">
                    <form>
                        <h1 className="logintext">
                            LOG IN
                        </h1>
                        <label>
                            Username
                        </label>
                        <input type="email" placeholder="Username"/>
                        <label>
                            Password
                        </label>
                        <input type="password" placeholder="Password"/>
                        <button className='glowing-btn' value="submit" onClick={logged_in}>
                            <span className='glowing-txt'>&nbsp;&nbsp;&nbsp;S<span className='faulty-letter'>UB</span>MIT</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login