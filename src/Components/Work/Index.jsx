import "./Work.css";

import P1Img from "../../Assests/falconce.jpg";
import P2Img from "../../Assests/wordle.jpg";

const Work = () => {
  return (
    <article className='work_article' id='myWork'>
      <h2>My Work</h2>
      <div className='main_div'>
        <img src={P1Img} alt='P1Img' />
        <div className='text_div'>
          <h4>Falconce</h4>
          <p>
            Falconce is a crypto prices & news tracking web app, I build this
            app with three APIs one for news and the other 2 are from
            CoinMarketCap & CoinGecko for Crypto data.
            <br />
            <br />
            One of the major challenges as a junior developer was to come up
            with an interesting idea that is worth spending a week or so on it
            building it. But I ran into a bigger problem than that which was the
            limitation of data. So eventually, I had to use three APIs to get
            around this problem, because their free tier endpoints are very
            limited.
            <br />
            <br />
            There was also a challenge of stacks because I had to use
            node/express for the backend as CoinMarketCap doesn't allow a client
            fetching.
          </p>
          <div className='Stack_div'>
            <h6>Techs I used:</h6>
            <div>
              <span>CSS</span>
              <span>React</span>
              <span>Node/Express</span>
            </div>
          </div>
          <div className='buttons_div'>
            <a target='#blank' href='https://falconce.netlify.app/'>
              <button className='workBtns'>View Live</button>
            </a>
            <a target='#blank' href='https://github.com/SabliJr/CryptoApp'>
              <button className='workBtns'>Source Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className='main_div'>
        <img src={P2Img} alt='P2Img' />
        <div className='text_div'>
          <h4>Wordle Clone.</h4>
          <p>
            Wordle is a word-guessing game that gives you six attempts to find
            the word of the day! You'll start out by randomly guessing any
            five-letter word. From there, the game will tell you if each letter
            you guess is in the word and in the correct place green, in the word
            but not in the correct place yellow, or not in the word at all gray.
            <br />
            <br />
            I used two APIs from the Rapid API store, one to generate a
            five-letter random word and another to check if the guessed word
            really an English word.
            <br />
          </p>

          <div className='Stack_div'>
            <h6>Techs I used:</h6>
            <div>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node/Express</span>
            </div>
          </div>
          <div className='buttons_div'>
            <a target='#blank' href='https://sablijr.github.io/WordleClone/'>
              <button className='workBtns'>View Live</button>
            </a>
            <a target='#blank' href='https://github.com/SabliJr/WordleClone'>
              <button className='workBtns'>Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Work;
