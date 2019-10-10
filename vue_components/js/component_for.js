// vue_component_props_for.html

// todo #2
// todo-list 컴포넌트 구현

Vue.component("todo-list", {
  props: ["passedData"],
  template: "<p>{{passedData.text}}</p>"
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<p>{{ todo.text}}</p>"
});

var app = new Vue({
  el: "#app",
  data: {
    Todos: [
      { id: 0, text: "Learn Vue.js" },
      { id: 1, text: "Learn Component" },
      { id: 2, text: "Learn Props" },
      { id: 3, text: "Learn For Loop" }
    ],

    Languages: [
      { text: "python" },
      { text: "c++" },
      { text: "java" },
      { text: "objective-c" }
    ]
  }
});
