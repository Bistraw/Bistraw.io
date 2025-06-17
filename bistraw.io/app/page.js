"use client";
import { useState } from "react";
import Image from "next/image";

import Squares from './Squares';
import CircularGallery from './CircularGallery'
  


export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can I help you learn more about Adrian and his Resume?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>

  

      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:bistraw.lm@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <div className="background-squares">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <main>
        <section className="hero container">
          <div className="hero-yellow">
            <img src="./imgs/rat.png" alt="Adrian Twarog" width="100%" />
          </div>
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Bistraw
              </h1>
              <p>
                Game Design and Developer in Mexico  <span>blablabla</span>
              </p>
              <div className="call-to-action">
                <a href="./Sample_Resume_Template.pdf" target="_blank" rel="noopener noreferrer" className="button black">
                  View Resume
                </a>
                <a href="mailto:bistraw.lm@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/bistraw/" target="_blank" rel="noopener noreferrer">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" />
                </a>
                {/* 
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="./imgs/itchio.png" alt="Itch.io"/>
                </a> 
                */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="./imgs/symbols.png" alt="Blogger" />
                </a>
              </div>
            </div>
          </div>
        </section>
         <section id="projects" className="bento container">
          <h2>
            Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./imgs/WOE.png" alt="World Of Equilibrium" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/brandcade.png" alt="Brandcade" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/Research.jpg" alt="Research" width="100%" />
            </a>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/EQ.png" alt="Workplace 1 - YouTube Creator" width="100%" />
                  <figcaption>
                    Equilibrium Games
                  </figcaption>
                </div>
              </figure>
              <h3>Game Developer</h3>
              <div>2023-current</div>
              <p>Content creation online teaching people about how to code using HTML, CSS, JS.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/amber.png" alt="Amber Studio" width="100%" />
                  <figcaption>
                    Amber Studio
                  </figcaption>
                </div>
              </figure>
              <h3>Intern Game Designer</h3>
              <div>2025-Current</div>
              <p>Marketing agency building websites and programming them from the ground up. </p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/UAA.png" alt="Workplace 3 - Chamber of Commerce" width="100%" />
                  <figcaption>
                    UAA
                  </figcaption>
                </div>
              </figure>
              <h3>Intern Researcher</h3>
              <div>2025-Current</div>
              <p>A small to large business organisation that helps facilitate advice and support.</p>
            </article>
          </div>
        </section>
        <section>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            About Me
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP</li>
                <li>Ruby</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi! I'm Bistraw, a passionate game developer and designer with a strong foundation in engineering and a deep love for storytelling. I specialize in creating interactive experiences that combine logic, creativity, and emotional impact.
              </p>
              <p>
                As a game designer, I focus on how mechanics, systems, and level structure support meaningful gameplay and narrative. I believe that great games are built at the intersection of thoughtful design and compelling player experiences.
              </p>
              <p>
                I also enjoy working on the writing side of games, crafting dialogues, worldbuilding, and character arcs that resonate with players and strengthen the overall experience.
              </p>
              <p>
                When I'm not designing or developing, you’ll probably find me hiking, camping, or imagining new worlds to explore
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}