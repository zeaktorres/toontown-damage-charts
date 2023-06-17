'use client'
import { Button } from "@nextui-org/react";
import { useReducer } from 'react';

enum ButtonPressed {
    SIMULATE_BUTTON = "simulateButtonPressed",
    COG_BUTTON_PRESSED = "cogButtonPressed"
}

enum APP_STATES {
    START = "start",
    NUMBER_OF_COGS = "numberOfCogs"
}

type State = {
    showSimulateFightButton: boolean,
    showNumberOfCogsButton: boolean, 
    numberOfCogs: number
}
type Action =
 | { type: ButtonPressed.SIMULATE_BUTTON}
 | { type: ButtonPressed.COG_BUTTON_PRESSED, payload: number}
const handleAction = (state: State, action: Action): State => {
   switch (action.type){
        case ButtonPressed.SIMULATE_BUTTON:
            return { showSimulateFightButton: false, showNumberOfCogsButton: true, numberOfCogs: 0}
        case ButtonPressed.COG_BUTTON_PRESSED:
            return { showSimulateFightButton: false, showNumberOfCogsButton: false, numberOfCogs: action.payload }
   }
}

export default function Home() {
    const [{showSimulateFightButton, showNumberOfCogsButton, numberOfCogs}, dispatch] = useReducer(handleAction, { showSimulateFightButton: true, showNumberOfCogsButton: false, numberOfCogs: 0});
  
    console.log(numberOfCogs)

    const simulateButton = () => {
        dispatch({type: ButtonPressed.SIMULATE_BUTTON})
    }

    const handleCogs = (i: number) => {
        dispatch({type: ButtonPressed.COG_BUTTON_PRESSED, payload: i})
    }

    const getButtons = () => {
        let buttonsList = []
        for (let i = 1; i <= 4; i++){
            buttonsList.push(<Button key={i} onPress={() => {handleCogs(i)}}>{i}</Button>)
        }
        return buttonsList
    }

    return (
        <div className='content-center absolute top-10 left-10'>
            {showSimulateFightButton && <Button onPress={simulateButton} size="xl">Simulate Fight </Button>}
            {showNumberOfCogsButton && getButtons()}
        </div>
    )
}
