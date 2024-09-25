import { useState } from "react";

const Toggletext = () => {
const [close, setClose] = useState(true);
console.log(close);
const changeClose = ()=>{setClose(!close)}
    return (
        <div>
            <h2>Title <button onClick={changeClose}>{close?'hidden':'open'}</button></h2>
            {close && <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nesciunt.</p>}
        </div>
    );
}

export default Toggletext;
