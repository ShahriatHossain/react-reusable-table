"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column2 = exports.Column1 = exports.Row = exports.Down = exports.Up = exports.Left = exports.Right = exports.ITagDown = exports.ITagUp = exports.TableFooterCell = exports.RespTableFooter = exports.TableBodyCell = exports.RespTableRow = exports.RespTableBody = exports.TableHeaderCell = exports.RespTableHeader = exports.RespTableCaption = exports.RespTable = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    flex: 25 %;\n    padding: 10px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    flex: 50 %;\n    padding: 10px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    cursor: pointer;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    cursor: pointer;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    border: solid black;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 3px;\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    cursor: pointer;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    border: solid black;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 3px;\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: table-cell;\n    padding: 10px;\n    text-align: justify;\n    border-bottom: 1px solid black;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: table-footer-group;\n    background-color: gray;\n    font-weight: bold;\n    font-size: 15px;\n    color: rgba(255, 255, 255, 0.45);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: table-cell;\n    border: 1px solid #000;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: table-row;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: table-row-group;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: #495057;\n    background-color: #e9ecef;\n    border-color: #dee2e6;\n    display: table-cell;\n    padding: 10px;\n    text-align: justify;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: table-header-group;\n    background-color: gray;\n    font-weight: bold;\n    font-size: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: table-caption;\n    text-align: center;\n    font-size: 1.5em;\n    font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: table;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// table container
var RespTable = _styledComponents["default"].div(_templateObject()); // table caption


exports.RespTable = RespTable;

var RespTableCaption = _styledComponents["default"].div(_templateObject2()); // table header


exports.RespTableCaption = RespTableCaption;

var RespTableHeader = _styledComponents["default"].div(_templateObject3()); // table header cell


exports.RespTableHeader = RespTableHeader;

var TableHeaderCell = _styledComponents["default"].div(_templateObject4()); // table body


exports.TableHeaderCell = TableHeaderCell;

var RespTableBody = _styledComponents["default"].div(_templateObject5()); // table row


exports.RespTableBody = RespTableBody;

var RespTableRow = _styledComponents["default"].div(_templateObject6()); // table row cell


exports.RespTableRow = RespTableRow;

var TableBodyCell = _styledComponents["default"].div(_templateObject7()); // table footer


exports.TableBodyCell = TableBodyCell;

var RespTableFooter = _styledComponents["default"].div(_templateObject8()); // footer cell


exports.RespTableFooter = RespTableFooter;

var TableFooterCell = _styledComponents["default"].div(_templateObject9());

exports.TableFooterCell = TableFooterCell;

var ITagUp = _styledComponents["default"].i(_templateObject10());

exports.ITagUp = ITagUp;

var ITagDown = _styledComponents["default"].i(_templateObject11());

exports.ITagDown = ITagDown;

var Right = _styledComponents["default"].div(_templateObject12());

exports.Right = Right;
{}

var Left = _styledComponents["default"].div(_templateObject13());

exports.Left = Left;

var Up = _styledComponents["default"].div(_templateObject14());

exports.Up = Up;

var Down = _styledComponents["default"].div(_templateObject15());

exports.Down = Down;

var Row = _styledComponents["default"].div(_templateObject16());
/* Create two equal columns that sits next to each other */


exports.Row = Row;

var Column1 = _styledComponents["default"].div(_templateObject17());

exports.Column1 = Column1;

var Column2 = _styledComponents["default"].div(_templateObject18());

exports.Column2 = Column2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWJsZS9TdHlsZXMuanMiXSwibmFtZXMiOlsiUmVzcFRhYmxlIiwic3R5bGVkIiwiZGl2IiwiUmVzcFRhYmxlQ2FwdGlvbiIsIlJlc3BUYWJsZUhlYWRlciIsIlRhYmxlSGVhZGVyQ2VsbCIsIlJlc3BUYWJsZUJvZHkiLCJSZXNwVGFibGVSb3ciLCJUYWJsZUJvZHlDZWxsIiwiUmVzcFRhYmxlRm9vdGVyIiwiVGFibGVGb290ZXJDZWxsIiwiSVRhZ1VwIiwiaSIsIklUYWdEb3duIiwiUmlnaHQiLCJMZWZ0IiwiVXAiLCJEb3duIiwiUm93IiwiQ29sdW1uMSIsIkNvbHVtbjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDTyxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFmLEMsQ0FLUDs7Ozs7QUFDTyxJQUFNQyxnQkFBZ0IsR0FBR0YsNkJBQU9DLEdBQVYsb0JBQXRCLEMsQ0FPUDs7Ozs7QUFDTyxJQUFNRSxlQUFlLEdBQUdILDZCQUFPQyxHQUFWLG9CQUFyQixDLENBT1A7Ozs7O0FBQ08sSUFBTUcsZUFBZSxHQUFHSiw2QkFBT0MsR0FBVixvQkFBckIsQyxDQVNQOzs7OztBQUNPLElBQU1JLGFBQWEsR0FBR0wsNkJBQU9DLEdBQVYsb0JBQW5CLEMsQ0FJUDs7Ozs7QUFDTyxJQUFNSyxZQUFZLEdBQUdOLDZCQUFPQyxHQUFWLG9CQUFsQixDLENBSVA7Ozs7O0FBQ08sSUFBTU0sYUFBYSxHQUFHUCw2QkFBT0MsR0FBVixvQkFBbkIsQyxDQUtQOzs7OztBQUNPLElBQU1PLGVBQWUsR0FBR1IsNkJBQU9DLEdBQVYsb0JBQXJCLEMsQ0FRUDs7Ozs7QUFDTyxJQUFNUSxlQUFlLEdBQUdULDZCQUFPQyxHQUFWLG9CQUFyQjs7OztBQU9BLElBQU1TLE1BQU0sR0FBR1YsNkJBQU9XLENBQVYscUJBQVo7Ozs7QUFVQSxJQUFNQyxRQUFRLEdBQUdaLDZCQUFPVyxDQUFWLHFCQUFkOzs7O0FBVUEsSUFBTUUsS0FBSyxHQUFHYiw2QkFBT0MsR0FBVixxQkFBWDs7O0FBR0osQ0FFRjs7QUFFTSxJQUFNYSxJQUFJLEdBQUdkLDZCQUFPQyxHQUFWLHFCQUFWOzs7O0FBS0EsSUFBTWMsRUFBRSxHQUFHZiw2QkFBT0MsR0FBVixxQkFBUjs7OztBQU1BLElBQU1lLElBQUksR0FBR2hCLDZCQUFPQyxHQUFWLHFCQUFWOzs7O0FBTUEsSUFBTWdCLEdBQUcsR0FBR2pCLDZCQUFPQyxHQUFWLHFCQUFUO0FBSVA7Ozs7O0FBQ08sSUFBTWlCLE9BQU8sR0FBR2xCLDZCQUFPQyxHQUFWLHFCQUFiOzs7O0FBS0EsSUFBTWtCLE9BQU8sR0FBR25CLDZCQUFPQyxHQUFWLHFCQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG4vLyB0YWJsZSBjb250YWluZXJcclxuZXhwb3J0IGNvbnN0IFJlc3BUYWJsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5gO1xyXG5cclxuLy8gdGFibGUgY2FwdGlvblxyXG5leHBvcnQgY29uc3QgUmVzcFRhYmxlQ2FwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuLy8gdGFibGUgaGVhZGVyXHJcbmV4cG9ydCBjb25zdCBSZXNwVGFibGVIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5gO1xyXG5cclxuLy8gdGFibGUgaGVhZGVyIGNlbGxcclxuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZGVyQ2VsbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbmA7XHJcblxyXG4vLyB0YWJsZSBib2R5XHJcbmV4cG9ydCBjb25zdCBSZXNwVGFibGVCb2R5ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuYDtcclxuXHJcbi8vIHRhYmxlIHJvd1xyXG5leHBvcnQgY29uc3QgUmVzcFRhYmxlUm93ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuYDtcclxuICAgXHJcbi8vIHRhYmxlIHJvdyBjZWxsXHJcbmV4cG9ydCBjb25zdCBUYWJsZUJvZHlDZWxsID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5gO1xyXG5cclxuLy8gdGFibGUgZm9vdGVyXHJcbmV4cG9ydCBjb25zdCBSZXNwVGFibGVGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbmA7XHJcblxyXG4vLyBmb290ZXIgY2VsbFxyXG5leHBvcnQgY29uc3QgVGFibGVGb290ZXJDZWxsID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJVGFnVXAgPSBzdHlsZWQuaWBcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gOyBcclxuXHJcbmV4cG9ydCBjb25zdCBJVGFnRG93biA9IHN0eWxlZC5pYFxyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDsgXHJcbiAgXHJcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5gOyB7XHJcbiAgICBcclxufVxyXG4gIFxyXG5leHBvcnQgY29uc3QgTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG5gOyBcclxuICBcclxuZXhwb3J0IGNvbnN0IFVwID0gc3R5bGVkLmRpdmBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDsgXHJcbiAgXHJcbmV4cG9ydCBjb25zdCBEb3duID0gc3R5bGVkLmRpdmBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gOyBcclxuXHJcbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbmV4cG9ydCBjb25zdCBDb2x1bW4xID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6IDUwICU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gOyBcclxuXHJcbmV4cG9ydCBjb25zdCBDb2x1bW4yID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6IDI1ICU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gOyJdfQ==