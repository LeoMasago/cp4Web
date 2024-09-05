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
                            borderRadius:"5%"
                        }}>
                    <div style={{color:pegaDados.tcolor, display:'flex', gap: '30%',justifyContent:"start", marginBottom:"5%", flexDirection:"row"}}>
                        <h2>{pegaDados.num}</h2>
                        <img src={pegaDados.img}></img>
                    </div>

                     <h3 style={{fontSize:"30px"}}>{pegaDados.titulo}</h3>
                         <p>{pegaDados.texto}</p>
                    
                </div>   
            ))
        }

        
        </>
    );
}

