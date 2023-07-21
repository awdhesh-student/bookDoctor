const multer = require("multer");
const express = require("express");

const {
  registerController,
  loginController,
  authController,
  docController,
  deleteallnotificationController,
  getallnotificationController,
  addDocsController,
  getAllDoctorsControllers,
  appointmentController,
  getAllUserAppointments,
  getDocsController,
  downloadDocController,
} = require("../controllers/userC");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now()
//     cb(null, uniqueSuffix +"-"+ file.originalname)
//   }
// })

const upload = multer({ dest: 'uploads/' })

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/getuserdata", authMiddleware, authController);

router.post("/registerdoc", authMiddleware, docController);

router.get("/getalldoctorsu", authMiddleware, getAllDoctorsControllers);

router.post("/getappointment",upload.single("image"), authMiddleware, appointmentController);

router.post(
  "/getallnotification",
  authMiddleware,
  getallnotificationController
);

router.post(
  "/deleteallnotification",
  authMiddleware,
  deleteallnotificationController
);

router.get("/getuserappointments", authMiddleware, getAllUserAppointments);

// router.post(
//   "/adddocs",
//   upload.single("image"),
//   authMiddleware,
//   addDocsController
// );

router.get("/getDocsforuser", authMiddleware, getDocsController)


module.exports = router;
