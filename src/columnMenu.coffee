
###

options =
  default: "column"
  data:
    column: ["list of column", "list"]
    another: ["list", "another"]
  arrowPicture: "./pic/arrow-down.png"
  callback: ->

###
$ ->
  window.columnMenu = (options) ->

    @menu = $("<div class='columnMenu'/>")
    @options = options

    unless @options.arrowPicture?
      @options.arrowPicture = "../pic/arrow-down.png"

    unless options.default?
      available = Object.keys options.data
      if available[0]?
        @options.default = available[0]
      else throw new Error "no data?"

    unless options.data[options.default]?
      throw new Error "no data for default column"

    column = $ "<header class='title'/>"
    list = $ "<section class='list'/>"
    @column = $ "<span class='column'/>"
    icon = $ "<img/>"

    self = @

    @menu.append column, list
    column.append self.column, icon

    @column.text @options.default
    icon.attr "src", @options.arrowPicture

    set_column = (key) ->
      list.empty()
      self.column.text key
      for name in options.data[key]
        do (name) ->
          elem = $ "<div class='elem'>"
          elem.text name
          elem.click -> options.callback name
          list.append elem

    choose = $ "<div class='choose'>"
    column.append choose
    choose.hide()
    column.click -> choose.slideToggle()

    for key of options.data
      do (key) ->
        selection = $ "<div class='key'>"
        selection.text key
        set_column key
        selection.click -> set_column key
        choose.append selection

    set_column @options.default

    @

  columnMenu.prototype.getColumn = ->
    @options.column