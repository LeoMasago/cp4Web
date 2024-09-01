import ContactForm from "../ContactForm";
import Informacoes from "../Informacoes";
import Skills from "../CardConteudo";



function ConteudoPrincipal(){
    return (
        <div className="mainInfo">
        <section id='info'>
            <Informacoes />
        </section>
        <Skills />
        <ContactForm />
      </div>
    );
}

export default ConteudoPrincipal;