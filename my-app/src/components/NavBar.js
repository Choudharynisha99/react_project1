import React from 'react'
import {
    Link
  } from "react-router-dom";



function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-light `}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="./">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="./home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./about">{props.about}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://legacy.reactjs.org/docs/introducing-jsx.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://legacy.reactjs.org/docs/introducing-jsx.html">Action</a></li>
                                    <li><a className="dropdown-item" href="https://legacy.reactjs.org/docs/introducing-jsx.html">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://legacy.reactjs.org/docs/introducing-jsx.html">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                      
                      <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px'}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px'}}></div>
                      </div>

                       

                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
                </div>
              
              
                
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar


