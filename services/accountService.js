const {models} = require("../models");

module.exports.getAccountById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await models.account.findOne({
                where: {
                    id: id
                },
                raw: true
            });

            if (account) {
                resolve(account);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports.getAccountByEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await models.account.findOne({
                where: {
                    email: email
                },
                raw: true
            });

            if (account) {
                resolve(account);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports.getAllAccount = (role) => {
    return new Promise(async (resolve, reject) => {
        try {
            const accounts = await models.account.findAll({
                where: {
                    role: role
                },
                raw: true
            });

            if (accounts) {
                resolve(accounts);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports.editAccountById = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await models.account.findOne({
                where: {
                    id: data.id
                }
            });

            if (account) {
                account.first_name = data.first_name;
                account.last_name = data.last_name;
                account.email = data.email;
                account.gender = data.gender;
                account.phone_number = data.phone_number;
                account.address = data.address;

                await account.save();

                resolve(account);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports.editAvatarById = (id, link) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await models.account.findOne({
                where: {
                    id: id
                }
            });

            if (account) {
                account.avatar = link;

                await account.save();

                resolve(account);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}
