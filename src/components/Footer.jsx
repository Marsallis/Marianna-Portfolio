import "../Styles/Footer.css";
import { AiFillCamera, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="props"><span>&#169;</span> Website Made By Faircloth Freelancing LLC</div> 
            <div className="icons">
                <a href="https://www.instagram.com/marianna_ugc/" class="fa-ig"><AiFillCamera/></a>
                <a href="mailto:marianna.ugcmarketing@gmail.com" class="fa-mail"><AiFillMail/></a>
            </div>
        </div>
    )
}

export default Footer;