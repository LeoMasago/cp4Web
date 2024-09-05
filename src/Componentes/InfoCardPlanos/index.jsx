import CardPlanos from "../CardPlanos";
import corporativo from "../../assets/corporativo.png"

function InfoCardPlanos({InfoCardPlanos}) {

    const conteudoPlanos = [
        {
            titulo:"Individual",
            txtbutton:"Cadastrar"
        },
        {
            titulo:"Profissional - Times",
            txtbutton:"Cadastrar"
        },
        {
            titulo:"Corporativo",
            txtbutton:"Entre Em Contato",
            img:`${corporativo}`
        }
    ]
    
    console.log(conteudoPlanos)
    return ( 
        <CardPlanos dadosPlanos = {conteudoPlanos}/>
     );
}

export default InfoCardPlanos;