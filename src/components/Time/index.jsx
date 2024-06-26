import "./Time.css";
import PropTypes from "prop-types";
import styled from "styled-components";

const Line = styled.div`
    display: inline-block;
    width: 32px;
    height: 4px;
    background-color: ${(props) => props.color};
    margin-top: 1px;
    text-align: center;
`;

const Time = (props) => {
    return (
        <section className="time" style={{ backgroundColor: props.corFundo }}>
            <h3>{props.nome}</h3>
            <Line color={props.corDestaque} />
        </section>
    );
};

Time.propTypes = {
    nome: PropTypes.string.isRequired,
    corDestaque: PropTypes.string.isRequired,
    corFundo: PropTypes.string.isRequired,
};

export default Time;
