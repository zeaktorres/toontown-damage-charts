import { CogTypesEnum } from "./cogTypesEnum";
import { StaticImageData } from "next/image";

export default interface Cog {
    cogType: CogTypesEnum,
    image: StaticImageData
}
