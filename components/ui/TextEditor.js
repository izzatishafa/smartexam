import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import style untuk Quill editor

const TextEditor = ({ value, onChange }) => {
  // ReactQuill menerima nilai dan handler onChange langsung dari Ant Design Form
  return (
    <div>
      <ReactQuill
        value={value} // Terima nilai dari parent (Form.Item)
        onChange={onChange} // Gunakan handler dari parent
        modules={{
          toolbar: [[{ header: "1" }, { header: "2" }, { font: [] }], [{ list: "ordered" }, { list: "bullet" }], ["bold", "italic", "underline"], ["link"], [{ align: [] }], ["image"]],
        }}
        theme="snow" // Gunakan tema default Quill
      />
    </div>
  );
};

export default TextEditor;
