import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const[data,setData]=useState("");
    const[isLoading,setisLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok)
                {
                throw Error ('데이터를 불러오지 못하였습니다')
                }
                return  res.json()
            })
            .then((data)=>{
            setData(data)
            setisLoading(false);
            setError(null);
            })
            .catch((err)=>{
                if(err.name === 'AbortError' )
                {
                    console.log('fetch aborted')
                }else{
                    setisLoading(false);
                    setError(err.message)
                }
            })
        },1000)
        return ()=>abortCont.abort();
    }, [url])
     return {data,isLoading,error}
}

export default useFetch
