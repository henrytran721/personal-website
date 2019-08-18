import React, { Component } from 'react';
import './_personalProjects.scss';
import { HashLink as Link } from 'react-router-hash-link';

const ProjectCard = (props) => {
    return (
        <div className='pCardContainer'>
            <div className='pFirstLayer'></div>
            <div className='pSecondLayer'></div>
            <div className='pThirdLayer'>
                <div className='cardBorder'>
                    <div className='textContent'>
                        <p className='header'>{props.cardHeader}</p>
                        <p className='description'>{props.cardDescription}</p>
                        <div className='cardButton'>
                            <a href={props.project} target='_blank'><button>{props.button}</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class personalProjects extends Component {
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
        return (
            <div>
                <div className='page'>
                    <div id='personalProjContainer'>
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
                                    <Link to='/nimbus'><p>Nimbus</p></Link>
                                    <Link to='/prishi'><p>Project RISHI</p></Link>
                                    <a><p>Personal Portfolio</p></a>
                                </div>
                            </div>
                            <div className='textContent'>
                                <p className='header'>Personal Projects</p>
                                <p className='description'>Projects that provided knowledge and stepping stones
to learning the fundamentals of web development</p>
                            </div>
                        </div>
                        <div className='cardHolder'>
                            <ProjectCard
                                cardHeader={'JavaScript Calculator'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/javascript-calculator/'}
                            />
                            <ProjectCard
                                cardHeader={'Personal Portfolio'}
                                cardDescription={'Learn how I made my own personal portfolio'}
                                button={'Learn More'}
                            />
                            <ProjectCard
                                cardHeader={'React Book Library'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/React-JS-BookList/'}
                            />
                            <ProjectCard
                                cardHeader={'React Todo List'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/react-js-todolist/'}
                            />
                            <ProjectCard
                                cardHeader={'Tip Calculator'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/javascript-tip-calculator/'}
                            />
                            <ProjectCard
                                cardHeader={'Weather App'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/weatherApp/'}
                            />
                            <ProjectCard
                                cardHeader={'JavaScript Elevator'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/javascript-elevator/'}
                            />
                            <ProjectCard
                                cardHeader={'Text Editor'}
                                button={'View Project'}
                                project={'https://henrytran721.github.io/textEditor/'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}