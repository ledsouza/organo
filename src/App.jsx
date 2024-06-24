import "./App.css";
import Banner from "./components/Banner";
import TextInput from "./components/TextInput";

function App() {
    return (
        <>
            <Banner />
            <TextInput label="Nome" placeholder="Digite o seu nome" />
            <TextInput label="Cargo" placeholder="Digite o seu cargo" />
            <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
        </>
    );
}

export default App;
