'use client'

import { useState } from "react";

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <>
            <label>{`Contador: ${num}`}</label>            
            <label onClick={() => handleIncrementa()}>+1</label>
        </>
    );
}