interface Imagem {
    url: string;
    alt: string;
}

export function Image({url, alt}: Imagem) {
    return (
        <img src={url} alt={alt}></img>
    )
}