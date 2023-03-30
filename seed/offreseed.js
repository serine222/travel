const db = require('../config/database')
const offre = require('../models/offreSchema')


let newoffre = [

    new offre({
        nom_ofr :  'omra',
        ville_dep_ofr : 'the beginning',
        date_dep_ofr:Date.now(),
        dest_ofr: 'the beginning',
        dure_ofr:'0697979091',
        prix_ofr: '0697979091',
        photo:  'the beginning',
        created_at: Date.now(),


       
    }),
    new offre({
        nom_ofr :  'haje',
        ville_dep_ofr : 'the beginning',
        date_dep_ofr:Date.now(),
        dest_ofr: 'the beginning',
        dure_ofr:'0697979091',
        prix_ofr: '0697979091',
        photo:  'the beginning',
        created_at: Date.now(),
    }),
    new offre({
        nom_ofr :  'tonse',
        ville_dep_ofr : 'the beginning',
        date_dep_ofr:Date.now(),
        dest_ofr: 'the beginning',
        dure_ofr:'0697979091',
        prix_ofr: '0697979091',
        photo:  'the beginning',
        created_at: Date.now(),
    }),
    new offre({
        nom_ofr :  'marouc',
        ville_dep_ofr : 'the beginning',
        date_dep_ofr:Date.now(),
        dest_ofr: 'the beginning',
        dure_ofr:'0697979091',
        prix_ofr: '0697979091',
        photo:  'the beginning',
        created_at: Date.now(),
    }),

  
  
   
    
]

newoffre.forEach( (offre)=> {
    offre.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})