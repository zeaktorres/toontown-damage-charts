import sellbotImage from './Images/CogTypes/SellbotHD.webp'
import bossbotImage from './Images/CogTypes/BossbotHD.webp'
import cashbotImage from './Images/CogTypes/CashbotHD.webp'
import lawbotImage from './Images/CogTypes/LawbotHD.webp'
import { Button, Text } from "@nextui-org/react";
import Image, { StaticImageData } from 'next/image'
import { CogTypesEnum } from './cogTypesEnum';

interface CogTypesInterface {
    handleCogType:  (cogType: CogTypesEnum)=> void
}

interface Cog {
    cogType: CogTypesEnum,
    image: StaticImageData
}
export default function CogTypes({handleCogType}: CogTypesInterface) {

    const cogs: Cog[] = [
            {cogType: CogTypesEnum.SELLBOTS, image: sellbotImage},
            {cogType: CogTypesEnum.BOSSBOTS, image: bossbotImage},
            {cogType: CogTypesEnum.CASHBOTS, image: cashbotImage},
            {cogType: CogTypesEnum.LAWBOTS, image: lawbotImage}
    ]

    const getCogs = () => { 
        return (
            cogs.map((cog: Cog) => {
                return (
                    getCogType(cog)
                )
            })
        )
    }

    const getCogType = (cog: Cog) => {
        return (
            <div className='space-y-2'>
                <Image
                    width={140}
                    height={140}  
                    src={cog.image}
                    alt={cog.cogType}
                />
                <Button size="sm" onClick={() => {handleCogType(cog.cogType)}}>{cog.cogType}</Button>
            </div>
        )
    }

    return (
        <div className='flex flex-wrap text-center'>
            {getCogs()}
        </div> 
    );
}

