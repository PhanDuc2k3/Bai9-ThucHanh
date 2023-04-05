import logo from './logo.svg';
import './App.css';
//import HelloWord from './ThucHanh1/HelloWorld.js'
// import Footer from './ThucHanh2/Header.js';
// import Header from './ThucHanh2/Footer.js';
import { useState } from 'react';
const DemoComponent = (props) => {
  return (
    <div>
      <div>Đây là tuổi: {props.age}</div>
      <div>Đây là tên: {props.displayName}</div>
    </div>
  );
};


function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Cee');

  const onIncreaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      {/* <HelloWord/> */}
      
      {/* <Header/>
      <div>Hello</div>
      <Footer/> */}

  <div className='container'>
      <div>{age}</div>
      <div onClick={onIncreaseAge}>Tăng age lên 1</div>
      <DemoComponent age={age} displayName={name} />
    </div>
    </div>
  );
}
//ThucHanh4
// export default App;


// export default function App() {
//   const [userInput, setUserInput] = useState("");
//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };
//   const handleButtonClick = (e) => {
//     alert(userInput)
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         name="user"
//         placeholder="Please type somthing"
//         onChange={handleInputChange}
//       />
//       <button
//         onClick={handleButtonClick}
//       >Print</button>
//     </div>
//   );
// }