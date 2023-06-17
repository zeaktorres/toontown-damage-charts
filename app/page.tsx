'use client'
import { useTheme, Text } from '@nextui-org/react';
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Home() {

  const { theme } = useTheme();
  return (
   <div className='content-center absolute top-10 left-10'>
        <Button size="xl">Simulate Fight </Button>       
        <Image
            width={320}
            height={180}  
            src="../docs/assets/images/Cog-bossbot-flunky.webp"
            alt="Default Image"
            objectFit="cover"
        />
   </div>
   )
}
