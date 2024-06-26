import "./Footer.css";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import tw from "./assets/tw.png";
import logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="#">
                    <img src={fb} alt="Ícone do Facebook" />
                </a>
                <a href="#">
                    <img src={tw} alt="Ícone do Twitter" />
                </a>
                <a href="#">
                    <img src={ig} alt="Ícone do Instagram" />
                </a>
            </div>
            <img src={logo} alt="Logo da Organo" />
            <p>Desenvolvido por Leandro</p>
        </footer>
    );
};

export default Footer;
