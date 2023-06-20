import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

interface NumberOfCogsInterface {
    handleNumberOfCogs: (i: number) => void;
}

export default function NumberOfCogs({handleNumberOfCogs}: NumberOfCogsInterface) {
     const getButtons = () => {
        let buttonsList = []
        for (let i = 1; i <= 4; i++){
            buttonsList.push(<Button key={i} onPress={() => {handleNumberOfCogs(i)}}>{i}</Button>)
        }
        return buttonsList
    }

    return (
        <div className="absolute top-10 left-10 space-y-2">
            <Text color="secondary" className="">
                Number of Cogs?
            </Text>
            <div className="space-x-2 flex">
                {getButtons()}
            </div>
        </div>    
    )
}
