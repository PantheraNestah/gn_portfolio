import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./cLegend.scss";

export default function MyLegend() {
    const navigate = useNavigate();

    return (
        <>
            <section id="home" className="col-12 d-flex align-items-center justify-content-xl-between p-2 pb-4 mb-4">
                <div className="legend_desc col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-start justify-content-xl-between">
                    <div className="name_n_tag">
                        <h2 className="">Gift Nestah</h2>
                        <span className="my_tags">Software Developer</span>
                    </div>
                    <p className="col-md-11">
                        I am a software developer with a passion for creating and developing software solutions, always looking for new challenges and opportunities to grow as a developer. I have a strong foundation in web development and a keen interest in Data and AI. Having a strong background in Computer Science, am a creative thinker always looking for new effective ways to solve problems and create innovative solutions. Am a self motivated individual with a deep value for collaboration and always looking to motivate and inspire my colleagues for the success of the whole team.
                    </p>
                    <div className="cv_connect d-flex justify-content-between">
                        <a href="/Docs/gn_resume_dev.pdf" className="resume text-center me-2">Resume <i class="bi bi-download ms-1"></i></a>
                        <div className="socials d-flex align-items-center justify-content-center">
                            <a target="_blank" href="https://github.com/PantheraNestah" className="d-flex align-items-center justify-content-center"><i class="bi bi-github"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/gift-nestah1" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                            <a target="_blank" href="https://twitter.com/NiestaDe" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block legend_img_cont">
                    <img src="/img/github_rudrabarad.gif" alt="Gift Nestah P" />
                </div>
            </section>
        </>
    )
}