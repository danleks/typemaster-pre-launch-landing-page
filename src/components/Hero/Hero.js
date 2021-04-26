import './Hero.styles.sass';
import Button from '../Button/Button';
import mobileImgKeyboard from '../../assets/mobile/image-keyboard.jpg';
import tabletImgKeyboard from '../../assets/tablet/image-keyboard.jpg';
import desktopImgKeyboard from '../../assets/desktop/image-keyboard.jpg';


const buttonComponent = new Reef('[data-component-name="hero-btn"]', {template: Button});

const Hero = new Reef('[data-component-name="hero"]', {
    template: () => {
        return`
            <div class="hero">
                <div class="hero__content">
                    <h1>Typemaster Keyboard</h1>
                    <p class="main-text">Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
                    <ul>
                        <li>
                            <my-button data-component-name="hero-btn" data-button-style="orange">Pre-order now</my-button>
                        </li>
                        <li>
                            <span>Release on 5/27</span>
                        </li>
                    </ul>
                </div>
                <div class="hero__image">
                    <img src="${mobileImgKeyboard}"
                        srcset="${mobileImgKeyboard} 744w, ${tabletImgKeyboard} 956w, ${desktopImgKeyboard} 1080w"
                        sizes="(min-width: 1440px) 1080px,
                            (min-width: 768px) 956px,
                            (min-width: 320px) 370px,
                        "
                        alt="keyboard"
                    />
                </div>
            </div>
        `
    }
});

Hero.attach([buttonComponent]);

export default Hero;