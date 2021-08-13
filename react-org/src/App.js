import ComDemo from './components/ComDemo';
import ClassCom from './components/ClassCom';

import TickingClock from './state-and-lifecycle/TickingClock';

// function App() {


//   let popSome = () => {
//     alert('Hii')
//   }
//   return ( 
//     <div>
//       <ComDemo text='Sairaj'/>
//       <ClassCom name='Sairaj' onClick={popSome} />
//       <TickingClock/>
//     </div>
//    );
// }

const App = () => {

  let popSome = () => {
    alert('Hii')
  }
  return ( 
    <div>
      <ComDemo text='Sairaj'/>
      <hr/>
      <ClassCom name='Sairaj' onClick={popSome} />
      <hr/>
      <TickingClock/>
    </div>
   );


}

export default App;
