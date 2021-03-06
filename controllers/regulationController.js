const regulationService = require("../services/regulationService");

const checkAdminSuperadmin = (req) => {
    return req.user && ['admin', 'superadmin'].includes(req.user.role);
}

module.exports.getRegulationPage = async (req, res) => {
    if (checkAdminSuperadmin(req)) {
        return res.render('regulation', {title: 'Regulation'});
    }
    res.redirect('/error/401');
}

module.exports.getRegulations = async (req, res) => {
    if (!checkAdminSuperadmin(req)) {
        return res.status(200).json({
            errCode: 2,
            errMessage: "Error!!!",
            result: 'redirect',
            url: '/error/401'
        })
    }

    const regulations = await regulationService.getAllRegulations();
    if (regulations) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Successful",
            data: regulations
        })
    }

    return res.status(200).json({
        errCode: 1,
        errMessage: "Error!!!",
        data: {}
    })
}

module.exports.getRegulationById = async (req, res) => {
    if (!checkAdminSuperadmin(req)) {
        return res.status(200).json({
            errCode: 2,
            errMessage: "Error!!!",
            result: 'redirect',
            url: '/error/401'
        })
    }

    const id = req.body.id;

    if (Number.isInteger(Number(id))) {
        const regulation = await regulationService.getRegulationById(id);
        if (regulation) {
            return res.status(200).json({
                errCode: 0,
                errMessage: "Successful",
                data: regulation
            })
        }
    }
    return res.status(200).json({
        errCode: 1,
        errMessage: "Error!!!"
    })
}

module.exports.editRegulation = async (req, res) => {
    if (!checkAdminSuperadmin(req)) {
        return res.status(200).json({
            errCode: 2,
            errMessage: "Error!!!",
            result: 'redirect',
            url: '/error/401'
        })
    }

    let {id, value, is_used} = req.body;
    const regulationInput = {
        id,
        value: value || 0,
        is_used: is_used || true
    }
    if (Number.isInteger(Number(id))) {
        const is_edit = await regulationService.editlRegulation(regulationInput);
        if (is_edit) {
            return res.status(200).json({
                errCode: 0,
                errMessage: "Successful"
            })
        }
    }
    return res.status(200).json({
        errCode: 1,
        errMessage: "Error!!!"
    })
}


const handleGetRegulationValue = async (req, res, id) => {
    const regulation = await regulationService.getRegulationById(id);
    if (regulation) {
        return res.status(200).json({
            errCode: 0,
            errMessage: "Successful",
            value: regulation
        })
    }

    return res.status(200).json({
        errCode: 1,
        errMessage: "Error!!!",
    })
}

module.exports.getMinImport = async (req, res) => {
    await handleGetRegulationValue(req, res, 1);
}

module.exports.getMinStockImport = async (req, res) => {
    await handleGetRegulationValue(req, res, 2);
}

module.exports.getMaxDept = async (req, res) => {
    await handleGetRegulationValue(req, res, 3);
}

module.exports.getMinStockSale = async (req, res) => {
    await handleGetRegulationValue(req, res, 4);
}


module.exports.getMaxBillMoney = async (req, res) => {
    await handleGetRegulationValue(req, res, 5);
}
