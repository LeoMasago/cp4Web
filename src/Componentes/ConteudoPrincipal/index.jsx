import ContactForm from "../ContactForm";
import CardConteudo from "../CardConteudo";
import TextoInfos from "../TextoInfos"


function ConteudoPrincipal(){
    return (
        <div className="mainInfo">
        <section id='info'>
            <TextoInfos />
        </section>
        <CardConteudo />
        <ContactForm />
      </div>
    );
}

export default ConteudoPrincipal;