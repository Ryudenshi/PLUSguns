const Router = require('express')
const brandController = require('../controllers/brandController')
const router = new Router()

router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOneBrand)
router.put('/', brandController.updateBrand)
router.delete('/:id', brandController.delete)

module.exports = router