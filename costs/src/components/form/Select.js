import styles from './select.module.css'

function Select ({ text, name, options, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} >
                <option>Selecione uma opção</option>
                {options.map((option) => (
                  
                    <option value={option.id} key = {option.id}>{option.name}

                    // a option de id é pra connseguir lá no backend  como vai monitorar a categoria de cada projeto

                    // a key diz que é uma option 
                    única
                    
                    //option name vai ser o nome dela para o usuário poder selecionar
               


                    </option>

                ))}

            </select>
        </div>
    )

}

export default Select