import React from "react";
import "./App.css";

function App() {
  function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      const phrases = ["coding", "learn new technologies", "travel"];
      const el = document.getElementById("typewriter");

      let sleepTime = 100;

      let curPhraseIndex = 0;

      const writeLoop = async () => {
        while (true) {
          let curWord = phrases[curPhraseIndex];

          for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 10);

          for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
          }

          await sleep(sleepTime * 5);

          if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
          } else {
            curPhraseIndex++;
          }
        }
      };

      writeLoop();
  return (
    <div className="App">
    <h1>Hey , I'm Techie 💕 <br />I like to <span id="typewriter"></span> <span id="cursor">I</span> </h1>
    </div>
    

    // javscript
    
    
  );
}

export default App;
