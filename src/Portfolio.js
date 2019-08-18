import React, { Component } from 'react';
import './_variables.scss';
import './_portfolio.scss';
import cloud from './images/cloud.png';
import prishi from './images/prishi.png';
import puzzle from './images/puzzle.png';
import { HashLink as Link } from 'react-router-hash-link';

const PortfolioCard = (props) => {
    return (
        <div id='cardContainer'>
            <div className='firstLayer'></div>
            <div className='secondLayer'></div>
            <div className='thirdLayer'>
                <p className='header'>{props.header}</p>
                <p className='description'>{props.description}</p>
                <img src = {props.cardIcon} className='cardIcon' />
                <Link to={props.url}><button>Learnnnn More</button></Link>
            </div>
        </div>
    )
}

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let cardContainer = Array.prototype.slice.call(document.querySelectorAll("#cardContainer"));
        console.log(cardContainer);
        cardContainer.forEach((card) => {
            card.addEventListener('mouseover', () => {
                card.classList.add('toggleScale');
            })
            card.addEventListener('mouseout', () => {
                card.classList.remove('toggleScale');
            })
        })
    }

    render() {
        return(
            <div id='portfolio'>
               <div className='textContainer'>
                   <div className='portfolioText'>
                        <p>Portfolio</p>
                   </div>
               </div>
               <div className='cardLayer'>
                    <PortfolioCard
                        header={'Nimbus'}
                        description={'Created an app that allows users to reflect, unwind, and reaffirm themselves when they feel flustered'}
                        cardIcon={cloud}
                        url={'/nimbus#nimbusContainer'}
                    />
                    <PortfolioCard
                        header={'Project RISHI'}
                        description={'Developed an admin friendly site for a non-profit organization that allows admins to update their stakeholders with recent information'}
                        cardIcon={prishi}
                        url={'prishi#prishiContainer'}
                    />
                    <PortfolioCard
                        header={'Personal Projects'}
                        description={'Utilized web development skills to create projects that showcase my abilities'}
                        cardIcon={puzzle}
                    />
               </div>
            </div>
        ) 
    }
}