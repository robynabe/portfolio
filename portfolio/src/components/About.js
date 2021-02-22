// ABOUT PAGE //
import Top from './Top';

function About() {
  return (
    <main className="about-main">
      <h1>Robyn Abe</h1>
          <section className='about-overview'>
              <p>Hello! I am Robyn Abe and here is my story.</p>
              <p>At the beginning of 2020 I stumbled across an online seminar hosted by SheCodes all while searching for my next 
                career move. They were promoting women in code and I found this inspiring. I was then overly intrigued by this 
                field that I had never given a thought to in the past. How could I be smart enough to pursue this? I took a chance
                and signed up for the 4 month React course and found passion in the frsutrating excitment of making a website 
                application come to life both funcationally and through design. I decided to attend an accredited school and take this
                new career path more seriously. From there I enrolled in the Technical Web Design program at BCIT.
              </p>
              <p>I found I love to develop and express my creativity. I enjoy creating the small details that bring a website 
                together and I use lazy perfectionism to my advantage. I find the quickiest, yet most efficent way to get
                get something done without sacrifcing the quality of the final product. I take much pride in the projects that 
                I have completed so far in the short period of time that I have been in this field. I am anxious to get 
                started and be a part of a new community!
              </p>
              
          </section>

          <section className="about-specifics">

            <div className="favourites">
              <h2>Favourites</h2>
              <ul>
                <li><i className="fab fa-sass"></i></li>
                <li><i className="fab fa-react"></i></li>
                <li><i className="fab fa-css3"></i></li>
              </ul>
            </div>

            <div className="soft-skills">
              <h2>Soft Skills</h2>
              <ul>
                <li>Problem Solving</li>
                <li>Collaboration</li>
                <li>Attention to detail</li>
                <li>Prioritizaiton</li>
                <li>Independent</li>
              </ul>
            </div>

          </section>
          <Top />
    </main>
  );
}

export default About;
