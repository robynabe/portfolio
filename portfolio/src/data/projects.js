// PROJECT ARRAY //
import MovieAppImg from '../images/movie-app-home1200.jpg';
import BrochureImg from '../images/brochure-products1200.jpg';
import MockupImg from '../images/movie-mockup-home1200.jpg';
import PorfolioImg from '../images/portfolio-home1200.jpg';
import wcHome from '../images/wc-home1200.jpg';
import ComingSoon from '../images/coming-soon.jpg';
import DictionaryImg from "../images/dictionary-app1200.png";


export const projects = [
    {
        name: 'Cineflix',
        alt: 'Movie application home page',
        tools: 'React | Sass | JavaScript',
        overview: 'This collaborative project focused on the JavaScript framework React and its dynamic abilities. Through this project, I learned how to make API calls, interact with an external database to update my website with real time data.',
        sort: 'react',
        page: 'MovieApp',
        image: `${MovieAppImg}`
    },
    {
        name: 'Movie App Mockup',
        alt: 'Movie mock up in Photoshop',
        tools: 'Photoshop | Illustrator',
        overview: 'This high fidelity mock-up of a movie app was made primarily in Adobe Photoshop, while using a few assets created with Adobe Illustrator. Although this was not used for the live site, it showcases my skills in Adobe programs.',
        sort: 'other',
        page: 'MockUp',
        image: `${MockupImg}`
    },
    {
        name: 'Portfolio',
        alt: 'Portolfio website',
        tools: 'React | Sass | JavaScript',
        overview: 'This project was created to highlight some projects I have completed so far. It was built individually using React to practice the structure, syntax and functionality.',
        sort: 'react',
        page: 'Portfolio',
        image: `${PorfolioImg}`
    },
    {
        name: 'The Rolling Pin',
        alt: 'Ecommerce online bakery home page',
        tools: 'WordPress | JavaScript | Sass',
        overview: 'A custom made WooCommerce website created using WordPress as a collaborative project.',
        sort: 'other',
        page: 'https://www.robynabe.com/the-rolling-pin/',
        image: `${wcHome}`
    },
    {
        name: 'Holey Moley Doughnuts',
        alt: 'Doughnut shop products page',
        tools: 'HTML | Sass | JavaScript ',
        overview: 'This business brochure was used to emphasis design and styling skills. The focus was to implement Sass and work collaboratively with Github.',
        sort: 'other',
        page: 'Brochure',
        image: `${BrochureImg}`
    },
    {
        name: 'Dictionary App',
        alt: 'Dictionary web application',
        tools: 'HTML | CSS | React ',
        overview: 'A widget-style dictionary app created using React as a simple single-page website.',
        sort: 'react',
        page: 'https://www.robynabe.com/dictionary-app/',
        image: `${DictionaryImg}`
    },
    {
        name: 'Weather App',
        alt: 'Coming soon poster',
        tools: 'HTML | CSS | React ',
        overview: 'Coming Soon... Hold tight!',
        sort: 'react',
        page: '/',
        image: `${ComingSoon}`
    }

]