const { userModel, bookModel } = require("../models");
exports.getAllUsers = async (req, res) => {
    const users = await userModel.find();

    if (users.length === 0) {
        return res.status(404).json({
            success: false,
            message:"no users found in bd"
        })
    }
    return res.status(200).json({
        success: true,
        data: users,
    })
    
}


exports.getUserById = async (req, res) => {
    
    const { id } = req.params;
    // const user = users.find((each) => each.id === id);
    const user = await userModel.findById(id);
    // or 
    // const user = await userModel.findById({ _id: id });

    if (!user) {
        res.status(404).json({
            success: false,
            message: "this id dne"
        });
    };
    return res.status(202).json({
        success: true,
        message: "here your requested user",
        data: user
    });
};


exports.deleteUserById = async (req, res) => {
    
    const { id } = req.params;
    // const user = users.find((each) => each.id === id);
    const user = await userModel.deleteOne({ _id: id });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user does not exist",
        
        })
    };

    
    res.status(200).json({
        success: true,
        message: "user deleted",
        data: books,
    });
};


exports.addNewUser = async (req, res) => {
    
    
    const {  name, surname, email, subscriptionType, subscriptionDate } = req.body;
    const newUser = await userModel.create({
        name, surname, email, subscriptionType, subscriptionDate
    })
    

    

    return res.status(201).json({
        success: true,
        message: "user added",
        data: newUser,
    });
    
};



exports.updateUserData = async (req, res) => {
    
    // console.log(req.params);
    const { id } = req.params;
    const { data } = req.body;

    const updatedUserData = await userModel.findOneAndUpdate({ _id: id },
        {
            $set: {
                ...data
            }
        }
        , { new: true });
    
    
    return res.status(202).json({
        success: true,
        message: "user updated",
        data: updatedUserData
    });



};

// we use dto when we have to transfer from on eobject to other 


exports.getSubscriptionDetails = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user with id does not exist"
        });
    }
    const getDateInDays = (data = "") => {
        let date;
        if (data === "") {
            date = new Date();
        } else {
            date = new Date(data);
        }
        let days = Math.floor(date / 1000 * 60 * 60 * 24);
        return days;




    };

    const subscriptionType = (date) => {
        if (user.subscriptionType === "Basic") {
            date += 90;
        } else if (user.subscriptionType === "Standard") {
            date += 180;
        } else if (user.subscriptionType === "Premium") {
            date += 365;
        };
        return date;
    };
    let returnDate = getDateInDays(user.returnDate);
    let currentDate = getDateInDays();
    let subscriptionDate = getDateInDays(user.subscriptionDate);


    let subscriptionExpirationDate = subscriptionType(subscriptionDate);
    const data = {
        ...user,
        isSubscriptionExpired: subscriptionExpirationDate < currentDate,
        daysLeftForExpiration: subscriptionExpirationDate <= currentDate ? 0 : subscriptionExpirationDate - currentDate,
        fine: returnDate < currentDate ?
            subscriptionDate <= currentDate ?
                100
                : 50
            : 0

    };
    return res.status(200).json({
        success: true,
        message: "subscription data for the user",
        data: data
    })
    


};