const esPrimo = (num) => { 
    for (var i = 2; i < (num / 2)+1; i++) {
        if (num % i === 0) {
        return false;
    }
  }
  return num !== 1;
}
const minimoPrimoDesde = desde => { 
    return esPrimo(desde) ? desde : minimoPrimoDesde(desde + 1);
}

// devuelve el primo número n, el enésimo. Arranca en 1
const nEsimoPrimo = n => { return n === 1 ? 2 : minimoPrimoDesde(1 + nEsimoPrimo(n - 1))};
    

const satisfaceGoldbachAux = (indexPrimo, numero) => { 
    return (numero > 2 && numero % 2 === 0) && (esPrimo (numero - (nEsimoPrimo(indexPrimo))) || satisfaceGoldbachAux(indexPrimo + 1,numero))
}

const satisfaceGoldbach = (num) => { return satisfaceGoldbachAux(1,num)
}

const descomposicionEnPrimosDesde = (desde, num) => { 
    if (esPrimo(num - (nEsimoPrimo(desde)))) {
        return { p1: (nEsimoPrimo(desde)), p2: (num - (nEsimoPrimo(desde))) }
    } else { 
        return descomposicionEnPrimosDesde(desde + 1, num);
    }
}

export const descomposicionEnPrimos = num => { 
    return descomposicionEnPrimosDesde(1, num);
}


/*
const numeroDeDescomposicionesDesde = (desde, num) => { 
    let posiblePrimo = (num - nEsimoPrimo(desde));

    if (posiblePrimo < 2) { 
        return 0;
    }
    if (esPrimo(posiblePrimo)) {
        return (1 + numeroDeDescomposicionesDesde( (desde + 1), num))
    }

    // en cualquier otro caso:
    return numeroDeDescomposicionesDesde( (desde + 1), num)
}

const numeroDeDescomposiciones = num => { 
    return numeroDeDescomposicionesDesde(1, num);
}

*/




export const Descomposiciones = num => { 
    return DescomposicionesDesde(1, num);
}

const DescomposicionesDesde = (desde, num, it) => {
    let posiblePrimo = (num - nEsimoPrimo(desde));
    let primo = nEsimoPrimo(desde);

    if (posiblePrimo < primo) { 
        return [];
    }
    if (esPrimo(posiblePrimo)) {
        it++;
        let res = (DescomposicionesDesde((desde + 1), num, it));
        return [...res,({p1: posiblePrimo, p2: primo})];
    }
    it++;
    // en cualquier otro caso:
    return DescomposicionesDesde((desde + 1), num, it);
}


                    






