import InfoCardPlanos from "../Componentes/InfoCardPlanos";
import Text2 from "../Componentes/Text2";
import tela1 from "../assets/tela1.jpg";
import tela2 from "../assets/tela2.jpg";




function Sobre() { /* ffc -> atalho para criar function */
    return ( 
        <div className="mainInfo" >
            <div id='info'style={{display:"flex", height:"500px"}}>
                <div style={{display:"flex", flexDirection:"column", widht:"50%"}}>
                <Text2 />
                </div>
                <img src={tela1} style={{}}/>
                <img src={tela2} alt="" />
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <h1 style={{ width:"100%", textAlign:"center", color:"black"}}>Planos</h1>
            <div style={{display:"flex", justifyContent:"center", gap:"10%"}}>
            <InfoCardPlanos/>
            </div>
            </div>
       </div>
        
        
        
     );
}

export default Sobre;
