import cogsInterface from "./cogsInterface"
import flunky from './Images/Cogs/Cog-bossbot-flunky.webp'

const bossBots: cogsInterface[]  = [ 
    {
       name: "Flunky",
       image: flunky,
       levels: [
            {
                level: 1,
                maxDamage: 3
            },
            {
                level: 2,
                maxDamage: 4
            },
            {
                level: 3,
                maxDamage: 5
            },
            {
                level: 4,
                maxDamage: 6
            },
            {
                level: 5,
                maxDamage: 7
            }
       ]
    }
]
export default bossBots;
