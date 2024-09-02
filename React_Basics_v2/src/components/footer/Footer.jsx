import React from "react";
import "./Footer.scss";

export default function Footer() {
    return (
        <>
            <footer className="app_footer col-12 d-flex flex-column justify-content-between align-items-center">
                <div className="app_footer_content col-12 col-md-11 mx-md-auto col-lg-9 mx-lg-auto d-flex align-items-start justify-content-start justify-content-md-center">
                    <div className="communities_sect col-5 col-md-3 col-lg-3 d-flex flex-column align-items-start p-0 p-md-2  ps-md-0">
                        <h5>Dev Communities</h5>
                        <ul className="d-flex flex-column justify-content-between">
                            <li>
                                <a>Goolge Developers</a>
                            </li>
                            <li>
                                <a>SpringBoot KE</a>
                            </li>
                            <li>
                                <a>Django Community</a>
                            </li>
                            <li>
                                <a>ICP Developers</a>
                            </li>
                        </ul>
                    </div>
                    <div id="contacts" className="contact_sect col-5 col-md-4 col-lg-3 d-flex flex-column align-items-start p-0 p-md-2 ps-0">
                        <h5>Contact Me</h5>
                        <ul className="d-flex flex-column justify-content-between">
                            <li>
                                <span className="">
                                    <i className="bi bi-telephone-inbound me-1 me-md-2"></i>
                                    <span>+254 757 914 258</span>
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-envelope-at  me-md-2"></i>
                                <a>giftnestah@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="socials_sect col-5 col-md-3 col-lg-3 d-flex flex-column align-items-start p-0 p-md-2">
                        <h5>Lets Connect</h5>
                        <ul className="d-flex align-items-center justify-content-between p-0 p-md-2 ps-0">
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/gift-nestah1">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/NiestaDe">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/PantheraNestah">
                                    <i class="bi bi-github"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/_its._niesta/">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="rights_sect text-center">© 2024 Gift Nestah P</p>
            </footer>
        </>
    )
}