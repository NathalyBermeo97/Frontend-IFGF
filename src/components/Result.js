import React from 'react'
import { Button } from 'react-bootstrap'

export const Result = ({score, length, playAgain}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{margin: '10px'}}>Your score {score}/{length}</h1>
            <Button style={{margin: '10px'}} onClick={playAgain} variant='success'>Intentar de nuevo</Button>
        </div>
    )
}
