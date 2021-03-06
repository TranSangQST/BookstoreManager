const {models} = require("../models");
const Op = require('sequelize').Op;

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
                account.gender = data.gender;
                account.phone_number = data.phone_number;
                account.address = data.address;
                account.role = data.role;
                account.status = data.status;

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


module.exports.getAccountsFilter = (filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            let option = {
                offset: (filter.page - 1) * filter.limit,
                limit: filter.limit,
                order: ['id'],
                raw: true
            };

            if (filter.search !== '') {
                option.where = {
                    role: filter.role,
                    [Op.or]: [
                        {
                            first_name: {
                                [Op.like]: `%${filter.search}%`
                            }
                        },
                        {
                            last_name: {
                                [Op.like]: `%${filter.search}%`
                            }
                        },
                        {
                            email: {
                                [Op.like]: `%${filter.search}%`
                            }
                        }
                    ]
                }
            }
            else {
                option.where = {
                    role: filter.role
                }
            }

            if (filter.gender !== 'All') {
                option.where.gender = filter.gender;
            }

            if (filter.status !== 'All') {
                option.where.status = filter.status;
            }

            const accounts = await models.account.findAndCountAll(option);

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

module.exports.EditAccountStatusById = (id, status) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await models.account.findOne({
                where: {
                    id: id
                }
            });

            if (account) {
                account.status = status;

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

module.exports.addNewAccount = (accountInfo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const account = await models.account.create({
                first_name: accountInfo.first_name,
                last_name: accountInfo.last_name,
                email: accountInfo.email,
                password: accountInfo.password,
                phone_number: accountInfo.phone_number,
                gender: accountInfo.gender,
                role: accountInfo.role,
                address: accountInfo.address,
                uid: accountInfo.uid
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

