import { useState } from "react";
import axios from "axios";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Input from "@/components/Input";
import Menu from "@/components/Menu/Menu";
import styles from "../styles/Eventos.module.css"

export default function InserirEvento() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: "",
        Image: "",
    })

    function InserirEvento(e){
        e.preventDefault()
        console.log(evento)

    axios.post('http://localhost:3020/eventos', evento)
        .then(resultado => console)
        .catch(erro => console.log(erro))
    }

return(
    <>
    <Cabecalho />
    <Menu />
    <div className={styles.container}>
        <h1>Cadastrar Evento</h1>
            <form onSubmit={e => InserirEvento(e)}>
                <div>
                <label htmlFor="titulo">Título</label>
                <Input
                    type="text"
                    id="titulo"
                    value={evento.titulo}
                    onChange={e => setEvento({...evento, titulo: e.target.value})} />
                </div>

                <div>
                <label htmlFor="descricao">Descrição</label>
                <textarea
                    id="descricao"
                    value={evento.descricao}
                    onChange={e => setEvento({...evento, descricao: e.target.value})} />
                </div>

                <div>
                <label htmlFor="dataInicio">início</label>
                <input
                    type="datetime"
                    id="inicio"
                    value={evento.dataInicio}
                    onChange={e => setEvento({...evento, inicio: e.target.value})}/>
                </div>

                <div>
                <label htmlFor="dataFim">Fim</label>
                <input
                    type="datetime"
                    id="fim"
                    value={evento.dataFim}
                    onChange={e => setEvento({...evento, fim: e.target.value})} />
                </div>

                <div>
                <label htmlFor="local">Local</label>
                <Input 
                  type="text" 
                  id="local" 
                  value={evento.local}
                  onChange={e => setEvento({...evento, local: e.target.value})} />
                </div>
                
                

                <button type="submit">Cadastrar</button>
            </form>
            </div>
        <Rodape />
        </>
    );
}