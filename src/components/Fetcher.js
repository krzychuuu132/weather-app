import Axios from 'axios'

export default function Fetcher(url){
    

    
const loadData = async ()=>{
        const response = await Axios.get(url)
               
       
           return response
        
    }

   const data =  loadData();

   
  
    return data

    
}