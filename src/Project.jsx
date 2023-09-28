import React, { useEffect } from "react";
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import Aos from 'aos';
import "aos/dist/aos.css";

const Project = () =>{
    useEffect(() =>{
        Aos.init({duration:2000});
      },[]);
        return (
            <>
                <section className="project">
                    <div className="max-width">
                    <h2 className="title" data-aos="fade-down">Projects</h2>
                        <div className="content">
                            <div className="card" data-aos="fade-down">
                            <h1>Weather App</h1>
                                <div className="image"><img src={p1} alt="logo"/></div>
                                <div className="text">
                                    <a href="https://hansraj8541.github.io/calculator/" target='blank'>Demo</a>
                                    <a href="https://github.com/Hansraj8541/calculator" target='blank'>Github repo.</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-down">
                            <h1>Coding Learning App</h1>
                                <div className="image"><img src={p2} alt="logo"/></div>
                                <div className="text">
                                    <a href="http://hansraj8541.github.io/Responsive-Registration-form/" target='blank'>Demo</a>
                                    <a href="https://github.com/Hansraj8541/Registration-Form" target='blank'>Github repo.</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-down">
                            <h1>Chat App</h1>
                                 <div className="image"><img src={p3} alt="logo"/></div>
                                 <div className="text">
                                    <a href="https://hansraj8541.github.io/my-TODO-APP/" target='blank'>Demo</a>
                                    <a href="https://github.com/Hansraj8541/my-TODO-APP" target='blank'>Github repo.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}

export default Project;