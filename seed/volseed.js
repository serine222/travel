const db = require('../config/database')
const vol = require('../models/volSchema')


let newvols = [

    new vol({
    

        name_vol: 'the beginning',
        arrivals_vol :  Date.now(),
        email_vol: 'ssuim@gmail .com',
        leaving_vol:  Date.now(),
        phone_vol: '0697979091',
        address_vol: 'djalfa',
        prix_vol:'0697979091',
        Trips:'6421a0d8f322c3a946336ce6',

        location_vol: 'algain',
        created_at: Date.now()
    }),

    new vol({
    

        name_vol: 'Constantine',
        arrivals_vol :  Date.now(),
        email_vol: 'ssuim@gmail .com',
        leaving_vol:  Date.now(),
        phone_vol: '0697979091',
        address_vol: 'djelfa',
        prix_vol:'0697979091',
        location_vol: 'algain',
        Trips:'6421a0d8f322c3a946336ce4',

        created_at: Date.now()
    }),

    new vol({
    

        name_vol: 'Jijel',
        arrivals_vol :  Date.now(),
        email_vol: 'ssuim@gmail .com',
        leaving_vol:  Date.now(),
        phone_vol: '0697979091',
        address_vol: 'djelfa',
        prix_vol:'0697979091',
        location_vol: 'algain',
        Trips:'6421a0d8f322c3a946336ce8',

        created_at: Date.now()
    }),

    new vol({
    

        name_vol: 'Oran',
        arrivals_vol :  Date.now(),
        email_vol: 'ssuim@gmail .com',
        leaving_vol:  Date.now(),
        phone_vol: '0697979091',
        address_vol: 'djelfa',
        prix_vol:'0697979091',
        location_vol: 'algain',
        Trips:'6421a227b9e966193cf1585c',

        created_at: Date.now()
    }),

    new vol({
    

        name_vol: 'Annaba',
        arrivals_vol :  Date.now(),
        email_vol: 'ssuim@gmail .com',
        leaving_vol:  Date.now(),
        phone_vol: '0697979091',
        address_vol: 'djelfa',
        prix_vol:'0697979091',
        location_vol: 'algain',
        Trips:'6421a0d8f322c3a946336ce6',

        created_at: Date.now()
    }),

    new vol({
    

        name_vol: 'urine',
        arrivals_vol :  Date.now(),
        email_vol: 'ssuim@gmail .com',
        leaving_vol:  Date.now(),
        phone_vol: '0697979091',
        address_vol: 'djelfa',
        prix_vol:'0697979091',
        location_vol: 'algain',
        created_at: Date.now()
    }),
 
  
   
    
]

newvols.forEach( (vol)=> {
    vol.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})