'use client'
import { useTheme, Text } from '@nextui-org/react';
import { Button } from "@nextui-org/react";
import flunky from './Cog-bossbot-flunky.jpg'
import Image from 'next/image'
export default function Home() {

  const { theme } = useTheme();
  return (
   <div className='content-center absolute top-10 left-10'>
        <Button size="xl">Simulate Fight </Button>       
        <Image
            width={320}
            height={180}  
            src={flunky}
            alt="Default Image"
        />
   </div>
   )
}
