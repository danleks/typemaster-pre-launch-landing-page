import Heading from './components/Heading';

const App = new Reef('#app', {
    data: {
        name: 'World'
    },
    template: ({ name }) => {
        return `
            <h1 id="heading"></h1>
        `
    }
});

App.attach([Heading]);
export default App;