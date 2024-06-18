import axios from 'axios';

// Create Data API call


export function CreateData(ProductName, ProductCode, ProductImage, ProductPrice, ProductQuantity, TotalPrice, CreateDate, UpdateDate) {
  console.log(ProductName, ProductCode, ProductImage, ProductPrice, ProductQuantity, TotalPrice, CreateDate, UpdateDate);
  
  const URL = "http://localhost:3000/api/create";
  const reqBody = {
    ProductName,
    ProductCode,
    ProductImage,
    ProductPrice,
    ProductQuantity,
    TotalPrice,
    CreateDate,
    UpdateDate
  };

  return axios.post(URL, reqBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

// Read Data API call
export function ReadData() {
  const URL = "http://localhost:3000/api/read";

  return axios.get(URL)
    .then((res) => {
      
      console.log('Response status:', res.status);
      console.log('Response data:', res.data);
   
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    .catch((err) => {
      console.error('Error fetching data:', err.response ? err.response.data : err.message);
      throw err;
    });
}



// Update Data API call
// Update Data API call
export function UpdateData(id, ProductName, ProductCode, ProductImage, ProductPrice, ProductQuantity, TotalPrice, UpdateDate) {
  const URL = `http://localhost:3000/api/update/${id}`;
  console.log('sourov .....')
  const reqBody = {
    ProductName,
    ProductCode,
    ProductImage,
    ProductPrice,
    ProductQuantity,
    TotalPrice,
    UpdateDate
  };

  return axios.post(URL, reqBody)
    .then((res) => {
      return res.status === 200;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}


// Delete Data API call
export function DeleteData(id) {
  const URL = `http://localhost:3000/api/delete/${id}`;

  return axios.get(URL)
    .then((res) => {
      return res.status === 200;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}


// Read Data by Id 

export function ReadDataById(id){

const URL = `http://localhost:3000/api/readId/${id}` ; 

return axios.get(URL)
.then((res)=>{

  if(res.status===200){
    return res.data;
}
else{
    return false;
}


}
)

.catch((err)=>{

  console.log(err);
        return false;
})



}
