import React, { Component } from 'react';
import './_footer.scss';
import mail from './images/mail.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

export default class Footer extends Component {
    //hello
    constructor(props) {
        super(props);
        this.state = {
            footerMail: {},
            toolTip: {},
            toolTipText: 'Copy email to clipboard'
        }
    }

    componentDidMount() {
        let footerMail = document.querySelector('.footerMail');
        let toolTip = document.querySelector('.toolTip');
        this.setState({
            footerMail: footerMail,
            toolTip: toolTip
        })
    }

    copyToClip = (e) => {
        var element = document.createElement('textarea');;
        element.value = 'hhtran017@gmail.com';
        element.style = { position: 'absolute', left: '-9999px' };
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        this.setState({
            toolTipText: 'Email has been copied!'
        })
    }
    render() {
        let activeNode = this.state.footerMail;
        let toolTip = this.state.toolTip;
        try {
            activeNode.addEventListener('mouseover', () => { toolTip.style.visibility = 'visible' })
            activeNode.addEventListener('mouseout', () => { toolTip.style.visibility = 'hidden' })
        } catch(err) {
            console.log(err);
        }
        return (
                <div>
                    <div id='footerContainer'>
                    <div id='footerOverlay'>
                    </div>
                    <div className='footerText'>
                        <p className='contact'>Contact Me</p>
                        <div className='footerIcons'>
                            <div className='mailDiv'>
                            <img onClick={this.copyToClip} className='footerMail' src = {mail} />
                            <span className='toolTip'>{this.state.toolTipText}</span>
                            </div>
                            <img className='footerLinkedin' src={linkedin}/>
                            <img className='footerGithub' src={github} />
                        </div>
                        <p className='copyright'>Copyright Henry Tran 2019</p>
                    </div>
                    </div>
                </div>
        )
    }
}