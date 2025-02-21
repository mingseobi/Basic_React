import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Library";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>,
  document.getElementById("root")
);

/**
 * 리액트 Elements는 자바스크립트 객체 형태로 존재한다.
 * 그리고 리액트 Elements는 immutable하고 불변성을 가지고 있다.
 * 이것은 Elements 생성 후에는 children이나 attributes를 바꿀 수 없습니다.
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
