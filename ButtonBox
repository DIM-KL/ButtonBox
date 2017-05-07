; function ButtonBox(params){
     var params = params || {};
     var _parent, _width, _height, _left, _top, _margin;
     var _bg_color, _button_color;
     var box, buttonArray, shadowRoot;

  buttonArray = [];
  
    _parent = params.parent || document.body;
  
    _width = (params.width || 130) + 'px';
    //_height = (params.height || 400) + 'px';
    
    _left = (params.left || 0) + 'px';
    _top = (params.top || 0) + 'px';
  
    _bg_color = params.bg_color || "";
  
    _button_color = params.button_color || "";
   _margin = (params.margin || 0) + 'px';
  shadowRoot = document.createElement('div');
  
  box = document.createElement('div');
  box.className = 'box';
  
shadowRoot.style.position = 'absolute';
shadowRoot.style.left = _left ;
shadowRoot.style.top = _top ;
  debugger;
shadowRoot.style.display = 'block';
shadowRoot.style.zIndex = 100;
    

box.style.backgroundColor = _bg_color;
box.style.width = _width;
box.style.height = _height;
  
  
     
    var root = shadowRoot.createShadowRoot();
  root.innerHTML = "<content></content>";
  _parent.appendChild(shadowRoot);
  
  shadowRoot.appendChild(box);
  shadowRoot.resetStyleInheritance = true;

;
  this.createButton = function(func, title){
    var button = document.createElement('button');
    
    button.style.backgroundColor = _button_color; 
    button.style.display = 'block';
    button.style.width = "100%";
    button.style.marginTop = _margin;
    
        button.func = func;
        button.title = title + '';
        button.addEventListener("click", func);
        button.innerHTML = title + '';
        box.insertBefore(button, box.firstChild);
        buttonArray.push(button);
      };
      
};
