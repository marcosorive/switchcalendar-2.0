import React from 'react';
import {Alert} from "./Alert/Alert";
type ErrorListProps = {
    errorList: string[]
}
export function FormErrorList (props:ErrorListProps){
    return(
        <div>{props.errorList.map( message => <Alert message={message}/>)}</div>
    )
}