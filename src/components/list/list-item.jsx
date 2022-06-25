import './index.css'
import { memo } from "react";
import cn from "classnames";

export const ListItem = memo(({task , toggleIsDone}) => {

    const {id, isDone, text} = task;
    return (
        <div 
        className={cn('list-item', {'list-item-done' : isDone})}
        onClick={() => toggleIsDone(id)}
        >
            {text}
        </div>
    )
});

