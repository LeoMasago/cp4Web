import CardConteudo from "../CardConteudo";
import Informacoes from "../Informacoes";
import tela1 from "../../assets/tela1.png";

function ConteudoPrincipal(){
    return (
        <div className="mainInfo" >
            <div id='info'style={{display:"flex", width:"100%"}}>
            <Informacoes />
                <img src={tela1}/>
            </div>
        <CardConteudo />
       </div>
    );
}

export default ConteudoPrincipal;