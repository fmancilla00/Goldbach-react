import React from 'react'
import Pairs from '../components/Pairs'
import './stylesheets/Home.css'
import { useState } from 'react'
import { Link } from 'wouter'
import { IoCaretBack, IoSadOutline } from "react-icons/io5"
import { RiEmotionSadLine } from "react-icons/ri";

export default function Home() {

  const [val, setVal] = useState();
  const [number, setNumber] = useState(null);
  const [overflow, setOverflow] = useState(false);

  const handleSubmit = e => { 
    e.preventDefault();
    if (val < 12000) {
      setOverflow(false);
      setNumber(val);
    } else { 
      setOverflow(true);
    }
  }

  const handleChange = e => { 
    setVal(e.target.value);
  }

  const handleContinue = (e) => {
    setOverflow(false);
    setNumber(val);
    
  }

  const handleClear = () => { 
    setOverflow(false);
    setNumber(null);
    setVal('');
  }
  
  return (
    <div className="Home__container">
      <header className='Home__header'> 
        <form onSubmit={handleSubmit} className="Home__form">
          <label className='Home__label'>Ingrese un número</label>
          <input onChange={handleChange} value={val} className="Home__input" type="number" />
        </form>
        <button className='clear-button' onClick={() => handleClear()}>Eliminar</button>
        <Link className='Home__link' to='/intro'> <IoCaretBack/> Volver</Link>
      </header>
      <div className="Home__content">
        {
          (number == null && !overflow)
            ? (<><h4 className="Home__sub">Veamos esas descomposiciones...</h4>
                <div className='Pairs__container especial'></div></>)
            : (!overflow && (number <= 2 || number % 2 !== 0))
              ? <><h4 className="Home__sub">El número ingresado debe ser par y mayor a 2. Intentalo nuevamente.</h4>
                  <div className='Pairs__container especial'>
                    <RiEmotionSadLine className='Home__sad'/>
                  </div>
                </>
              : overflow
                ? <><h4 className="Home__sub">El número ingresado es considerablemente grande. Si continuas, es probable que el navegador deje de responder. <button onClick={() => { handleContinue()}}>Continuar</button></h4>
                    <div className='Pairs__container especial'>
                      <IoSadOutline className='Home__sad' />
                  </div>
                  </>
                : <><h4 className="Home__sub">El número <strong className='Home__num'>{number}</strong> se puede descomponer como la suma de cualquiera de los siguientes pares de números primos</h4>
                  <Pairs num={number} />
                  </>
        }
        
      </div>
    </div>
  )
}
