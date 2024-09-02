import React, { useState, useEffect } from 'react';
import MyLogo from "../assets/img/gn_name_logo.png";

export default function MyHeader() {

    return (
        <>
            <header className="col-12 d-flex justify-content-end">
                <div className="brand_logo col-5 col-lg-5 d-flex align-items-center justify-content-start">
                    <img src={MyLogo} alt="" />
                </div>
                <nav className={`col-7 col-lg-7 d-flex align-items-end justify-content-end`}>
                    <ul className="col-lg-9 d-none d-lg-flex align-items-center justify-content-between">
                        <li><a className="nav_link" href="#home">Home</a></li>
                        <li><a className="nav_link" href="#stack">My Stack</a></li>
                        <li><a className="nav_link" href="#projects">Projects</a></li>
                        <li><a className="nav_link" href="#contacts" disabled>Contacts</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}