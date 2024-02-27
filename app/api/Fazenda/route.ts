import { User, api } from "@/app/(User)/user";


export default async function UpdateFAzenda(updatedUser:User,id:number) {
   
    try {

        const response = await fetch(`${api}/fazendaUpdate/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
           /* Authorization: `Bearer ${token}`,*/
          },
          body: JSON.stringify(updatedUser),
        });
    
        
        if(!response.ok){
            const errorData=await response.text()
            console.log(errorData)
            throw new Error(`Erro no Servidor:${errorData}`)
        }
        const my=await response.json()
       
        console.log(my)
        return ( my)
  
      }catch(error){
        console.log(error)
      }
 

        
     

    
    
}
export  async function UpdateFAzendafoto(updatedUser:User,id:number) {
  const formDataToSend = new FormData();
  try {
    Object.entries(updatedUser).forEach(([key, value]) => {
      if (key === 'foto' && value) {
        formDataToSend.append(key, value as File, (value as File).name);
      } 
      else if(value) {
        formDataToSend.append(key,value.toString());
      }
    });
      const response = await fetch(`${api}/fazenda/updatephoto/${id}`, {
        method: 'PATCH',
      
        body: formDataToSend,
      });
  
      
      if(!response.ok){
          const errorData=await response.text()
          console.log(errorData)
          throw new Error(`Erro no Servidor:${errorData}`)
      }
      const my=await response.json()
     
      console.log(my)
      return ( my)

    }catch(error){
      console.log(error)
    }


      
   

  
  
}
export  async function UpdateFAzenPassword(data:{   oldpassword:string,
  newPassword:string,},id:number) {

  try {
 
      const response = await fetch(`${api}/fazenda/uppasword/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
         /* Authorization: `Bearer ${token}`,*/
        },
      
        body:JSON.stringify(data),
      });
  
      
      if(!response.ok){
          const errorData=await response.text()
          console.log(errorData)
          throw new Error(`Erro no Servidor:${errorData}`)
      }
      const my=await response.json()
     
      console.log(my)
      return ( my)

    }catch(error){
      console.log(error)
    }


      
   

  
  
}
export async function DeleteCountFAzenda(data:{
  pasword:string
},id:number) {
   
  try {

      const response = await fetch(`${api}/fazendaDelete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
      });
  
      
      if(!response.ok){
          const errorData=await response.text()
          console.log(errorData)
          throw new Error (`Erro no Servidor:${errorData}`)
      }
      const my=await response.json()
     
      console.log(my)
      return ( my)

    }catch(error){
      console.log(error)
    }


      
   

  
  
}