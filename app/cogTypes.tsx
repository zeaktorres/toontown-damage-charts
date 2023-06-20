import sellbotImage from './Images/CogTypes/SellbotHD.webp'
import bossbotImage from './Images/CogTypes/BossbotHD.webp'
import { Button, Text } from "@nextui-org/react";
import Image, { StaticImageData } from 'next/image'
import { CogTypesEnum } from './cogTypesEnum';

interface CogTypesInterface {
    handleCogType:  (cogType: CogTypesEnum)=> void
}

export default function CogTypes({handleCogType}: CogTypesInterface) {
    const getCogType = (cogType: CogTypesEnum, image: StaticImageData) => {
        return (
            <div className='space-y-2'>
                <Image
                    width={180}
                    height={180}  
                    src={image}
                    alt={cogType}
                />
                <Button onClick={() => {handleCogType(cogType)}}>{cogType}</Button>
            </div>
        )
    }

    return (
        <div className='flex text-center'>
            {getCogType(CogTypesEnum.SELLBOTS, sellbotImage)} 
            {getCogType(CogTypesEnum.BOSSBOTS, bossbotImage)}
        </div> 
    );
}

