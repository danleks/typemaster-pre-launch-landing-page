import './Features.styles.sass';
{/*images*/}
import batteryIcon from '../../assets/shared/icon-battery.svg';
import bluetoothIcon from '../../assets/shared/icon-bluetooth.svg';
import compatibleIcon from '../../assets/shared/icon-compatible.svg';
import lightIcon from '../../assets/shared/icon-light.svg';


const Features = new Reef('[data-component-name="features"]', {
    data: {
        features: [
            {
                icon: compatibleIcon,
                title: 'HIGHLY COMPATIBLE',
                desc: 'Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.'
            },
            {
                icon: bluetoothIcon,
                title: 'WIRELESS WITH BLUETOOTH',
                desc: 'Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.'
            },
            {
                icon: batteryIcon,
                title: 'HIGH CAPACITY BATTERY',
                desc: 'Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.'
            },
            {
                icon: lightIcon,
                title: 'RGB BACKLIT MODES',
                desc: 'Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.'
            }
        ]
    },
    template: ({ features }) => {
        console.log(lightIcon);
        return`
            <ul class="features">
                ${features.map((feature, i) => {
                    return `
                        <li class="features__item" id=${i}>
                            <figure class="features__imgContainer">
                                <img class="features__img" src=${feature.icon} alt=${feature.title}/>
                            </figure>
                            <h3 class="features__title">${feature.title}</h3>
                            <p class="main-text features__text">${feature.desc}</p>
                        </li>`
                }).join('')}
            </ul>
        `;
    }
});

export default Features;