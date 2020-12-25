const express = require('express')
const User = require('../../models/cartas')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const router = express.Router()


// @route    POST /carta
// @desc     CREATE carta
// @access   Public

router.post('/',[
  check('sexo', 'Por favor, selecione o seu sexo.').not().isEmpty(),
  check('nascimento', 'Por favor, insira sua data de nascimento.').not().isEmpty(),
  check('nome', 'Por favor, insira seu nome.').not().isEmpty(),
  check('email', 'O e-mail não é válido.').isEmail(),
  check('texto', 'Escreva o seu pedido para o Papai Noel.').not().isEmpty()   

], async (req, res, next) => {
  try{
    let { sexo, nascimento, nome, email, texto, is_active, is_admin } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }else{
      let carta = new User({sexo, nascimento, nome, email, texto, is_active, is_admin})
      
      await carta.save()
      const payload = {
        carta: {
          id: carta.id
        }
      };
      if (carta.id){
        res.json(carta);
      }
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})


// @route    GET /carta
// @desc     LIST carta
// @access   Private

router.get('/', auth, async(req, res, next)=> {
  try{
    const carta = await User.find({})
    res.json(carta)
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})

// @route    GET /carta/:email
// @desc     DETAIL carta
// @access   Private

router.get('/:email', auth, [], async(req, res, next)=> {
  try{
    let param_email = req.params["email"]
    const carta = await User.findOne({email : param_email})
    if(carta){
      res.json(carta)
    }else{
      res.status(404).send({"error" : "Carta não encontrada"})
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})


// @route    PATCH /carta/:email
// @desc     PARTIAL EDIT carta
// @access   Public

router.patch('/:email', [], async(req, res, next) => {
  try{
    let param_email = req.params["email"]
    let body_request = req.body
    let update = {$set: body_request}
    
    let carta = await User.findOneAndUpdate({email : param_email}, update, {new: true})
    if(carta){
      res.status(202).send({"success": "Carta editada com sucesso"})
    }else{
      res.status(404).send({"error" : "Carta não encontrada"})
    }
    
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})


// @route    DELETE /admin/:userId
// @desc     DELETE carta
// @access   Public

router.delete('/:email', async(req, res, next) => {
  try {
    let param_email = req.params["email"]
    const carta = await User.findOneAndDelete({email: param_email})
    if (carta) {
      res.status(202).send({"success": "Carta deletada com sucesso"})
    } else {
      res.status(404).send({"error": "Carta não encontrada"})
    }  
  } catch (err) {
    console.log(err.message)
    res.status(500).send({"error": "Server error"})
  }
})

module.exports = router