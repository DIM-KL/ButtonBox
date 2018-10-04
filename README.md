# ButtonBox

<pre>
`var buttonList = new ButtonBox(optional {'parent' : HTMLElement,
                    'width' : int,
                    'left' : int,
	            'top' : int,
                    'bg_color' : color,
                    'button_color' : color,
                    'margin' : int
                    })`
</pre>

Create list of button in parent use HTML, CSS and JavaScript.

##  Parametrs:  

 **params{}**  - hash of optional parametrs:
- **parent** -  parent HTMLElement wich will be the container for 'ButtonBox'. Default *'document.body'*.  
- **width** - width ButtonBox on the pixel. Default *130*.  
- **left**, **top** - define left and top position of 'ButtonBox'. Default they define - *0*;
- **margin** - space beetween button in the 'ButtonBox'. Default be *0*.
- **bg_color** - background color of 'ButtonBox'. Default color as system.
- **button_color** - color's of button. Default color as system.
- **getButton** -  function return button. Default use *document.createElement('button')*
- **vh** - Must set val of string 'v' or 'h'. Declare how buttons will put in box:
	- *'v'* - button will put in column
	- *'h'* - button vill put in line
default set value *'v'*
  
## Methods: 
 **createButton(func, title)** - Create button in 'buttonList'. **params:**  
1. **func** - callback function wich use then button will be clicked  
2. **title** - string of title button.


# EXAMPLE:
<pre>
`function f1(){alert("f1")};
function f2(){alert("f2")};

var bbox = new ButtonBox({'margin' : 4,
                         'left' : 10,
                         'top' : 90});

bbox.setButton(f1, 'f1');
bbox.setButton(f2, 'f2');

//debugger;;/*
var rbox = new ButtonBox({'margin' : 10,
                          'top' : 10,
                          'left': 150,
                           'width' : 60,
                           'height': 100});
rbox.setButton(f1, 'f1');;
rbox.setButton(f1, 'f1');;

var hbox = new ButtonBox({'margin' : 10,
                          'top' : 230,
                          'left': 10,
                           //'width' : 60,
                           
                            'vh' : 'h'});
hbox.setButton(f1, 'hf1');;
hbox.setButton(f2, 'hf2');;
`
</pre>
