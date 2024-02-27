import { LucideArrowBigLeft } from "lucide-react"
import { Container } from "../../container"
import { ContainerLink } from "../../containerLink"
import { ButtonLink } from "../../link"
import { MainLink } from "../../mainLink"
import { MenuLinksSecondary } from "../../secondaryLink"

export function NavAlternative({hrf}:{
 hrf:string
}, ){

    return(
      
        <Container>
        <MenuLinksSecondary>
              <MainLink/>
                <div className="ms-auto">
                <ButtonLink href={hrf}title="Voltar">
                               
                               <LucideArrowBigLeft className="text-sky-300 "  />          
                                </ButtonLink>
                </div>

                


         </MenuLinksSecondary>
    


        

</Container>
        
    )
}