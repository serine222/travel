const db = require('../config/database')
const transport = require('../models/transportSchema')


let newtransports = [

    new transport({
    
        date_tra: 'the beginning',
        date_rest_tra : Date.now(),
        prix_tra: '0697979091',
        cmp_tra: Date.now(),
        typ_tra: '6424cf65dafddde9996685af',
     
   
    created_at: Date.now()

    }),

    new transport({
    
        date_tra: 'the beginning',
        date_rest_tra : Date.now(),
        prix_tra: '0697979091',
        cmp_tra: Date.now(),
        typ_tra: '6424cf65dafddde9996685af',
     
   
    created_at: Date.now()

    }),
    new transport({
    
        date_tra: 'the beginning',
        date_rest_tra : Date.now(),
        prix_tra: '0697979091',
        cmp_tra: Date.now(),
        typ_tra: '64234b2b63d3aea1ab6f10ee',
      
   
    created_at: Date.now()

    }),
    new transport({
    
        date_tra: 'the beginning',
        date_rest_tra : Date.now(),
        prix_tra: '0697979091',
        cmp_tra: Date.now(),
        typ_tra: '6424cf65dafddde9996685b0',
   
    created_at: Date.now()

    }),
    new transport({
    
        date_tra: 'the beginning',
        date_rest_tra : Date.now(),
        prix_tra: '0697979091',
        cmp_tra: Date.now(),
        typ_tra: '6424cf65dafddde9996685b0',
       
   
    created_at: Date.now()

    }),


  
  
   
    
]

newtransports.forEach( (transport)=> {
    transport.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})