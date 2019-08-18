import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_personalPortfolio.scss';
import designmap from './images/designmap.svg';
import codeSnippetOne from './images/codeSnippetOne.svg';
import codeSnippetTwo from './images/codeSnippetTwo.svg';
import sideMenu from './images/sideMenu.svg';
import email from './images/email.svg';

const PageContent = (props) => {
    return (
        <div>
            <div className='inspiration'>
                <p className='inspirationHeader'>Inspiration</p>
                <p className='inspirationText'>
                    I wanted to create a portfolio that would be
                    meaningful and a part of my resume. i took inspiration
                    from parts of nature combined with complimentary
                    colors which made for an aesthetically pleasing layout.
                </p>
            </div>
            <div className='designP'>
                <p className='designHeader'>Design</p>
                <p className='designText'>Tools: SKETCH</p>
                <p className='designText'>By laying everything out I was able to select complimentary colors
                and shapes. i designed the layout with the functionalities of 
                each page in mind. functionalities considered included
                menu sliders, email copy to clipboard function, transform
                transitions, and responsive mobile design.</p>
                <img src = {designmap} className='designMap' alt='designmap'/>
            </div>
            <div className='implementationP'>
                <p className='implementationHeader'>Imeplementation</p>
                <p className='implementationText'>Tools: REACT.JS, SASS, REACT ROUTER V4</p>
                <p className='implementationText'>I wanted to use a frame work that would allow me more
                flexibility in creating components and making them <span className='reusable'>Reusable</span>. examples can be seen in snippets
                shown below.</p>
                <img src={codeSnippetOne} alt='codeSnippetOne'/>
                <img style={{margin: '5% 0 0 0'}} src={codeSnippetTwo} alt='codeSnippetTwo' />
                <p className='implementationText'>By utilizing state, i was able to control how the ui
                of the viewport changes when the side menu is
                opened or closed based on a boolean condition
                which changes upon an event handler. functions tied to
                the event handler included the animation of the menu
                button as well as applying an overlay to the background
                of the page. </p>
                <img src={sideMenu} alt='sideMenu' />
                <p className='implementationText'>
                    Another use of state applied was to develop a way
                    for users to copy my email to their clipboard because
                    i saw that opening the email app from macbooks was very complex
                    and redundant. the email function
                    utilized execcommand(‘copy’) function and state
                    is tracking if the user has copied the email to display a 
                    confirmation message. 
                </p>
                <img src={email} alt='email' />
                <p className='implementationText'>I applied react-route-dom package in order to create
                the routes for the pages. by using csstransition
                and transition group packages, i create
                full page transitions between the routes. </p>
            </div>
            <div className='deployment'>
                <p className='deploymentHeader'>Deployment</p>
                <p className='deploymentText'>Deployment was initiated with the installation
                of gh-pages and netlify packages. by hosting on netlify,
                i was able to utilize google domains and pointed
                my dns to netlify servers for deployment. </p>
            </div>
        </div>
    )
}

export default class PersonalPortfolio extends Component {
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
                    <div id='personalPortfolioContainer'>
                        <div className='firstLayer'></div>
                        <div className='secondLayer'></div>
                        <div className='thirdLayer'>
                            <div className='textContent'>
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
                                        <Link to='/nimbus'><p>Nimbus</p></Link>
                                        <Link to='/prishi'><p>Project RISHI</p></Link>
                                        <Link to='/personal-projects'><p>Personal Projects</p></Link>
                                    </div>
                                </div>
                                <div className='textContent'>
                                    <p className='header'>Personal Portfolio</p>
                                    <p className='description'>Created my portfolio with web
                                    technologies to showcase my skills</p>
                                </div>
                            </div>
                        </div>
                        <PageContent />
                    </div>
                </div>
            </div>
        )
    }
}