export default async function LoginUser({email, password}:{
    email:string,
    password:string
}) {
    const apiURL='http://localhost:5000'
    try{
        const response=await fetch(`${apiURL}/users/login`, {
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({email,password}),
            
        })
        if(!response.ok){
            const errorData=await response.text()
            throw new Error(`Erro no Servidor:${errorData}`)
        }
        const {token, user}=await response.json()
       
        console.log(user)
        return ({token, user})
  
       
 

        
     

    }catch(error){
        alert(error)
        console.log(error)
        return false

    }
    
}