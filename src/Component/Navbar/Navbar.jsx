import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faCircleLeft, faTint, faFolder, faBox, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import icon from '../../assets/iconmono.PNG';
const Navbar = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };



  const closeModal = () => {
    setModalContent(null);
  };
  return (
    <div>
      <nav className="navbar">

        <div
          style={{ color: "white", display: "flex" }}>
          <img src={icon} alt='' style={{ color: 'black' }}></img>
          <b>MOON<span style={{ color: "black" }}>BOXES</span></b>
        </div>
      </nav>

      <div className="subnavbar" >

        <FontAwesomeIcon icon={faCircleLeft} className="animated-icon" onClick={() => openModal("back")} />

        <FontAwesomeIcon icon={faHistory} className="animated-icon" onClick={() => openModal("this is your history.an overview of your MoonBox NFT claims")} />
        <FontAwesomeIcon icon={faTint} className="animated-icon" onClick={() => openModal("Recent,live and upcoming NFT drops.")} />
        <FontAwesomeIcon icon={faFolder} className="animated-icon" onClick={() => openModal("this is your inventory.an overview of all NFTs you received out of the MoonBoxes")} />
        <FontAwesomeIcon icon={faBox} className="animated-icon" onClick={() => openModal("")} />
        <FontAwesomeIcon icon={faInfoCircle} className="animated-icon" onClick={() => openModal("")} />


      </div>

      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}


    </div>
  );
};

export default Navbar;
