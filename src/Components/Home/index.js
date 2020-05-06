import React from 'react';
import Featured from './Featured';
import Matches from './Matches';
import MeetPlayers from './meetPlayers';
import PromoAnimation from './promotions'

const Home = () => {
    return (
        <div className="bck_blue">
             <Featured/>
             <Matches/>   
             <MeetPlayers/>
             <PromoAnimation/>
        </div>
         
    );
};

export default Home;