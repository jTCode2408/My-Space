import {useState} from 'react';

export const useLocalStorage=(key, initialVal)=>{
    const [storedValue, setStoredValue]=useState(()=>{
        //usestate holding a fn
        const auth = window.localStorage.getItem(key);
        return auth ? JSON.parse(auth) : initialVal;

    })


const setValue= val=>{
    setStoredValue(val)
    window.localStorage.setItem(key, JSON.stringify(val))
}

return [storedValue, setValue];

}