export class trieNode {
    constructor (){
        this.map = {};
        this.words = []
    }
}

export const  add = (str,i,root) =>{
    // console.log(str,i);
    // console.log("root o0n entering add",root)
    let newObj= {su:str.suggestion,c:str.count}
    // console.log("newObj: ",newObj)
    if(i=== str.node.length){
        // root.isTerminal=true;
        // console.log("isTerminal: ",root.isTerminal)
        // console.log(root.words.findIndex(x => x.su === newObj.su))
        // if(root.words.findIndex(x => x.su === newObj.su)>-1){
            root.words.push(newObj);
        // }
        
        return;
    }
    // console.log("node: ",str.node[i]);
    // console.log("node: ",root.map[str.node[i]])
    // console.log(root.map[str[i]])

    if(!root.map[str.node[i]]){
        // console.log("making new node: ",str.node[i])
        root.map[str.node[i]] = new trieNode(str.node[i]);
    }
    // console.log("root.words: ",root.words)
    // console.log("newObj 2: :",newObj)
    // if(root.words.findIndex(x => x.su === newObj.su)>-1){
        root.words.push(newObj);
    // }
    // console.log("root: ",root)
    // console.log("------------------------------------")
    add(str,i+1,root.map[str.node[i]])
}

export const search = (str,i,root) => {
    console.log(str, i,root)
    if(i===str.length && i!==0){
        // console.log(str, i,root.words)
        let suggestions = root.words.map((item)=>{
            return {suggestion:item.su,count:item.c}
        })
        // console.log(str, i,suggestions)
        var result = suggestions.reduce((unique, o) => {
            if(!unique.some(obj => obj.suggestion === o.suggestion)) {
              unique.push(o);
            }
            return unique;
        },[]);

        // console.log(str, i,result)
        let sortedResult = result.sort((a,b) => b.count - a.count);
        return sortedResult
    }
        
    if(!root.map[str[i]])
        return [];

    return search(str,i+1,root.map[str[i]]);
}

export const recipeSearch = (str,i,root) =>{
    str = str.toLowerCase()
    // console.log(str, i,root)
    
    if(i===str.length && i!==0){
        // console.log(str, i,root.words)
        return root.words
        // let suggestions = root.words.map((item)=>{
        //     return item
        // })
        // console.log(str, i,suggestions)
        // var result = suggestions.reduce((unique, o) => {
        //     if(!unique.some(obj => obj.suggestion === o.suggestion)) {
        //       unique.push(o);
        //     }
        //     return unique;
        // },[]);

        // // console.log(str, i,result)
        // let sortedResult = result.sort((a,b) => b.count - a.count);
        // return result
    }
        
    if(!root.map[str[i]])
        return [];

    return recipeSearch(str,i+1,root.map[str[i]]);
}

// export default search