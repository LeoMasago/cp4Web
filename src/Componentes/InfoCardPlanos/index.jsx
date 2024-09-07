import CardPlanos from "../CardPlanos";
import corporativo from "../../assets/corporativo.png"

function InfoCardPlanos({InfoCardPlanos}) {

    const conteudoPlanos = [
        {
            titulo:"Individual",
            txtbutton:"Cadastrar",
            color:"rgb(119, 125, 243)",
            conteudo: "1 usuário",
            valor: "10 vídeos",
            valor1: "R$ 15"
        },
        {
            titulo:"Profissional - Times",
            txtbutton:"Cadastrar",
            conteudo:"1 - 10 usuários",
            valor: "10 vídeos",
            valor1: "R$ 15",
            color:"white"
        },
        {
            titulo:"Corporativo",
            txtbutton:"Entre Em Contato",
            img:`${corporativo}`,
            color:"white"
            

        }
    ]
    
    console.log(conteudoPlanos)
    return ( 
        <CardPlanos dadosPlanos = {conteudoPlanos}/>
     );
}

export default InfoCardPlanos;