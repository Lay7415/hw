import React, {useState} from 'react';
import "./Count.css"

function Count () {
    const [count,setCount] = useState(0)
    function Plus () {
        setCount(count + 1)
    }
    function Minus () {
        setCount(count - 1)
    }
    return <div className="CountRender">
        <button className="Btn" onClick={Minus}>-</button>
        <h1 className="Count">{count}</h1>
        <button className="Btn" onClick={Plus}>+</button>
    </div>
}
export default Count
