import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}