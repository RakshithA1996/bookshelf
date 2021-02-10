import React, { Component } from 'react';
import { Banner } from '../components/Home/Banner';
import { Features } from '../components/Home/Features';
import { Footer } from '../components/Home/Footer';
import { Header } from '../components/Home/Header';
import { PopularBooks } from '../components/Home/RegisterBooks';
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
                <Footer />
            </HomeWrapper>
        )
    }
}

export default Home;