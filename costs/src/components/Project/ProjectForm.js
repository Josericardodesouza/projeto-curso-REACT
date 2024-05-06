import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './projectForm.module.css'

function ProjectForm({btnText}) {
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
             <Select name='category_id' text = 'Selecione a categoria'/>
            </div>
            <div>
                <SubmitButton text={btnText}  />
            </div>
            
        </form>
    )
}

export default ProjectForm