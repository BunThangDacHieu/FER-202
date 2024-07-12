import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slidebar from './Components/Slidebar';
import Assignments from './Page/Assignments';
import UpcomingSlots from './Page/UpcomingSlots';
import UserGuide from './Page/UserGuide';
import ContactSupport from './Page/ContactSupport';
import Home from './Page/Home';
import ProjectCard from './Components/ProjectCard';
import ButtonComponents from './Components/ButtonComponents';
import { Content } from 'antd/es/layout/layout';
import Layouts from './Page/Layouts';
import JoinNow from './Page/JoinNow';
import Login from './Page/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Content style={{ backgroundColor: 'wheat', margin: '24px 16px', padding: 24, minHeight: 800, background: '#fff', marginLeft: '300px' }}>

          <Routes>
            <Route path="/join" element={<JoinNow />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Layouts />}>
              <Route path="/" element={<Home />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/upcoming-slots" element={<UpcomingSlots />} />
              <Route path="/user-guide" element={<UserGuide />} />
              <Route path="/contact-support" element={<ContactSupport />} />
              <Route path="/project-card" element={<ProjectCard />} />

            </Route>
          </Routes>
        </Content>
      </div>
    </Router>
  );
}


export default App;
