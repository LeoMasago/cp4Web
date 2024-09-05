import twitter from "../../assets/twitter.png"
import insta from "../../assets/insta.png"
import discord from "../../assets/discord.png"

function Text3() {
    return (
        <div className="personal-info">
            <h1>Dúvidas e suporte, entre em contato:</h1>
            <img src={twitter} />
            <img src={insta} />
            <img src={discord} />
        </div>
    );
}

export default Text3;