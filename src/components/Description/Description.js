import './Description.styles.sass';
import phoneAndKeyboard from '../../assets/mobile/image-phone-and-keyboard.jpg';
import glassAndKeyboard from '../../assets/mobile/image-glass-and-keyboard.jpg';

const Description = new Reef('[data-component-name="description"]', {
    template: () => {
        return `
            <div class="description">
                <div class="description__container">
                    <figure class="imgContent">
                        <img src=${phoneAndKeyboard} / alt='Phone and keyboard'>
                    </figure>
                    <figure class="imgContent">
                        <img src=${glassAndKeyboard} / alt='Glass and keyboard'>
                    </figure>
                </div>
                <div class="description__container">
                    <h2 class="description__title">mechanical wireless keyboard</h2>
                    <p class="main-text">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
                </div>
            </div>
        `;
    }
})

export default Description;