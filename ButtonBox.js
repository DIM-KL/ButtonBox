; 
/**
*ButtonBox._setButton - shared prototype of function to set in ButtonBox
* @param funct{function} - function for each button in ButtonBox
* @param title{string} - caption on button 
*/
ButtonBox._setButton = function(func, title){
    var button = this._params.getButton();
    
    button.style.backgroundColor = this._params.button_color; 
   switch (this._params.vh){
       case 'v': 
           button.style.display = 'block';
           break;
       
       case 'h': 
        button.style.display = 'inline-block';
        break;       
   };
    button.style.width = this._params.width;
    button.style.height = this._params.height;
   
  if(this._buttonArray.length > 0)
     {button.style[this._marginPtr] = this._params.margin;}
    
        button.func = func;
        button.title = title + '';
        button.addEventListener("click", func);
        button.innerHTML = title + '';
        //this._box.insertBefore(button, this._box.firstChild);
        this._box.appendChild(button);
        this._buttonArray.push(button);
    var rectObject = button.getBoundingClientRect();
        this._box.style.width = rectObject.width;
        this._box.style.height = rectObject.height;
      };


/**
*ButtonBox._init
* @param {htmlElement} parent - parent HTMLElement wich will be the container for 'ButtonBox'. Default 'document.body'.
* @param {number} width - width ButtonBox on the pixel. Default 130.
* @param {number} height - height ButtonBox on the pixel. Default 130.
* @param {number} left -  define left position of 'ButtonBox'. Default they define - 0;
* @param {number} top -  define top position of 'ButtonBox'. Default they define - 0;
* @param {color} bg_color - background color of 'ButtonBox'. Default color as system.
* @param {color} button_color - color's of button. Default color as system.
* @param {number} margin - space beetween button in the 'ButtonBox'. Default be 0.
* @param {function}  getButton -  function return button. Default use document.createElement('button')
* @param {enum of string} vh - Must set val of string 'v' or 'h'. Declare how buttons will put in box:
*                     'v' - button will put in column
*                     'h' - button vill put in line
*default set value 'v'
*/

ButtonBox.init = function(params){
  this._params = params || {}; 
  /* var params = params || {};
     var _parent, _width, _height, _left, _top, _margin;
     var _bg_color, _button_color;*/
     var box, buttonArray;

  buttonArray = [];
  
    this._params.parent = params.parent || document.body;
  
    this._params.width = (params.width || 130) + 'px';
    this._params.height = (params.height || '') + 'px';  
    //_height = (params.height || 400) + 'px';
    
    this._params.left = (params.left || 0) + 'px';
    this._params.top = (params.top || 0) + 'px';
  
    this._params.bg_color = params.bg_color || "";
  
    this._params.button_color = params.button_color || "";
    this._params.margin = (params.margin || 0) + 'px';
    this._params.getButton = params.getButton || document.createElement.bind(document, 'button');  
  
    //param vh
    this._params.vh = params.vh || '';
    if (this._params.vh == 'h'){
      this._marginPtr = 'marginLeft';      
    }
    else
      {
        if (params.vh != 'v') {
          console.log('params.vh = ' + params.vh);
          console.log('warning - params vh no set in value "v" or "h" and set in valu default "v". All buttons in this ButtonBox will put on column ');
        } ;
        this._params.vh = 'v';
        this._marginPtr = 'marginTop'  
      }
  
    box = this; //document.createElement('div');
    this._buttonArray = buttonArray;
    this._box = box;
  /*
  box = document.createElement('div');
*/
box.style.position = 'absolute';
box.style.left = this._params.left;
box.style.top = this._params.top;
  
  //debugger;
box.style.display = 'block';
box.style.zIndex = 100;
  ///////////////////////////////////  

box.style.backgroundColor = this._params.bg_color;/*
box.style.width = this._params.width;
box.style.height = this._params.height;*/
  
  
  
  this._params.parent.appendChild(box);
  
  //shadowRoot.appendChild(box);
  

;
  this.setButton = ButtonBox._setButton.bind(this);
      
};


function ButtonBox(params){
  var el = document.createElement('div');
  el.className = "patch_el_ret";//for mark
  ButtonBox.init.apply(el, arguments);
  return el
}
