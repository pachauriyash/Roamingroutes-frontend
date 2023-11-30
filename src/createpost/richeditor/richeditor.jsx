import  { useRef, useEffect } from 'react';
import { Editor } from 'primereact/editor';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import './richeditor.css';
import PropTypes from 'prop-types';

function RichEditor({ content, onContentChange }) {

  const editorRef = useRef(null);

  useEffect(() => {
    // Remove the default PrimeReact toolbar
    const toolbar = document.querySelector('.p-toolbar.p-component.p-editor-toolbar');
    if (toolbar) {
      toolbar.style.display = 'none';
    }
  }, []);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'header': [false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      ['link'],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'color', 'background',
  ];

  const CustomToolbar = () => (
    <div className="custom-toolbar">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <select className="ql-list" defaultValue="">
        <option value="ordered" />
        <option value="bullet" />
      </select>
      <button className="ql-link" />
    </div>
  );

  return (
    <div>
      <Editor
        ref={editorRef}
        style={{ height: '320px' }}
        value={content}
        onTextChange={(e) => onContentChange(e.htmlValue)}
        modules={modules}
        formats={formats}
        headerTemplate={<CustomToolbar />} // Use the custom toolbar
      />
    </div>
  );
}
RichEditor.propTypes = {
    content: PropTypes.string,
    onContentChange: PropTypes.func.isRequired,
  };
  
export default RichEditor;
