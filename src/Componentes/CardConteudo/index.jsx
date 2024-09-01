import Card from "../Card";

function CardConteudo({ CardConteudo }) {

  const conteudo = [
    {
      num:"01",
      titulo:"Youtube",
      texto:"Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      tcolor:"#FFFFFF",
      color:"#333333",
      bg:"#F1C2B0"
    },
    {
      num:"02",
      titulo:"TikTok",
      texto:"Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      tcolor:"#FFFFFF",
      color:"#333333",
      bg:"#F9EB98"
    },
    {
      num:"03",
      titulo:"Facebook",
      texto:"Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      tcolor:"#FFFFFF",
      color:"333333#",
      bg:"#C0D9DD"
    },
    {
      num:"04",
      titulo:"Instagram",
      texto:"Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      tcolor:"#FFFFFF",
      color:"#333333",
      bg:"#6975E8"
    }
  ]

  return (
    <div className="skills">
      <Card dados={conteudo}/> 
    </div>
  );
}

export default CardConteudo;