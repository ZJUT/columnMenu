// Generated by CoffeeScript 1.4.0
/*

options =
  default: "column"
  data:
    column: ["list of column", "list"]
    another: ["list", "another"]
  arrowPicture: "./pic/arrow-down.png"
  callback: ->
*/

$(function() {
  window.columnMenu = function(options) {
    var available, choose, column, icon, key, list, self, set_column, _fn;
    this.menu = $("<div class='columnMenu'/>");
    this.options = options;
    if (this.options.arrowPicture == null) {
      this.options.arrowPicture = "../pic/arrow-down.png";
    }
    if (options["default"] == null) {
      available = Object.keys(options.data);
      if (available[0] != null) {
        this.options["default"] = available[0];
      } else {
        throw new Error("no data?");
      }
    }
    if (options.data[options["default"]] == null) {
      throw new Error("no data for default column");
    }
    column = $("<header class='title'/>");
    list = $("<section class='list'/>");
    this.column = $("<span class='column'/>");
    icon = $("<img/>");
    self = this;
    this.menu.append(column, list);
    column.append(self.column, icon);
    this.column.text(this.options["default"]);
    icon.attr("src", this.options.arrowPicture);
    set_column = function(key) {
      var name, _i, _len, _ref, _results;
      list.empty();
      self.column.text(key);
      _ref = options.data[key];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        _results.push((function(name) {
          var elem;
          elem = $("<div class='elem'>");
          elem.text(name);
          elem.click(function() {
            return options.callback(name);
          });
          return list.append(elem);
        })(name));
      }
      return _results;
    };
    choose = $("<div class='choose'>");
    column.append(choose);
    choose.hide();
    column.click(function() {
      return choose.slideToggle();
    });
    _fn = function(key) {
      var selection;
      selection = $("<div class='key'>");
      selection.text(key);
      set_column(key);
      selection.click(function() {
        return set_column(key);
      });
      return choose.append(selection);
    };
    for (key in options.data) {
      _fn(key);
    }
    set_column(this.options["default"]);
    return this;
  };
  return columnMenu.prototype.getColumn = function() {
    return this.options.column;
  };
});
