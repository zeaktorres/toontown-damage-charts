'use client'
import { Button, Text } from "@nextui-org/react";
import { useReducer } from 'react';
import CogTypes from "./cogTypes";
import { CogTypesEnum } from "./cogTypesEnum";
import CogList from "./cogList"
import NumberOfCogs from "./numberOfCogs";
enum ButtonPressed {
    SIMULATE_BUTTON = "simulateButtonPressed",
    COG_BUTTON_PRESSED = "cogButtonPressed",
    COG_TYPE_PRESSED = "cogTypesButtonPressed",
    LEVEL_BUTTON = "levelButtonPressed"
}

enum Page {
   START = "startPage",
   NUMBER_OF_COGS = "numberOfCogs",
   COG_TYPES = "cogTypes",
   COG_LIST = "cogList",
   END = "end"
}

type State = {
    page: Page, 
    numberOfCogs?: number,
    cogType?: CogTypesEnum,
    maxDamage?: number
}

type Action =
 | { type: ButtonPressed.SIMULATE_BUTTON}
 | { type: ButtonPressed.COG_BUTTON_PRESSED, payload: number}
 | { type: ButtonPressed.COG_TYPE_PRESSED, payload: CogTypesEnum }
 | { type: ButtonPressed.LEVEL_BUTTON, payload: number }

const handleAction = (state: State, action: Action): State => {
   console.log(state.maxDamage)
   switch (action.type){
        case ButtonPressed.SIMULATE_BUTTON:
            return { page: Page.NUMBER_OF_COGS}
        case ButtonPressed.COG_BUTTON_PRESSED:
            return { page: Page.COG_TYPES, numberOfCogs: action.payload }
        case ButtonPressed.COG_TYPE_PRESSED:
            return { page: Page.COG_LIST, numberOfCogs: state.numberOfCogs, cogType: action.payload, maxDamage: state.maxDamage } 
        case ButtonPressed.LEVEL_BUTTON:
            return { page: state.numberOfCogs === 1 ? Page.END : Page.COG_TYPES, numberOfCogs: state.numberOfCogs !== 1 ? state.numberOfCogs ? state.numberOfCogs - 1 : 0 : 0, 
                        maxDamage: state.maxDamage ? state.maxDamage + action.payload : action.payload}
   }
}

export default function Home() {
    const [{page, numberOfCogs, cogType, maxDamage}, dispatch] = useReducer(handleAction, 
        { page: Page.START, numberOfCogs: -1});
  
    console.log(maxDamage)

    const simulateButton = () => {
        dispatch({type: ButtonPressed.SIMULATE_BUTTON})
    }

    const handleNumberOfCogs = (i: number) => {
        dispatch({type: ButtonPressed.COG_BUTTON_PRESSED, payload: i})
    }

    const handleCogType = (cogType: CogTypesEnum): void => {
        console.log("Handle Cog Type")
        dispatch({type: ButtonPressed.COG_TYPE_PRESSED, payload: cogType})
    }
    
    const handleLevelButton = (maxDamage: number) => {
        dispatch({type: ButtonPressed.LEVEL_BUTTON, payload: maxDamage})
    }

    return (
        <>
            {
                page === Page.START &&
                <div className='content-center absolute top-10 left-10'>
                    <Button onPress={simulateButton} size="xl">Simulate Fight </Button>
                </div>
            }
            {
                page === Page.NUMBER_OF_COGS &&
                <NumberOfCogs handleNumberOfCogs={handleNumberOfCogs}/>
            }
            {
                page === Page.COG_TYPES &&
                <div className="absolute space-y-2 space-x-2 flex">
                    <CogTypes handleCogType={handleCogType}/>     
                </div>
            }
            {
                page === Page.COG_LIST && 
                <div className="absolute top-10 left-10 space-y-2">
                    <CogList cogType={cogType} handleLevelButton={handleLevelButton}/>
                </div>
            }
            {
                page === Page.END &&
                <div className="absolute top-10 left-10">
                    <Text className="">{"Max Damage: " + maxDamage }</Text>
                </div>
            }
        </>
    )
}
