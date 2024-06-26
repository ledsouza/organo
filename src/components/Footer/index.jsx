import "./Footer.css";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import tw from "./assets/tw.png";
import logo from "./assets/logo.png";
import fundo from "./assets/fundo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <img src={fb} alt="Ícone do Facebook" />
                <img src={tw} alt="Ícone do Twitter" />
                <img src={ig} alt="Ícone do Instagram" />
            </div>
            <img src={logo} alt="Logo da Organo" />
            <p>Desenvolvido por Leandro</p>
        </footer>
    );
};

export default Footer;
