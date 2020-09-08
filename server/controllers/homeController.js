const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHome = async (req,res)=>{

    
    const viajes = await Viaje.findAll({
        limit: 6
    });
    
    
    const testimoniales = await Testimonial.findAll({
        limit: 3
    })
    
    
    res.render('index',{
        pagina: 'Próximo viajes',
        clase: 'home',
        viajes: viajes,
        testimoniales: testimoniales
    })     
}