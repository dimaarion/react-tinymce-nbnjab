import React from "react";
import "./style.css";
import { Editor } from "@tinymce/tinymce-react";

class App extends React.Component {
  handleEditorChange = (content = "", editor) => {
    content;
  };

  render() {
    return (
      <Editor
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "image","mentions",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline code | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help|image|link"
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default App;
