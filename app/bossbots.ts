import cogsInterface from "./cogsInterface"
import flunky from './Images/Cogs/Cog-bossbot-flunky.webp'
import micromanager from './Images/Cogs/Micromanager.webp'
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
    },
    {
        name: "Micromanager",
        image: micromanager,
        levels: [
            {
                level: 4,
                maxDamage: 6
            },
            {
                level: 5,
                maxDamage: 8
            },
            {
                level: 6,
                maxDamage: 12
            },
            {
                level: 7,
                maxDamage: 15
            },
            {
                level: 8,
                maxDamage: 18
            }
        ]
    }
]
export default bossBots;
