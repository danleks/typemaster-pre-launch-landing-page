import './Description.styles.sass';
import phoneAndKeyboard from '../../assets/mobile/image-phone-and-keyboard.jpg';
import glassAndKeyboard from '../../assets/mobile/image-glass-and-keyboard.jpg';

const Description = new Reef('[data-component-name="description"]', {
    template: () => {
        return `
            <div class="description">
                <figure class="imgContainer">
                    <img src=${phoneAndKeyboard} / alt='Phone and keyboard'>
                </figure>
                <figure class="imgContainer">
                    <img src=${glassAndKeyboard} / alt='Glass and keyboard'>
                </figure>
            </div>
        `;
    }
})

export default Description;