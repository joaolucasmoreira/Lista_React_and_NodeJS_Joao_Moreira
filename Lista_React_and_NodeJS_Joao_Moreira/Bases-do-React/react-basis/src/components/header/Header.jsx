/* eslint-disable no-unused-vars */

import athomReact  from '../../assets/athom-react.png'
import './Header.css'

const randomWords = () =>{
  const words = ['conceitos','fundamentos', 'definições']
  const indice = Math.floor(Math.random() * words.length)
  return words[indice]
}



const Header = () => {
    return (
      <header>
        <img src={athomReact} alt="" />
        <h1>Fundamentos do React</h1>
        <p>Iremos aplicar aqui {randomWords()} práticos e resumidos do React.</p>
      </header>
    );
  };
  
export default Header;