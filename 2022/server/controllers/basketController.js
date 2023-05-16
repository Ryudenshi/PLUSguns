const {BasketWeapon, Basket, Weapon} = require("../models/models")

class BasketController {
    async addToBasket(req, res, next){
        const user = req.user
        const {weaponId} = req.body
        const basket = await BasketWeapon.create({basketId : user.id, weaponId : weaponId}) 

        return res.json(basket)
    }

    async getBasketUser (req, res){
        const {id} = req.user
        const basket = await BasketWeapon.findAll({include: {
            model: Weapon
        }, where: {basketId: id}})

        return res.json(basket)
    }

    async deleteFromBasket(req, res){
        const {id} = req.user
        const basket = await BasketWeapon.destroy({include: {
            model: Weapon
        }, where: {basketId: id}})

        return res.json(basket)
    }
}

module.exports = new BasketController()