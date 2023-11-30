import  { useState } from 'react';
import axios from 'axios';
import "./createpost.css"
import RichEditor from './richeditor/richeditor'
import PropTypes from 'prop-types';

const Editpost = ({articleData, handleArticlePublish}) => {
    // console.log(articleData)
  // const oldcoverphoto = articleData.coverphoto;
  // const oldimagephoto = articleData.image1;
  // console.log(oldcoverphoto);
  // console.log(oldimagephoto);
  const [formStatus, setFormStatus] = useState('Sumit Changes');
  const [title, setTitle] = useState(articleData.title); // Title of the post
  const [editorContent1, setEditorContent1] = useState(articleData.content1);
  const [editorContent2, setEditorContent2] = useState(articleData.content2);
  const [editorContent3, setEditorContent3] = useState(articleData.content3);
  const [coverphoto, setcoverPhoto] = useState(null);
  const [imagephoto, setimagePhoto] = useState(null);
  const [tags, setTags] = useState(articleData.tags);
  const [tagInput, setTagInput] = useState('');
  const [Heading1,setheading1] = useState(articleData.heading1);
  const [Heading2,setheading2] = useState(articleData.heading2);
  const [postType, setPostType] = useState(articleData.types); // Default to 'Blog'

  

    // Function to convert a file to base64 Data URL
const fileToBase64 = (file, callback) => {
    if(file==null){
        callback(null);
    }
    if (file instanceof Blob || file instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type');
      callback(null);
    }
  };
  
  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  }
  const addTag = () => {
    if (tagInput.trim() !== '' && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  }
  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Check if editorContent1 is empty
    if (editorContent1.trim() === '') {
      alert('Content1 is required!');
      return;
    }
  
    setFormStatus('Editing...');
    
    // Convert coverphoto and imagephoto to base64
    fileToBase64(coverphoto, (coverphotoBase64) => {
      fileToBase64(imagephoto, (imagephotoBase64) => {
        let articledata = {
          types: postType,
          postTitle: title,

          coverphoto: coverphotoBase64==null ?articleData.coverphoto:coverphotoBase64,
          heading1: Heading1,
          content1: editorContent1,

          image1: imagephotoBase64==null ?articleData.image1:imagephotoBase64,
          content2: editorContent2,
          heading2: Heading2,
          content3: editorContent3,
          tags: tags,
        };
        // console.log(articledata);
        // Now you can send articledata to your server or perform other actions
        sendArticleData(articledata);
        
      });
    });
};
const sendArticleData = async (articledata) => {
    try {
      // Make PATCH request to localhost:9000/editarticle/:articleId
      const response = await axios.patch(`${import.meta.env.VITE_YOUR_ENDPOINT}/editarticle/${articleData._id}`,{ articledata:articledata}, {
        withCredentials: true, // Include credentials (cookies)
      });
  
      // Handle the response as needed
      console.log('Server response:', response.data);
  
      // Reset all states after successful submission
      resetForm();
      handleArticlePublish();
    //   console.log(articledata);
    } catch (error) {
      console.error('Error submitting article:', error);
      // Handle error as needed
    }
  };
  

  const handleEditorChange = (content) => {
    setEditorContent1(content);
  }
  const handleEditorChange2 = (content) => {
    setEditorContent2(content);
  }
  const handleEditorChange3 = (content) => {
    setEditorContent3(content);
  }
  const handlecoverChange = (e) => {
    const file = e.target.files[0];
    setcoverPhoto(file);
  }
  const handleimageChange = (e) => {
    const file = e.target.files[0];
    setimagePhoto(file);
  }
  const resetForm = () => {
    setFormStatus('Changes Done');
    setTitle('');
    setEditorContent1('');
    setEditorContent2('');
    setEditorContent3('');
    setcoverPhoto(null);
    setimagePhoto(null);
    setTags([]);
    setTagInput('');
    setheading1('');
    setheading2('');
    setPostType('Blog');

  };



  return (
    <div className="container2">
      <div className="formheading">
        <div className="content-88">
          <div className={`headingg-3 `}>Publish Your Article</div>
          <p className={`pp`}>Have a question or need assistance? Contact Us!</p>
        </div>
      </div>
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label" htmlFor="postType">
              Post Type
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="blog"
                name="postType"
                value="Blog"
                checked={postType === 'Blog'}
                onChange={() => setPostType('Blog')}
              />
              <label className="form-check-label" htmlFor="blog">
                Blog
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="destination"
                name="postType"
                value="Destination"
                checked={postType === 'Destination'}
                onChange={() => setPostType('Destination')}
              />
              <label className="form-check-label" htmlFor="destination">
                Destination
              </label>
            </div>
            </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="title">
                Title*
            </label>
            <input
                className="form-control"
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="coverphoto">
                 Cover Photo*
            </label>
            <input className='coverphotos' type="file" id="photo" name="coverphoto" onChange={handlecoverChange}/>
        </div>
        {(
            <div className="mb-3">
                <label className="form-label" htmlFor="coverphoto">
                    Uploaded Cover Photo
                </label>
                <img className='coverphotos' src={coverphoto==null? articleData.coverphoto :URL.createObjectURL(coverphoto)} alt="Uploaded cover Photo" />
            </div>
        )}
        <div className="md-form mb-0">
            <label className="form-label" htmlFor="Heading1">
                Heading1*
            </label>
            <input
                className="form-control"
                type="text"
                id="Heading1"
                name="Heading1"
                required
                value={Heading1}
                onChange={(e) => setheading1(e.target.value)}
            />
        </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Content1">
              Content1*
            </label>
            <RichEditor content={editorContent1} onContentChange={handleEditorChange} />
          </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="imagephoto">
                Image(optional)
            </label>
            <input className='coverphotos' type="file" id="photo" name="imagephoto" onChange={handleimageChange}/>
        </div>
        {(
            <div className="mb-3">
                <label className="form-label" htmlFor="coverphoto">
                    Uploaded Image
                </label>
                <img className='coverphotos' src={imagephoto==null?articleData.image1 :URL.createObjectURL(imagephoto)} alt="Uploaded cover Photo" />
            </div>
        )}
          <div className="mb-3">
            <label className="form-label" htmlFor="Content1">
              Content2(optional)
            </label>
            <RichEditor content={editorContent2} onContentChange={handleEditorChange2} />
          </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="Heading2">
                Heading2(optional)
            </label>
            <input
                className="form-control"
                type="text"
                id="Heading2"
                name="Heading2"
                value={Heading2}
                onChange={(e) => setheading2(e.target.value)}
            />
        </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Content1">
              Content3(optional)
            </label>
            <RichEditor content={editorContent3} onContentChange={handleEditorChange3} />
          </div>
          <div className="mb-3">
          <label className="form-label" htmlFor="tags">
          Tags
        </label>
        <div className="d-flex align-items-center">
          <input
            type="text"
            id="tags"
            name="tags"
            className="form-control"
            value={tagInput}
            onChange={handleTagChange}
          />
          <button type="button" className="btn btn-secondary ms-2" onClick={addTag}>
            Add Tag
          </button>
            </div>
          </div>
          {tags.length > 0 && (
        <div className="mb-3">
          <label className="form-label" htmlFor="selectedTags">
            Selected Tags
          </label>
          <div className="d-flex flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2 mb-2">
                {tag}
                <button
                  type="button"
                  className="btn-close btn-close-white ms-2"
                  onClick={() => removeTag(index)}
                ></button>
              </span>
            ))}
          </div>
        </div>
      )}
          <div className='xyz'>
            <button className="btn btn-dark" type="submit">
              {formStatus}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
Editpost.propTypes = {
  articleData: PropTypes.object,
  handleArticlePublish: PropTypes.func,
};
export default Editpost;
