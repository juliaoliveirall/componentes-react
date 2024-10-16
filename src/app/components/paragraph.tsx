interface Paragrafo {
    texto: string;
}

export function Paragraph({texto}: Paragrafo) {
    return (
        <p>{texto}</p>
    )
}