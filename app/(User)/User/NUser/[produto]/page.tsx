"use client"

import { useAuth } from "@/app/(User)/user"
import { NavAlternative } from "@/app/Components/Header/User/navbar2/Alternative"


export default function PageProducts({params}:{params:{produto:string}})
        { 
            const {user}=useAuth()
            return(

                <>
                    <NavAlternative hrf={`/User/NUser`}/>
                    <section className="grid md:grid-cols-12 items-center justify-center">
                        <div className="md:col-span-4">
                            <h1>Transportadoras</h1>
                        </div>
                        <div className="md:col-span-8 bg-red-500">
                            pppp
                        </div>

                    </section>

                </>

            )




        }