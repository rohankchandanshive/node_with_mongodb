const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const Department = require("../models/Department");

class UserController {
  static createUser = async(newUser) => {
    console.log("create user called >>>>>>>", newUser);

    const user = new User(newUser);
    console.log("user industry", user.industry);


    const userId = new mongoose.Types.ObjectId(user.id)
    await Department.updateOne({ branch: user.industry }, {
      $push: { users: userId }
    },
    {new: true}
    )
    user.save();
    console.log("new user", user);
    return user;
  };

  static updateUser = (userId, user) => {
    console.log("update user called >>>>>>>", user);
    const updatedUser = User.findOneAndReplace({ _id: userId }, user, {
      new: true,
    });
    console.log("updated user recieved", updatedUser);
    return updatedUser;
  };

  static patchUser = (userId, user) => {
    console.log("patch user called >>>>>>>", userId, user);
    const updatedUser = User.findOneAndUpdate({ _id: userId }, user, {
      new: true,
    });
    console.log("updated user recieved", updatedUser);
    return updatedUser;
  };

  static patchOrder = (orderId, order) => {
    console.log("patch order called >>>>>>> ", orderId, order);
    const updatedOrder = User.findOneAndUpdate(
      { "orders._id": orderId },
      { $set: { "orders.$": order } },
      { new: true }
    );
    console.log("updated order", updatedOrder);
    return updatedOrder;
  };
}

module.exports.UserController = UserController;
