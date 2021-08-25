const Store = require("../model/Store");


// @description Get All Stores
// @route Get /api/v1/stores
// @access public


const getStores = async (req,res,next) => {
    try {
        const stores = await Store.find();
        return res.status(200).json({
            success: true,
            count: stores.length,
            date: stores
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server Error..."});
    }
}

const addStore = async (req,res,next) => {
    try {
        const store = await Store.create(req.body);

        return res.status(200).json({
            success: true,
            data: store
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: "Server Error..."});
    }
}


module.exports = {
    getStores,
    addStore
};