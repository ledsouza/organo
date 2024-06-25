import "./Dropdown.css";
import PropTypes from "prop-types";

const Dropdown = ({ label, required = false, value, onChange, itens }) => {
    return (
        <div className="dropdown">
            <label htmlFor="time-selecao">{label}</label>
            <select
                name="times"
                id="time-selecao"
                required={required}
                value={value}
                onChange={onChange}
            >
                {itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    itens: PropTypes.array.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Dropdown;
