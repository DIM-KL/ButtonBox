# ButtonBox

var buttonList = new ButtonBox(optional {'parent',
                    'width',
                    'left',
	            'top',
                    'bg_color',
                    'button_color',
                    'margin'
                    })


Create list of button in parent use HTML, CSS and JavaScript.

  Parametrs:
    *params{} - hash of optional parametrs;
  
  Methods:
       *buttonList.createButton(func, title):
        Create button in 'buttonList'.
    *params:
        func - callback function wich use then button will be clicked
        title - strin of title button
