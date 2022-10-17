import SocialNetworks from './SocialNetworks';

import Avatar from '../img/photo.jpg';

import "../styles/components/sidebar.sass";
import InfContainer from './InfContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Maurício Araújo" />
      <p className='title'>Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InfContainer />
      <footer>
      <a onClick href="https://drive.google.com/file/d/1_uKtHd3pcGXkgHj2sC2wIMEH72Tb6KSl/view?usp=sharing" className="btn" target="_blank">
        Visualizar currículo
      </a>
      </footer>
    </aside>
  )
}

export default Sidebar