import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import CameraIcon from '@mui/icons-material/CameraAltOutlined';
import Initials from './Initials';

function ProfileImage({ firstName, lastName }) {
  const [imageSrc, setImageSrc] = useState('');

  const handleDrop = (acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    if (acceptedFiles.length > 0) {
      reader.readAsDataURL(acceptedFiles[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageSrc('');
  };

  return (
    <div style={{ position: 'relative' }}>
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt="Profile"
            style={{
              width: '7rem',
              height: '7rem',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: '93%',
              top: '55%',
              color: 'grey',
              cursor: 'pointer',
              padding: '2px',
            }}
            onClick={handleRemoveImage}
          >
            <CameraIcon fontSize="small" />
          </span>
        </>
      ) : (
        <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              style={{
                width: '7rem',
                height: '7rem',
                borderRadius: '50%',
                background: '#0744d3',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <input {...getInputProps()} />
              <Initials InitialsA={firstName} InitialsB={lastName} />
              <CameraIcon style={{
                 position: 'absolute',
                 left: '93%',
                 top: '55%',
                 color: 'grey', }} />
            </div>
          )}
        </Dropzone>
      )}
    </div>
  );
}

export default ProfileImage;


// import React from 'react';
// import CameraIcon from '@mui/icons-material/CameraAltOutlined';
// import Initials from './Initials';

// function ProfileImage({ firstName, lastName }) {
//   return (
//     <div>
//       <Initials InitialsA={firstName} InitialsB={lastName} />
//       <span style={{
//         position: 'absolute',
//         left: '26%',
//         top: '52%'
//       }}
//       ><CameraIcon /></span>
//     </div>
//   );
// }

// export default ProfileImage