import ProjectForm from '../Project/ProjectForm'
import styles from './newProject.module.css'

function NewProject () {

    return (

    <div className={styles.newProject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie o seu projeto para depois adcionar os serviços</p>
       <ProjectForm btnText = 'Criar projeto'/>
    </div>

    )
}

export default NewProject