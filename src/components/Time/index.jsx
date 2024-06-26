import "./Time.css";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colaborador from "../Colaborador";

const Line = styled.div`
    display: inline-block;
    width: 32px;
    height: 4px;
    background-color: ${(props) => props.color};
    margin: 1px 0 32px 0;
    text-align: center;
`;

const Time = (props) => {
    return (
        <section className="time" style={{ backgroundColor: props.corFundo }}>
            <h3>{props.nome}</h3>
            <Line color={props.corDestaque} />
            <div className="time__colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                ))}
            </div>
        </section>
    );
};

Time.propTypes = {
    nome: PropTypes.string.isRequired,
    colaboradores: PropTypes.array,
    corDestaque: PropTypes.string.isRequired,
    corFundo: PropTypes.string.isRequired,
};

export default Time;
