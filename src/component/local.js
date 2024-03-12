
//get data in localStorage
const getInLocalStorage =()=>{
    const card =localStorage.getItem('card')
 
    if(card){
        return  JSON.parse(card)
        
    }
    return []
}
//set data in local Storage
const setDataInLocalStorage =(card)=>{
    
    const cards = JSON.stringify(card);
    localStorage.setItem('card',cards)
}
//add to localStorage
const addToLocal =(id)=>{
   const card = getInLocalStorage()
   card.push(id)
   setDataInLocalStorage(card)


   

}
const removeItem =(id)=>{
    const card = getInLocalStorage()
    const remaning = card.filter((idx)=>idx !==id)
    setDataInLocalStorage(remaning)

}

export { addToLocal, getInLocalStorage, removeItem }

