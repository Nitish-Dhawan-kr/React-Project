// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import React, { useState } from "react";

// const Editor2 = () => {
//   const [editorState, setEditorState] = useState("");
//   return (
//     <Editor
//       editorState={editorState}
//       toolbarClassName="toolbarClassName"
//       wrapperClassName="wrapperClassName"
//       editorClassName="editorClassName"
//       onEditorStateChange={this.onEditorStateChange}
//     />
//   );
// };

// export default Editor2;

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const modules = { toolbar: [[{ header: [1, 2, 3, 4, 5, 6, false] }]] };
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  //   ["blockquote", "code-block"],
  //   ["link", "image", "video", "formula"],

  [
    { color: [] },
    //   { background: [] }
  ],
  //   [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //   [{ direction: "rtl" }], // text direction

  //   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //   [{ font: [] }],
  //   [{ align: [] }],

  //   ["clean"], // remove formatting button
];

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactQuill
        // theme="snow"
        value={value}
        onChange={setValue}
        modules={{ toolbar: toolbarOptions }}
      />
      <div>{value}</div>
    </>
  );
}

export default MyComponent;
