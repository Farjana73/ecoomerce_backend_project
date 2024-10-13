import express from 'express';
const router = express.Router();


import * as BrandController from '../app/controllers/BrandController.js';
import * as CartListController from '../app/controllers/CartListController.js';
import * as CategoryController from '../app/controllers/CategoryController.js';
import * as InvoiceController from '../app/controllers/InvoiceController.js';
import * as ProductController from '../app/controllers/ProductController.js';
import * as UserController from '../app/controllers/UsersController.js';
import * as WishListController from '../app/controllers/WishListController.js';
import AuthMiddleware from '../app/middlewares/AuthMiddleware.js';



// user router

router.post('/Login', UserController.Login);
router.post('/VerifyLogin', UserController.VerifyLogin);
router.post('/CreateUserProfile',AuthMiddleware, UserController.CreateUserProfile);
router.post('/UpdateUserProfile' ,AuthMiddleware, UserController.UpdateUserProfile);
router.get('/ReadUserProfile' ,AuthMiddleware, UserController.ReadUserProfile);


// Brand router

router.get('/BrandList', BrandController.BrandList);



// Category router

router.get('/CategoryList', CategoryController.CategoryList);


// Product router

router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory);
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark);
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand);
router.get('/ProductListBySlider', ProductController.ProductListBySlider);
router.get('/ProductDetailsID/:ProductID', ProductController.ProductDetailsID);
router.get('/ProductListByKeyword/:keyword', ProductController.ProductListByKeyword);
router.get('/ProductReviewListByID/:ProductID', ProductController.ProductReviewListByID);

// review router
router.post('/CreateUserReview',AuthMiddleware, UserController.CreateUserReview);
router.post('/UpdateUserReview',AuthMiddleware, UserController.UpdateUserReview);


// Invoice router

router.post('/CreateInvoice',AuthMiddleware, InvoiceController.CreateInvoice);
router.get('/ReadInvoiceDetails',AuthMiddleware, InvoiceController.ReadInvoiceDetails);
router.get('/ReadInvoiceList',AuthMiddleware, InvoiceController.ReadInvoiceList);

// CartList router

router.post('/CreateCart',AuthMiddleware, CartListController.CreateCart);
router.get('/ReadCartList',AuthMiddleware, CartListController.ReadCartList);
router.post('/RemoveCart',AuthMiddleware, CartListController.RemoveCart);
router.post('/UpdateCart',AuthMiddleware, CartListController.UpdateCart);


// wish list router

router.post('/CreateWish',AuthMiddleware, WishListController.CreateWish);
router.get('/ReadWishList' ,AuthMiddleware, WishListController.ReadWishList);
router.post('/RemoveWish' ,AuthMiddleware, WishListController.RemoveWish);








export default router;

