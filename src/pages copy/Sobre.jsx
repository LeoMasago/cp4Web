import Text2 from "../Componentes/Text2";




function Sobre() { /* ffc -> atalho para criar function */
    return ( 
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column"}} id="info">
                <Text2/>
                <button><h3>Baixe o app</h3></button>
            </div>
            <div style={{display:"flex"}}>
                <img src="src\assets\tela1.jpg" alt="" />
            </div>
        </div>
     );
}

export default Sobre;
