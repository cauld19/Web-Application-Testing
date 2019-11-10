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
  const [inning, setInnning] = useState(1);
  const [out, setOuts] = useState(0);

  const [homeTeam, setHomeTeam] = useState({
    score: 0,
    error: 0
  })

  const [visitorTeam, setVisitorTeam] = useState({
    score: 0,
    error: 0
  })

  // const [homeError, setHomeError] = useState(0)
  // const [visitorError, setVisitorError] = useState(0)
  // const [visitorScore, setVisitorScore] = useState(0);
  // const [homeScore, setHomeScore] = useState(0);

  const addHit = () => {
    if (user) {
      // setVisitorScore(visitorScore + 1)
      setVisitorTeam({...visitorTeam, score: visitorTeam.score + 1})
      setBall(0)
      setStrike(0)
      setFoul(0)
    } else {
      // setHomeScore(homeScore + 1)
      setHomeTeam({...homeTeam, score: homeTeam.score + 1})
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
      alert(`Game over! final score is Home:${homeTeam.score} Visitor:${visitorTeam.score}`)
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
      // setHomeError(homeError + 1)
      setHomeTeam({...homeTeam, error: homeTeam.error + 1})
    } else {
      setVisitorTeam({...visitorTeam, error: visitorTeam.error + 1})
      // setVisitorError(visitorError + 1)
    }
  }

  const newGame = () => {
    setStrike(0)
    setBall(0)
    setFoul(0)
    setOuts(0)
    setInnning(1)
    setUserCount(0)
    setUser(false)
    setHomeTeam({...homeTeam, error: 0, score: 0})
    setVisitorTeam({...visitorTeam, error: 0, score: 0})
    // setHomeScore(0)
    // setVisitorScore(0)
    // setVisitorError(0)
    // setHomeError(0)
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
        out={out}
        inning={inning} 
        userCount={userCount}
        newGame={newGame}
        homeTeamScore={homeTeam.score}
        homeTeamError={homeTeam.error}
        visitorTeamScore={visitorTeam.score}
        visitorTeamError={visitorTeam.error}
        // homeScore={homeScore}
        // homeError={homeError}
        // visitorError={visitorError}
        // visitorScore={visitorScore}
      />
    </div>
  );
}

export default App;
