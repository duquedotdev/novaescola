"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _celebrate = require('celebrate');
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.use(_celebrate.errors.call(void 0, ));
_app2.default.listen(3333);
