
# columnMenu renders list with options and APIs

### Usage

You many install this with Bower:  

```bash
bower install git://github.com/ZJUT/columnMenu.git
```

After loading jQuery, create menu like this:  

```coffee
test_options =
  default: "current songs"
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

# the put it in page

page = $ "#page"
page.append menu.menu
```

### Todo

Code now works on Chrome on Linux, with test on IE.  

* Compatibility with IE. CSS and JS may fail.  
* Need a better way to display shadow if not supported.  
* This is my firt jQuery plugin, anything happens.  

### Resources

Icon from iconfinder.com:  
http://www.iconfinder.com/icondetails/50783/64/handwriting_icon

### License

BSD