const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();
router.get("/user", userController.user_get);
router.get("/user/:key/:value", userController.user_getfind);
router.get("/gte/:number", userController.user_getcount);
router.get("/order/:field/:ascdesc", userController.user_getorder);
router.post("/user", userController.user_post);
router.put("/userupdate", userController.user_update);
router.delete("/userdelete", userController.user_delete);

module.exports = router;
