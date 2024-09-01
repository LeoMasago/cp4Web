function Informacoes({dadosText}) {
    return ( 
        <>
        {
            dadosText.map((pegaText)=> (
                <div className="personal-info">
                    <h1>{pegaText.titulo1}</h1>
                    <p>{pegaText.conteudo1}</p>
                </div>
            ))
        }

        </>
     );
}

export default Informacoes;
