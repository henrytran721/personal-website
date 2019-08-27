import React, { Component } from 'react';
import './_prishi.scss';
import prishichildren from './images/rishichildren.svg';
import needsAndInsights from './images/needsAndInsights.svg';
import map from './images/map.svg';
import input from './images/input.svg';
import post from './images/post.svg';
import { HashLink as Link } from 'react-router-hash-link';

const PageContent = () => {
    return (
        <div>
            <div className='introductionRishi'>
                <p className='introHeader'>Introduction</p>
                <p className='introText'>PROJECT RISHI IS A NON-PROFIT ORGANIZATION WE REACHED OUT
                TO AND WE WERE GIVEN THE TASK TO CREATE A SUSTAINABLE 
                SOLUTION TO THEIR PROBLEM. WE WERE REQUIRED TO DEVELOP
                A WAY FOR POTENTIAL STAKEHOLDERS TO UNDERSTAND THE MAIN
                STAKEHOLDERS INITIATIVE AND GOALS BY INFORMING THEM OF
                WHAT IS GOING ON IN RURAL INDIAN COMMUNITIES.</p>
                <img src = {prishichildren} />
            </div>
            <div className='rishiInfo'>
                <div className='infoDiv'>
                    <div className='dateDiv'>
                        <p className='date'>Date</p>
                        <p className='dateMonth'>Sept - Dec 2017</p>
                    </div>
                    <div className='teammateDiv'>
                        <p className='teammates'>Teammates</p>
                        <div className='teammateNames'>
                            <p>Sandy Li</p>
                            <p>Betty Zhou</p>
                            <p>Paulos Liu </p>
                            <p>Derek Lee</p>
                            <p>Sen Fu</p>
                            <p>Ryan Manalastas</p>
                        </div>
                    </div>
                </div>
                <div className='viewProjectBtn'>
                    <a href='http://project-rishi.herokuapp.com/' target='_blank'><button>View Project</button></a>
                </div>
            </div>
            <div className='rishiProblem'>
                <p className='problemHeader'>How can we create a sustainable solution so these people can stay connected?</p>
                <p className='problemText'>problem and goal:  “our goal, with project rishi as our client, was
                                        to bring awareness to the pressing issues in rural indian communities.
                                        by bringing awareness, we are able to have potential stakeholders
                                        donate and become part of something bigger than themselves.”
                                        <br />
                                        <br />
                                        Our client gave us the task to move the platform over to a framework
                                        that would give them the ability to update the latest news for users
                                        to be informed. </p>
            </div>
            <div className='needfinding'>
                <p className='needHeader'>Needfinding</p>
                <p className='needText'>We were prompted with finding out what potential
                users of the platform would need out of the website. we came up with questions
                that would help us design and develop the site.</p>
                <ul className='needList'>
                    <li>What is the problem that you hope to solve with this project?</li>
                    <li>How do you envision a Project RISHI website and projects map being used by people inside and outside of your organization?</li>
                    <li>What are your functional requirements for the site?</li>
                    <li>What are the types and amount of information you want represented on the site?</li>
                    <li>Will you need a system put in place to allow Project RISHI members to easily update the site? </li>
                </ul>
            </div>
            <div className='userProfile'>
                <p className='userProfileHeader'>User Profiles</p>
                <p className='userProfileText'>
                    We conducted further investigation through interviews
                    to see what our users would want out of a nonprofit site
                    which caters to primary and secondary users. we created two
                    distinct user profiles which are college students and
                    non-profit entrepeneurs who are interested in donating.
                    We came to the conclusion of some needs and insights we would
                    need to include in our implementation.
                </p>
                <img src = {needsAndInsights} />
            </div>
            <div className='design'>
                <p className='designHeader'>Design & Implementation</p>
                <div className='designImages'>
                    <img src={map} />
                    <img src={input} />
                    <img src={post} />
                </div>
                <p className='designText'>
                    My teammates worked mostly on the redesign of the map
                    which included the usage of google maps api
                    and adding the condition which styles the map without geographical details.
                    Furthermore, I mainly focused on the updatability functionality which I created
                    with JavaScript and Meteor. I used Meteor mostly to hold user input in state similar
                    to how React manages onChange and Input values. I used this methodology to receive the
                    values from user input and placed the values in the corresponding place based on the 
                    Document Object Tree. 
                </p>
            </div>
        </div>
    )
}

export default class ProjectRishi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenu: false
        }
    }

    sideMenuOpen = () => {
        let menu = document.querySelector('.menu');
        let sideNav = document.querySelector('.sideNav');
        let bar1 = document.querySelector('.bar1');
        let bar2 = document.querySelector('.bar2');
        let bar3 = document.querySelector('.bar3');
        let sideRishiOverlay = document.querySelector('.sideRishiOverlay');
        let sideRishiText = document.querySelector('.sideRishiText');
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
            this.state.sideMenu ? sideRishiText.style.visibility = 'hidden'
                : sideRishiText.style.visibility = 'visible'
        }
        {
            !this.state.sideMenu ? sideRishiOverlay.style.display = 'block'
                : sideRishiOverlay.style.display = 'none'
        }

        // if (!this.state.sideMenu) {
        //     document.body.style.position = 'fixed';
        //     document.body.style.top = '0';
        // } else {
        //     document.body.style.position = '';
        // }
        this.setState({
            sideMenu: !this.state.sideMenu
        })
    }

    render() {
        return(
            <div>
                <div className='page'>
                    <div id='prishiContainer'>
                        <div className='firstLayer'></div>
                        <div className='secondLayer'></div>
                        <div className='thirdLayer'>
                            <div onClick={this.sideMenuOpen} className='menu'>
                                <div className='bar bar1'></div>
                                <div className='bar bar2'></div>
                                <div className='bar bar3'></div>
                            </div>
                            <div className='sideRishiOverlay'></div>
                            <div className='sideNav'>
                                <div className='sideRishiText'>
                                    <Link to='/'><p>Home</p></Link>
                                    <a href='https://drive.google.com/file/d/1m-7O5GxEYdHTUcdXK0E7fw0g3oXR6Vpb/view' target='_blank'><p>Resume</p></a>
                                    <Link to ='/nimbus'><p>Nimbus</p></Link>
                                    <Link to ='/personal-projects'><p>Personal Projects</p></Link>
                                    <Link to='/personal-portfolio'><p>Personal Portfolio</p></Link>
                                </div>
                            </div>
                            <div className='textContent'>
                                <p className='header'>Project RISHI</p>
                                <p className='description'>Helping rural indian communties through an informative platform</p>
                            </div>
                        </div>
                        <PageContent />
                    </div>
                </div>
            </div>
        )
    }
} 