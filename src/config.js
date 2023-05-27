export const config = {
    "ENV" :{
        "LOCAL": {
            URLS: {
                "RECIPE_DETAIL" : "http://localhost:3300/recipes",
                "ALL_RECIPES" : "http://localhost:3300/recipes",
                "RECIPE_TRIE" : "http://localhost:3300/recipes/utils/trie"
            }
        },
        "PROD": {
            URLS: {
                "RECIPE_DETAIL" : "http://localhost:3300/recipes",
                "ALL_RECIPES" : "http://localhost:3300/recipes",
                "RECIPE_TRIE" : "http://localhost:3300/recipes/utils/trie"
            }
        }
    }
    
}