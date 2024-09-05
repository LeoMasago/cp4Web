function ContactForm() {
  return (
    <section id="contact">
      <form>
        <div className="contato">
          <div className="textos">
            <p>Nome:</p>
            <input type="text" placeholder="Nome"/>
          </div>
          
          <div className="textos">
            <p>Email:</p>
            <input type="email" placeholder="Email" />
          </div>

          <div className="mensagem">
            <p>Mensagem:</p>
            <textarea placeholder="Mensagem" />
          </div>
        </div>

        <button>Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;