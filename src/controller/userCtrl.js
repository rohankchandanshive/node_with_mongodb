const User = require("../models/User");

class UserController {
  static createUser = newUser => {
    console.log("create user called >>>>>>>", newUser);

    const user = new User(newUser);
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
    console.log("patch order called >>>>>>>", orderId, order);
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
