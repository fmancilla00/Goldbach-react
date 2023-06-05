import React, { useEffect, useState } from 'react'
import { Descomposiciones } from '../services/goldbach_functions';
import './stylesheets/Pairs.css'

export default function Pairs({ num }) {
  const [pairs, setPairs] = useState([]);

  useEffect(
    () => {
        const pares = Descomposiciones(num);
        setPairs(pares);
    }, [num])  

  return (
    <div className='Pairs__container'>
      {
            pairs.map(par => { 
              const { p1, p2 } = par;
              return (
                <div className='Pairs__element' key={par.p1}>
                  <h4 className="Pairs__number">{p1}</h4>
                  <h4 className="Pairs__number">|</h4>
                  <h4 className="Pairs__number">{p2}</h4>
                </div>
              )
            }) 
      }
    </div>
  )
}
