const express = require('express');
const { HabilidadesPersonasController } = require('../controllers');

const router = express.Router();
//crear
router.post('/', HabilidadesPersonasController.createHabilidadPersona);
//leer
router.get('/', HabilidadesPersonasController.getAllHabilidadesPersonas);
router.get('/:id', HabilidadesPersonasController.getHabilidadPersonas);
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyó"}));

router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));
module.exports = router;