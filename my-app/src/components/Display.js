import React from "react";

const Display = ({score, ball, foul, strike, out, user, homeScore, inning, userCount}) => {


    return (
        <div>
            <div>
                Score: {score}
                <br />
                HomeScore: {homeScore}
            </div>
            <div>
                Strikes: {strike}
            </div>
            <div>
                Balls: {ball}
            </div>
            <div>
                Fouls: {foul}
            </div>
            <div>
                Outs: {out}
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