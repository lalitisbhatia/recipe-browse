
import {trieNode,add,search} from "./trieHelper";


const expandDataNodes = (food) => {
    // console.log(food)
    // data.forEach(food => {
        /*
            example: food = {suggestion:"Plain fat free yogurt",count:112} 
            expand this so that even when a user types fat or free or yogurt, they can get a suggestion for "Plain fat free yogurt" 
            generate a new node for each word in the trie object - so the the expanded set will be 
            {suggestion:"Plain fat free yogurt","count":101,node:"Plain fat free yogurt"}, 
            {suggestion:"Plain fat free yogurt","count":101,node:"fat free yogurt"},
            {suggestion:"Plain fat free yogurt","count":101,node:"free yogurt"},
            {suggestion:"Plain fat free yogurt","count":101,node:"yogurt"},
        */

        // **** Do some cleanup of data ****
        let originalFoodName = food.suggestion
        // remove "(" and ")"
        originalFoodName.replace(/[\(\)]/g, " ");

        //replace multiple spaces with a single space
        originalFoodName.replace(/\s\s+/g, ' ');

        //check if the node has a "-" in it. if so, create an additional node with the "-" replaced by " ". 
        //This way typing "fat free" will also return results for "fat-free" etc
        let newFoodNames = replceCharacterAndDuplicate(originalFoodName, "-", " ")

        let allNodes = []
        // generate nodes for each name in the newFoodNames array as in the example above:
        newFoodNames.forEach(name => {
            // traverse the  name word by word and generate an array of multiple nodes with the same suggestion

            let nameArray = name.split(" ")
            for (let i = 0; i < nameArray.length; i++) {
                let newObj = { node: nameArray.slice(i).join(" ").toLowerCase(), suggestion: food.suggestion, count: food.count } //takes the rest of the name string past the ith word (SLICE) and  creates a node (JOIN)
                allNodes.push(newObj)
                // console.log(newObj)
            }
        })

        return allNodes

        // console.log(`All nodes using new function ${allNodes}`)
    // })

    
}

const replceCharacterAndDuplicate = (str, replce, replacement) => {
    let newStrings = [str]
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            let newString = str.substring(0, i) + ' ' + str.substring(i + 1);
            newStrings.push(newString)
        }
    }
    return newStrings;
}
// expandDataNodes(items)

export const generateTrie = (data) =>{
    const root = new trieNode("");
    for (let i=0;i<data.length;i++){
       
        let allItems =  expandDataNodes(data[i]);
        // console.log(allItems)
        allItems.forEach(item => {
            add(item,0,root);    
        })
        
    }
    // console.log(root)
    
    return root
}