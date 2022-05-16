import React, { useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ sushi, setSushi, handleEaten }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const displayedSushi = sushi
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        setSushi={setSushi}
        handleEaten={handleEaten}
      />
    ));

  function handleClickMore() {
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushi.length);
  }

  return (
    <div className="belt">
      {displayedSushi}
      <MoreButton handleClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
