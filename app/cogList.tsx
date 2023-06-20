import Image from 'next/image'
import { Button, Text } from "@nextui-org/react";
import bossBots from './bossbots';
import { CogTypesEnum } from './cogTypesEnum';
import cogInterface from './cogsInterface';
import levelInterface from './levelInterface';

interface cogListInterface {
    cogType?: CogTypesEnum,
    handleLevelButton: (i: number) => void
}

export default function CogList({cogType, handleLevelButton}: cogListInterface) {


  const getLevelButtons = (cog: cogInterface) => { 
      return cog.levels.map((level: levelInterface) => {
            return (
                <Button key={level.level} onPress={() => {handleLevelButton(level.maxDamage)}}>{level.level}</Button> 
             )
      })
  }

  const getBossBots = () => {
      return (bossBots.map((bossBot) => {
         return (
            <div className='content-center justify-center text-center top-10 left-10 space-x-2' >
                <Text size="5x-large">{bossBot.name}</Text>      
                    <Image
                        width={180}
                        height={180}  
                        src={bossBot.image}
                        alt={bossBot.name}
                 />
                 {getLevelButtons(bossBot)}
            </div>
    
         )
      }))
  }


  return (
       <div className=''>
            {cogType === CogTypesEnum.BOSSBOTS && getBossBots()}
       </div>
   )
}        
