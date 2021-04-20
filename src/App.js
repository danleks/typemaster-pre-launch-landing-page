import './styles/main.sass';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';

const App = new Reef('#app', {
    data: {
        name: 'World'
    },
    template: ({ name }) => {
        return `
            <my-navigation data-component-name="navigation"></my-navigation>
            <my-hero data-component-name="hero"></my-hero>
            <my-description data-component-name="description"></my-description>
        `
    }
});



App.attach([Navigation, Hero, Description]);
export default App;