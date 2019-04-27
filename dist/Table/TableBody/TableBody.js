"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tableBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("../Styles");

var _TableBodyCell = _interopRequireDefault(require("./TableBodyCell/TableBodyCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableBody = function tableBody(props) {
  var rows = props.data.map(function (r) {
    // mapping column values as row's cell
    var cells = Object.keys(r).map(function (k, i) {
      return _react["default"].createElement(_TableBodyCell["default"], {
        detailPage: props.detailPage,
        history: props.history,
        key: k + i,
        val: r[k],
        index: i
      });
    }); // adding cells for each rows

    return _react["default"].createElement(_Styles.RespTableRow, {
      key: r.id
    }, cells);
  });
  return _react["default"].createElement(_Styles.RespTableBody, null, rows);
};

exports.tableBody = tableBody;
var _default = tableBody;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UYWJsZS9UYWJsZUJvZHkvVGFibGVCb2R5LmpzIl0sIm5hbWVzIjpbInRhYmxlQm9keSIsInByb3BzIiwicm93cyIsImRhdGEiLCJtYXAiLCJyIiwiY2VsbHMiLCJPYmplY3QiLCJrZXlzIiwiayIsImkiLCJkZXRhaWxQYWdlIiwiaGlzdG9yeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDaEMsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLENBQUMsRUFBSTtBQUM3QjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILENBQVosRUFBZUQsR0FBZixDQUFtQixVQUFDSyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2QyxhQUFPLGdDQUFDLHlCQUFEO0FBQWUsUUFBQSxVQUFVLEVBQUVULEtBQUssQ0FBQ1UsVUFBakM7QUFBNkMsUUFBQSxPQUFPLEVBQUVWLEtBQUssQ0FBQ1csT0FBNUQ7QUFBcUUsUUFBQSxHQUFHLEVBQUVILENBQUMsR0FBR0MsQ0FBOUU7QUFBaUYsUUFBQSxHQUFHLEVBQUVMLENBQUMsQ0FBQ0ksQ0FBRCxDQUF2RjtBQUE0RixRQUFBLEtBQUssRUFBRUM7QUFBbkcsUUFBUDtBQUNILEtBRmEsQ0FBZCxDQUY2QixDQU03Qjs7QUFDQSxXQUFPLGdDQUFDLG9CQUFEO0FBQWMsTUFBQSxHQUFHLEVBQUVMLENBQUMsQ0FBQ1E7QUFBckIsT0FDRlAsS0FERSxDQUFQO0FBR0gsR0FWWSxDQUFiO0FBV0EsU0FDSSxnQ0FBQyxxQkFBRCxRQUNLSixJQURMLENBREo7QUFLSCxDQWpCTTs7O2VBbUJRRixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFJlc3BUYWJsZVJvdywgUmVzcFRhYmxlQm9keSB9IGZyb20gJy4uL1N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZUJvZHlDZWxsIGZyb20gJy4vVGFibGVCb2R5Q2VsbC9UYWJsZUJvZHlDZWxsJztcclxuXHJcbmV4cG9ydCBjb25zdCB0YWJsZUJvZHkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvd3MgPSBwcm9wcy5kYXRhLm1hcChyID0+IHtcclxuICAgICAgICAvLyBtYXBwaW5nIGNvbHVtbiB2YWx1ZXMgYXMgcm93J3MgY2VsbFxyXG4gICAgICAgIGNvbnN0IGNlbGxzID0gT2JqZWN0LmtleXMocikubWFwKChrLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8VGFibGVCb2R5Q2VsbCBkZXRhaWxQYWdlPXtwcm9wcy5kZXRhaWxQYWdlfSBoaXN0b3J5PXtwcm9wcy5oaXN0b3J5fSBrZXk9e2sgKyBpfSB2YWw9e3Jba119IGluZGV4PXtpfSAvPjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkaW5nIGNlbGxzIGZvciBlYWNoIHJvd3NcclxuICAgICAgICByZXR1cm4gPFJlc3BUYWJsZVJvdyBrZXk9e3IuaWR9PlxyXG4gICAgICAgICAgICB7Y2VsbHN9XHJcbiAgICAgICAgPC9SZXNwVGFibGVSb3c+XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVzcFRhYmxlQm9keT5cclxuICAgICAgICAgICAge3Jvd3N9XHJcbiAgICAgICAgPC9SZXNwVGFibGVCb2R5PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlQm9keTsiXX0=