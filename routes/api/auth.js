const express = require('express')
const router = express.Router()
const User = require('../../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')


// @route    POST /auth
// @desc     Authenticate user & get token
// @access   Public

router.post('/', [
    check('email', 'Por favor, insira um e-mail válido').isEmail(),
    check('password', 'Por favor, insira a senha').exists()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    try {
        let user = await User.findOne({ email }).select('id password email is_active is_admin nome')
        if (!user) {
            return res.status(404).json({ errors: [{ msg: 'O Usuário não existe' }] })
        } else {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Senha incorreta' }] })
            } else {
                if (user.is_active == false) {
                    return res.status(403).json({ errors: [{ msg: 'Usuário inativo' }] })
                }
                const payload = {
                    user: {
                        id: user.id,
                        is_active: user.is_active,
                        is_admin: user.is_admin,
                        nome: user.nome
                        
                    }
                }

                jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '30 days' },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token })
                    }
                )

            }
        }

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')

    }
})

module.exports = router