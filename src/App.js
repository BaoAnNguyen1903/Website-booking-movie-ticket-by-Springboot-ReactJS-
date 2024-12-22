import './App.css';
import UserList from './components/User/userList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/login';
import ViewDetail from './components/User/viewDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="userList" element={<UserList></UserList>}>
          <Route path="viewDetail" element={<ViewDetail></ViewDetail>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
