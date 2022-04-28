const homeRouter = require("./homeRouter");
const authRouter = require("./authRouter");
const layoutRouter = require("./layoutRouter");
const errorRouter = require("./errorRouter");
const chartRouter = require("./chartRouter");
const tableRouter = require("./tableRouter");

module.exports.initRouter = (app) => {
    app.use('/', homeRouter);
    app.use('/auth', authRouter);
    app.use('/layout', layoutRouter);
    app.use('/error', errorRouter);
    app.use('/chart', chartRouter);
    app.use('/table', tableRouter);
}
