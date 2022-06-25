
import './index.css';
import { ListItem } from "./list-item";


const List = ({tasks, toggleIsDone}) => {

    return (
        <div className='list'>
            {tasks.map((task) => (
                <ListItem task={task} key={task.id} toggleIsDone={toggleIsDone}/>
            ))}
        </div>
    )
}

export default List