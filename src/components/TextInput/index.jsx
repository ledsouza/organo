import "./TextInput.css";

const TextInput = () => {
    return (
        <div className="text-input">
            <label>Nome</label>
            <input type="text" placeholder="Digite o seu nome" />
        </div>
    );
};

export default TextInput;
