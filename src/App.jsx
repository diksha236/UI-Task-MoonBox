// import React from "react";
// import "./App.css"; // Make sure this file includes the CSS below
// import astroPainter from "../src/assets/astro_painter.png"; // Example asset

// function App() {
//   return (
//     <div className="app-container">
//       {/* Header Section */}
//       <header className="header">
//         <div className="logo">MoonBoxes</div>
        
//         <span className="close-icon">✖</span>
//       </header>
//       <nav className="nav">
//           <a href="#tokenomics">Tokenomics</a>
//           <a href="#moonsea">MoonSea</a>
//           <a href="#moonshot">MoonShot</a>
//         </nav>

//       {/* Main Section */}
//       <main className="main">
//         <div className="content">
//           <h1>Call for artists!</h1>
//           <p>
//             Applications are open for all artists and creators who want to
//             explore NFTs.
//           </p>
//         </div>
//         <div className="image-section">
//           <img src={astroPainter} alt="NFT Artist" className="nft-image" />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import Navbar from '../src/Component/Navbar/Navbar';
import MainContent from '../src/Component/MainContent/MainContent';
import SidebarMenu from '../src/Component/SidebarMenu/SidebarMenu';
import FooterTabs from '../src/Component/FooterTabs/FooterTab';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SidebarMenu />
      <MainContent />
      <FooterTabs />
    </div>
  );
};

export default App;

