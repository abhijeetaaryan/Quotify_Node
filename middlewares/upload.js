const path = require('path');
const multer = require('multer');

var disk_storage = multer.diskStorage({

    destination : 'profile_image/',

    filename : (req, file, cb) => {

        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

var upload = multer({
    storage : disk_storage,
    fileFilter : function(req,file,callback)
    {
        if(
            file.mimetype == "image/png" || 
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
          )
          {
            callback(null,true);
          }else 
          {
            console.log("File format not accepted.");
            console.log(file.filename);
            callback(null,false);
          }
    },
    limits : {
      fileSize: 1024 * 1024 * 10
    }
  
}).single('profileImage');

module.exports = upload;