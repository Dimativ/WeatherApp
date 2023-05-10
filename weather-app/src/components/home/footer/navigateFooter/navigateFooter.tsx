import style from "./navigateFooter.module.css"
import instagram from "../../../../pics/socialPics/instagram.png";
import github from "../../../../pics/socialPics/github.png";
import facebook from "../../../../pics/socialPics/facebook.png";
import discord from "../../../../pics/socialPics/discord.png";
import twitter from "../../../../pics/socialPics/Twitter.png";

const NavigateFooter = () => {
    return (
        <div className={style.wrapper}>
            <a className={`${style.socialLinks} ${style.firstSocialLink}`} href="https://www.instagram.com/" target="_blank">
                <img className={style.socialPics} src={instagram}></img>
            </a>
           <a className={style.socialLinks} href="https://github.com/" target="_blank">
               <img className={style.socialPics} src={github}></img>
           </a>
            <a className={style.socialLinks} href="https://www.facebook.com/" target="_blank">
                <img className={style.socialPics} src={facebook}></img>
            </a>
            <a className={style.socialLinks} href="https://discord.com/" target="_blank">
                <img className={style.socialPics} src={discord}></img>
            </a>
            <a className={style.socialLinks} href="https://twitter.com/" target="_blank">
                <img className={style.socialPics} src={twitter}></img>
            </a>
        </div>
    );
}

export default NavigateFooter;