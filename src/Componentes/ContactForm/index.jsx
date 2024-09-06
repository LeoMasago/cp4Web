function ContactForm() {
  return (
    <section id="contact" className="contato" style={{dispplay:"flex", justifyContent:"end"}}>
      <div className="formContato">
            <div style={{display:"flex", margin:"8%", gap:"4%"}}htmlFor="">
              <h3>Nome:</h3>
            <input type="text" placeholder="Nome"/>
            </div>


            <div style={{display:"flex", margin:"8%", gap:"5%"}}htmlFor="">
            <h3>Email:</h3>
            <input type="email" placeholder="Email" />
            </div>

            <div style={{display:"flex", margin:"8%", gap:"5%", flexDirection:"column"}}htmlFor="">
              <h3 style={{marginBottom:"8%"}}>Mensagem:</h3>
            <textarea style={{height: "150px", borderRadius:"10px", borderColor:"#a6a6a6", padding:"5px"}}placeholder="Mensagem" />
            </div>

          <button style={{backgroundColor:"blueviolet", height:"30px"}}><h3>Enviar</h3></button>
      </div>
    </section>
  );
}

export default ContactForm;