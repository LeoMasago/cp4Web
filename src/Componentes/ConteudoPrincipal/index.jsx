import CardConteudo from "../CardConteudo";
import Informacoes from "../Informacoes";
import tela1 from "../../assets/tela1.png";

function ConteudoPrincipal(){
    return (
        <div className="mainInfo">
        <section id='info'>
            <Informacoes />
            <img src={tela1}/>
        </section>
        <CardConteudo />
       </div>
    );
}

export default ConteudoPrincipal;