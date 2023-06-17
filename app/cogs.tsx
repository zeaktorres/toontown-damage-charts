import flunky from './Cog-bossbot-flunky.jpg'
import Image from 'next/image'
import { Text } from "@nextui-org/react";

export default function Cogs() {

  return (
       <div className=''>
        <Text h1>Flunky</Text>      
            <Image
                width={320}
                height={180}  
                src={flunky}
                alt="Default Image"
            />
       </div>
   )
}        
