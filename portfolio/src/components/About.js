// ABOUT PAGE //
import React from 'react';
import MetaTags from 'react-meta-tags';

function About() {
  window.scrollTo(0,0);
  return (
    <main className="about-main">
      <MetaTags>
        <title>Robyn Abe • Who Am I?</title>
        <meta name="description" content="A summary about Robyn Abe and her experiences, schooling and interests in the
                                          technology field of website development and technical web design." />
        <meta property="og:title" content="About Me" />     
      </MetaTags>

      <h1>Robyn Abe</h1>
          <section className='about-overview'>
              <p>Hello! I am Robyn Abe and here is my story.</p>
              <p>At the beginning of 2020 I stumbled across an online seminar hosted by SheCodes all while searching for my next 
                career move. They were promoting women in code and I found this to be inspiring. I was overly intrigued by this 
                field that I had never given a thought to in the past, so I took a chance and signed up for the 4 month React workshop. 
                I found passion in the frustrating excitment of making a website application come to life both funcationally and through design. 
                I decided to attend an accredited school and take this new career path more seriously. 
                From there I enrolled in the Technical Web Design program at BCIT (currently named Front-End Web Developer).
              </p>
              <p>I realized I love to develop and express my creativity digitally. I enjoy creating the small details that bring a website 
                together and I use lazy perfectionism to my advantage. I find the quickest, yet most efficent way to get
                something done without sacrificing the quality of the final product. I take much pride in the projects that 
                I have completed so far in the short period of time that I have been in this field. I am anxious to get 
                started and be a part of a new community!
              </p>
              
          </section>

          <section className="about-specifics">

            <div className="education">
              <h2>Education</h2>
              <ul>
                <li>Technical Web Design <span>|</span> BCIT</li>
                <li>React Workshop <span>|</span> SheCodes</li>
                <li>Veterinary Technologist <span>|</span> Douglas College</li>
              </ul>
            </div>

            <div className="favourites">
              <h2>Favourites</h2>
              <ul>
                <li><i className="fab fa-react"></i></li>
                <li><i className="fab fa-sass"></i></li>
                <li><i className="fab fa-css3"></i></li>
              </ul>
            </div>

            <div className="soft-skills">
              <h2>Soft Skills</h2>
              <ul>
                <li>Problem Solving</li>
                <li>Collaboration</li>
                <li>Attention to detail</li>
                <li>Self Motivated</li>
                <li>Analytical Thinking</li>
              </ul>
            </div>

          </section>
    </main>
  );
}

export default About;
