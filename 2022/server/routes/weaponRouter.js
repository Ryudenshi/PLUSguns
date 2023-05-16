const Router = require('express')
const weaponController = require('../controllers/weaponController')
const router = new Router()

router.post('/', weaponController.create)
router.get('/', weaponController.getAll)
router.get('/:id', weaponController.getOne)
router.delete('/:id', weaponController.delete)


module.exports = router