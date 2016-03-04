export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.6.0-canary+7e807172",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 28,
          "column": 0
        }
      },
      "moduleName": "client/templates/magic-crud/form.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","page");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","page-header");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      dom.setAttribute(el3,"class","page-title");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","page-body");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"class","form");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row form-group");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-xs-6 col-sm-3 col-lg-2");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","btn btn-block btn-lg btn-primary");
      dom.setAttribute(el6,"type","submit");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" Salvar");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-xs-6 col-sm-3 col-lg-2");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","btn btn-block btn-lg btn-default");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" Cancelar");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [3, 1]);
      var element2 = dom.childAt(element1, [5]);
      var element3 = dom.childAt(element2, [3, 1]);
      var morphs = new Array(6);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),1,1);
      morphs[1] = dom.createElementMorph(element1);
      morphs[2] = dom.createMorphAt(element1,1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element2, [1, 1]),0,0);
      morphs[4] = dom.createElementMorph(element3);
      morphs[5] = dom.createMorphAt(element3,0,0);
      return morphs;
    },
    statements: [
      ["content","MagicCrud.options.crudTitle",["loc",[null,[4,6],[4,37]]]],
      ["element","action",["saveRecord"],["on","submit"],["loc",[null,[8,23],[8,58]]]],
      ["inline","magic-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[10,14],[10,19]]]]],[],[]],"errors",["subexpr","@mut",[["get","errors",["loc",[null,[11,15],[11,21]]]]],[],[]],"definitions",["subexpr","@mut",[["get","MagicCrud.form",["loc",[null,[12,20],[12,34]]]]],[],[]],"submitted",["subexpr","@mut",[["get","submitted",["loc",[null,[13,18],[13,27]]]]],[],[]]],["loc",[null,[9,6],[13,29]]]],
      ["inline","fa-icon",["floppy-o"],["fixedWidth",true],["loc",[null,[19,75],[19,113]]]],
      ["element","action",["cancelAction"],[],["loc",[null,[22,61],[22,86]]]],
      ["inline","fa-icon",["undo"],["fixedWidth",true],["loc",[null,[22,87],[22,121]]]]
    ],
    locals: [],
    templates: []
  };
}()));