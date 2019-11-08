import React from "react";

const Display = ({visitorscore, ball, foul, strike, out, homeScore, inning}) => {


    return (
        <div>
            <div className="score-board">
                <div>
                    HomeScore: {homeScore}
                </div>
                <div>
                    VisitorScore: {visitorscore}
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
        </div>
        
    )
}

export default Display;