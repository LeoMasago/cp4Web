export default function CardPlanos({dadosPlanos}) {
    return ( 
        <>
        {
            dadosPlanos.map((pegaPlanos,index) => 
            <div
                class=""
                key ={index}
                style={
                    {
                        backgroundColor: "blue",
                        color: "gray",
                        borderRadius:"5%"
                    }}>
                <div style={{color:"green", display:'flex',justifyContent:"start", marginBottom:"5%", flexDirection:"row"}}>
                    <header>
                        <h1>{pegaPlanos.titulo}</h1>
                    </header>

                    <div className="">
                        <img src={pegaPlanos.img}/>
                    </div>
                    
                    <footer>
                        <button>{pegaPlanos.txtbutton}</button>
                    </footer>
                </div>
            </div>
            )
        }

        </>
     );
}
