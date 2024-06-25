import "./TextInput.css";
import PropTypes from "prop-types";

const TextInput = ({ label, placeholder, value, onChange, required = false }) => {
    return (
        <div className="text-input">
            <label>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
