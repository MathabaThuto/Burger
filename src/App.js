import './App.css';
import {useState} from 'react';

function App() {

  const [addTomato, setAddTomato] = useState(false);
  const [addMeat, setAddMeat] = useState(false);
  const [addLettuce, setAddLettuce] = useState(false);
  
  const addtomato = () => {
    setAddTomato(current => !current);
  };
  const addmeat = () => {
    setAddMeat(current => !current);
  };
  const addlettuce = () => {
    setAddLettuce(current => !current);
  };

  return (
    <div className="App">
     
      <div class="contain">
      <div class="bread" id="top_bread">
		     
         </div>
         <div class="add-on" id="tomatoe"
          style={{
            height: addTomato ? '25px' : '',
          }}
         >
           
         </div>

         <div class="add-on" id="meat"
         style={{
          height: addMeat ? '25px' : '',
        }}
        >
           
         </div>
         <div class="add-on" id="lettuse"
         style={{
          height: addLettuce ? '25px' : '',
        }}>
           
         </div>
         
         <div class="bread" id="bottom_bread">
         
         </div>
      </div>
      <button onClick={addtomato}>Add Tomato</button>
      <button onClick={addmeat}>Add Meat</button>
      <button onClick={addlettuce}>Add Lettuce</button>


    </div>
  );
}

export default App;
