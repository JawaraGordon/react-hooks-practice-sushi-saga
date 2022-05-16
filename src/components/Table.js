import React from 'react';

function Table({ eatenSushi = [], wallet, value, setValue, setWallet }) {
  console.log(eatenSushi);
  const emptyPlates = eatenSushi.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  // const plateStack = emptyPlates;
  // console.log(plateStack);

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney * 0.25);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleAddMoney(value);
    setValue(0);
  }

  function handleChange(event) {
    const value = parseInt(event.target.value, 10);
    setValue(value);
  }

  return (
    <>
      <h1 className="remaining">You only brought: ${wallet}</h1>

      <div className="table">
        <div>
          <label className="remaining">Cash in your Bitcoin?</label>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={value}
              onChange={handleChange}
              placeholder="Enter Amount"
            />
            <button type="submit"> Submit </button>
          </form>
        </div>
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
