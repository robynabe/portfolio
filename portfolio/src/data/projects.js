// PROJECT ARRAY //
import MovieAppImg from '../images/movie-app-home.png';
import BrochureImg from '../images/brochure-products.png';
import MockupImg from '../images/movie-mockup-home.png';
import PlaceholderImg from '../images/code-placeholder-img.png';


export const projects = [
    {
        name: 'Movie App',
        alt: 'Movie application home page',
        tools: 'React | Sass | JavaScript',
        overview: 'This collaborative project focused on the JavaScript framework React and its dynamic abilities. Through this project, I learned how to make API calls, interact with an external database to update my website with real time data',
        filter: 'react',
        page: 'MovieApp',
        image: `${MovieAppImg}`
    },
    {
        name: 'Portfolio',
        alt: 'Portolfio website',
        tools: 'React | Sass | JavaScript',
        overview: 'This site is for showcasing all of the highlighted projects I have completely. I built this website individually using React to practice the structure, syntax and functionality',
        filter: 'react',
        page: 'Portfolio',
        image: `${PlaceholderImg}`
    },
    {
        name: 'Business Brochure',
        alt: 'Business brochure products page',
        tools: 'HTML | Sass | JavaScript ',
        overview: 'The Business brochure overview',
        filter: 'other',
        page: 'Brochure',
        image: `${BrochureImg}`
    },
    {
        name: 'Movie App Mock-up',
        alt: 'Movie mock up in Photoshop',
        tools: 'Photoshop | Illustrator',
        overview: 'The Movie mock-up overview',
        filter: 'other',
        page: 'MockUp',
        image: `${MockupImg}`
    },
    {
        name: 'WooCommerce',
        alt: 'Ecommerce online bakery home page',
        tools: 'WordPress | Sass | JavaScript',
        overview: 'The Capstone project overview',
        filter: 'other',
        page: 'WooCommerce',
        image: `${PlaceholderImg}`
    }

]