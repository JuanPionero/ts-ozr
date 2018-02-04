var _G = (function () {
    function _G(G, R) {
        this.Global = G;
        this.ReportTemplate = R;
    }
    _G.prototype.set = function (key, value) {
        if (this.ReportTemplate.SetGlobal) {
            this.ReportTemplate.SetGlobal(key, value);
        }
    };
    return _G;
}());
var a = new _G({}, {});
