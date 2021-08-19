

import { Routes, Route } from 'react-router';
import Dashboard from './pages/dashboard/Index';
import Login from './pages/login/Index';
import Setting from './pages/setting/Index';
 
function App() { 
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
    </>
  );
}

export default App;
