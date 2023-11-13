import './App.css';
import Dashboard from './views/Dashboard';
import List from './views/List';
import Customs from './views/Customs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PageActiveProvider } from './context/PageActiveContext';


function App() {
  return (
    <PageActiveProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/app' element={ <Dashboard component={<List/>} activeSideBarText={true}/> } />
                <Route path='/app/customs/:id' element={ <Dashboard component={<Customs/>} activeSideBarText={false}/> } />
            </Routes>
        </BrowserRouter>
    </PageActiveProvider>
  );
}

export default App;
