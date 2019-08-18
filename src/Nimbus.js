import React, { Component } from 'react';
import './_nimbus.scss';
import './_variables.scss';
import nimbusFinal from './images/nimbusFinal.svg';
import userOne from './images/userOne.svg';
import userTwo from './images/userTwo.svg';
import userThree from './images/userThree.svg';
import prototypeOne from './images/prototypeOne.svg';
import prototypeOneB from './images/prototypeOneB.svg';
import prototypeTwo from './images/prototypeTwo.svg';
import prototypeTwoB from './images/prototypeTwoB.svg';
import wireframe from './images/wireframe.svg';
import { HashLink as Link } from 'react-router-hash-link';

const PageContent = (props) => {
    return (
        <div>
            <div className='introduction'>
                <p className='introHeader'>Introduction</p>
                <p className='introText'>Nimbus is a web application that allows users to take
                a moment and re-evaluate their current goals. the design
                of the app requires the user to select one goal and detail
                the steps required to accomplish it. they are then able to
                re-affirm themselves in order to feel more confident and
                more accomplished. furthermore, nimbus was created with
                the concept of mindfulness in mind and decluttering a busy
                day.</p>
                <img src={nimbusFinal} />
            </div>
            <div className='nimbusInfo'>
                <div className='infoDiv'>
                    <div className='dateDiv'>
                        <p className='date'>Date</p>
                        <p className='dateMonth'>Jan - Mar 2018</p>
                    </div>
                    <div className='teammateDiv'>
                        <p className='teammates'>Teammates</p>
                        <div className='teammateNames'>
                            <p>Kenny Ta</p>
                            <p>Chester Vanhuang</p>
                        </div>
                    </div>
                </div>
                <div className='viewProjectBtn'>
                    <button>View Project</button>
                </div>
            </div>
            <div className='problem'>
                <p className='problemHeader'>if you’re frazzled, how can we help you
                focus on your current goal?</p>
                <p className='problemText'>Problem Statement:  “The everyday lives of people are filled with various
                    responsibilities and worries. Sometimes the demands of life pile up, causing
                    us to break down and become unproductive. People who are overwhelmed
                    with no clear solution plan become inattentive of their goals and get
                    lost in thoughts rather than actions.“ </p>
                <p className='problemText'>by relating to the u`ser, we were able to develop a linear wireframe 
                    allowing them to take the necessary steps to destress and re-evaluate
                    their mindset. </p>
            </div>
            <div className='userScenario'>
                <p className='userHeader'>User Scenario</p>
                <p className='userText'>We created three scenarios in which users would use our app in order
                                        to guage what functions would be useful and what we should focus
                                        on. our goal was to help our users be more focused and productive.
                                        the scenarios included a student who is flustered by many tasks and
                                        must choose one to focus on right now in order to be more present.
                                        next, the next task was a user who is stuck in traffic and is in a hurry
                                        to get home which incorporates reaffirmations to calm the user. 
                                        finally, the last scenario presents a user who has recently decided to
                                        break a bad habit of drinking and uses our app to design steps in order
                                        to quit. our main objective was to help our users be as present as possible
                                        and these scenarios helped direct us to creating our app.</p>
                <div>
                    <img src={userOne} />
                    <img src={userTwo} />
                    <img src={userThree} />
                </div>
            </div>
            <div className='paperPrototyping'>
                <p className='paperHeader'>Paper Prototyping</p>
                <p className='paperText'>
                    developing paper prototypes allowed us to prioritize what functions
                    we needed in order to make our app successful. It also allowed us to determine
                    the flow of the app and in what direction we wanted to guage our users
                    as well as the best possible way to help our users stay present and focused.
                    we created two paper prototypes </p>
                <p className='prototypeOne'>Prototype 1: Task Manager</p>
                <div>
                    <img src = {prototypeOne} />
                    <img src={prototypeOneB} />
                </div>
                <p className='prototypeOne'>Prototype 2: Reflections</p>
                <div>
                    <img src={prototypeTwo} />
                    <img src={prototypeTwoB} />
                </div>
            </div>
            <div className='wireframe'>
                <p className='wireframeHeader'>Wireframe</p>
                <p className='wireframeText'>
                    after gathering our user research, we created a wireframe that
                    addresses the key elements and challenges that we faced and decided 
                    what would be the best implementation for our initial problem. We came
                    up with a linear model that takes the user step by step through the process.
                    initially, they will be prompted to add all of the thoughts and problems that
                    they are facing at the moment. they are then asked to choose the most
                    important one and focus solely on breaking this task down to easier, 
                    managable steps. 
                </p>
                <img src={wireframe} />
            </div>
            <div className='web'>
                <p className='webHeader'>Web Implementation</p>
                <p className='webText'>
                    our finalized prototype was implemented with plain html,
                    css and javascript. we utilized dom manipulation in order to take 
                    user input and display their information on the screen. furthermore,
                    we used an event handler for the purpose of selecting a single
                    task which filters and deletes the remaining tasks. the affirmation 
                    and reflection pages takes user input and appends the data onto the page.
                    the user data is also stored in a mongodb database that was
                    implemented by my teammate.
                </p>
            </div>
        </div>
    )
}

export default class Nimbus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenu: false
        }
    }

    componentDidMount() {
    }

    removeFixed = () => {
        document.body.style.position = '';
    }

    sideMenuOpen = () => {
        let menu = document.querySelector('.menu');
        let sideNav = document.querySelector('.sideNav');
        let bar1 = document.querySelector('.bar1');
        let bar2 = document.querySelector('.bar2');
        let bar3 = document.querySelector('.bar3');
        let sideOverlay = document.querySelector('.sideOverlay');
        let sideNimbusText = document.querySelector('.sideNimbusText');
        let overflowHidden = document.querySelector('.overflowHidden');
        {
            !this.state.sideMenu ? sideNav.style.width = '250px'
            : sideNav.style.width = '0px'
        }
        {
            !this.state.sideMenu ? bar1.style.transform = 'rotate(-45deg) translate(-10px, 6px)'
            : bar1.style.transform = 'none'
        }
        {
            !this.state.sideMenu ? bar2.style.opacity = '0'
            : bar2.style.opacity = '1'
        }
        {
            !this.state.sideMenu ? bar3.style.transform = 'rotate(45deg) translate(-4px, -4px)'
                : bar3.style.transform = 'none'
        }
        {
            !this.state.sideMenu ? sideOverlay.style.display = 'block'
                : sideOverlay.style.display = 'none'
        }
        {
            this.state.sideMenu ? sideNimbusText.style.visibility = 'hidden'
                : sideNimbusText.style.visibility = 'visible'
        }
        this.setState({
            sideMenu: !this.state.sideMenu
        })
    }

    render() {
        console.log(this.state.sideMenu)
        return(
            <div>
                <div className='page'>
                    <div id='nimbusContainer'>
                        <div className='firstLayer'></div>
                        <div className='secondLayer'></div>
                        <div className='thirdLayer'>
                            <div onClick={this.sideMenuOpen} className='menu'>
                                <div className='bar bar1'></div>
                                <div className='bar bar2'></div>
                                <div className='bar bar3'></div>
                            </div>
                            <div className='sideOverlay'></div>
                            <div className='sideNav'>
                                <div className='sideNimbusText'>
                                    <Link to='/'><a onClick={this.removeFixed}><p>Home</p></a></Link>
                                    <a href='https://drive.google.com/file/d/1m-7O5GxEYdHTUcdXK0E7fw0g3oXR6Vpb/view' target='_blank'><p>Resume</p></a>
                                    <Link to ='/prishi'><p>Project RISHI</p></Link>
                                    <Link to ='/personal-projects'><p>Personal Projects</p></Link>
                                    <Link to='/personal-portfolio'><p>Personal Portfolio</p></Link>
                                </div>
                            </div>
                            <div className='textContent'>
                                <p className='header'>Nimbus</p>
                                <p className='description'>Relax, Unwind, and feel like you're in the Vanilla Sky</p>
                            </div>
                        </div>
                    </div>
            </div>
                <PageContent />
            </div>
        )
    }
}