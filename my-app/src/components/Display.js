import React from "react";

const Display = ({visitorTeamScore, ball, foul, strike, out, homeTeamScore, inning, newGame, homeTeamError, visitorTeamError}) => {


    return (
        <div>
            <div className="score-board">
                <div>
                    <h2>HomeScore: {homeTeamScore}</h2>
                    <h5>Errors: {homeTeamError} </h5>
                </div>
                <div>
                    <h2>VisitorScore: {visitorTeamScore}</h2>
                    <h5>Errors: {visitorTeamError} </h5>
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