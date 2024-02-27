import React,{useState,useEffect} from 'react'

function useCustomHook(initialValue,customButtonName) {
    const [count,setCount] = useState(initialValue)

    function updateCount(){
        setCount(count+1)
    }

    useEffect(()=>{
        console.log(`
        ${customButtonName} has changed the count value to ${count} `)
    },[count])

    return updateCount

}

export default useCustomHook