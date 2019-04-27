"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tableBodyCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("../../Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableBodyCell = function tableBodyCell(props) {
  var cell = props.index === 0 ? _react["default"].createElement("a", {
    href: "#",
    onClick: function onClick() {
      return props.detailPage(props.val);
    }
  }, props.val) : _react["default"].createElement("div", null, props.val);
  return _react["default"].createElement(_Styles.TableBodyCell, null, cell);
};

exports.tableBodyCell = tableBodyCell;
var _default = tableBodyCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9UYWJsZS9UYWJsZUJvZHkvVGFibGVCb2R5Q2VsbC9UYWJsZUJvZHlDZWxsLmpzIl0sIm5hbWVzIjpbInRhYmxlQm9keUNlbGwiLCJwcm9wcyIsImNlbGwiLCJpbmRleCIsImRldGFpbFBhZ2UiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLENBQWhCLEdBQW9CO0FBQUcsSUFBQSxJQUFJLEVBQUMsR0FBUjtBQUFZLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUYsS0FBSyxDQUFDRyxVQUFOLENBQWlCSCxLQUFLLENBQUNJLEdBQXZCLENBQU47QUFBQTtBQUFyQixLQUF5REosS0FBSyxDQUFDSSxHQUEvRCxDQUFwQixHQUNQLDZDQUFNSixLQUFLLENBQUNJLEdBQVosQ0FETjtBQUVBLFNBQ0ksZ0NBQUMscUJBQUQsUUFDS0gsSUFETCxDQURKO0FBS0gsQ0FSTTs7O2VBVVFGLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgVGFibGVCb2R5Q2VsbCB9IGZyb20gJy4uLy4uL1N0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdGFibGVCb2R5Q2VsbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2VsbCA9IHByb3BzLmluZGV4ID09PSAwID8gPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5kZXRhaWxQYWdlKHByb3BzLnZhbCl9Pntwcm9wcy52YWx9PC9hPlxyXG4gICAgICAgIDogPGRpdj57cHJvcHMudmFsfTwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVCb2R5Q2VsbD5cclxuICAgICAgICAgICAge2NlbGx9XHJcbiAgICAgICAgPC9UYWJsZUJvZHlDZWxsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlQm9keUNlbGw7Il19