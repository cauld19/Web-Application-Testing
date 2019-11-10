import React from "react";


const Dashboard = ({addHit, addBall, addFoul, addStrike, addError}) => {

    


    return (
        <div>
            <button onClick={addHit}>Hit</button>
            <button onClick={addBall}>Ball</button>
            <button onClick={addFoul}>Foul</button>
            <button onClick={addStrike}>Strike</button>
            <button onClick={addError}>Error</button>
        </div>
    )
}

export default Dashboard;