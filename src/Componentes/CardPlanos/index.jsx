export default function CardPlanos({dadosPlanos}) {
    return ( 
        <>
        {
            dadosPlanos.map((pegaPlanos,index) => 
            
            <div
                class="CardSobre"
                key ={index}
                style={
                    {
                        backgroundColor: "white",
                        color: "gray",
                        borderRadius:"30px",
                        boxShadow:"10px 10px 10px grey",
                        border: "solid 1px black",
                        padding: 0,
                        height:"400px",
                        display: "flex",
                        flexDirection:"column",
                        justifyContent:"start",
                        gap:"5%"
                    }}>
                <div style={{display:'flex',justifyContent:"start", flexDirection:"column", gap:"40%"}}>
                    
                    <header style={{backgroundColor:pegaPlanos.color,width:"100%", borderRadius:"30px 30px 0 0", borderBottom:"0.5px grey solid"}}>
                        <h1 style={{fontSize:"20px", color:"black", marginTop:"45%"}}>{pegaPlanos.titulo}</h1>
                    </header>
                    <div style={{display:"flex", flexDirection:"column", padding:"10px", gap:"20px"}}>
                    <p style={{margin:"auto"}}>{pegaPlanos.conteudo}</p>
                    <div style={{display:"flex",justifyContent:"center", alignItems:"baseline", gap:"2%", margin:"auto", width:"100%", border:"solid black 1px", borderRadius:"10px"}}> 
                        <img stytle={{}} src={pegaPlanos.img} alt="" />
                        <p style={{width:"auto"}}>{pegaPlanos.valor}</p>
                        <h4 style={{color:"black"}}>{pegaPlanos.valor1}</h4>
                    </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"end"}}>
                    <div style={{display:"flex" ,justifyContent:"center", width:"100%"}}>
                            <button style={{display:"flex", justifyContent:"center", width:"70%", height:"100%", backgroundColor:pegaPlanos.color, border:"solid 1px black" }}> <h3 style={{fontSize:"15px", color:"black"}}> {pegaPlanos.txtbutton} </h3></button>
                    </div>
                </div>    
                    
                    
                
            </div>
            )
        }

        </>
     );
}
