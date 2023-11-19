import React, {Component} from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import './Text-editor.css'
import DashboardSideBar from '../../SideBars/DashboardSideBar/DashboardSideBar';

export default class TextEditor extends Component {

      state = {
        editorState: EditorState.createEmpty(),
      };

      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

    render() {
      const {editorState} = this.state;
      console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div className='text-editor-main'>
      <div className='dashboard-texteditor'>
      <DashboardSideBar/>
      </div>
      
      <div className="editor">
        <div className="h1-texteditor">
        <h1> Text Editor </h1>
        </div>
        
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />

         <textarea disabled value={
          draftToHtml(convertToRaw(editorState.getCurrentContent()))
         }></textarea>
      </div>
      </div>
    );
  }
}


