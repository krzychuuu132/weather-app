import Axios from 'axios'

export default function Fetcher(url,setError){
    
const loadData = async ()=>{
     
    try{
        
       
        const response = await Axios.get(url)

        return response
    }
   catch(error){
      setError(true)
       return
   }



         
         
}

const data =  loadData();
return data

   }