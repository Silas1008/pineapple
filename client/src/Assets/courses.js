
export const PRODUCTS = [
    { 
      "id": 1,
      "img": "/img/architecture.jpg",
      "title": "Architecture",
      "content": "Modular CSS",
      "snippets":"/* Modular class example */ .button { padding: 10px 20px; border: 1px solid #007bff;  background-color: #007bff; color: #fff;  } .button:hover { background-color: #0056b3; border-color: #0056b3; }",
      "snippets1":"/* Modular class example */ .button { padding: 10px 20px; border: 1px solid #007bff;  background-color: #007bff; color: #fff;  } .button:hover { background-color: #0056b3; border-color: #0056b3; }",
      "isDone": false,
      
    },
    {
      "id": 2,
      "img": "/img/Background.jfif",
      "title": "Background",
      "content": "Background Properties",
      "snippets":"background: inherit;  background: initial; background: revert; background: revert-layer; background: unset;",
      "snippets1":"img { display: block;  margin-left: auto; margin-right: auto; width: 50%; }",
      "isDone": false,
      
    },
    {
      "id": 3,
      "img": "/img/box_model.png",
      "title": "Box-model",
      "content": "Padding",
      "snippets":"  background-color: lightgrey;width: 300px;border: 15px solid green;padding: 50px;margin: 20px; ",
      "snippets1":"p.dotted {border-style: dotted;}; p.dashed {border-style: dashed;}; p.solid {border-style: solid;}; p.double {border-style: double;}p.groove {border-style: groove;}; p.ridge {border-style: ridge;}; p.inset {border-style: inset;} ;p.outset {border-style: outset;}; p.none {border-style: none;}; p.hidden {border-style: hidden;}; p.mix {border-style: dotted dashed solid double;}",
      "isDone": false,
      
    },
    {
      "id": 4,
      "img": "/img/cascade-flow.png",
      "title": "Cascading Flow",
      "content": "Selector Hierarchy",
      "snippets":"p {color: blue;} .highlight {background-color: yellow;} #header { font-size: 24px; } ul li {list-style: circle;} input[type='text'] { border: 1px solid #ccc;} a:hover {color: red;} * { margin: 0; padding: 0;} h1, h2, h3 {font-family: Arial, sans-serif;}",
      "snippets1":"#id {color: blue;} .class {color: green;} p {color: red;} ",
      "isDone": false,
      
    },
  
    {
      "id": 5,
      "img": "/img/colors.png",
      "title": "Colors",
      "content": "Color Values",
      "snippets":"/* HEX value*/ {color: #92a8d1;} /* RGB value */ {color: rgb(201, 76, 76);} /* RGBA value */ {color: rgba(201, 76, 76, 0.6);} /* HSLA value */ {color: hsla(89, 43%, 51%, 0.6);}",
      "snippets1":"color: red;  color: #00ff00; color: rgb(0,0,255);",
      "isDone": false,
      
    },
    {
      "id": 6,
      "img": "/img/display.png",
      "title": "Display",
      "content": "Display Values",
      "snippets":" p  {display: none;} p {display: inline;} p {display: block;} p {display: inline-block;}",
      "isDone": false,
      
    },
    {
      "id": 7,
      "img": "/img/flexbox.png",
      "title": "Flexbox",
      "content": "Flex Container and Items",
      "snippets":"flex-container { display: flex; align-self: center",
      "snippets1":"<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
      "isDone": false,
      
    },
    {
      "id": 8,
      "img": "/img/font.jpg",
      "title": "Font",
      "content": "Font Families",
      "snippets":"font-family: Arial, Helvetica, sans-serif;",
      "snippets1":"div.a {font-size: 15px;} div.b { font-size: large; } div.c { font-size: 150%; }",
      "isDone": false,
      
    },
    {
      "id": 9,
      "img": "/img/grid.png",
      "title": "Grids",
      "content": "Grid Properties",
      "snippets":"grid: 80px 120px / auto auto auto;",
      "snippets1":".item1 { grid-area: header; } .item2 { grid-area: menu; } .item3 { grid-area: main; } .item4 { grid-area: right; } .item5 { grid-area: footer; }  .grid-container {  display: grid;  grid: 'header header header header header header' 'menu main main main right right' 'menu footer footer footer footer footer';  grid-gap: 10px; background-color: #2196F3; padding: 10px; }",
      "isDone": false,
      
    },
    {
      "id": 10,
      "img": "/img/houdini.jpg",
      "title": "Houdini",
      "content": "Explore Houdini Features",
      "snippets":"CSS.paintWorklet.addModule('csscomponent.js');",
      "snippets1":".fancy { background-image: paint(headerHighlight);}",
      "isDone": false,
      
    },
    {
      "id": 11,
      "img": "/img/layout.png",
      "title": "Layout",
      "content": "Media Queries",
      "snippets":"@media (min-height: 680px), screen and (orientation: portrait) {   /* … */} ",
      "snippets1":"<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
      "isDone": false,
      
    },
    {
      "id": 12,
      "img": "/img/processor.png",
      "title": "Processors",
      "content": "Research Preprocessor Options",
      "snippets":"/* SASS variable definition */ $primary-color: #007bff;  /* Usage of the variable in a style rule */ .button { background-color: $primary-color; }",
      "snippets1":" /* bash */sass input.scss output.css",
      "isDone": false,
      
    },
    {
      "id": 13,
      "img": "/img/transform.png",
      "title": "Transform",
      "content": "Transform Functions",
      "snippets":"  transform: translate(50px, 20px); | transform: scale(1.5) | transform: rotate(45deg);",
      "snippets1":"  transform: rotate(45deg); ",
      "isDone": false,
      
    },
    {
      "id": 14,
      "img": "/img/transition.png",
      "title": "Transition",
      "content": "Transition Properties",
      "snippets":" transition-property: width;",
      "snippets1":"width: 100px; transition: width .35s ease-in-out;",
      "isDone": false,
      
    },
    {
      "id": 15,
      "img": "/img/variable.png",
      "title": "Variables",
      "content": "Syntax and Declaration",
      "snippets":"selector { property1: value1; property2: value2; /* This is a CSS comment */ }",
      "snippets1":":root {--main-color: #3498db;} body { background-color: var(--main-color); }",
      "isDone": false,
      
    }
  ]