import multer from "multer"
// diskStorage is used to define how uploaded files should be stored.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

export const upload = multer({
  storage,
})
