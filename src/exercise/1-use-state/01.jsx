// 🦁 add useState import
import { useState } from "react";

const useStateHistory = () => {
  const [history, setHistory] = useState([]);

  const addHistory = (value = '-') => {
    setHistory((prev) => [...prev, value]);
  }

  const deleteHistory = (index) => {
    if (typeof index !== 'number') return;

    setHistory((current) => {
      current.splice(index, 1);
      return [...current];
    })
  }

  return {history, addHistory, deleteHistory};
}
const App = () => {
  const [name, setName] = useState('');
  const [isNameReversed, setIsNameReversed] = useState(false);
  const {history, addHistory, deleteHistory} = useStateHistory();

  const handleChange = (event) => {
    setName(event.target.value);
    addHistory(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input type={'checkbox'}
             checked={isNameReversed}
             onChange={(event) => setIsNameReversed(event.target.checked)}/>
      <Name name={name} isNameReversed={isNameReversed} />
      <History nameHistory={history} deleteHistory={deleteHistory}/>
    </div>
  );
};

const Name = ({ name, isNameReversed }) => {
  if (!name) {
    return <p>Write your name</p>;
  }

  const computedName = isNameReversed
    ? name.split('').reverse().join('')
    : name;

  return <p>Hello {computedName}</p>;
};

const History = ({nameHistory, deleteHistory}) => {

  return (
    <ul>
      {nameHistory.map((item, index) => {
        console.log(item, 'item')
        return (
          <li
            key={index}
            onClick={() => {
              deleteHistory(index)
            }}>
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export default App;
