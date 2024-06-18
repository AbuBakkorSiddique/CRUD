const { Query } = require('mongoose');
const model = require('../Model/Datainsert');

// CRUD operations

// C --- Create

exports.InsertDataController = async (req, res) => {
    const reqBody = req.body;

    try {
        const data = await model.create(reqBody);
        res.status(200).json({
            Title: "Insert Data",
            Description: "The User Data has been successfully inserted.",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            Title: "Insert Data",
            Description: "Data insertion failed.",
            err: error
        });
    }
};

// R --- Read Data

exports.ReadDataController = async (req, res) => {
    const Query = {};
    const Projection = "ProductName ProductCOde ProductImage ProductPrice ProductQuantity TotalPrice CreateDate UpdateDate";

    try {
        const data = await model.find(Query, Projection);
        res.status(200).json({
            Title: "Read Data",
            Description: "The data has been successfully retrieved.",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            Title: "Read Data",
            Description: "Failed to retrieve data.",
            err: error
        });
    }
};

// U --- Update Data

exports.UpdateDataController = async (req, res) => {
    try {

        const id = req.params.id;
        const Query = { _id: id };
        const reqBody = req.body;

        const data = await model.updateOne(Query, reqBody);

        if (data.nModified === 0) {
            res.status(400).json({
                Title: "Update Data",
                Description: "No data was updated.",
                data: data
            });
        } else {
            res.status(200).json({
                Title: "Data Updated",
                Description: "The data has been successfully updated.",
                data: data
            });
        }
    } catch (error) {
        res.status(400).json({
            Title: "Update Data",
            Description: "Data update failed.",
            err: error
        });
    }
};

// D --- Delete Data

exports.DeleteDataController = async (req, res) => {
    const id = req.params.id;
    const Query = { _id: id };
   console.log('sourov')
    try {
        const data = await model.deleteOne(Query);
    console.log(data) ; 
        if (data.deletedCount === 0) {
            res.status(400).json({
                Title: "Delete Data",
                Description: "No data was deleted.",
                data: data
            });
        } else {
            res.status(200).json({
                Title: "Delete Data",
                Description: "The data has been successfully deleted.",
                data: data
            });
        }
    } catch (error) {
        res.status(400).json({
            Title: "Delete Data",
            Description: "Data deletion failed.",
            err: error
        });
    }
};


// Read data by ID 



exports.ReadDataControllerID = async (req, res) => {
    const id = req.params.id;
 

    const query = { _id: id };
 
    try {
       const data = await model.findOne(query);
       if (!data) {
          return res.status(404).json({
             Title: "Read Data",
             Description: "Data not found.",
          });
       }
       res.status(200).json({
          Title: "Read Data",
          Description: "The data has been successfully retrieved.",
          data: data,
       });
    } catch (error) {
       res.status(500).json({
          Title: "Read Data",
          Description: "Failed to retrieve data.",
          err: error.message,
       });
    }
 };