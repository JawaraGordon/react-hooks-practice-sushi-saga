import React, { useState, useEffect } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const API = 'http://localhost:3001/sushis';

function App() {
  const [sushi, setSushi] = useState([]);
  const [wallet, setWallet] = useState(25);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // fetch(`${API}/?_limit=4`)
    fetch(API)
      .then((r) => r.json())
      .then((sushiArr) => {
        const updatedSushi = sushiArr.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        console.log(updatedSushi);
        setSushi(updatedSushi);
      });
  }, []);

  function handleEaten(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushi = sushi.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });
      setSushi(updatedSushi);

      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert('Time to wash dishes');
    }
  }

  const eatenSushi = sushi.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer
        sushi={sushi}
        setSushi={setSushi}
        handleEaten={handleEaten}
      />
      <Table
        wallet={wallet}
        setWallet={setWallet}
        value={value}
        setValue={setValue}
        eatenSushi={eatenSushi}
      />
    </div>
  );
}

export default App;
