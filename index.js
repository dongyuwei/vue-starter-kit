import bar from "./bar";
import style from "./test.less";
import style2 from "./style2.less";
bar();

const el = document.getElementById("app");
el.className = `global-bar2 ${style2.foo2} ${style.foobar}`;
