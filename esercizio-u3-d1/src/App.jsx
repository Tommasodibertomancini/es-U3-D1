import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import ButtonComponent from './components/ButtonComponent';
import ButtonComponentClass from './components/ButtonComponentClass';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div id='buttonContainer'>
          <ButtonComponent title='Invia' css='button green' />
          <ButtonComponentClass title='Back' css='button gray' />
        </div>
        <div>
          <ImageComponent
            src='https://pixabay.com/get/g9a4d6803f8857564f736f8b99f419f1426a130190564d4182a976e33a99b174b8cabe3c1fc0aa29b82410c2a476d443ee41c4797123fb6849af296342a9600fb_1280.jpg'
            css='imgSize'
            alt='Roma'
          />
        </div>
      </header>
    </div>
  );
}

export default App;
