import {useState, useEffect} from 'react';

const useRequests= url =>{
    const [requests, setRequest] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setRequest(data))
    }, [url])
    return requests;

}
export default useRequests;