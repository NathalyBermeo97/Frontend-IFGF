import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "../pages/admin/albums/styles.module.css";

export const Result = ({score, length, playAgain}) => {
    return (
        <>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 style={{margin: '10px'}}>Tu puntaje es : {score}/{length}</h1>
                <Button style={{margin: '10px'}} onClick={playAgain} variant='success'>Intentar de nuevo</Button>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </>

    )
}
