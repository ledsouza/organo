import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Form.css";

const Form = () => {
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão",
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Cartão adicionado => ", nome, cargo, imagem, time);
    };

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

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
                    itens={times}
                    required={true}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    );
};

export default Form;
