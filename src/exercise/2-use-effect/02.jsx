import { useState, useEffect } from 'react';

const NAME_KEY = 'name';

const getInitialName = (key, defaultValue) => {
  const storageItem = localStorage.getItem(NAME_KEY);

  if (!storageItem){
    return defaultValue;
  }

  try {
    return JSON.parse(storageItem);
  }catch (e) {
    localStorage.removeItem(key);
    return defaultValue;
  }
}

const useStickyState = (key, defaultValue) => {
  const [name, setName] = useState(() => getInitialName(key, defaultValue));

  useEffect(() => {
    console.log('COUCOU')
    localStorage.setItem(key, JSON.stringify(name));
  }, [key,name])

  return [name, setName];
}

const NameInput = ({ defaultValue }) => {

  const [name, setName] = useStickyState(NAME_KEY, defaultValue);

  return (
    <label className="textfield">
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
};

const ButtonCounter = () => {
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!checked) return;

    const handleResize = () => {
      setCounter(prev => prev + 1);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[checked]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </>
  )
}

const App = () => {

  return (
    <div className="vertical-stack">
      <ButtonCounter/>
      <NameInput defaultValue="" />
    </div>
  );
};

export default App;
