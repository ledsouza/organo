import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
    const [colaboradores, setColaboradores] = useState([]);

    const handleSubmit = (colaborador) => {
        console.log(colaborador);
    };

    return (
        <>
            <Banner />
            <Form onSubmit={handleSubmit} />
        </>
    );
}

export default App;
