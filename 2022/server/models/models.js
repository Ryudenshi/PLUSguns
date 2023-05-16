const sequelize = require('../db')
const { DataTypes } = require(`sequelize`)

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Type = sequelize.define( 'type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Weapon = sequelize.define( 'weapon', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Brand = sequelize.define( 'brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const TypeBrand = sequelize.define( 'type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rating = sequelize.define( 'rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const WeaponInfo = sequelize.define( 'weapon_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketWeapon = sequelize.define( 'basket_weapon', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Type.hasMany(Weapon)
Weapon.belongsTo(Type)

Brand.hasMany(Weapon)
Weapon.belongsTo(Brand)

Weapon.hasMany(Rating)
Rating.belongsTo(Weapon)

Weapon.hasMany(WeaponInfo, {as: 'info'})
WeaponInfo.belongsTo(Weapon)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })

Basket.hasMany(BasketWeapon)
BasketWeapon.belongsTo(Basket)

Weapon.hasMany(BasketWeapon)
BasketWeapon.belongsTo(Weapon)

module.exports = {
    User,
    Weapon,
    Type,
    Brand,
    Rating,
    TypeBrand,
    WeaponInfo,
    Basket,
    BasketWeapon
}