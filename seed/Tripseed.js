const db = require('../config/database')
const Trip = require('../models/TripsSchema')


let newTrip = [

    new Trip({
    

        title:'beach cleaning at Muscat',
        summary: 'beach cleaning at Muscat',
        body: 'beach cleaning at Muscat',
        created_at: Date.now()
    }),
    new Trip({
    

        title:'beach cleaning at Muscat',
        summary: 'beach cleaning at Muscat',
        body: 'beach cleaning at Muscat',
        created_at: Date.now()
    }),
    new Trip({
    

        title:'beach cleaning at Muscat',
        summary: 'beach cleaning at Muscat',
        body: 'beach cleaning at Muscat',
        created_at: Date.now()
    }),
    new Trip({
    

        title:'beach cleaning at Muscat',
        summary: 'beach cleaning at Muscat',
        body: 'beach cleaning at Muscat',
        created_at: Date.now()
    }),
    new Trip({
    

        title:'beach cleaning at Muscat',
        summary: 'beach cleaning at Muscat',
        body: 'beach cleaning at Muscat',
        created_at: Date.now()
    }),
    
    
]
newTrip.forEach( (Trip)=> {
    Trip.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})