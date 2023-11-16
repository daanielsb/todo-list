import todoLogo from '../../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './header.module.css';
import { useState, FormEvent, ChangeEvent  } from "react";

interface Props {
    onAddTask: (taskTitle: string) => void;
}


export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function OnChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }



    return(
        <header className={styles.header}>
            <img src={todoLogo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    onChange={OnChangeTitle}
                    value={title}
                />
                <button> 
                    Criar 
                    < AiOutlinePlusCircle size={20}/>
                </button>


            </form>


        </header>
    );
}