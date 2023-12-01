export const handleTossHelper = (e, setPlayer) => {
    let rand = Math.floor(Math.random() * 2) + 1;
    e.target.disabled = true;
    e.target.innerHTML = `Toss won by player ${rand}`;
    setPlayer(rand);
  };
