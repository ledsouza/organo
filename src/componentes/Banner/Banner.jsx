import "./Banner.css";
import imgBanner from "./assets/banner.png";

export default function Banner() {
    return (
        <header className="banner">
            <img src={imgBanner} alt="Banner da Organo" />
        </header>
    );
}
