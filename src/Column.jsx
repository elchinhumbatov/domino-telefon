import React, { useState } from 'react'

let arr = [5,10,15,20,25,30,35];
// const soundUrl =  'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_multimedia_button_click_006_53867.mp3';
const soundUrl =  'https://cdn.pixabay.com/download/audio/2021/12/03/audio_19b9dafe07.mp3?filename=switch-click-and-beep-001a-11602.mp3';

export default function Column() {
  const [total, setTotal] = useState(0);
  const [animElem, setAnimElem] = useState(null);
  const [audio] = useState(new Audio(soundUrl));

  const handleTotal = (val) => {
    audio.play();
    if (val === 35) {
      alert('GAME OVER! WE HAVE A WINNER!')
    }
    setTotal(prev => prev+=val);
    setAnimElem(val)
  }
  return (
    <div style={{padding: '7px', marginBottom: '25px', width: '50%'}}>
      <div><input type="search" /></div>
      <div>
        <h3>Total: {total}</h3>
      </div>
      <div className='points'>
        {arr.map(elem => (
          <button 
            className={`point ${animElem === elem ? "pulsate-fwd" : ""}`}
            key = {elem}
            style={{color: elem===35 && '#FF4A4A'}}
            onClick={() => handleTotal(elem)}
          >{elem}</button>
        ))}
      </div>
    </div>
  )
}
