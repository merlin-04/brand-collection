const brands = require('../models/brandModel')

// add brand
exports.addBrandController = async (req, res) => {
    console.log("inside addBrandController");
    const userId = req.userId
    console.log(userId);
    console.log(req.body);

    //destructure each field from request body object
    const { brandname, categories } = req.body

    //image url from file object
    const logo = req.file.filename
    console.log(brandname, categories,logo);

    try {
        const existingBrand = await brands.findOne({ brandname })
        if (existingBrand) {
            res.status(406).json("Brand already exist...please upload another one..")
        } else {
            const newBrand = new brands({
                brandname, categories ,logo,userId
            })
            await newBrand.save()
            res.status(200).json(newBrand)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//get all brands
exports.allBrandController = async (req, res) => {
    console.log("inside allBrandController ");
    try {
        const allBrands = await brands.find()
        res.status(200).json(allBrands)
    } catch (err) {
        res.status(401).json(err)
    }
}