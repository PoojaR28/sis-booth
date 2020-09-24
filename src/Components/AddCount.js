import React,{useState} from 'react'

export default function AddCount() {

    const [count,setcount]=useState(0);

    function increase(){
        setcount(count+1);
    }

    function decrease(){
        setcount(count-1);
    }
    return (
        <div>
            <h5>{count}</h5>
        
            <button type="button" className="add" style={{width:"10%"}} onClick={increase} >+</button>
            <button type="button" className="add" style={{width:"10%"}} onClick={decrease} >-</button>

        </div>
    )
}
