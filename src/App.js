import './App.css';
import bankGif from './images/bank-animation.gif'
import Form from './components/Form';

function App() {
  return (
    <div className="App w-screen h-screen flex flex-wrap p-5 font-[montserrat]">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-[#458ECA] mb-2">PRO Bank</h1>
      </div>

      <div className="w-5/12 grow p-2 flex items-center">
        <img src={bankGif} alt="Bank Gif" className="w-full" />
      </div>
      <div className="formContainer min-w-[300px] grow w-7/12 border border-[#458ECA] rounded-lg shadow-lg shadow-[#458ECA] p-2 flex flex-col mb-2"> 
        <Form className="grow" />
      </div>
    </div>
  );
}

export default App;
