import InfoCardPlanos from "../Componentes/InfoCardPlanos";
import Text2 from "../Componentes/Text2";
import tela1 from "../assets/tela1.jpg"
;




function Sobre() { /* ffc -> atalho para criar function */
    return ( 
        <div className="mainInfo" >
            <div id='info'style={{display:"flex", height:"500px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                <Text2 />
                </div>
                <img src={tela1} style={{}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <h1 style={{ width:"100%", textAlign:"center"}}>Planos</h1>
            <div style={{display:"flex", justifyContent:"center", gap:"10%"}}>
            <InfoCardPlanos/>
            </div>
            </div>
       </div>
        
        
        
     );
}

export default Sobre;
