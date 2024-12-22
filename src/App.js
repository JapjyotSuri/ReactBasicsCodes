import logo from './logo.svg';
import './App.css';
import ButtonChange from './Components/ButtonChange';
import AudioPlayer from './Components/AudioPlayer';
import Timer from './Components/Timer';
import Form from './Components/Form';
import RefHookPrac from './Components/RefHookPrac';
import RenderTracker from './Components/RenderTracker';
import ScrollToRef from './Components/ScrollToRef';
import TimerLap from './Components/TimerLap';
import Resise from './Components/Resise';
import FormValidate from './Components/FormValidate';
import { useContext, useState } from 'react';
import PracContext from './Context/PracContext';
import PracticeCss from './Components/PracticeCss';
import ReducerPrac from './Components/ReducerPrac';
import TimerPrac from './Components/TimerPrac';
import TableRender from './Components/TableRender';
import Todo from './Components/Todo';
import HideContent from './Components/HideContent';
import Home from './Home.tsx';
import Debouncing from './Components/Debouncing.jsx';
import Throttling from './Components/Throttling.jsx';
import Grids from './Components/Grids.jsx';
import MemoHook from './Components/MemoHook.jsx';
import CallbackHook from './Components/CallbackHook.jsx';
import AllHeros from './Components/ErrorBoundariesAll/AllHeros.jsx';
import AxiosInterceptor from './Components/AxiosInterceptor.jsx';
import UnnecessaryFunctionRemove from './Components/UnnecessaryFunctionRemove.jsx';
import ProgressBar from './Components/ProgressBar.jsx';
import DragDrop from './Components/DragDropAll/DragDrop.tsx';
import CounterTimer from './Components/CounterTimer.tsx';
import ScrollToDiv from './Components/ScrollToDiv.tsx';
import TimerCountButton from './Components/TimerCountButton.tsx';
import UseTransitionHook from './Components/UseTransitionHook.tsx';
import UseLayoutEffectPrac from './Components/UseLayoutEffectPrac.tsx';
import InputPrac from './Components/InputPrac.tsx';

function App() {
  const dates=['2020-04-30','2021-04-30','2020-11-04']
  const sorted=[...dates].sort((a,b) => b.localeCompare(a))
  const {value,setValue}=useContext(PracContext)
  function handleValue(){
    setValue((prev) => prev+1)
  }
  const [obj,setObj]=useState({'id': 1,'name': 'hi'})
  const obj2={'id': 2,'name': 'hello'}
  return (
    <div className="App">
      <h1>Hello</h1>

      <ButtonChange/>
      <AudioPlayer/>
      <Timer/>
      <Form/>
      <RefHookPrac/>
      <RenderTracker/>
      <ScrollToRef/>
      <TimerLap/>
      <Resise/>
      <FormValidate/>
      <div>
        <h1> value is: {value}</h1>
        <button onClick={handleValue}>Click me to update value</button>
      </div>
      <div>
        {
           sorted.map((date) => (
            <h1>{date}</h1>
           ))
        }
      </div>
      <PracticeCss/>
      <ReducerPrac/>
      <TimerPrac/>
      <TableRender/>
      <Todo/> 
      <HideContent/>
      <Home></Home>
      <div>
        <h1>{obj.id}</h1>
        <h1>{obj.name}</h1>
      </div>
      <button onClick={() => { setObj((obj) => {return {...obj,...obj2}})}}>Click here to update</button>

      <Debouncing/>
      <Throttling></Throttling>
      <div style={{marginTop: '20px'}}>
        <Grids></Grids>
      </div>

      <div style={{marginTop: '20px'}}>
        <MemoHook/>
      </div>
      <div style={{marginTop: '20px'}}>
        <CallbackHook/>
      </div>
      <div style={{marginTop: '20px'}}>
        <AllHeros/>
      </div>
      <div style={{marginTop: '20px'}}>
        <AxiosInterceptor/>
      </div>
      <div style={{marginTop: '20px'}}>
        <UnnecessaryFunctionRemove/>
      </div>
      <div style={{marginTop: '20px'}}>
        <ProgressBar/>
      </div>
      <div style={{marginTop: '20px'}}>
        <DragDrop/>
      </div>
      <div style={{marginTop: '20px'}}>
        <CounterTimer/>
      </div>
      <div style={{marginTop: '20px'}}>
        <ScrollToDiv/>
      </div>
      <div style={{marginTop: '20px'}}>
        <TimerCountButton/>
      </div>
      <div style={{marginTop: '20px'}}>
        <UseTransitionHook/>
      </div>
      <div style={{marginTop: '20px',marginBottom: '50px'}}>
        <UseLayoutEffectPrac/>
      </div>

      <div style={{marginTop: '20px',marginBottom: '50px'}}>
        <InputPrac/>
      </div>
    </div>
  );
}

export default App;
