import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";

export const WikiEdit = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    let originalContent = "";
    setText(originalContent);
  }, []);
  const handleEditorChange = (e: any) => {
    let content = e.target.getContent();
    console.log("Content Updated", content);
    setText(content);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      {text}
      <form onSubmit={handleFormSubmit}>
        <Editor
          initialValue="<p>Initial content</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | \
      alignleft aligncenter alignright | \
      bullist numlist outdent indent | help",
          }}
          onChange={(e) => handleEditorChange(e)}
        />
        <button> Submit</button>
      </form>
    </div>
  );
};
