import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import HeroSlider from '../../components/hero-slider/HeroSlider';
import VotingCard from '../../components/voting-card/VotingCard';
import Closing from '../../components/closing/Closing';
import popeImage from '../../assets/images/header-background.jpg';
import Message from '../../components/message/Message';
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
            <Fragment>
              <div className="column is-half-desktop">
                <VotingCard />
              </div>
              <Closing />
            </Fragment>
          )
        }
      ]}
    />
    <section className="Home-content">
      <div className="columns">
        <div className="column">
          <Message />
          <h1>Previous Rulings</h1>
          
        </div>
      </div>
    </section>
  </div>
);

export default Home;
