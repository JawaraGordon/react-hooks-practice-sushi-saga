import React from 'react';
// import API from './App';

function Sushi({ sushi, setSushi, handleEaten }) {
  const { name, img_url, price, eaten } = sushi;
  // function removeSushi(sushi) {
  //   const eatenSushi = sushi.filter((sushi) => sushi !== sushi);
  //   return setSushi(eatenSushi);
  // }
  console.log(sushi);

  const newPrice = price + 50;

  // useEffect(() => {
  //   fetch(`${API}/${price}`, {
  //     method: 'PATCH',

  //     body: JSON.stringify({
  //       price: newPrice,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accepts: 'application/json',
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((updatedPrice) => {
  //       setSushi(updatedPrice);
  //     });
  // }, []);

  function handleOnClick() {
    if (!eaten) {
      handleEaten(sushi);
    }
  }

  // console.log();

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        {eaten ? null : (
          <img src={img_url} alt={`${name}'Sushi'`} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${newPrice}
      </h4>
    </div>
  );
}

export default Sushi;
