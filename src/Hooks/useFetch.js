import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const[data,setData]=useState("");
    const[isLoading,setisLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(() => {
        //AbortController은 JS에서 비동기 fetch 작업을 할때 작업을 취소할수 있도록 해주는 인터페이스(ex:fetch 요청이 길어질때 중간에 끊어야함 등등..)
        //AbortController 를 사용한 이유? 
        //보통 데이터를 가져올때는 네트워크 통신을 해야하기 때문에 어느정도 시간이 필요함.
        //Home.js에서 fetch를 사용해 데이터를 불러와서 State를 업데이트 시켜주는데 State 업데이트를 완료하기 전에 다른 컴포넌트를 렌더링 해버리니까
        //Mount 되어있지 않은 (Home.js)를 업데이트 할수 없다고 뜸
        //문제를 해결하기 위해서는 fetch를 통해서 데이터를 가져오고 있는도중에 다른 컴포넌트를 마운트 해서 렌더링 하게 되는 상황에서는 fetch를 중단해야했음
        //문제 해결을 위해 AbortController 와 useEffect의 cleanup fuction을 사용

        const abortCont = new AbortController();// 1.AbortController 인스턴스 생성
        setTimeout(()=>{
            //setTimeOut 은 Loading을 보여주기 위해서 의미 없이 1초 쉬게 만듬
            fetch(url,{signal:abortCont.signal})//2.인스턴스의 signal 프로퍼티를 fetch의 signal 옵션에 할당
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
            .catch((err)=>{//abort를 호출하게 되면 fetch의 Promise는 자동으로 reject 후 catch() 블록으로 진입 후 에러 출력
                if(err.name === 'AbortError' )
                {
                    console.log('fetch aborted')
                }else{
                    setisLoading(false);
                    setError(err.message)
                }
            })
        },1000)
        return ()=>abortCont.abort();// 3.fetching을 중단하기 위해서는 abortController.abort() 호출
    }, [url])
     return {data,isLoading,error}//다른 컴포넌트에서도 useFetch 컴포넌트 State를 사용해야 하기 때문에 State 데이터들을 반환
}

export default useFetch
