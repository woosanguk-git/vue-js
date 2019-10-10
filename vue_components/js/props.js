// to do #1
// sibling-coponent 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록.
// options : template, props

Vue.component("sibling-component", {
  props: ["passedData2"],
  template: "<h2>{{passedData2}}</h2>"
});

Vue.component("child-component", {
  props: ["passedData"],
  template: "<p>{{passedData}}</p>"
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! passed from Parent Component",
    siblingMessage: "Props test message to sibling-comopnent"

    // to do #2
    // data 속성을 한개 더 지정하고 임의의 문자열을 값으로 대입.
    // 새로 지정한 data 속성을 위 sibling-component 에 props 로 전달.
  }
});
