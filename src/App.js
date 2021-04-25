import './styles/main.sass';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

const App = new Reef('#app', {
    data: {
        name: 'World'
    },
    template: ({ name }) => {
        return `
            <div class="wrapper">
                <my-navigation data-component-name="navigation"></my-navigation>
                <my-hero data-component-name="hero"></my-hero>
                <my-description data-component-name="description"></my-description>
                <my-features data-component-name="features"></my-features>
                <my-footer data-component-name="footer"></my-footer>
            </div>
        `
    }
});



App.attach([Navigation, Hero, Description, Features, Footer]);
export default App;