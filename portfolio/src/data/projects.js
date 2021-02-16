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
        overview: 'This project was  created to showcase all of the highlighted projects I have completely. I built this website individually using React to practice the structure, syntax and functionality',
        filter: 'react',
        page: 'Portfolio',
        image: `${PlaceholderImg}`
    },
    {
        name: 'Business Brochure',
        alt: 'Business brochure products page',
        tools: 'HTML | Sass | JavaScript ',
        overview: 'The business brochure was used to emphasis design and styling skills. The focus was to implement sass and work collaboratively with Github.',
        filter: 'other',
        page: 'Brochure',
        image: `${BrochureImg}`
    },
    {
        name: 'Movie App Mock-up',
        alt: 'Movie mock up in Photoshop',
        tools: 'Photoshop | Illustrator',
        overview: 'This movie app high fidelity mock-up was made primarily in Adobe Photoshop, while using a few assets created with Adobe Illustrator. Although this was not used for the live site, it showcases Adobe skills.',
        filter: 'other',
        page: 'MockUp',
        image: `${MockupImg}`
    },
    {
        name: 'WooCommerce',
        alt: 'Ecommerce online bakery home page',
        tools: 'WordPress | Sass | JavaScript',
        overview: 'This project was one of the largest completed so far. It was done collaboratively over only about a month and a half. It is a fully functioning ECommerce website that sells made up baked goods.',
        filter: 'other',
        page: 'WooCommerce',
        image: `${PlaceholderImg}`
    }

]