import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import bgImg from './assets/bgmenu.png.png';
import './App.css';
import { AllMenus, viewMenus } from './services/allAPI'; 

const Menu = () => {
  const [allMenu, setAllMenus] = useState([]);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]); 
  const [selectedMenuName, setSelectedMenuName] = useState(""); 
  const [error, setError] = useState(null); 
  const [noItems, setNoItems] = useState(false); 

  console.log(selectedMenuName);

 
  const fetchAllMenus = async () => {
    try {
      const response = await AllMenus();  
      console.log('All Menus Response:', response); 
      if (response?.data) {
        setAllMenus(response.data); 
      } else {
        setError("No menus available.");
      }
    } catch (err) {
      setError("Failed to fetch menus. Please try again.");
      console.error("Error fetching menus:", err);
    }
  };

  
  const handleMenuClick = async (menuName) => {
    setSelectedMenuName(menuName); 
    setNoItems(false); 
    try {
      const response = await viewMenus(menuName); 
      console.log('Menu Items Response:', response); 
      if (response?.data && response.data.length > 0) {
        setSelectedMenuItems(response.data); 
      } else {
        setSelectedMenuItems([]); 
        setNoItems(true); 
      }
    } catch (err) {
      setError("Failed to fetch menu items. Please try again.");
      console.error("Error fetching menu items:", err); 
    }
  };

  
  useEffect(() => {
    fetchAllMenus();
  }, []);

  return (
    <>
      <Header />
      <div
        className="page-wrapper"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <div className="homebg d-flex align-items-center justify-content-center text-center h-60vh">
          <div>
            <h1 className="fw-bolder text-white display-4">MENU</h1>
            <p className="text-white lead">
              Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
            </p>
          </div>
        </div>

        {/* Menu buttons */}
        <div style={{ marginTop: '200px' }} className="buttons d-flex justify-content-center bg-dark py-4 mt-5 flex-wrap">
  {allMenu && allMenu.length > 0 ? (
    allMenu.map((item) => (
      <button
        key={item._id} 
        style={{
          border: '2px solid #fff',
          width: '120px',
          fontSize: '1rem',
          fontWeight: 'bold',
          margin: '5px',
        }}
        className="mainBtn btn outline-light text-white shadow"
        onClick={() => handleMenuClick(item.name)}>{item.name} </button>
    ))
  ) : (
    <p className="text-white">{error || "No menus available."}</p> 
  )}
</div>


     
        <div className="menu-items mt-5 text-center">
          {noItems ? (
            <p className="text-white">Sorry, no items available for this menu.</p>
          ) : selectedMenuItems && selectedMenuItems.length > 0 ? (
            <div
              className="menu-items-container"
              style={{
               
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              }}
            >
              
              <h3 className="text-white mb-4">Menu Items for {selectedMenuName}</h3>

              
              <div className="row">
                {selectedMenuItems.map((menuItem, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="menu-item p-3 text-white rounded shadow-lg">
                      
                      <h4 className="menu-item-name mb-2">
                        {menuItem.name} <span className="price text-warning">${menuItem.price}</span>
                      </h4>
                      
                      <p className="menu-item-description">{menuItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-white">Select a menu to view items.</p>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Menu;
