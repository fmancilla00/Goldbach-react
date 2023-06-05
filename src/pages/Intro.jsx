import React from 'react'
import './stylesheets/Intro.css'
import { Link } from 'wouter'
import { IoCaretForward } from "react-icons/io5";
import { useTypewriter} from 'react-simple-typewriter';


export default function Intro() {

  const [text] = useTypewriter(
    {
      words: ['Una breve introducción antes de empezar', '¿Qué es la Conjetura de Goldbach?']
    }

  );
  return (
    <div className='Intro__container'>
      <h2 className='Intro__title'><span>{text}</span></h2>
      <div className="Intro__texts">
        <p className='Intro__parraf'>En 1742, <b>Christian Goldbach</b> —un matemático alemán— en una carta a <b>Leonard Euler</b> o, más precisamente, en el margen de esa carta, hizo una conjetura, que es equivalente a la siguiente:</p>
        <p className='Intro__parraf quote'><i>"Todo número entero par mayor que 2 puede ser escrito como la suma de dos números primos."</i></p>
        <p className="Intro__parraf">Al día de hoy, nadie sabe si esto es cierto o no, y decidirlo es uno de los problemas más famosos de la teoría de números.
        </p>
        <p className="Intro__parraf">
          Con esta app podrás ver todas las posibles descomposiciones de un numero par como suma de 2 números primos.
        </p>
        <Link className='Intro__link' to='/enter'>Ir a probarlo <IoCaretForward/> </Link>
      </div>      
      </div>
  )
}
