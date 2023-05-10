import style from "./footer.module.css"
import FooterLogo from "./footerLogo/footerLogo";
import NavigateFooter from "./navigateFooter/navigateFooter";

const Footer = () => {

    return (
        <div className={style.wrapper}>
            <NavigateFooter/>
            <FooterLogo/>
        </div>
    );
}

export default Footer;