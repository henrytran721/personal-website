import React, { Component } from 'react';
import './_header.scss';
import './_variables.scss';
import { HashLink as Link } from 'react-router-hash-link';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: {},
            body: {},
            sideMenu: false
        };
    }

    componentDidMount() {
        let headerText = document.querySelector('.headerText');
        let body = document.body;
        console.log(body);
        this.setState({
            headerText: headerText,
            body: body
        })
    }

    sideMenuToggle = () => {
        let sideNav = document.querySelector('.sideNav');
        let bar1 = document.querySelector('.bar1');
        let bar2 = document.querySelector('.bar2');
        let bar3 = document.querySelector('.bar3');
        let sideOverlay = document.querySelector('.sideOverlay');
        let sideNavText = document.querySelector('.sideNavText');
        {!this.state.sideMenu ? sideNav.style.width = '250px' 
        : sideNav.style.width = '0px'}
        {!this.state.sideMenu ? bar1.style.transform = 'rotate(-45deg) translate(-9px, 6px)' 
        : bar1.style.transform = 'none'}
        {!this.state.sideMenu ? bar2.style.opacity = '0'
            : bar2.style.opacity = '1'}
        {
            !this.state.sideMenu ? bar3.style.transform = 'rotate(45deg) translate(-8px, -8px)'
            : bar3.style.transform = 'none'
        }
        {
            !this.state.sideMenu ? sideOverlay.style.display = 'block'
                : sideOverlay.style.display = 'none'
        }
        {
            !this.state.sideMenu ? sideNavText.style.visibility = 'visible' 
            : sideNavText.style.visibility = 'hidden'
        }
        {
            !this.state.sideMenu ? document.body.style.overflowY = 'hidden' :
                document.body.style.overflowY = 'visible'
        }
        this.setState({
            sideMenu: !this.state.sideMenu
        })
    }


    sideMenuClose = () => {
        let sideNav = document.querySelector('.sideNav');
        let sideNavText = document.querySelector('.sideNavText');
        let sideOverlay = document.querySelector('.sideOverlay');
        let bar1 = document.querySelector('.bar1');
        let bar2 = document.querySelector('.bar2');
        let bar3 = document.querySelector('.bar3');
        sideNav.style.width = '0px';
        sideNavText.style.visibility = 'hidden';
        sideOverlay.style.display = 'none';
        bar1.style.transform = 'none';
        bar2.style.opacity = '1';
        bar3.style.transform = 'none';
        
        this.setState({
            sideMenu: false
        })
    }

    render () {
        let active = this.state.activeNode;
        try {
            let headerText = this.state.headerText;
            let body = this.state.body;
            active.addEventListener('mouseover', this.focusOnActive);
        } catch(err) {
            console.log(err);
        }
        return(
            <div>
                <div id='overlay'>
                </div>
                <div id='headerContainer'>
                </div>
                <nav>
                    <ul>
                        <a href='#about'><li>About</li></a>
                        <a href='https://drive.google.com/file/d/1m-7O5GxEYdHTUcdXK0E7fw0g3oXR6Vpb/view' target='_blank'><li>Resume</li></a>
                        <a href='#portfolio'><li>Portfolio</li></a>
                        <a href='#footerContainer'><li>Contact</li></a>
                    </ul>
                </nav>
                <div onClick={this.sideMenuToggle} className='menuBtn'>
                    <div className='bar bar1'></div>
                    <div className='bar bar2'></div>
                    <div className='bar bar3'></div>
                </div>
                <div className='sideOverlay'></div>
                <div className='sideNav'>
                    <div className='sideNavText'>
                        <a href= 'https://drive.google.com/file/d/1m-7O5GxEYdHTUcdXK0E7fw0g3oXR6Vpb/view'><p>Resume</p></a>
                        <Link to='/nimbus'><p>Nimbus</p></Link>
                        <Link to='/prishi'><p>Project RISHI</p></Link>
                        <Link to='/personal-projects'><p>Personal Projects</p></Link>
                        <Link to='/personal-portfolio'><p>Personal Portfolio</p></Link>
                        <a onClick={this.sideMenuClose} href='#footerContainer'><p>Contact</p></a>
                    </div>
                </div>
                <div className='headerText'>
                  <p className='name'>Henry Tran</p>
                  <p className='fed'>Full Stack Developer</p>
                </div>
            </div>
        )
    }
}