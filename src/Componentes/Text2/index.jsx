function Text2({dadosText}) {
    return ( 
        <>
        {
            dadosText.map((pegaText)=> (
                <div className="personal-info">
                    <h1>{pegaText.titulo2}</h1>
                    <p>{pegaText.conteudo2}</p>
                </div>
            ))
        }

        </>
     );
}

export default Text2;