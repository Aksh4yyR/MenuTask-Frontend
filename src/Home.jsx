import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './App.css'; 
import { addMenu } from './services/allAPI';
import { addMenuItems } from './services/allAPI';

const Home = () => {
  const [menus, setMenus] = useState({ name: '', description: '' });
  const [menuItems, setMenuItems] = useState({ name: '', description: '', price: '' });
  const [menuId, setMenuId] = useState('');  
  console.log(menus);

  console.log(menuItems);
  
  

  useEffect(() => {
    const storedMenuId = sessionStorage.getItem("menuId");
    setMenuId(storedMenuId);  
  }, []);

  const handleAddMenu = async () => {
    const { name, description } = menus;

    if (!name || !description) {
      alert('Please fill in all fields for the menu');
      return;
    }

    const reqBody = { name, description };

    try {
      const response = await addMenu(reqBody);
      console.log(response?.data?._id);

      sessionStorage.setItem("menuId", response?.data?._id);
      setMenuId(response?.data?._id);  

      if (response.status === 401) {
        alert('Menu already exists!');
      } else {
        alert('Menu Added Successfully');
        setMenus({ name: '', description: '' }); 

      }
    } catch (error) {
      console.error('Error adding menu:', error);
      alert('Failed to add menu. Please try again later.');
    }
  };

  const handleAddMenuItems = async () => {
    const { name, description, price } = menuItems;
  
    try {
      if (name && description && price) {
        const reqBody = { name, description, price };
  
        const response = await addMenuItems(reqBody, menuId);
  
        if (response.status == 200) {
          alert('Menu items added successfully');
          
          
          setMenus({ name: '', description: '' });
          setMenuItems({ name: '', description: '', price: '' });
        } else {
          alert('Failed to add items');
        }
      } else {
        alert('Fill the fields');
      }
    } catch (err) {
      console.error('Error adding menu items:', err);
      alert('Failed to add menu items. Please try again later.');
    }
  };
  

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Add Menus</h1>

        <div className="add-menu-form mb-5">
          <FloatingLabel controlId="floatingMenuName" label="Menu Name" className="mb-3">
            <Form.Control onChange={e => { setMenus({ ...menus, name: e.target.value }) }} type="text" placeholder="Enter menu name" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingMenuDescription" label="Description" className="mb-3">
            <Form.Control onChange={e => { setMenus({ ...menus, description: e.target.value }) }} as="textarea" placeholder="Enter menu description" />
          </FloatingLabel>

          <button onClick={handleAddMenu} className="btn btn-primary w-100">Add Menu</button>
          <p className='text-danger'>*After adding menu only you can add items </p>

        </div>

        
          <div className="add-items-form">
            <FloatingLabel controlId="floatingItemName" label="Item Name" className="mb-3">
              <Form.Control type="text" placeholder="Enter item name" onChange={e=>{setMenuItems({...menuItems,name:e.target.value})}} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingItemDescription" label="Description" className="mb-3">
              <Form.Control as="textarea" placeholder="Enter item description"  onChange={e=>{setMenuItems({...menuItems,description:e.target.value})}} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingItemPrice" label="Price" className="mb-3">
              <Form.Control type="number" placeholder="Enter price"  onChange={e=>{setMenuItems({...menuItems,price:e.target.value})}} />
            </FloatingLabel>

            <button onClick={handleAddMenuItems} className="btn btn-success w-100">Add Item</button>
          </div>
        

        <hr className="my-5" />

        
      </div>

      
    </>
  );
};

export default Home;
