import Image from 'next/image'
import { Button, Text } from "@nextui-org/react";
import { CogTypesEnum } from './cogTypesEnum';
import bossBots from './bossbots';
import cogInterface from './cogsInterface';
import levelInterface from './levelInterface';
import specifiedCogInterface from './specifiedCogInterface';

interface cogListInterface {
    cogType?: CogTypesEnum,
    handleLevelButton: (cog: specifiedCogInterface) => void
}

export default function CogList({cogType, handleLevelButton}: cogListInterface) {


  const getLevelButtons = (cog: cogInterface) => { 
      return cog.levels.map((level: levelInterface) => {
            return (
                <Button size="sm" key={level.level} onPress={() => {handleLevelButton({name: cog.name, image: cog.image, level: level.level, damage: level.maxDamage})}}>{level.level}</Button> 
             )
      })
  }

  const getBossBots = () => {
      return (bossBots.map((bossBot) => {
         return (
            <div key={bossBot.name} className='space-y-1 space-x-3 text-center top-10 left-10' >
                <Text color="secondary" size="5x-large">{bossBot.name}</Text>  
                    <Image
                        width={140}
                        height={140}  
                        src={bossBot.image}
                        alt={bossBot.name}
                    />
                 {getLevelButtons(bossBot)}
            </div>
    
         )
      }))
  }


  return (
       <div className='flex-wrap flex w-screen h-screen'>
            {cogType === CogTypesEnum.BOSSBOTS && getBossBots()}
       </div>
   )
}        
