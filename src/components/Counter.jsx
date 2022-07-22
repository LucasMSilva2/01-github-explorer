import { useState } from 'react';

export function Counter () {
    const [counter, setCounter] = useState(0);

    function increment () {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}

// imutabilidade

// usuarios = ['lucas', 'patricia', 'rafa']

// usuarios.push('torres') --> no react n fazemos isso

// novoUsuarios = [...usuarios, 'torres'] --> forma correta de acrescentar devido a 
// imutabilidade do react