import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownDropCircleOutline } from '@mdi/js';


const Toggletext = () => {
const [close, setClose] = useState(true);
console.log(close);
const changeClose = ()=>{setClose(!close)}
    return (
        <div>
            <h2>Title <div onClick={changeClose}>{close?<Icon path={mdiArrowDownDropCircleOutline}size ={1}/>:'open'}  </div></h2>
            {close && <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nesciunt.</p>}
        </div>
    );
}

export default Toggletext;
