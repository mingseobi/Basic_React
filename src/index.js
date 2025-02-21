import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  const tick = () => {
    root.render(
      <React.StrictMode>
        <Clock />
      </React.StrictMode>
    );
  };

  setInterval(tick, 1000);
} else {
  console.error("⚠️ 'root' 엘리먼트를 찾을 수 없습니다.");
}

/**
 * 리액트 Elements는 자바스크립트 객체 형태로 존재한다.
 * 그리고 리액트 Elements는 immutable하고 불변성을 가지고 있다.
 * 이것은 Elements 생성 후에는 children이나 attributes를 바꿀 수 없습니다.
 */

reportWebVitals();
