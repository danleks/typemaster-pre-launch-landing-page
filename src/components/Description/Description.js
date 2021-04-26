import './Description.styles.sass';
import mobilePhoneAndKeyboard from '../../assets/mobile/image-phone-and-keyboard.jpg';
import tabletPhoneAndKeyboard from '../../assets/tablet/image-phone-and-keyboard.jpg';
import desktopPhoneAndKeyboard from '../../assets/desktop/image-phone-and-keyboard.jpg';
import mobileGlassAndKeyboard from '../../assets/mobile/image-glass-and-keyboard.jpg';
import tabletGlassAndKeyboard from '../../assets/tablet/image-glass-and-keyboard.jpg';
import desktopGlassAndKeyboard from '../../assets/desktop/image-glass-and-keyboard.jpg';


const Description = new Reef('[data-component-name="description"]', {
    template: () => {
        return `
            <div class="description">
                <div class="description__container">
                    <figure class="imgContent">
                        <img src=${mobilePhoneAndKeyboard}
                                srcset="${mobilePhoneAndKeyboard} 258w, ${tabletPhoneAndKeyboard} 428w, ${desktopPhoneAndKeyboard} 510w"
                                sizes="(min-width: 1440px) 510px, (min-width: 768px) 428px, (min-width: 320px) 258px"
                        alt='Phone and keyboard'>
                    </figure>
                    <figure class="imgContent">
                    <img src=${mobileGlassAndKeyboard}
                        srcset="${mobileGlassAndKeyboard} 440w, ${tabletGlassAndKeyboard} 888w, ${desktopGlassAndKeyboard} 887w"
                        sizes="(min-width: 1440px) 887px, (min-width: 768px) 888px, (min-width: 320px) 440px"
                        alt='Glass and keyboard'>
                    </figure>
                </div>
                <div class="description__container">
                    <h2 class="description__title">mechanical wireless keyboard</h2>
                    <p class="description__text main-text">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
                </div>
            </div>
        `;
    }
})

export default Description;