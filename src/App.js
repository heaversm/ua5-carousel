import React from 'react';
import './styles/app.scss';
import { Carousel } from './components/';
import { messageData } from './data/messageData';

function App() {
  return (
    <div className="UA5">
      <main>
        <Carousel 
          messagesData={messageData[0]}
        />
        <Carousel 
          starLeft
          messagesData={messageData[1]}
          messageColor='#0E4EF3'
          buttonColor='#0E4EF3'
          doFade={true}
          doAutoplay={true}
          animSpeed={1000}
          autoplaySpeed={10000}
        />
      </main>
    </div>
  );
}

export default App;
