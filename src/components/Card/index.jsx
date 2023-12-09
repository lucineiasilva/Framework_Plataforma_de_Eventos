import Link from "next/link"
import styles from "./styles.module.css"

export default function Card({id, titulo, descricao, inicio, fim, image}){
    
    return(
        <div className={styles.card}>
            
                <Link href={`/eventos/${id}`}>
                
                <h2 className={styles.cardTitulo}> {titulo}</h2>
                <div>Descrição: {descricao}</div>
                <div>Início: {inicio}</div>
                <div>Fim: {fim}</div>
                </Link>
        </div>
    )
}