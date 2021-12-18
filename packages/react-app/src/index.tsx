import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

interface IProps {
  container?: HTMLElement;
}

function render(props: IProps) {
  const { container } = props;

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/react/" : "/"}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出三个声明周期
export async function bootstrap() {
  console.log("bootstrap");
}

export async function mount(props: IProps) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props: IProps) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? (container.querySelector("#root") as Element)
      : (document.querySelector("#root") as Element)
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
