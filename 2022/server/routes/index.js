const Router = require('express')
const router = new Router()
const weaponRouter = require('./weaponRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/weapon', weaponRouter)
router.use('/basket', basketRouter)

module.exports = router