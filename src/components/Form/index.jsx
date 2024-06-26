import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Form.css";

const Form = (props) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState(props.times[0]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            nome,
            cargo,
            imagem,
            time,
        });

        setNome("");
        setCargo("");
        setImagem("");
        setTime(props.times[0]);
    };

    return (
        <section className="container-form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required={true}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <TextInput
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required={true}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                />
                <TextInput
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                />
                <Dropdown
                    label="Time"
                    itens={props.times}
                    required={true}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    );
};

Form.propTypes = {
    times: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
