function Text3({ dadosText }) {
    return (
        <>
            {
                dadosText.map((pegaText) => (
                    <div className="personal-info">
                        <h1>{pegaText.titulo3}</h1>
                        <p>{pegaText.conteudo3}</p>
                    </div>
                ))
            }

        </>
    );
}

export default Text3;