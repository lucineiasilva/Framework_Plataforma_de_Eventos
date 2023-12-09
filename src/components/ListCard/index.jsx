import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import styles from "./styles.module.css"

export default function ListCard(){

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3020/eventos')
            .then(resultado => setEventos(resultado.data))
    }, [])


function limparCampos() {
    setEvento({
        titulo: "",
        descricao: "",
        inicio: "",
        fim: "",
        local: "",
        imagem: ""
    })
}

    return(
        <>
            <div className={styles.listCard}>
            {eventos.map(e => (
                <Card
                id={e.id}
                titulo={e.titulo}
                inicio={e.inicio}
                fim={e.fim}
                Image={e.image}/>
            ))
            }    
            </div>
        </>
    )
}