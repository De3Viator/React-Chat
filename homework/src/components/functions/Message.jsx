import { useState } from "react";
import '../../Message.css'

export function Message(props ) {
    return (<input type="text" value={props.text} onChange={props.changeValue}/>)  
}