import { useEffect,useState } from "react";

export function searchHook<T>(
    fixedData: T[],
    searchValue:string,
    key: keyof T,
): T[] {
    const [filterData,setFilterData] = useState<T[]>(fixedData);
    
    useEffect(()=>{
        const id = setTimeout(() => {
            if(searchValue){
                const itemData: T[] = [];
                fixedData.filter(item => {
                    if((item[key] as string).toLowerCase().startsWith(searchValue.toLowerCase())){
                        itemData.push(item);
                    }
                    return itemData;
                })
                setFilterData(itemData);
            }else{
                setFilterData(fixedData);
            }
        },100);
        return () => {
            clearTimeout(id);
        }
    },[fixedData,searchValue,key])
    
    return filterData;
}