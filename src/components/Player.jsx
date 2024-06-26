import { useState, useRef } from 'react';

export default function Player() {
  let [playerName, changePlayerName] = useState('');
  //let [submitted, changeSubmitted] = useState(false);
  const player = useRef();

  // function handleChange(event) {
  //   changeSubmitted(false);
  //   changePlayerName(event.target.value);
  // }

  function handleClick() {
    //changeSubmitted(true);
    changePlayerName(player.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" ref={player} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
