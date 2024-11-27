const multer = require("multer");

// Disk Storage
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/products");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
    cb(null, fileName);
  },
});

// Filter to accept image only
const multerFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new ApiError("upload image only", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

// Upload file
exports.uploadImage = upload.single("image");
