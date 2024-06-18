import  { useEffect, useRef, useState } from 'react';
import { isEmpety, successMessage, errorMessage } from '../../Helpers/ValidationHelper';
import { UpdateData } from '../../FrontendApi/CRUDAPI';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { ReadDataById } from '../../FrontendApi/CRUDAPI';

function Update() {
  // NO: 1 - Catch the ID by useParams
  const { id } = useParams();
  // NO: 2 - Create state for storing data by ID
  const [byIdData, setByIdData] = useState(null);

  // NO: 3 - Fetch data by ID
  useEffect(() => {
    ReadDataById(id)
      .then((result) => {
        setByIdData(result.data);
        return result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // Connect the refs with the input fields
  const ProductName = useRef();
  const ProductCode = useRef();
  const ProductImage = useRef();
  const ProductPrice = useRef();
  const ProductQuantity = useRef();
  const TotalPrice = useRef();
  const CreateDate = useRef();
  const UpdateDate = useRef();

  const UpdateButton = async () => {
    const Product_Name = ProductName.current.value;
    const Product_Code = ProductCode.current.value;
    const Product_Image = ProductImage.current.value;
    const Product_Price = ProductPrice.current.value;
    const Product_Quantity = ProductQuantity.current.value;
    const Total_Price = TotalPrice.current.value;
    const Create_Date = CreateDate.current.value;
    const Update_Date = UpdateDate.current.value;

    // Data Validation
    if (isEmpety(Product_Name)) {
      errorMessage("Product Name Required!");
    } else if (isEmpety(Product_Code)) {
      errorMessage("Product Code Required!");
    } else if (isEmpety(Product_Image)) {
      errorMessage("Product Image Required!");
    } else if (isEmpety(Product_Price)) {
      errorMessage("Product Price Required!");
    } else if (isEmpety(Product_Quantity)) {
      errorMessage("Product Quantity Required!");

    } else if (isEmpety(Total_Price)) {
      errorMessage("Total Price Required!");
    } else if (isEmpety(Create_Date)) {
      errorMessage("Create Date Required!");
    } else if (isEmpety(Update_Date)) {
      errorMessage("Update Date Required!");
    } else {
      try {
        const Result = await UpdateData(id,Product_Name, Product_Code, Product_Image, Product_Price, Product_Quantity, Total_Price, Create_Date, Update_Date);
        if (Result === true) {
          successMessage('Data are successfully Imported');
          window.location.reload();
        } else {
          errorMessage('Data are not Imported');
        }
      } catch (error) {
        console.error("Error during data import:", error);
        errorMessage('An error occurred while importing data');
      }
    }
  };

  return (
    <>
      <div className='container text-center d-flex justify-content-end  align-items-center'>
        <h1>{id}</h1>
        <p>{JSON.stringify(byIdData)}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 p-4">
            <label>Product Name</label>
            <br />
            <input
              type="text"
              defaultValue={byIdData ? byIdData['ProductName'] : ''}
              className="form-control"
              ref={ProductName}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Product CODE</label>
            <br />
            <input
              type="text"
              className="form-control"
              defaultValue={byIdData ? byIdData['ProductCode'] : ''}
              ref={ProductCode}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Product Image</label>
            <br />
            <input
              type="text"
              className="form-control"
              defaultValue={byIdData ? byIdData['ProductImage'] : ''}
              ref={ProductImage}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Product Price</label>
            <br />
            <input
              type="text"
              className="form-control"
              defaultValue={byIdData ? byIdData['ProductPrice'] : ''}
              ref={ProductPrice}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Product Quantity</label>
            <br />
            <input
              type="text"
              className="form-control"
              defaultValue={byIdData ? byIdData['ProductQuantity'] : ''}
              ref={ProductQuantity}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Total Price</label>
            <br />
            <input
              type="text"
              className="form-control"
              defaultValue={byIdData ? byIdData['TotalPrice'] : ''}
              ref={TotalPrice}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Create Date</label>
            <br />
            <input
              type="text"
              className="form-control"
              ref={CreateDate}
              defaultValue={new Date().toISOString().substring(0, 10)}
            />
          </div>
          <div className="col-md-4 p-4">
            <label>Update Date</label>
            <br />
            <input
              type="text"
              className="form-control"
              ref={UpdateDate}
              defaultValue={new Date().toISOString().substring(0, 10)}
            />
          </div>
        </div>

        <br />

        <div className="row">
          <button className="btn btn-success col-md-4" onClick={UpdateButton}>
            Update Info
          </button>
        </div>
      </div>

      {/* ToastContainer to display the toast notifications */}
      <ToastContainer />
    </>
  );
}

export default Update;
