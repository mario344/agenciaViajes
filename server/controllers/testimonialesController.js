const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req,res)=>{
   const testimoniales = await Testimonial.findAll()
    res.render('testimoniales',{
        testimonial: 'testimoniales',
        testimoniales : testimoniales
    })
    }

exports.agregarTestimonial = async (req,res)=>{

    //valida campos
    let {nombre, correo, mensaje} = req.body;

    let errores =[];
    if(!nombre){
        errores.push({'mensaje':'agrega tu nombre'})
    }

    if(!correo){
        errores.push({'mensaje':'agrega tu correo'})
    }

    if(!mensaje){
        errores.push({'mensaje':'agrega un asunto'})
    }

    //revisa cada error
    if(errores.length >0){
        //muestra los errores
       const testimoniales = await Testimonial.findAll()
       res.render('testimoniales' ,{
        errores,
        nombre,
        correo,
        mensaje
    })
    }else{
        //almacena en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error =>console.log(error))
    }
}