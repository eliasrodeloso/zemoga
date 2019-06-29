import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import HeroSlider from '../../components/hero-slider/HeroSlider';
import VotingCard from '../../components/voting-card/VotingCard';
import Closing from '../../components/closing/Closing';
import Message from '../../components/message/Message';
import PreviousRuler from '../../components/previous-ruler/PreviousRuler';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import popeImage from '../../assets/images/header-background.jpg';
import initialData from '../../config/initialContent.json';
import './Home.scss';

const Home = () => (
  <div className="Home-container">
    <Header />
    <HeroSlider
      slides={initialData.actualRulers.map((actualRuler) => {
        const { title, picture, ...ruler } = actualRuler;
        return {
          title: actualRuler.title,
          image: popeImage,
          content: (
            <Fragment>
              <div className="column is-half-desktop">
                <VotingCard title={title} {...ruler} />
              </div>
              <Closing />
            </Fragment>
          )
        };
      })}
    />
    <section className="Home-content">
      <div className="columns">
        <div className="column">
          <Message />
          <h1>Previous Rulings</h1>
          <div className="columns is-multiline Home-previousRulers">
            {initialData.previousRulers.map(ruler => (
              <div
                key={ruler.name}
                className="column is-half-desktop is-one-third-widescreen"
              >
                <PreviousRuler ruler={ruler} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="Home-banner">
      <Banner />
    </section>
    <div className="Home-footer">
      <Footer />
    </div>
  </div>
);

export default Home;
