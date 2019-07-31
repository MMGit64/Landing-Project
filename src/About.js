import React from 'react';
import NavBar3 from './NavBar3';
import JigSaw from './JigSaw';
import References from './References';
import Information from './Information';

const About = () => {
    return(
        <div className="About">
            <NavBar3 image="img/gameCode.gif"/>
            <Information img="img/about.jpg"/>
            <JigSaw 
            image="img/navbar.jpg"
            order={2}
            img='img/Online-Comp.jpg' 
            caption="For any game you play, you gain points depending on your consistency, pace and in-game achievements i.e. Trophies.
            The more points you gain, the greater your reputation to all your worldwide counterparts. Be the player to beat and gain new followers!" 
            title="Top Competition"/>
            <JigSaw
            image="img/navbar.jpg"
            order={1}
            img='img/Video-Game-Genres.jpg' 
            caption="An unlimited range based on your own customised criteria will allow you to discover any kind of game you are looking for. The bigger the game you
            play, the more of the similar games to be newly released online. The profile of the game depends on the that of the players!" 
            title="Complete Variety"/> 
             <JigSaw 
            image="img/navbar.jpg"
            order={2}
            img='img/board-games.jpeg' 
            caption="Register for a profile and play right away! No gimmicks, no jokes, just play..." 
            title="Free Registration"/>
            <References image="img/References.jpg"/>    
        </div>
    )
}


export default About;