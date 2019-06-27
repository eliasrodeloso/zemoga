import React from 'react';
import Header from '../../components/header/Header';
import HeroSlider from '../../components/hero-slider/HeroSlider';
import VotingCard from '../../components/voting-card/VotingCard';
import popeImage from '../../assets/images/header-background.jpg';
import './Home.scss';

const Home = () => (
  <div className="Home-container">
    <Header />
    <HeroSlider
      slides={[
        {
          title: 'Pope',
          image: popeImage,
          content: (
            <div className="column is-half-desktop">
              <VotingCard />
              <div className="asda">asdasd</div>
            </div>
          )
        }
      ]}
    />
  </div>
);

export default Home;
