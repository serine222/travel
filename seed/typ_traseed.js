const db = require('../config/database')
const typ_tra = require('../models/typ_traSchema')


let newtyp_tra = [



    new typ_tra({

        name:'The Car',
        summary: 'Transport',
        created_at: Date.now()
        }),

    new typ_tra({

        name:'The bus',
        summary: 'Transport',
        created_at: Date.now()
        }),
    new typ_tra({

        name:'the train',
        summary: 'Transport',
        created_at: Date.now()
        }),
    new typ_tra({

        name:'bicycle',
        summary: 'Transport',
        created_at: Date.now()
        }),
  
]

newtyp_tra.forEach( (typ_tra)=> {
    typ_tra.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})