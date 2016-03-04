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
          "line": 20,
          "column": 0
        }
      },
      "moduleName": "client/templates/magic-crud/table.hbs"
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
      dom.setAttribute(el2,"class","page-header clearfix");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      dom.setAttribute(el3,"class","page-title pull-left");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"class","add btn btn-sm btn-success pull-right");
      dom.setAttribute(el3,"type","button");
      dom.setAttribute(el3,"name","button");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-fw fa-plus");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("  Adicionar");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","page-body row");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-12");
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
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element1, [3]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
      morphs[1] = dom.createElementMorph(element2);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [3, 1]),1,1);
      return morphs;
    },
    statements: [
      ["content","MagicCrud.options.tableTitle",["loc",[null,[4,6],[4,38]]]],
      ["element","action",["goToAction","new"],[],["loc",[null,[6,86],[6,115]]]],
      ["inline","imdt-table",[],["sortProperties",["subexpr","@mut",[["get","MagicCrud.table.sortProperties",["loc",[null,[12,23],[12,53]]]]],[],[]],"content",["subexpr","@mut",[["get","model",["loc",[null,[13,16],[13,21]]]]],[],[]],"tableClassNames","table table-striped table-hover table-bordered","columns",["subexpr","@mut",[["get","MagicCrud.table.columns",["loc",[null,[15,16],[15,39]]]]],[],[]],"goToAction","goToAction"],["loc",[null,[11,6],[16,33]]]]
    ],
    locals: [],
    templates: []
  };
}()));