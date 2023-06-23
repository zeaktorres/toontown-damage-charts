'use client'
import { Button } from "@nextui-org/react";
import { useReducer } from 'react';
import CogTypes from "./cogTypes";
import { CogTypesEnum } from "./cogTypesEnum";
import CogList from "./cogList"
import NumberOfCogs from "./numberOfCogs";
import EndPage from "./endPage";
import specifiedCogInterface from "./specifiedCogInterface";
enum ButtonPressed {
    SIMULATE_BUTTON = "simulateButtonPressed",
    NUMBER_OF_COGS_BUTTON_PRESSED = "cogButtonPressed",
    COG_TYPE_PRESSED = "cogTypesButtonPressed",
    LEVEL_BUTTON = "levelButtonPressed",
    RESET_BUTTON = "resetButtonPressed"
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
    maxDamage?: number,
    cogs?: specifiedCogInterface[]
}

type Action =
 | { type: ButtonPressed.SIMULATE_BUTTON}
 | { type: ButtonPressed.NUMBER_OF_COGS_BUTTON_PRESSED, payload: number}
 | { type: ButtonPressed.COG_TYPE_PRESSED, payload: CogTypesEnum }
 | { type: ButtonPressed.LEVEL_BUTTON, payload: specifiedCogInterface}
 | { type: ButtonPressed.RESET_BUTTON }

const handleAction = (state: State, action: Action): State => {
   switch (action.type){
        case ButtonPressed.SIMULATE_BUTTON:
            return { page: Page.NUMBER_OF_COGS}
        case ButtonPressed.NUMBER_OF_COGS_BUTTON_PRESSED:
            return { page: Page.COG_TYPES, numberOfCogs: action.payload }
        case ButtonPressed.COG_TYPE_PRESSED:
            return { page: Page.COG_LIST, numberOfCogs: state.numberOfCogs, cogType: action.payload, maxDamage: state.maxDamage, cogs: state.cogs } 
        case ButtonPressed.LEVEL_BUTTON:
            console.log("COGS" + state.cogs + [action.payload])
            return { page: state.numberOfCogs === 1 ? Page.END : Page.COG_TYPES, 
                        numberOfCogs: state.numberOfCogs !== 1 ? state.numberOfCogs ? state.numberOfCogs - 1 : 0 : 0, 
                        maxDamage: state.maxDamage ? state.maxDamage + action.payload.damage : action.payload.damage, 
                        cogs: state.cogs ? state.cogs.concat(action.payload) : [action.payload]}
        case ButtonPressed.RESET_BUTTON:
            return {page: Page.START }
   }
}

export default function Home() {
    const [{page, cogType, maxDamage, cogs}, dispatch] = useReducer(handleAction, 
        { page: Page.START, numberOfCogs: -1});
  
    console.log(cogs)

    const simulateButton = () => {
        dispatch({type: ButtonPressed.SIMULATE_BUTTON})
    }

    const handleNumberOfCogs = (i: number) => {
        dispatch({type: ButtonPressed.NUMBER_OF_COGS_BUTTON_PRESSED, payload: i})
    }

    const handleCogType = (cogType: CogTypesEnum): void => {
        dispatch({type: ButtonPressed.COG_TYPE_PRESSED, payload: cogType})
    }
    
    const handleLevelButton = (cog: specifiedCogInterface) => {
        dispatch({type: ButtonPressed.LEVEL_BUTTON, payload: cog})
    }

    const handleResetButton = () => {
        dispatch({type: ButtonPressed.RESET_BUTTON})
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
                    {cogs && maxDamage && <EndPage cogs={cogs} maxDamage={maxDamage} handleResetButton={handleResetButton}/> } 
               </div>
            }
        </>
    )
}
