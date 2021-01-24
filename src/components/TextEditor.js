import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";
import parse from "html-react-parser";

const TextEditor = ({ editorState, handleEditorChange }) => {
  //   const [editorState, setEditorState] = useState({
  //     editorContent: '<h4 style="text-align: center;">Saisissez votre texte</h4>',
  //   });
  // console.log(editorState.editorContent);

  //   const handleEditorChange = (editorContent) => {
  //     save({ editorContent });
  //   };

  //   const save = (newPartialState) => {
  //     setEditorState({ ...newPartialState });
  //   };

  return (
    <Wrapper>
      <Editor
        // apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        apiKey={process.env.REACT_APP_TINY_API_KEY}
        onEditorChange={handleEditorChange}
        value={editorState.editorContent}
        plugins="wordcount image"
        init={{
          icons: "jam",
          skin: "fabric",
          content_css: "document",
          resize: false,
        }}
      />
      {/* <article className="text-edited ">
        {parse(`${editorState.editorContent}`)}
      </article> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  padding: 0 3rem;
  textarea {
    height: 100%;
  }
`;

export default TextEditor;
