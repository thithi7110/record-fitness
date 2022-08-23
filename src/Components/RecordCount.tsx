import '../App.css'
import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

type RecordCountProps = {
    count:string,
    onChange:Function,
}

function RecordCount(props:RecordCountProps) {
    const history = useHistory<RecordCountProps>();
    const _props:RecordCountProps = history.location.state;


    const [count,setCount] = useState(_props.count);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCount(e.target.value);

        if(!!_props.onChange) _props.onChange(e);
    }
    return (
        <>
            <Button onClick={() =>history.push('/Record')}>戻る</Button>
            <input value={count} onChange={onChange}/>
        </>
    );
}


export default RecordCount;