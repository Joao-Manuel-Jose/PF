import { api } from "@/app/(User)/user";

export async function RecenteProduct() {
    try{ 
        const endpoint =await fetch(`${api}/client/recentProduct`,
        {
            method:'GET'
        }
        
        )
        
        if(endpoint.ok){
         const response =await endpoint.json()
         const responseBodyArray = JSON.parse(response);
        return {responseBodyArray}
        }
        else{
            return null
        }

    
  
    }
    catch(error){
        console.error(error)
        return null

    }
}