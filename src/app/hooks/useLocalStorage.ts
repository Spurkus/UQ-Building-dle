import { useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (v: T) => void] => {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)!) ?? defaultValue);

    const changeValue = (value: T) => {        
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    } 

    return [value, changeValue]
}
