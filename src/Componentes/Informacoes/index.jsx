export default function Informacoes({dadosText}) {
    return( 
        <>
        {
            dadosText.map((pegaText)=> (
                <div className="personal-info">
                    <h1>{pegaText.titulo}</h1>
                    <p>{pegaText.texto}</p>
                    <button type="submit">Começar Agora</button>
                </div>
            ))
        }
        </>
     );
}
