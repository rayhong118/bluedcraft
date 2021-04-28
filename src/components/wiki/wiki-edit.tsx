import { Editor } from "@tinymce/tinymce-react";

export const WikiEdit = () => {
  const handleEditorChange = (e: any) => {
    console.log("Content Updated", e.target.getContent());
  };
  return (
    <div>
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
    </div>
  );
};
