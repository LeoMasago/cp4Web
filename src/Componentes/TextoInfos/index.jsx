import Informacoes from "../Informacoes";

function TextoInfos() {

    const conteudoText= [
        {
            titulo1:"Crie seus vídeos online",
            conteudo1:"Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.",
            titulo2:"Bem-vindo à revolução dos vídeos!",
            conteudo2:"Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.",
            titulo3:"Dúvidas e suporte, entre em contato:",
            conteudo3:""
        }
    ]
    console.log(conteudoText)
    return ( 
        <div className="txtconteudo">
            <Informacoes dadosText = {conteudoText}/>
        </div>
     );
}

export default TextoInfos;