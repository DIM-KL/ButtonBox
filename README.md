# ButtonBox

var buttonList = new ButtonBox(optional {'parent' : HTMLElement,
                    'width' : int,
                    'left' : int,
	            'top' : int,
                    'bg_color' : color,
                    'button_color' : color,
                    'margin' : int
                    })


Create list of button in parent use HTML, CSS and JavaScript.

  Parametrs:
    *params{} - hash of optional parametrs;
    	parent -  parent HTMLElement wich will be the container for 'ButtonBox'. Default 'document.body'.
	width - width ButtonBox on the pixel. Default 130.
	left, top - define left and top position of 'ButtonBox'. Default they define - 0;
	margin - space beetween button in the 'ButtonBox'. Default be 0.
	bg_color - background color of 'ButtonBox'. Default color as system.
	button_color - color's of button. Default color as system.
	
  
  Methods:
       *buttonList.createButton(func, title) - Create button in 'buttonList'.
    *params:
        func - callback function wich use then button will be clicked
        title - string of title button.
	
EXAMPLE:



function f1(){alert("f1")};
function f2(){alert("f2")};

var bbox = new ButtonBox({'margin' : 4,
                         'left' : 10,
                         'top' : 90});

bbox.createButton(f1, 'f1');
bbox.createButton(f2, 'f2');

var rbox = new ButtonBox({'margin' : 10,
                          'top' : 10,
                          'left': 60,
                           'width' : 60,
                           'height': 100});
rbox.createButton(f1, 'f1');;
rbox.createButton(f1, 'f1');;
