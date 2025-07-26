import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import { useNavigation } from "react-router";
function App() {

  let navigation = useNavigation();
  return (
    <>
      <Header></Header>
      {
        navigation.state==="loading"?<div className='text-center'>
          <span className="loading loading-ring loading-xl"></span>
        </div>:<Outlet></Outlet>
      }
      
    </>
  )
}

export default App
