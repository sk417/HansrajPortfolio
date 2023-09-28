import React, { useEffect } from 'react';
import {Typewriter} from 'react-simple-typewriter';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () =>{
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
    return (
        <>
        <section className='home' id='home'>
            <div className='max-width'>
                <div className='home-content' data-aos="fade-down">
                  <p><span className='hii'>Hii There! </span><span className='name'>I'm Hansraj kumar</span></p>
                  <p><span className='desg'>I'm a </span><span className='webc'><Typewriter
                    words= {['Competitive Programmer', 'Web Developer']}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={700}

                    /></span></p>
                </div><br/>
                <div className='follow' data-aos="fade-up">
                    <p>Follow me</p>
                    <div className='follow-link'>
                       <a href='https://github.com/Hansraj8541' className='fa fa-github' target='blank'>&nbsp;</a>
                       <a href='https://www.linkedin.com/in/hansraj-kumar-3b80a2227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='fa fa-linkedin' target='blank'>&nbsp;</a>
                       <a href='https://twitter.com/Hansrajkum16995' className='fa fa-twitter' target='blank'>&nbsp;</a>
                       <a href='https://instagram.com/hansrajsharma28?igshid=OGQ5ZDc2ODk2ZA==' className='fa fa-instagram' target='blank'>&nbsp;</a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Home;