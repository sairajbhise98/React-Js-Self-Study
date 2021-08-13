
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

import { useState } from 'react';

function App() {

  const [text1, setText] = useState('');
  const [text2, setText2] = useState('');

  let showText = (v) => {
    setText(v);
  }

  let showText2 = (v) => {
    setText2(v)
  }

  return (
    <div>
      <ClassComponent show={(v)=>{showText(v)}} />
      <p>Name: {text1}</p>
      <FunctionComponent show={(v)=>{showText2(v)}} />
      <p>Name: {text2}</p>
    </div>
  );
}

export default App;
