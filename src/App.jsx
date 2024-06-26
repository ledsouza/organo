import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";

function App() {
    const [colaboradores, setColaboradores] = useState([]);

    const times = [
        {
            nome: "Programação",
            corFundo: "#D9F7E9",
            corDestaque: "#57C278",
        },
        {
            nome: "Front End",
            corFundo: "#E8F8FF",
            corDestaque: "#82CFFA",
        },
        {
            nome: "Data Science",
            corFundo: "#F0F8E2",
            corDestaque: "#A6D157",
        },
        {
            nome: "Devops",
            corFundo: "#FDE7E8",
            corDestaque: "#E06B69",
        },
        {
            nome: "UX e Desing",
            corFundo: "#FAE9F5",
            corDestaque: "#DB6EBF",
        },
        {
            nome: "Mobile",
            corFundo: "#FFF5D9",
            corDestaque: "#FFBA05",
        },
        {
            nome: "Inovação e Gestão",
            corFundo: "#FFEEDF",
            corDestaque: "#FF8A29",
        },
    ];

    const handleSubmit = (colaborador) => {
        console.log(colaborador);
    };

    return (
        <>
            <Banner />
            <Form times={times.map((time) => time.nome)} onSubmit={handleSubmit} />
            {times.map((time) => (
                <Time
                    key={time.nome}
                    nome={time.nome}
                    corFundo={time.corFundo}
                    corDestaque={time.corDestaque}
                />
            ))}
        </>
    );
}

export default App;
