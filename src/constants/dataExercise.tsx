import { icons } from "."
import images from "./images"

const trendingExercise = [
    {
        id: 1,
        name: "Pular corda",
        image: images.corda,
        duration: "2 mins",
        capacity: "Resistência",
        isBookmark: false,
        category: "Exercício",
        imageCapacity: icons.resistencia,
        author: {
            profilePic: images.profissional,
            name: "Talita",
        }
    }

]

const categories = trendingExercise

export default {
    trendingExercise,
    categories
}