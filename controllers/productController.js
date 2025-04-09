const products = require('../models/productModel')

//add products
exports.addProductController = async (req, res) => {
    console.log("inside addProductController");
    const userId = req.userId
    console.log(userId);
    console.log(req.body);

    //destructure each field from request body object
    const { productName, description,price,category,brand,addedBy } = req.body

    //image url from file object
    const productImage = req.file.filename
    console.log(productName, description,price,category,brand,addedBy,productImage);

    try {
        const existingProduct = await products.findOne({ brandname })
        if (existingProduct) {
            res.status(406).json("Product already exist...please upload another one..")
        } else {
            const newProduct = new products({
                productName, description,price,category,brand,addedBy,productImage,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//edit products
exports.editProductController = async (req, res) => {
    console.log("inside editProductController");
    const id = req.params.id
    const userId = req.userId
    const { productName, description,price,category,brand,addedBy,productImage } = req.body
    const reUploadProductImg = req.file ? req.file.filename : productImage
    try {
        const updateProduct = await products.findByIdAndUpdate({ _id: id }, {
            userId: userId, productName, description,price,category,brand,addedBy, productImage: reUploadProductImg
        }, { new: true })
        res.status(200).json(updateProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}


//delete products
exports.deleteProductController = async (req, res) => {
    console.log("inside deleteProductController");
    const { id } = req.params.id
    try {
        const deleteProduct = await products.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}