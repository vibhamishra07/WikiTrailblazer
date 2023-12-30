import SearchPage from './Pages/SearchPage';
import bgVideo from './assets/background.mp4'
import Header from "./components/common/Header";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className=" App h-screen flex justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<SearchPage/>}/>
        </Route>
      </Routes>
    </div>
   

  );
}

export default App;
