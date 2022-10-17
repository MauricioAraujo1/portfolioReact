import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <a href='https://www.linkedin.com/in/mauricioarj1/' target="_blank"><FaLinkedinIn/></a>},
    {name: "github", icon: <a href='https://github.com/MauricioAraujo1' target="_blank"><FaGithub/></a>},
    {name: "instagram", icon: <a href='https://www.instagram.com/lmauricio.z/' target="_blank"><FaInstagram/></a>},
];

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href='#' className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetworks