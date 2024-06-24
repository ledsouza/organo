import "./TextInput.css";
import PropTypes from "prop-types";

const TextInput = (props) => {
    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder} />
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default TextInput;
