import { ReactNode } from "react";

import { Container } from "../../../Components/SignUp/AcessRouter/Container";
import styles from './Transportadora.module.css'

export function Background({children}:{children:ReactNode}){
    return(
        <Container className={styles.bunner}>
           
        {children}

        </Container>
    )
}