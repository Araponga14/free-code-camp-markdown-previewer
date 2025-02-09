import { marked } from "marked";
import { Component } from "react";
import './Preview.css'


function Preview({ text }) {

  return (
    <>
      <div id="preview-container">
        <h3>PREVIEW</h3>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text)}}
        />
      </div>
    </>
  );
}

export default Preview;
