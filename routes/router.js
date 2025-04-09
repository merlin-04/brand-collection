const express = require('express')
const userController = require('../controllers/userController')
const brandController = require('../controllers/brandController')
const productController = require('../controllers/productController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const router = new express.Router()

// register: http://localhost:3000/register
router.post("/register", userController.registerController)

// login: http://localhost:3000/login
router.post("/login", userController.loginController)

//edit-profile :http://localhost:3000/edit-user
router.put("/edit-user", jwtMiddleware, multerMiddleware.single('profilePic'), userController.editUserController)

//delete user: http://localhost:3000/users/id/delete
router.delete('/users/:id/delete', jwtMiddleware, userController.deleteUserController)


// --------------------------------BRANDS-----------------------------------------------------


// add-brand: http://localhost:3000/add-brand
router.post('/add-brand', jwtMiddleware, multerMiddleware.single('logo'), brandController.addBrandController)

//get all brands: http://localhost:3000/all-brands
router.get("/user-brands", jwtMiddleware, brandController.allBrandController)

// -------------------------------------PRODUCTS--------------------------------------------------------

// add-product: http://localhost:3000/add-product
router.post('/add-product', jwtMiddleware, multerMiddleware.single('productImage'), productController.addProductController)


//edit product: http://localhost:3000/products/id/edit
router.put('/products/:id/edit', jwtMiddleware, multerMiddleware.single('productImage'), productController.editProductController)

//delete product: http://localhost:3000/products/id/delete
router.delete('/products/:id/delete', jwtMiddleware, productController.deleteProductController)


module.exports = router