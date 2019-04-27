"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("./Styles");

var _TableHeader = _interopRequireDefault(require("./TableHeader/TableHeader"));

var _TableBody = _interopRequireDefault(require("./TableBody/TableBody"));

var _TableFooter = _interopRequireDefault(require("./TableFooter/TableFooter"));

var _TableCaption = _interopRequireDefault(require("./TableCaption/TableCaption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var table = function table(props) {
  return _react["default"].createElement(_Styles.RespTable, null, _react["default"].createElement(_TableCaption["default"], {
    caption: props.caption
  }), _react["default"].createElement(_TableHeader["default"], {
    headerCells: props.headerCells,
    sortedUporDown: props.sortedUporDown
  }), _react["default"].createElement(_TableBody["default"], {
    detailPage: props.detailPage,
    data: props.data
  }), _react["default"].createElement(_TableFooter["default"], {
    footerCells: props.footerCells,
    show: props.showFooter
  }));
};

var _default = table;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJsZS9UYWJsZS5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsInByb3BzIiwiY2FwdGlvbiIsImhlYWRlckNlbGxzIiwic29ydGVkVXBvckRvd24iLCJkZXRhaWxQYWdlIiwiZGF0YSIsImZvb3RlckNlbGxzIiwic2hvd0Zvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JCLFNBQ0ksZ0NBQUMsaUJBQUQsUUFDSSxnQ0FBQyx3QkFBRDtBQUFjLElBQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTdCLElBREosRUFHSSxnQ0FBQyx1QkFBRDtBQUNJLElBQUEsV0FBVyxFQUFFRCxLQUFLLENBQUNFLFdBRHZCO0FBRUksSUFBQSxjQUFjLEVBQUVGLEtBQUssQ0FBQ0c7QUFGMUIsSUFISixFQU9JLGdDQUFDLHFCQUFEO0FBQ0ksSUFBQSxVQUFVLEVBQUVILEtBQUssQ0FBQ0ksVUFEdEI7QUFFSSxJQUFBLElBQUksRUFBRUosS0FBSyxDQUFDSztBQUZoQixJQVBKLEVBWUksZ0NBQUMsdUJBQUQ7QUFBYSxJQUFBLFdBQVcsRUFBRUwsS0FBSyxDQUFDTSxXQUFoQztBQUE2QyxJQUFBLElBQUksRUFBRU4sS0FBSyxDQUFDTztBQUF6RCxJQVpKLENBREo7QUFnQkgsQ0FqQkQ7O2VBbUJlUixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFJlc3BUYWJsZSB9IGZyb20gJy4vU3R5bGVzJztcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXIvVGFibGVIZWFkZXInO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5L1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICcuL1RhYmxlRm9vdGVyL1RhYmxlRm9vdGVyJztcclxuaW1wb3J0IFRhYmxlQ2FwdGlvbiBmcm9tICcuL1RhYmxlQ2FwdGlvbi9UYWJsZUNhcHRpb24nO1xyXG5cclxuY29uc3QgdGFibGUgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlc3BUYWJsZT5cclxuICAgICAgICAgICAgPFRhYmxlQ2FwdGlvbiBjYXB0aW9uPXtwcm9wcy5jYXB0aW9ufSAvPlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDZWxscz17cHJvcHMuaGVhZGVyQ2VsbHN9XHJcbiAgICAgICAgICAgICAgICBzb3J0ZWRVcG9yRG93bj17cHJvcHMuc29ydGVkVXBvckRvd259IC8+XHJcblxyXG4gICAgICAgICAgICA8VGFibGVCb2R5XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxQYWdlPXtwcm9wcy5kZXRhaWxQYWdlfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFRhYmxlRm9vdGVyIGZvb3RlckNlbGxzPXtwcm9wcy5mb290ZXJDZWxsc30gc2hvdz17cHJvcHMuc2hvd0Zvb3Rlcn0gLz5cclxuICAgICAgICA8L1Jlc3BUYWJsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJsZTsiXX0=