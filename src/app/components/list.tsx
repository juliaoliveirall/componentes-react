interface Item {
    itens: string[];
}

export function ListaItens({itens}: Item) {
    return (
        <ul>
            {itens.map((item, i ) => (
                <li key={i}>{item} </li>
            ))}
        </ul>
    )
}