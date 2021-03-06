const hbs = require("hbs");
const expressHandlebarsSections = require("express-handlebars-sections");
const paginateHelper = require("express-handlebars-paginate");

module.exports.configHbs = (dir) => {
    hbs.registerPartials(dir);
    hbs.registerHelper('section', expressHandlebarsSections());
    hbs.registerHelper('createPagination', paginateHelper.createPagination);
    hbs.registerHelper('json', function(context) {
        return JSON.stringify(context);
    });
    hbs.registerHelper('ifCond', function(v1, operator, v2, options) {
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });
    hbs.registerHelper('ifTwoCondCustom', function(v1, v2, v3, options) {
        if (v1 == v2 || v1 == v3) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    hbs.registerHelper('sumInt', function (a, b) {
        return parseInt(a) + parseInt(b);
      })
}

