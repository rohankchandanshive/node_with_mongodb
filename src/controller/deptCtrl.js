const Department = require("../models/Department");
const User = require("../models/User");
const { UserController } = require("./userCtrl");



class DepartmentCtrl {

    static getDept = async () => {
    
        const result = await Department.find().populate({path: 'users', model: 'Users'});
        console.log("result in ctrl >>>", result);
        return result;
    }

    static getDeptByBranch = async (branch) => {
        console.log("branch recieved", branch);
        const result = await Department.find({branch}).populate({path: 'users', model: 'Users'});
        console.log("result in ctrl >>>", result);
        return result;
    }

    static postDept = async(department) => {
       
        // console.log("User with industry", await User.find({ industry: deptType }));
        console.log("department", department);
        const result = new Department(department);
        result.save();
        return result;
    }
}

module.exports = DepartmentCtrl;