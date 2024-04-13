import { useState } from 'react';

const Todos = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))}
  </ul>
);

const TodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = e.target.todo.value;

    addTodo(todo);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add</button>
    </form>
  );
};

const useStateTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return {todos, addTodo};
}

const TodoList = () => {
  const {todos, addTodo} = useStateTodos();
  return (
    <>
      <Todos todos={todos} />
      <TodoForm addTodo={addTodo} />
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((p) => p + 1)}>{count}</button>;
};

const Username = ({ username, setUsername }) => {
  return (
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

const FavoriteAnimal = ({favoriteAnimal, setFavoriteAnimal}) => {

  return (
    <input
      type="text"
      value={favoriteAnimal}
      onChange={(e) => setFavoriteAnimal(e.target.value)}
    />
  );
};

const Greeting = ({ favoriteAnimal, username }) => {
  return (
    <p>
      <b>{username}</b>'s favorite animal is <b>{favoriteAnimal}</b>
    </p>
  );
};

const UserAnimalForm = () => {
  const [username, setUsername] = useState('');
  const [favoriteAnimal, setFavoriteAnimal] = useState('Dog');

  return (
    <div className="vertical-stack">
      <h2>Animal !</h2>
      <div>
        <span>Favorite Animal</span>
        <FavoriteAnimal
          favoriteAnimal={favoriteAnimal}
          setFavoriteAnimal={setFavoriteAnimal} />
      </div>
      <div>
        <span>Username</span>
        <Username username={username} setUsername={setUsername} />
      </div>
      <Greeting favoriteAnimal={favoriteAnimal} username={username} />
    </div>
  )
}

const App = () => {

  return (
    <div>
      <h2>TodoApp</h2>
      <TodoList/>
      <h2>Counter</h2>
      <Counter/>
      <UserAnimalForm/>
    </div>
  );
};

export default App;
