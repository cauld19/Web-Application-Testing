import React, {useState} from 'react';

import './App.css';

import Dashboard from "./components/Dashboard";
import Display from "./components/Display"

function App() {

  const [user, setUser] = useState(false);
  const [userCount, setUserCount] = useState(0)
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [strike, setStrike] = useState(0);
  const [homeError, setHomeError] = useState(0)
  const [visitorError, setVisitorError] = useState(0)
  const [visitorScore, setVisitorScore] = useState(0);

  const [homeScore, setHomeScore] = useState(0);

  const [inning, setInnning] = useState(1);

  const [out, setOuts] = useState(0);

  const addHit = () => {
    if (user) {
      setVisitorScore(visitorScore + 1)
      setBall(0)
      setStrike(0)
      setFoul(0)
    } else {
      setHomeScore(homeScore + 1)
      setBall(0)
      setStrike(0)
      setFoul(0)
    }
  }
  const addFoul = () => {
    if (strike === 2) {
      setFoul(foul)
    } else {
      setStrike(strike + 1)
      setFoul(foul + 1)
    }
  }
  const addBall = () => {
    if (ball >= 3) {
      setBall(0)
      setStrike(0)
      setFoul(0)
    } else {
      setBall(ball + 1)
    }
    console.log(foul)
  }


  const addStrike = () => {
    if (userCount >= 17) {
      alert(`Game over! final score is Home:${homeScore} Visitor:${visitorScore}`)
      newGame();
    } else if (out >= 2 && strike >= 2 ) {
      setUser(!user)
      setOuts(0)
      setStrike(0)
      setBall(0)
      setFoul(0)
      setUserCount(userCount + 1)
      setInnning(inning + 0.5)
    } else if (strike >= 2) {
      setStrike(0)
      setFoul(0)
      setBall(0)
      setOuts(out + 1)
    } else {
      setStrike(strike + 1)
    }
    console.log(strike)
  }

  const addError = () => {
    if(!user) {
      setHomeError(homeError + 1)
    } else {
      setVisitorError(visitorError + 1)
    }
  }

  const newGame = () => {
    setHomeScore(0)
    setVisitorScore(0)
    setStrike(0)
    setBall(0)
    setFoul(0)
    setOuts(0)
    setVisitorError(0)
    setHomeError(0)
    setInnning(1)
    setUserCount(0)
    setUser(false)
  }




  return (
    <div className="App">
      <Dashboard
        addHit={addHit}
        addBall={addBall}
        addFoul={addFoul}
        addStrike={addStrike}
        addError={addError}
      />
      <Display 
        ball={ball}
        foul={foul}
        strike={strike}
        visitorScore={visitorScore}
        out={out}
        homeScore={homeScore}
        inning={inning}
        homeError={homeError}
        visitorError={visitorError}
        userCount={userCount}
        newGame={newGame}
      />
    </div>
  );
}

export default App;
