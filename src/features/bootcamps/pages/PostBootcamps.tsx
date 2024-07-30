import React, { useRef, useState } from 'react';
import NavBar from '../../../components/navBars/NavBar';
import Footer from '../../../components/navBars/Footer';
import JoditEditor from 'jodit-react';

interface PostBootcampsProps {
  placeholder?: string;
}

const PostBootcamps: React.FC<PostBootcampsProps> = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    placeholder: placeholder || 'Start typing...',
    // Add more Jodit Editor configuration options here as needed
  };

  // Update the content on change
  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div>
      <NavBar />
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          // tabIndex={1} // tabIndex of textarea
          onChange={handleChange} // Update content on change
        />
      </div>
      <Footer />
    </div>
  );
};

export default PostBootcamps;