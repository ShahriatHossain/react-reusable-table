"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tableHeaderCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("../../Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableHeaderCell = function tableHeaderCell(props) {
  var cell = ''; // checking header cell is sortable or not
  // if sortable then enable sort feature

  if (props.isSortAble) {
    cell = _react["default"].createElement(_Styles.Column2, null, _react["default"].createElement("div", null, _react["default"].createElement(_Styles.ITagUp, {
      onClick: props.sortedDown
    })), _react["default"].createElement("div", null, _react["default"].createElement(_Styles.ITagDown, {
      onClick: props.sortedUp
    })));
  }

  return _react["default"].createElement(_Styles.TableHeaderCell, null, _react["default"].createElement(_Styles.Row, null, _react["default"].createElement(_Styles.Column2, null, props.val), cell));
};

exports.tableHeaderCell = tableHeaderCell;
var _default = tableHeaderCell;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9UYWJsZS9UYWJsZUhlYWRlci9UYWJsZUhlYWRlckNlbGwvVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbInRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwiY2VsbCIsImlzU29ydEFibGUiLCJzb3J0ZWREb3duIiwic29ydGVkVXAiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RDLE1BQUlDLElBQUksR0FBRyxFQUFYLENBRHNDLENBR3RDO0FBQ0E7O0FBQ0EsTUFBSUQsS0FBSyxDQUFDRSxVQUFWLEVBQXNCO0FBQ2xCRCxJQUFBQSxJQUFJLEdBQUcsZ0NBQUMsZUFBRCxRQUNILDZDQUFLLGdDQUFDLGNBQUQ7QUFBUSxNQUFBLE9BQU8sRUFBRUQsS0FBSyxDQUFDRztBQUF2QixNQUFMLENBREcsRUFFSCw2Q0FBSyxnQ0FBQyxnQkFBRDtBQUFVLE1BQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNJO0FBQXpCLE1BQUwsQ0FGRyxDQUFQO0FBSUg7O0FBQ0QsU0FDSSxnQ0FBQyx1QkFBRCxRQUNJLGdDQUFDLFdBQUQsUUFDSSxnQ0FBQyxlQUFELFFBQVVKLEtBQUssQ0FBQ0ssR0FBaEIsQ0FESixFQUVLSixJQUZMLENBREosQ0FESjtBQVFILENBbkJNOzs7ZUFxQlFGLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uMiwgVGFibGVIZWFkZXJDZWxsLCBSb3csIElUYWdVcCwgSVRhZ0Rvd24gfSBmcm9tICcuLi8uLi9TdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRhYmxlSGVhZGVyQ2VsbCA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IGNlbGwgPSAnJztcclxuXHJcbiAgICAvLyBjaGVja2luZyBoZWFkZXIgY2VsbCBpcyBzb3J0YWJsZSBvciBub3RcclxuICAgIC8vIGlmIHNvcnRhYmxlIHRoZW4gZW5hYmxlIHNvcnQgZmVhdHVyZVxyXG4gICAgaWYgKHByb3BzLmlzU29ydEFibGUpIHtcclxuICAgICAgICBjZWxsID0gPENvbHVtbjI+XHJcbiAgICAgICAgICAgIDxkaXY+PElUYWdVcCBvbkNsaWNrPXtwcm9wcy5zb3J0ZWREb3dufT48L0lUYWdVcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48SVRhZ0Rvd24gb25DbGljaz17cHJvcHMuc29ydGVkVXB9PjwvSVRhZ0Rvd24+PC9kaXY+XHJcbiAgICAgICAgPC9Db2x1bW4yPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVIZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbjI+e3Byb3BzLnZhbH08L0NvbHVtbjI+XHJcbiAgICAgICAgICAgICAgICB7Y2VsbH1cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWRlckNlbGw+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVIZWFkZXJDZWxsOyJdfQ==