const router = require("express").Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");

// Routes
router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);
router.post("/braintree/payment/:userId", requireSignin, isAuth, processPayment);

// Params
router.param("userId", userById);


module.exports = router;