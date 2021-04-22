import './Footer.styles.sass';

const Footer = new Reef('[data-component-name="footer"]', {
    template: () => {
        return`
            <footer class="footer">
                <p class="footer__text"><span class="footer__highlight">Typemaster ${new Date().getFullYear()}</span> | All Rights Reserved</p>
            </footer>
        `
    }
});

export default Footer;