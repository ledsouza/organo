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

    return (
        <section className="container-form">
            <form action="submit">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput label="Nome" placeholder="Digite o seu nome" />
                <TextInput label="Cargo" placeholder="Digite o seu cargo" />
                <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown label="Time" itens={times} />
                <Button>Criar card</Button>
            </form>
        </section>
    );
};

export default Form;
