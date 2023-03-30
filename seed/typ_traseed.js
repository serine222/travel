const db = require('../config/database')
const typ_tra = require('../models/typ_traSchema')


let newtyp_tra = [

    new typ_tra({

    name:'The Plane',
    summary: 'the beginning',
    created_at: Date.now()
    }),

    new typ_tra({

        name:'The Car',
        summary: 'the beginning',
        created_at: Date.now()
        }),

    new typ_tra({

        name:'The bus',
        summary: 'the beginning',
        created_at: Date.now()
        }),
    new typ_tra({

        name:'the train',
        summary: 'the beginning',
        created_at: Date.now()
        }),
    new typ_tra({

        name:'bicycle',
        summary: 'the beginning',
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