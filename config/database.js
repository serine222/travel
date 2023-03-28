

// const mongoose = require('mongoose');
 
// mongoose.connect("mongodb://127.0.0.1:27017/trevel")
//   .then( result => {

//     app.listen(port, () => {
//         console.log(`Example app listening at http://localhost:${port}`);
//       });
//   })
//   .catch( err => {
//     console.log(err);
//   }); 

  const mongoose = require('mongoose')

let db = mongoose.connect('mongodb://127.0.0.1:27017/trevel',{ useNewUrlParser: true } , (err)=> {

    if (err) {
        console.log(err)
    } else {
        console.log('connected to db succcesfuly...')
    }
})