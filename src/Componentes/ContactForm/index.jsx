function ContactForm() {
  return (
    <section id="contact" className="contato">
      <form className="formContato">
            <label htmlFor="">Nome:</label>
            <input type="text" placeholder="Nome"/>


            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Email" />

            <label htmlFor="">Mensagem:</label>
            <textarea placeholder="Mensagem" />

          <button>Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;