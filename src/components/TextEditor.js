import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";

const TextEditor = ({ editorState, handleEditorChange }) => {
  return (
    <Wrapper>
      <Editor
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
