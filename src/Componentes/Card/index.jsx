export default function Card({dados}) {
    return (
        <>
        {
            dados.map((pegaDados,index) => (
                <div 
                    class="skill-card" 
                    key={index} 
                    style={
                        {
                            backgroundColor: pegaDados.bg,
                            color: pegaDados.color,
                        }}>
                    <div style={{color:pegaDados.tcolor}}>
                        <h2>{pegaDados.num}</h2>
                    </div>
                    <p>{pegaDados.titulo}</p>
                    <p>{pegaDados.texto}</p>
                </div>   
            ))
        }

        
        </>
    );
}

