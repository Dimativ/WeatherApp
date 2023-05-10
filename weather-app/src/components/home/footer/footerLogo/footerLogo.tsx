import style from "./footerLogo.module.css"
import cloud from "../../../../pics/headerPics/clouds.png";
import headerStar from "../../../../pics/headerPics/headerStar.png";

const FooterLogo = () => {

    return (
        <div className={style.wrapper}>
            <img className={style.cloudImg} src={cloud}></img>
            <img className={style.star} src={headerStar}></img>
            <h1 className={style.headerText}>SkyLine</h1>
        </div>
    );
}

export default FooterLogo;