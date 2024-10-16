interface Cabecalho {
    title: string;
    description: string;
}

export function Header({title, description}: Cabecalho) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}