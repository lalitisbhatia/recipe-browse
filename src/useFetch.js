import { useState , useEffect } from "react"
const cache = {};
export const useFetch = (api,cacheData) => {
/********** USING STATE **********/
    /********** useState **********/
    /********** Declare some state variables here **********/
    let [data,setData] = useState(null)
    let [isPending,setIsPending] = useState(true)
    let [error,setError] = useState(null)
    const [status, setStatus] = useState('idle');
    
    /********** End State declarations **********/

    const fetchFromApi = (url) =>{
        console.log(url)
        const abortCont = new AbortController();
        fetch(url,{signal: abortCont.signal})
        .then(res => {
            // console.log(res)
            if(!res.ok){                    
                throw Error('could not fetch data')
            }
            return res.json()
        })
        .then( data => {
            // console.log(data)
            setData(data)
            cache[url] = data; // set response in cache;
            //once we get data, set is pending to false
            setIsPending(false)
            setError(null)
            setStatus('fetched');
            console.log(cache)  
        }).catch (err => {
            console.log(err)
            if(err.name === 'AbortError'){
                console.log(" fetch aborted")
            }else{
                // console.log(err)
                setError(err)
                setIsPending(false)
            }
            
        })
    }
    /********** useEffect **********/
    //  useEffect runs every time a component is re-rendered
    // useEffect DEPENDENCIES - if we dont want it to run each time, pass in teh second arg that is an arry - only if the state in the array is changed will the hook run. It'll always run on first load
    useEffect(()=>{
        //create an abort controller
        const abortCont = new AbortController();

        console.log(`use effect ran`)
        //use effects has access to the state as well
        // console.log(blogs)
        // useEffect is also used for fetching data.
        // demo with json-server running at http://localhost:8000/blogs 
        //put a delay in fetch to demo the loading state
        

        const fetchData = async () => {
            setStatus('fetching');
            console.log(status)
            console.log(cache)
            console.log(api)
            console.log(cacheData)
            if (cacheData && cache[api]) {                
                const data = cache[api];
                setData(data);
                setStatus('fetched');
            } else {
                fetchFromApi(api)
            }
        };

        setTimeout(() => {
            fetchData();
        },1)
        
        // this runs at the end of the useEffect hook
        return () => { abortCont.abort()}

    },[])  //second arg is the dependency array so only if the state 'name changes will the useEffect hook run

    return {data, isPending, error}
}

