import React, { Component } from 'react';
import { Banner } from '../components/Banner';
import { Features } from '../components/Features';
import { Header } from '../components/Header';
import { PopularBooks } from '../components/RegisterBooks';
import { HomeWrapper } from '../styles/routes/HomeStyle';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            isBorder: false,
        };
    }

    componentDidMount() {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 100) {
              this.setState({ isBorder: true });
            } else {
              this.setState({ isBorder: false });
            }
        };
    }

    executeScroll = () => {window.scrollTo(0, 750);}

    render(){
        const {isBorder} = this.state;
        return(
            <HomeWrapper>
                <Header isBorder = {isBorder} executeScroll={this.executeScroll} />
                <Banner />
                <PopularBooks />
                <Features />
            </HomeWrapper>
        )
    }
}

export default Home;