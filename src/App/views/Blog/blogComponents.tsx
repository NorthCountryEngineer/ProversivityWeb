import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Button } from '@mui/material';
import { API, graphqlOperation } from 'aws-amplify';
import { createBlog, createBlogPage } from '../../../graphql/mutations';

const WysiwygEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleBoldClick = () => {
    const newEditorState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
    handleEditorChange(newEditorState);
  };

  const handleSaveBlogPost = async () => {
    const blogPost = {
      title: 'My Blog Post',
      content: editorState.getCurrentContent().getPlainText(),
    };
  
    try {
      const result:any = await API.graphql(
        graphqlOperation(createBlog, { input: blogPost })
      );
      console.log('Blog post saved:', result.data.createBlogPost);
    } catch (error) {
      console.error('Error saving blog post:', error);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleBoldClick}>
        Bold
      </Button>
      <div>
        <Editor editorState={editorState} onChange={handleEditorChange} />
      </div>
    </div>
  );
};

export default WysiwygEditor;
