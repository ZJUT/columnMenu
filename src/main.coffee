
$ ->
  log = ->
    console.log arguments...

  test_options =
    data:
      "current songs": [
        "this is a song"
        "not a song"
        "nice"
      ]
      "history": [
        "ok"
        "old song by who"
        "someone like you"
        "dying"
        "in the sun"
        "rain"
      ]
      "more": [
        "empty"
      ]
    callback: (name) ->
      elem = $ "<div>"
      elem.text name
      $("#out").append elem
  
  menu = new columnMenu test_options

  page = $ "#page"
  page.append menu.menu

  # log menu