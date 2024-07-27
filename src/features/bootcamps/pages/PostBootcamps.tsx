import React, { useRef, useState } from 'react';
import NavBar from '../../../components/navBars/NavBar';
import Footer from '../../../components/navBars/Footer';
import JoditEditor from 'jodit-react';

const PostBootcamps = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const config = {
    readonly: false,
    placeholder: placeholder || 'Start typing...',
    // Add more Jodit Editor configuration options here as needed
  };

  // Focus on the editor after each character is entered
  const handleKeyDown = (e) => {
    // Update the content with the new character
    setContent(prevContent => prevContent + e.key);
    
    // Focus on the editor
    editor.current?.editor?.focus();
  };

  return (
    <div>
      <NavBar />
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onKeyDown={handleKeyDown} // Focus on the editor after each character
          onBlur={newContent => setContent(newContent)} // Update content on blur
          onChange={newContent => setContent(newContent)} // Update content on change
        />
      </div>
      <Footer />
    </div>
  );
};

export default PostBootcamps;
