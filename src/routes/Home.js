import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Header } from '../components/Header';
import { PopularBooks } from '../components/PopularBooks';
import { HomeWrapper } from '../styles/routes/HomeStyle';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            isBorder: false,
        }
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

    render(){
        const {isBorder} = this.state;
        return(
            <HomeWrapper>
                <Header isBorder = {isBorder} />
                <Banner />
                <PopularBooks />
            </HomeWrapper>
        )
    }
}

export default Home;