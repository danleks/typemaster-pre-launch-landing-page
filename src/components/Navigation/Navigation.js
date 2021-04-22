import './Navigation.styles.sass';
import Logo from '../../assets/shared/logo.svg';
import Button from '../Button/Button';

const buttonComponent = new Reef('[data-component-name="nav-button"]', {template: Button});

const Navigation = new Reef('[data-component-name="navigation"]', {
    template: () => {      
        console.log(Logo); 
        return `
            <nav>
                <ul class="navigation">
                    <li>
                        <img src=${Logo} alt='Logo icon' />
                    </li>
                    <li>
                        <my-button data-component-name="nav-button" data-button-style="grey">Pre-order now</my-button>
                    </li>
                </ul>
            </nav>
        `
    }
});

Navigation.attach([buttonComponent]);

export default Navigation;