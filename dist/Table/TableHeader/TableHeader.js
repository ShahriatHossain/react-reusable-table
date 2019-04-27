"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tableHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("../Styles");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell/TableHeaderCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableHeader = function tableHeader(props) {
  // adding header cell 
  var cells = props.headerCells.map(function (c, i) {
    return _react["default"].createElement(_TableHeaderCell["default"], {
      key: i,
      val: c.label,
      isFilterAble: c.isFilterAble,
      isSortAble: c.isSortAble,
      sortedUp: function sortedUp() {
        return props.sortedUporDown(c.name, 'desc');
      },
      sortedDown: function sortedDown() {
        return props.sortedUporDown(c.name, 'asc');
      }
    });
  });
  return _react["default"].createElement(_Styles.RespTableHeader, null, cells);
};

exports.tableHeader = tableHeader;
var _default = tableHeader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UYWJsZS9UYWJsZUhlYWRlci9UYWJsZUhlYWRlci5qcyJdLCJuYW1lcyI6WyJ0YWJsZUhlYWRlciIsInByb3BzIiwiY2VsbHMiLCJoZWFkZXJDZWxscyIsIm1hcCIsImMiLCJpIiwibGFiZWwiLCJpc0ZpbHRlckFibGUiLCJpc1NvcnRBYmxlIiwic29ydGVkVXBvckRvd24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDbEM7QUFDQSxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDaEMsZ0NBQUMsMkJBQUQ7QUFDSSxNQUFBLEdBQUcsRUFBRUEsQ0FEVDtBQUVJLE1BQUEsR0FBRyxFQUFFRCxDQUFDLENBQUNFLEtBRlg7QUFHSSxNQUFBLFlBQVksRUFBRUYsQ0FBQyxDQUFDRyxZQUhwQjtBQUlJLE1BQUEsVUFBVSxFQUFFSCxDQUFDLENBQUNJLFVBSmxCO0FBS0ksTUFBQSxRQUFRLEVBQUU7QUFBQSxlQUFNUixLQUFLLENBQUNTLGNBQU4sQ0FBcUJMLENBQUMsQ0FBQ00sSUFBdkIsRUFBNkIsTUFBN0IsQ0FBTjtBQUFBLE9BTGQ7QUFNSSxNQUFBLFVBQVUsRUFBRTtBQUFBLGVBQU1WLEtBQUssQ0FBQ1MsY0FBTixDQUFxQkwsQ0FBQyxDQUFDTSxJQUF2QixFQUE2QixLQUE3QixDQUFOO0FBQUE7QUFOaEIsTUFEZ0M7QUFBQSxHQUF0QixDQUFkO0FBVUEsU0FDSSxnQ0FBQyx1QkFBRCxRQUNLVCxLQURMLENBREo7QUFLSCxDQWpCTTs7O2VBbUJRRixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFJlc3BUYWJsZUhlYWRlciB9IGZyb20gJy4uL1N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UYWJsZUhlYWRlckNlbGwvVGFibGVIZWFkZXJDZWxsJztcclxuXHJcbmV4cG9ydCBjb25zdCB0YWJsZUhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgLy8gYWRkaW5nIGhlYWRlciBjZWxsIFxyXG4gICAgY29uc3QgY2VsbHMgPSBwcm9wcy5oZWFkZXJDZWxscy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICA8VGFibGVIZWFkZXJDZWxsXHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgdmFsPXtjLmxhYmVsfVxyXG4gICAgICAgICAgICBpc0ZpbHRlckFibGU9e2MuaXNGaWx0ZXJBYmxlfVxyXG4gICAgICAgICAgICBpc1NvcnRBYmxlPXtjLmlzU29ydEFibGV9XHJcbiAgICAgICAgICAgIHNvcnRlZFVwPXsoKSA9PiBwcm9wcy5zb3J0ZWRVcG9yRG93bihjLm5hbWUsICdkZXNjJyl9XHJcbiAgICAgICAgICAgIHNvcnRlZERvd249eygpID0+IHByb3BzLnNvcnRlZFVwb3JEb3duKGMubmFtZSwgJ2FzYycpfSAvPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVzcFRhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgICB7Y2VsbHN9XHJcbiAgICAgICAgPC9SZXNwVGFibGVIZWFkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVIZWFkZXI7Il19