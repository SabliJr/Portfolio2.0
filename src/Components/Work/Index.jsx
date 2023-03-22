import "./Work.css";

import P1Img from "../../Assets/falconce.jpg";
import P2Img from "../../Assets/wordle.jpg";
import APlus from "../../Assets/A+.jpg";

const Work = () => {
  return (
    <main className='work'>
      <article className='work_article' id='myWork'>
        <h2>My Work</h2>
        <div className='main_div'>
          <img src={P1Img} alt='P1Img' />
          <div className='text_div'>
            <h4>Falconce</h4>
            <p>
              Falconce is a crypto prices & news tracking web app, where you can
              check the last-minute prices of the top 250 coins or you can
              search for any coin in the market. Plus, some latest news.
              <br />
              <br />I built this app with three APIs one for news and the other
              2 from CoinMarketCap & CoinGecko for Crypto data. I used three
              APIs to get around the problem of the limitation of data of the
              free tiers.
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
            <h4>Wordle Clone</h4>
            <p>
              Wordle is a word-guessing game that gives you six attempts to find
              the word of the day! You'll start out by randomly guessing any
              five-letter word.
              {/* From there, the game will tell you if each letter
            you guess is in the word and if it's in the correct place it's green, in the word
            but not in the correct place yellow, or not in the word at all gray. */}
              <br />
              <br />
              I used two APIs from the Rapid API store, one to generate a
              five-letter random word and another to check if the guessed word
              really is an English word.
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
        <div className='main_div'>
          <img src={APlus} alt='P1Img' />
          <div className='text_div'>
            <h4>A+ Studio</h4>
            <p>
              This is a digital products marketing agency landing page that I
              found on Figma as a free file.
              <br />
              <br />
              There's not much going on here it's just a normal landing page. I
              built it just to demonstrate my ability to work with design-ready
              files or collaborate with designers. Here's the Figma file&nbsp;
              <a
                target='#blank'
                href='https://www.figma.com/file/nvkAlzDVeG2mFajNM28xk2/Studio-Design-Landin-Page-(Community)?node-id=2-3&t=P37TQHTp2QXRvMcM-0'>
                link.
              </a>
            </p>
            <div className='Stack_div'>
              <h6>Techs I used:</h6>
              <div>
                <span>CSS</span>
                <span>React</span>
              </div>
            </div>
            <div className='buttons_div'>
              <a target='#blank' href='https://aplusagency.netlify.app/'>
                <button className='workBtns'>View Live</button>
              </a>
              <a
                target='#blank'
                href='https://github.com/SabliJr/MarkrtingAgency'>
                <button className='workBtns'>Source Code</button>
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Work;
