import "./Dropdown.css";
import PropTypes from "prop-types";

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label htmlFor="time-selecao">{props.label}</label>
            <select name="times" id="time-selecao">
                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

Dropdown.propType = {
    label: PropTypes.string.isRequired,
    itens: PropTypes.array.isRequired,
};

export default Dropdown;
