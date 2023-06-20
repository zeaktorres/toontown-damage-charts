import { StaticImageData } from "next/image"
import levelInterface from "./levelInterface" 


export default interface cogInterface {
    name: string,
    image: StaticImageData,
    levels: levelInterface[]
}
