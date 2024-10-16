interface ButtonText {
    texto: string;
    onClick: () => void;
}

export function Button({texto, onClick}: ButtonText) {
    return (
        <button onClick={onClick}>
            {texto}
        </button>
    );
}