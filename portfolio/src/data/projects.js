// PROJECT ARRAY //
import MovieAppImg from '../images/movie-app-home1200.jpg';
import BrochureImg from '../images/brochure-products1200.jpg';
import MockupImg from '../images/movie-mockup-home1200.jpg';
import PorfolioImg from '../images/portfolio-home1200.jpg';
import ComingSoon from '../images/coming-soon.jpg';


export const projects = [
    {
        name: 'Cineflix',
        alt: 'Movie application home page',
        tools: 'React | Sass | JavaScript',
        overview: 'This collaborative project focused on the JavaScript framework React and its dynamic abilities. Through this project, I learned how to make API calls, interact with an external database to update my website with real time data',
        sort: 'react',
        page: 'MovieApp',
        image: `${MovieAppImg}`
    },
    {
        name: 'Movie App Mockup',
        alt: 'Movie mock up in Photoshop',
        tools: 'Photoshop | Illustrator',
        overview: 'This movie app high fidelity mock-up was made primarily in Adobe Photoshop, while using a few assets created with Adobe Illustrator. Although this was not used for the live site, it showcases Adobe skills.',
        sort: 'other',
        page: 'MockUp',
        image: `${MockupImg}`
    },
    {
        name: 'Portfolio',
        alt: 'Portolfio website',
        tools: 'React | Sass | JavaScript',
        overview: 'This project was  created to showcase all of the highlighted projects I have completely. I built this website individually using React to practice the structure, syntax and functionality',
        sort: 'react',
        page: 'Portfolio',
        image: `${PorfolioImg}`
    },
    {
        name: 'The Rolling Pin',
        alt: 'Ecommerce online bakery home page',
        tools: 'WordPress | SassJava | Script',
        overview: 'Coming Soon... Hold tight!',
        sort: 'other',
        page: '/',
        image: `${ComingSoon}`
    },
    {
        name: 'Holey Moley Doughnuts',
        alt: 'Doughnut shop products page',
        tools: 'HTML | Sass | JavaScript ',
        overview: 'The business brochure was used to emphasis design and styling skills. The focus was to implement sass and work collaboratively with Github.',
        sort: 'other',
        page: 'Brochure',
        image: `${BrochureImg}`
    }

]