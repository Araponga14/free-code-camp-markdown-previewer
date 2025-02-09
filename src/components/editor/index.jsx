import './Editor.css';

function Editor({text, setText}) {
  return (
    <>
    <div id="editor-container">
      <h3>EDITOR</h3>
    <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={42}
        cols={50}
    >
    </textarea>
    </div>
    </>
  );
}

export default Editor;