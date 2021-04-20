import './Button.styles.sass';

const Button = (props, elem) => {
    let btnClassName = elem.getAttribute('data-button-style');    
    return `
        <button class="button ${btnClassName}">${elem.textContent}</button>
    `;
};

export default Button;