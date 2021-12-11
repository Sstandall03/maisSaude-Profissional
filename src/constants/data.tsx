import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Mini bruschetta integral",
        image: images.bruschetta,
        duration: "30 mins",
        serving: 22,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.profissional,
            name: "Talita",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Pão integral",
                quantity: "4 fatias"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Azeite de oliva",
                quantity: "1 colher de sopa"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Água",
                quantity: "2 colheres de sopa"
            },
            {
                id: 4,
                icon: icons.chilli,
                description: "Tomates",
                quantity: "2"
            },
            {
                id: 5,
                icon: icons.garlic,
                description: "Manjericão",
                quantity: "Folhas"
            },
            {
                id: 6,
                icon: icons.egg,
                description: "Sal e pimenta",
                quantity: "A gosto"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    }

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}