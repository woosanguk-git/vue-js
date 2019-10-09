Vue.component("todo-item", {
  template: "<p>This is a child component</p>"
});
Vue.component("todo-footer", {
  template: "<p> this is another child global components</p>"
});
// training #1 - `todo-footer` component global enroll
// <p> this is another child global components</p> 를 template 으로 갖는 컴포넌트 등록

var local_cmp_todoFooter = {
  template: "<p> this is another child local components</p>"
};

var app = new Vue({
  el: "#app",
  data: {
    message: "this is a parent componet"
  },
  components: {
    "todo-footer": local_cmp_todoFooter
  }

  // training #2 - `todo-fotter` component local enroll
  // <p> this is another child local components</p> 를 template 으로 갖는 컴포넌트 등록
});
