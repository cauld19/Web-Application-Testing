import React from "react";


const Dashboard = ({addHit, addBall, addFoul, addStrike}) => {

    


    return (
        <div>
            <button onClick={addHit}>Hit</button>
            <button onClick={addBall}>Ball</button>
            <button onClick={addFoul}>Foul</button>
            <button onClick={addStrike}>Strike</button>
        </div>
    )
}

export default Dashboard;