"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.Index = function (req, res) {
        res.render("home.hbs", { layout: "layouts/layout" });
    };
    return HomeController;
}());
exports.default = HomeController;
//# sourceMappingURL=HomeController.js.map