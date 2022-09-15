import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { ThemeContext } from "../contexts/ThemeContext";
import MainLayout from "../layouts/MainLayout";

export default function lab07() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onEnter = () => {
    if (todoInput.trim() === "") {
      alert("Todo cannot be empty");
      setTodoInput("");
      return;
    }
    const newTodos = [{ title: todoInput, completed: false }, ...todos];
    setTodos(newTodos);
    setTodoInput("");
  };
  const saveTodo = () => {
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todoStr);
  };
  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");

    if (todoStr === null) setTodos([]);
    else setTodos(JSON.parse(todoStr));
  }, []);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodo();
  }, [todos]);
  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };
  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };
  const themes = {
    light: {
      name: "Light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "Dark",
      background: "black",
      foreground: "white",
    },
  };

  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (selTheme.name === "Dark") setSelTheme(themes.light);
    else setSelTheme(themes.dark);
  };
  return (
    <div className="bg-dark bg-opacity-75 " style={{ color: "#AF7AC5" }}>
      <MainLayout>
        <div style={{ backgroundColor: selTheme.background }}>
          {/* Entire App container (required for centering) */}

          <div style={{ maxWidth: "700px" }} className="mx-auto">
            {/* App header */}
            <p
              className="display-4 text-center fst-italic m-4"
              style={{ color: selTheme.foreground }}
            >
              Minimal Todo List <span className="fst-normal">☑️</span>
            </p>
            {/* Input */}
            <div>
              <input
                className="form-control mb-1 fs-5"
                placeholder="insert todo here..."
                onChange={(event) => {
                  setTodoInput(event.target.value);
                }}
                value={todoInput}
                onKeyUp={(event) => {
                  if (event.key !== "Enter") return;
                  onEnter();
                }}
              />
              <button className="btb btn-primary" onClick={toggleTheme}>
                {selTheme.name === "Light" && <IconSunHigh />}
                {selTheme.name === "Dark" && <IconMoon />}
              </button>
            </div>

            {/* Todos */}
            <ul>
              {todos.map((todo, i) => (
                <ThemeContext.Provider value={{ selTheme }}>
                  <Todo
                    title={todo.title}
                    completed={todo.completed}
                    onDelete={() => deleteTodo(i)}
                    onMark={() => markTodo(i)}
                    onUp={() => moveUp(i)}
                    onDown={() => moveDown(i)}
                  />
                </ThemeContext.Provider>
              ))}
            </ul>
            {/* summary section */}
            <p className="text-center fs-4">
              <span className="text-primary">All ({todos.length}) </span>
              <span className="text-warning">
                Pending ({todos.filter((x) => x.completed === false).length}){" "}
              </span>
              <span className="text-success">
                Completed ({todos.filter((x) => x.completed === true).length})
              </span>
            </p>
            {/* Made by section */}
            <p className="text-center mt-3 text-muted fst-italic">
              made by Nuttadon Punyapan 640610647
            </p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
