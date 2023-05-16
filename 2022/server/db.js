const {Sequelize} = require(`sequelize`)

module.exports = new Sequelize(
    process.env.DB_NAME, // Назва бази даних
    process.env.DB_USER, // Ім'я користувача
    process.env.DB_PASSWORD, // пароль
    {
        dialect: `postgres`,
        host: process.env.DB_HOST, // хост
        port: process.env.DB_PORT  // порт
    }
)