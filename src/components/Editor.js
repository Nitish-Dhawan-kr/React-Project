// import React, { useCallback, useState } from "react";
// import JoditEditor from "jodit-react";

// const editorConfig = {
//   // Define the toolbar buttons you want to include
//   buttons: ["bold", "italic", "underline"],
//   // Optionally hide some default panels
//   //   toolbar: true,
//   // Optional: Disable the default toolbar
//   //   toolbarAdaptive: false,
//   // Optional: Disable all extra features
//   // extraButtons: [],
//   // Hide the default panels and actions
//   hidePanels: ["link", "image", "video", "align", "format"],
//   statusbar: false,
// };

// const Editor = () => {
//   const [content, setContent] = useState("");
//   const handleChange = useCallback((newValue) => {
//     setContent(newValue);
//   }, []);

//   return (
//     <>
//       <JoditEditor
//         config={editorConfig}
//         value={content}
//         onChange={handleChange}
//       />
//       <div> {content}</div>
//     </>
//   );
// };

// export default Editor;

// // NEW CODE

// import React, { useCallback, useState } from "react";
// import JoditEditor from "jodit-react";

// // Define the editor configuration
// const editorConfig = {
//   buttons: [
//     "bold",
//     "italic",
//     "underline",
//     "font", // This button should include font-related options
//     "fontcolor", // Add the font color button here
//     // Add other buttons if needed
//   ],
//   hidePanels: ["link", "image", "video", "align", "format"],
//   statusbar: false,
//   // Ensure font color button functionality is included
//   extraButtons: [
//     {
//       name: "fontcolor",
//       tooltip: "Font Color",
//       icon: "color", // Ensure the icon for font color is available
//       exec: (editor) => {
//         const color = prompt("Enter color (hex, rgb, or name):");
//         if (color) {
//           editor.execCommand("foreColor", false, color);
//         }
//       },
//     },
//   ],
// };

// const Editor = () => {
//   const [content, setContent] = useState("");
//   const handleChange = useCallback((newValue) => {
//     setContent(newValue);
//   }, []);

//   return (
//     <>
//       <JoditEditor
//         config={editorConfig}
//         value={content}
//         onChange={handleChange}
//       />
//       <div>{content}</div>
//     </>
//   );
// };

// export default Editor;

import React, { useCallback, useEffect, useState } from "react";
import JoditEditor from "jodit-react";

function htmlToText(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

const redTextButton = {
  name: "RedTextButton",
  icon: '<font color="red"></font>',
  tooltip: "Make Text Red",
  exec: (editor) => {
    console.log(editor.selection.range);
    if (editor.selection.range.collapsed) {
      editor.s.insertHTML(`<font color="red">a</font>`);
    } else {
      let start = editor.selection.range.startOffset;
      let end = editor.selection.range.endOffset;
      editor.s.insertHTML(
        `<font color="red">${text.substring(start, end)}</font>`
      );
    }
  },
};

const editorConfig = {
  buttons: ["bold", "italic", "underline"],
  extraButtons: [redTextButton],
  hidePanels: ["link", "image", "video", "align", "format"],
  // statusbar: false,
};

const Editor = () => {
  const [content, setContent] = useState("");
  const [text, setText] = useState("");
  const handleChange = useCallback((newValue) => {
    setContent(newValue);
  }, []);

  useEffect(() => {
    setText(htmlToText(content));
  }, [content]);

  return (
    <>
      <JoditEditor
        config={editorConfig}
        value={content}
        onChange={handleChange}
      />
      <div>{text}</div>
      <br />
      <br />
      <br />
      <div>{content}</div>
    </>
  );
};

export default Editor;
