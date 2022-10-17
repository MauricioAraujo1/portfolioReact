import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import "../styles/components/infcontainer.sass";

const InfContainer = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(92)98455-1698</p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>araujomauricio379@gmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>Manaus / AM</p>
        </div>
    </div>
  </section>
};

export default InfContainer