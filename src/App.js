import React,{useEffect} from "react";
import "./style.css";
import { Editor } from "@tinymce/tinymce-react";

function App (){
 const handleEditorChange = (content = "", editor) => {
    content;
  };
useEffect(()=>{
 let g = Object.values(document.getElementsByTagName('div'))
 .map((div)=>console.log(div)); 

},[])
 
    return (
      <Editor
        initialValue=""
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "image",
            "table advtable",
            "fontsizes"
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline  strikethrough superscript subscript codeformat code | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help|image|link|table|fontsize",

          menu: {
            file: {
              title: "File",
              items: "newdocument restoredraft | preview | print "
            },
            edit: {
              title: "Edit",
              items: "undo redo | cut copy paste | selectall | searchreplace"
            },
            view: {
              title: "View",
              items:
                "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen"
            },
            insert: {
              title: "Insert",
              items:
                "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime"
            },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat"
            },
            tools: {
              title: "Tools",
              items: "spellchecker spellcheckerlanguage | code wordcount"
            },
            table: {
              title: "Table",
              items: "inserttable | cell row column | tableprops deletetable"
            },
            help: { title: "Help", items: "help" }
          }
        }}
        onEditorChange={handleEditorChange}
      />
    );
  }


export default App;
