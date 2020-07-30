import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css';
import ButtonLink from '../ButtonLink/index';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da testflix" />
            </a>
            <ButtonLink className="ButtonLink" href="/">Novo Vídeo</ButtonLink>
        </nav>
    )
}
export default Menu