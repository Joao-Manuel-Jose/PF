export default async function LoginUser({email, pasword}:{
    email:string,
    pasword:string
}) {
    const apiURL='http://localhost:4000'
    
        const response=await fetch(`${apiURL}/login`, {
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({email,pasword}),
            
        })
        if(!response.ok){
            const errorData=await response.text()
            throw new Error(`Erro no Servidor:${errorData}`)
        }
        const {token,my }=await response.json()
       
        console.log(my)
        return ({token, my})
  
       
 

        
     

    
    
}