"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tableFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("../Styles");

var _TableFooterCell = _interopRequireDefault(require("./TableFooterCell/TableFooterCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableFooter = function tableFooter(props) {
  var cells = props.footerCells.map(function (c, i) {
    return _react["default"].createElement(_TableFooterCell["default"], {
      key: i,
      val: c.label
    });
  });
  var footer = '';

  if (props.show) {
    footer = _react["default"].createElement(_Styles.RespTableFooter, null, cells);
  }

  return _react["default"].createElement("div", null, footer);
};

exports.tableFooter = tableFooter;
var _default = tableFooter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UYWJsZS9UYWJsZUZvb3Rlci9UYWJsZUZvb3Rlci5qcyJdLCJuYW1lcyI6WyJ0YWJsZUZvb3RlciIsInByb3BzIiwiY2VsbHMiLCJmb290ZXJDZWxscyIsIm1hcCIsImMiLCJpIiwibGFiZWwiLCJmb290ZXIiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ2hDLGdDQUFDLDJCQUFEO0FBQ0ksTUFBQSxHQUFHLEVBQUVBLENBRFQ7QUFFSSxNQUFBLEdBQUcsRUFBRUQsQ0FBQyxDQUFDRTtBQUZYLE1BRGdDO0FBQUEsR0FBdEIsQ0FBZDtBQU1BLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLE1BQUlQLEtBQUssQ0FBQ1EsSUFBVixFQUFnQjtBQUNaRCxJQUFBQSxNQUFNLEdBQUcsZ0NBQUMsdUJBQUQsUUFDSk4sS0FESSxDQUFUO0FBR0g7O0FBRUQsU0FDSSw2Q0FDS00sTUFETCxDQURKO0FBS0gsQ0FuQk07OztlQXFCUVIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBSZXNwVGFibGVGb290ZXIgfSBmcm9tICcuLi9TdHlsZXMnO1xyXG5pbXBvcnQgVGFibGVGb290ZXJDZWxsIGZyb20gJy4vVGFibGVGb290ZXJDZWxsL1RhYmxlRm9vdGVyQ2VsbCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGFibGVGb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNlbGxzID0gcHJvcHMuZm9vdGVyQ2VsbHMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgPFRhYmxlRm9vdGVyQ2VsbFxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIHZhbD17Yy5sYWJlbH0gLz5cclxuICAgICkpO1xyXG5cclxuICAgIGxldCBmb290ZXIgPSAnJztcclxuICAgIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICAgICAgZm9vdGVyID0gPFJlc3BUYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAge2NlbGxzfVxyXG4gICAgICAgIDwvUmVzcFRhYmxlRm9vdGVyPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2Zvb3Rlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJsZUZvb3RlcjsiXX0=