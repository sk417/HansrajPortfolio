import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Edu = () =>{
  useEffect(() =>{
    Aos.init({duration:2000});
  },[]);
    return (
        <>
          <section className="education" data-aos="fade-down">
            <div className="max-width">
              <h1 className="title"><i className="fa fa-graduation-cap"></i> Education</h1>
                <div className="content">
                <div className="row1" data-aos="fade-right">
                  <div className="text box">
                    <h1>BTech (Computer Engineering)</h1>
                    <h2>C V Raman Global Unuversity</h2>
                    <p> <i className="fa fa-map-marker" aria-hidden="true"></i> Bhubaneshwar (Odisha)</p>
                    <p>Till now 84% (2020-present)</p>
                  </div>
                  </div>
                  <div className="row2" data-aos="fade-left">
                  <div className="box text">
                    <h1>Intermediate (Science(PCM))</h1>
                    <h2>LP Shahi College</h2>
                    <p> <i className="fa fa-map-marker" aria-hidden="true"></i> Patna (Bihar)</p>
                    <p>68.9% (2017-2019)</p>
                  </div>
                  </div>
                  <div className="row1" data-aos="fade-right">
                  <div className="box text">
                    <h1>Matriculation</h1>
                    <h2>+2R H S</h2>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Arwal(Bihar)</p>
                    <p>60% (2016)</p>
                  </div>
                  </div>
                </div>
              </div>
          </section>
         
        </>
    );
}

export default Edu;