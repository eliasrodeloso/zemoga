import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import HeroSlider from '../../components/hero-slider/HeroSlider';
import VotingCard from '../../components/voting-card/VotingCard';
import Closing from '../../components/closing/Closing';
import Message from '../../components/message/Message';
import PreviousRuler from '../../components/previous-ruler/PreviousRuler';
import popeImage from '../../assets/images/header-background.jpg';
import kanyePic from '../../assets/images/Kanye.jpg';
import markPic from '../../assets/images/Mark.jpg';
import malalaPic from '../../assets/images/Malala.jpg';
import cristinaPic from '../../assets/images/Cristina.jpg';
import './Home.scss';

const previousRulers = [
  {
    picture: kanyePic,
    name: 'Kanye West',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    date: '28/05/2019',
    category: 'Entertainment',
    result: 'winner',
    statistics: {
      supporters: 64,
      detractors: 36
    }
  },
  {
    picture: markPic,
    name: 'Mark Zuckerberg',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    date: '28/05/2019',
    category: 'Business',
    result: 'looser',
    statistics: {
      supporters: 36,
      detractors: 64
    }
  },
  {
    picture: cristinaPic,
    name: 'Cristina Fernández de Kirchner',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    date: '28/05/2019',
    category: 'Politics',
    result: 'looser',
    statistics: {
      supporters: 36,
      detractors: 64
    }
  },
  {
    picture: malalaPic,
    name: 'Malala Yousafzai',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    date: '28/05/2019',
    category: 'Entertainment',
    result: 'winner',
    statistics: {
      supporters: 64,
      detractors: 36
    }
  }
];

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
          <div className="columns is-multiline Home-previousRulers">
            {previousRulers.map(ruler => (
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
  </div>
);

export default Home;
