import Informacoes from "../Informacoes";

function TextoInfos({TextoInfos}) {
    
    const conteudoText = [
        {
            titulo:"Crie seus vídeos online",
            conteudo:"Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
        },
        {
            titulo:"Bem-vindo à revolução dos vídeos!",
            conteudo:"Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
        },
        {
            titulo:"Dúvidas e suporte, entre em contato:",
            conteudo:""
        }
    ]

    return ( 
        <div className="Text">
            <Informacoes dadosText={conteudoText} />
        </div>
     );
}

export default TextoInfos;