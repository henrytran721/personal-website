import React, { Component } from 'react';
import './_about.scss';
import profile from './images/profile.png';


export default class About extends Component {
    render() {
        return(
            <div id='about'>
                <div className='textContainer'>
                    <div className='aboutText'><p>About Me</p></div>
                </div>
                <div className='gradientFlex'>
                    <div className="gradient-border" id="box">
                        <div className='firstRowGradient'>
                            <img className='profile' src={profile} />
                            <div className='firstRowText'>
                                <p className='firstHeader'>Hi I'm Henry!</p>
                                <p className='firstInfo'>I’m a recent graduate from ucsd who majored in cognitive science with a specialization in human computer interaction. 
                                   I am Currently located in Los Angeles, CA. When i’m not coding, i like to spend my time photographing and lifting weights.</p>
                            </div>
                        </div>
                        <div className='secondRowGradient'>
                            <p className='mySkills'>My Skills</p>
                            <div className='lists'>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Sass</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <ul>
                                <li>Sketch</li>
                                <li>Git</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Webpack</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}