const Heading = new Reef('#heading', {
    data: {
        name: 'hello worldfff'
    },
    template: ({ name }) => {
        return `
            <h1>${name}</h1>
        `
    }
});

export default Heading;