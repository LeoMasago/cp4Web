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
                        backgroundColor: "blue",
                        color: "gray",
                        borderRadius:"5%"
                    }}>
                <div style={{display:'flex',justifyContent:"start", flexDirection:"row"}}>
                    <header>
                        <h1 style={{fontSize:"20px"}}>{pegaPlanos.titulo}</h1>
                    </header>

                    
                    
                </div>
            </div>
            )
        }

        </>
     );
}
