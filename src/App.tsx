import './App.css';
import Dashboard from './views/Dashboard';
import List from './views/List';
import Customs from './views/Customs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PageActiveProvider } from './context/PageActiveContext';
import { Views } from './views';


function App() {
  return (
    <PageActiveProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/inscription' element={<Views.RegisterView />} />
                <Route path='/connexion' element={<Views.LoginView />} />
                <Route path='/app' element={ <Dashboard component={<List/>} activeSideBarText={true}/> } />
                <Route path='/app/customs/:id' element={ <Dashboard component={<Customs/>} activeSideBarText={false}/> } />
            </Routes>
        </BrowserRouter>
    </PageActiveProvider>
  );
}

export default App;
