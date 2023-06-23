import Image from 'next/image'
import { Button, Text } from "@nextui-org/react";
import specifiedCogInterface from './specifiedCogInterface';

interface EndPageInterface {
    maxDamage: number
    cogs: specifiedCogInterface[]
    handleResetButton: () => void
}

export default function EndPage({cogs, handleResetButton, maxDamage}: EndPageInterface) {
    const getCogList = () => {
        return (
               cogs.map((cog: specifiedCogInterface) => {
                  return (
                      <div key={`${cog.name} ${cog.level}`} className='flex space-x-2 space-y-2'>
                            <Image
                                        width={40}
                                        height={40}  
                                        src={cog.image}
                                        alt={cog.name}
                            />
                            <Text color="primary">{` Level ${cog.level}, Damage ${cog.damage} `}</Text> 
                        </div>
                    )
                })
       )
    }
    return (
        <div className='space-y-2'>
            {getCogList()}
            <Text color="secondary">{"Max Damage: " + maxDamage }</Text>
            <Button onPress={handleResetButton}>Reset</Button>
        </div> 
    )
}
