import { useState, useEffect } from 'react'

import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './projectForm.module.css'



function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([]) // seta para o array vazio esperando o que vai vir da API

   useEffect (() => { // evita que o react fique fazendo milhares de requests, agora ele espera um valor inicial
    fetch("http://localhost:5000/categories", {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json'
        } // com o fetch fez o request para a url categories

    })
    .then((resp) => resp.json()) // transforma os dados da resposta em JSON
    .then((data) => {
        setCategories(data) // pega os dados em JSON e coloca no hook de set categories
    })
    // encadeia outros processos que deve fazer com a resposta da API
    .catch((err) => console.log(err)) // imprime um erro que pode acontecer no request
   }, []) // valor inicial, as options vazias


    return (
        <form className={styles.form}>
            <Input 
             type= 'text' 
             text='Nome do Projeto'
             name = 'name'
             placeholder= 'Insira o nome do projeto'
            />
            <Input 
             type= 'number' 
             text='Orçamento do projeto'
             name = 'budget(valor total)'
             placeholder= 'Insira o orçamento total'
            />
            <div>
             <Select name='category_id' text = 'Selecione a categoria'
             options={categories}
             />
            </div>
            <div>
                <SubmitButton text={btnText}  />
            </div>
            
        </form>
    )
}

export default ProjectForm