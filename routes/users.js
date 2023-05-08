const express = require('express');
const router = express.Router();
const { users } = require("../data/users.json");
const { getAllUsers, getUserById, deleteUserById, updateUserData, addNewUser ,getSubscriptionDetails} = require("../controllers/user-controller");
// get all the users

const { userModel, bookModel } = require("../models/index");

router.get("/", getAllUsers);


// get users with id 
router.get("/:id", getUserById);


// add users by id
router.post("/", addNewUser);
// update by id 
router.put("/:id", updateUserData);
// delete the user with their ids

router.delete("/:id", deleteUserById);


// get subscription details 

router.get("/subscription-details/:id", getSubscriptionDetails);



module.exports = router
