// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Layout } from 'antd';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import ContentArea from './components/ContentArea';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';


const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <TopBar />
        <Layout>
          <SideMenu />
          
          <ContentArea>
            <Routes>
              <Route path="/page-one" element={<PageOne />} />
              <Route path="/page-two" element={<PageTwo />} />
              <Route path="/" element={<Navigate to="/page-one" />} />
            </Routes>
          </ContentArea>
          
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;
