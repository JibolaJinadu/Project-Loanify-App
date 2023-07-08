import React, { useContext, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import CameraIcon from '@mui/icons-material/CameraAltOutlined';
import Initials from './Initials';
import { AuthContext } from '../AuthContext';

function ProfileImage() {
  const { imageSrc, firstName, lastName, onUpdateImage, onRemoveImage } =
    useContext(AuthContext);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      onUpdateImage(savedImage);
    }
  }, []);

  const handleDrop = (acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const newImageSrc = e.target.result;
      onUpdateImage(newImageSrc);
      localStorage.setItem('profileImage', newImageSrc);
    };

    if (acceptedFiles.length > 0) {
      reader.readAsDataURL(acceptedFiles[0]);
    }
  };

  const handleRemoveImage = () => {
    onRemoveImage();
    localStorage.removeItem('profileImage');
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
              bottom: '0',
              color: 'black',
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
                border: '0.5px solid #0744d3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <input {...getInputProps()} />
              <Initials InitialsA={firstName[0]} InitialsB={lastName[0]} />
              <CameraIcon
                style={{
                  position: 'absolute',
                  left: '93%',
                  bottom: '0',
                  color: 'black',
                }}
              />
            </div>
          )}
        </Dropzone>
      )}
    </div>
  );
}

export default ProfileImage;

// import React, { useState, useEffect } from 'react';
// import Dropzone from 'react-dropzone';
// import CameraIcon from '@mui/icons-material/CameraAltOutlined';
// import Initials from './Initials';

// function ProfileImage({ firstName, lastName }) {
//   const [imageSrc, setImageSrc] = useState('');

//   useEffect(() => {
//     const savedImage = localStorage.getItem('profileImage');
//     if (savedImage) {
//       setImageSrc(savedImage);
//     }
//   }, []);

//   const handleDrop = (acceptedFiles) => {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const newImageSrc = e.target.result;
//       setImageSrc(newImageSrc);
//       localStorage.setItem('profileImage', newImageSrc);
//     };

//     if (acceptedFiles.length > 0) {
//       reader.readAsDataURL(acceptedFiles[0]);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImageSrc('');
//     localStorage.removeItem('profileImage');
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       {imageSrc ? (
//         <>
//           <img
//             src={imageSrc}
//             alt="Profile"
//             style={{
//               width: '7rem',
//               height: '7rem',
//               borderRadius: '50%',
//               objectFit: 'cover',
//             }}
//           />
//           <span
//             style={{
//               position: 'absolute',
//               left: '93%',
//               top: '55%',
//               color: 'grey',
//               cursor: 'pointer',
//               padding: '2px',
//             }}
//             onClick={handleRemoveImage}
//           >
//             <CameraIcon fontSize="small" />
//           </span>
//         </>
//       ) : (
//         <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
//           {({ getRootProps, getInputProps }) => (
//             <div
//               {...getRootProps()}
//               style={{
//                 width: '7rem',
//                 height: '7rem',
//                 borderRadius: '50%',
//                 background: '#0744d3',
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//               }}
//             >
//               <input {...getInputProps()} />
//               <Initials InitialsA={firstName} InitialsB={lastName} />
//               <CameraIcon
//                 style={{
//                   position: 'absolute',
//                   left: '93%',
//                   top: '55%',
//                   color: 'grey',
//                 }}
//               />
//             </div>
//           )}
//         </Dropzone>
//       )}
//     </div>
//   );
// }

// export default ProfileImage;

// import React, { useState } from 'react';
// import Dropzone from 'react-dropzone';
// import CameraIcon from '@mui/icons-material/CameraAltOutlined';
// import Initials from './Initials';

// function ProfileImage({ firstName, lastName }) {
//   const [imageSrc, setImageSrc] = useState('');

//   const handleDrop = (acceptedFiles) => {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       setImageSrc(e.target.result);
//     };

//     if (acceptedFiles.length > 0) {
//       reader.readAsDataURL(acceptedFiles[0]);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImageSrc('');
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       {imageSrc ? (
//         <>
//           <img
//             src={imageSrc}
//             alt="Profile"
//             style={{
//               width: '7rem',
//               height: '7rem',
//               borderRadius: '50%',
//               objectFit: 'cover',
//             }}
//           />
//           <span
//             style={{
//               position: 'absolute',
//               left: '93%',
//               top: '55%',
//               color: 'grey',
//               cursor: 'pointer',
//               padding: '2px',
//             }}
//             onClick={handleRemoveImage}
//           >
//             <CameraIcon fontSize="small" />
//           </span>
//         </>
//       ) : (
//         <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
//           {({ getRootProps, getInputProps }) => (
//             <div
//               {...getRootProps()}
//               style={{
//                 width: '7rem',
//                 height: '7rem',
//                 borderRadius: '50%',
//                 background: '#0744d3',
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//               }}
//             >
//               <input {...getInputProps()} />
//               <Initials InitialsA={firstName} InitialsB={lastName} />
//               <CameraIcon
//                 style={{
//                   position: 'absolute',
//                   left: '93%',
//                   top: '55%',
//                   color: 'grey',
//                 }}
//               />
//             </div>
//           )}
//         </Dropzone>
//       )}
//     </div>
//   );
// }

// export default ProfileImage;
