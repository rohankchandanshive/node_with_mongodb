const express = require('express');
const DepartmentCtrl = require('../controller/deptCtrl');
const departmentRouter = express.Router();

departmentRouter.get("/api/depts", async(req, res) => {
    const result = await DepartmentCtrl.getDept();

    console.log("result department",result )
    res.send(result);
})

departmentRouter.get("/api/dept", async (req, res) => {
    if (req.body.branch) {
        const result = await DepartmentCtrl.getDeptByBranch(req.body.branch);
        res.send(result);
        console.log("result department",result )
        return;
    }

  
    res.send(result);
})


departmentRouter.post("/api/dept", async (req, res) => {
    console.log("POST depart api !");
    const result = await DepartmentCtrl.postDept(req.body);
    res.send(result);
})

module.exports.departmentRouter = departmentRouter;