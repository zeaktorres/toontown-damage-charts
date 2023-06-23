import { StaticImageData } from "next/image"

export default interface specifiedCogInterface {
    name: string,
    image: StaticImageData,
    level: number, 
    damage: number
}
