const express = require('express') ; 
const Router= express.Router() ; 
const CRUD=require('../Controller/HomePage')


// create data
Router.post('/create',CRUD.InsertDataController) ;

//Read Data 

Router.get('/read',CRUD.ReadDataController);

// update Data 

Router.post('/update/:id',CRUD.UpdateDataController) ;

// Delete Data 

Router.get('/delete/:id',CRUD.DeleteDataController) ; 

// read data by ID 
Router.get('/readId/:id',CRUD.ReadDataControllerID) ; 








module.exports= Router ; 