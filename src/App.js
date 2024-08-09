import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SscStudent from './classes/SscStudent';

function App() {
  let Raju = new SscStudent("Rajaaa,","Male");
  let Prasad = new SscStudent("Prasaad,","Male");
  let Teja = new SscStudent("Tejaaa,","Male");
  let Mahesh = new SscStudent("Maheesh,","Male");
  let Ravi = new SscStudent("RaviTeja,","Male");

  Raju.age = 26 ;
   Raju.calculateResult();
   console.log(Raju.age);

   Prasad.age = 22;
   Prasad.calculateResult();
   console.log(Prasad.age);

   

   Teja.age = 23;
   Teja.calculateResult();
   console.log(Teja.age);

   Mahesh.age = 20;
   Mahesh.calculateResult();
   console.log(Mahesh.age);

   Ravi.age = 23;
   Ravi.calculateResult();
   console.log(Ravi.age);

  return (
    <div className="App">
     <TenthStudent name="Raju"></TenthStudent >
     <TenthStudent name="Prasad"></TenthStudent>
     <TenthStudent name="Teja"></TenthStudent>
     <TenthStudent name="Mahesh"></TenthStudent>
     <TenthStudent name="Ravi"></TenthStudent>
    </div>
  );
}

export default App;
