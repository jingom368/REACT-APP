import React from 'react'
import '../assets/css/2_1_Introduction.scss'
import IntroRound from './component/1_Intro_round'

function Introduction() {
    return ( 
        <section id="introduction" className="introduction">

            <div className="intro_box">
                <div className="intro_title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">Artist Profile & Program</div>
                <div className="intro_nature" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">‘Naturally in Nature’</div>
                <div className="intro_line"></div>
                <div className="intro_border">
                    <IntroRound></IntroRound>
                    <IntroRound></IntroRound>
                    <IntroRound></IntroRound>
                    <IntroRound></IntroRound>
                    <IntroRound></IntroRound>
                </div>
            </div>

        </section>
    );
}

export default Introduction;