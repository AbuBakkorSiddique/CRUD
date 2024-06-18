import { useEffect, useState } from 'react';
import { DeleteData, ReadData } from '../../FrontendApi/CRUDAPI';
import { useNavigate } from 'react-router-dom';

import { successMessage } from '../../Helpers/ValidationHelper'
import { ToastContainer } from 'react-toastify';




function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ReadData()
      .then((result) => {
        console.log('Fetched data:', result);
        if (Array.isArray(result.data)) {
          setData(result.data); // Assuming result.data contains the array of items
        } else if (Array.isArray(result)) {
          setData(result); // If result itself is the array
        } else {
          console.error('Unexpected data format:', result);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch data from the backend', err);
      });
  }, []);

  console.log('Current data state:', data);

  //THis is Detele Item  function  

const DeleteIteam=(id)=>{


DeleteData(id)
.then((result)=>{

successMessage('Item Delete Successfully ',result)
window.location.reload(); 


})
.catch(()=>{

})




}


// Update  Iteam Funcation 
const UpdateIteam = (id) => {

  navigate(`/update/${id}`); // Use the navigate function for navigation
};

/// use history function 


const navigate=useNavigate() 



  return (
    <>
      <div className='container m-4'>
        {data.length > 0 ? <h1>Data is ok</h1> : <h1>No Data is here</h1>}
        <table className='table  table-striped'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product CODE</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Total Price</th>
              <th>Create Date</th>
              <th>Update Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.ProductName}</td>
                <td>{item.ProductCode}</td>
                <td>{item.ProductImage}</td>
                <td>{item.ProductPrice}</td>
                <td>{item.ProductQuantity}</td>
                <td>{item.TotalPrice}</td>
                <td>{item.CreateDate}</td>
                <td>{item.UpdateDate}</td>
                <td className='d-flex'>
                  
                  <button onClick={DeleteIteam.bind(this,item._id)}  className='btn  btn-danger  mx-2 '> Delete </button>
                  <button  onClick={UpdateIteam.bind(this,item._id)} className='btn btn-success mx-2'> Update </button>
                  
                  
                   </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


            {/* ToastContainer to display the toast notifications */}
            <ToastContainer />
    </>
  );
}

export default Read;
