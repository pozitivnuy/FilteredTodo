import { useCallback, useMemo, useState } from "react";
import './App.css';
import Filters from "./components/filters";
import List from "./components/list";
import Form from "./components/form";
import { nanoid } from "nanoid";

const initalTasks = [
  { id: nanoid(), text: "Learn typescript", isDone: false },
  { id: nanoid(), text: "Wash a car", isDone: true },
  { id: nanoid(), text: "training", isDone: false },
  { id: nanoid(), text: "to see a movie", isDone: false }
];

function App() {
  const [tasks, setTasks] = useState(initalTasks);
  const [query, setQuery] = useState('');
  const [showOnlyDone, setShowOnlyDone] = useState(false);

  const toggleIsDone = useCallback((id) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if(task.id !== id) {
          return task
        }

        return {...task , isDone: !Boolean(task.isDone)}
      })
    })
  },[])

  const filteredTask = useMemo(() => {
    return tasks.filter((task) => {
      if(!task.isDone && showOnlyDone) {
        return false
      }

      return task.text
      .toLowerCase()
      .includes(query.toLowerCase())
    })
  },[tasks, query, showOnlyDone])

  const addTask = useCallback((text) => {
    setTasks((tasks) => [
      ...tasks,
      {id:nanoid, text , isDone: false}
    ])
  }, [])

  return (
    <div className="todo">
      <Filters
      query={query}
      onQueryChange={setQuery}
      showOnlyDone={showOnlyDone}
      onShowOnlyDone={setShowOnlyDone}

      />
      <List
      tasks={filteredTask}
      toggleIsDone={toggleIsDone}
      />
      <Form
      addTask={addTask}
      />
    </div>
  );
}

export default App;
