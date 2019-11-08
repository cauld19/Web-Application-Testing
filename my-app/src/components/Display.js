import React from "react";

const Display = ({visitorScore, ball, foul, strike, out, homeScore, inning, newGame, homeError, visitorError}) => {


    return (
        <div>
            <div className="score-board">
                <div>
                    <h2>HomeScore: {homeScore}</h2>
                    <h5>Errors: {homeError} </h5>
                </div>
                <div>
                    <h2>VisitorScore: {visitorScore}</h2>
                    <h5>Errors: {visitorError} </h5>
                </div>
            </div>
            <div>
                Strikes: {strike ? strike : ""}
            </div>
            <div>
                Balls: {ball ? ball : ""}
            </div>
            <div>
                Fouls: {foul ? foul : ""}
            </div>
            <div>
                Outs: {out ? out : ""}
            </div>
            <div>
                Inning: {Math.floor(inning)}
            </div>
            {/* <div>
                user: {userCount}
            </div> */}
            <button onClick={newGame}>New Game</button>
        </div>
        
    )
}

export default Display;