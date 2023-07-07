import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CSVLink } from 'react-csv';
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';
import html2pdf from 'html2pdf.js';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'fixed',
    top: 170,
    right: 100,
    margin: 0,
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  backgroundColor: '#00000000',
  // backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ClientDialog({ table, tableData }) {
  const exportToPDF = () => {
    html2pdf()
      .set({
        margin: 10,
        filename: 'tableData.pdf',
        jsPDF: { format: 'a4', orientation: 'portrait' },
      })
      .from(table.current)
      .save();
  };

  const generateCSVData = () => {
    const csvData = tableData.map((row) => Object.values(row));
    return csvData;
  };

  const exportToExcel = () => {
    console.log('exported!');
    const worksheet = utils.json_to_sheet(tableData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(data, 'tableData.xlsx');
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        style={{
          padding: '12px 20px',
          backgroundColor: '#0744d3',
          color: '#fff',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
          borderRadius: '8px',
        }}
      >
        Export Data
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <List>
          <ListItem>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: 'none',
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      width: '12.8%',
                      borderRadius: 0,
                      boxShadow: 'none',
                      borderBottomLeftRadius: '8px',
                      borderBottomRightRadius: '8px',
                    },
                  },
                }}
              >
                <MenuItem value="" disabled sx={{ fontSize: '0' }}>
                  <em>Select Format</em>
                </MenuItem>
                <MenuItem
                  value={10}
                  onClick={exportToPDF}
                  sx={{ fontSize: '12px', fontWeight: '600', borderRadius: 0 }}
                >
                  PDF
                </MenuItem>
                <MenuItem
                  value={20}
                  onClick={exportToExcel}
                  sx={{ fontSize: '12px', fontWeight: '600' }}
                >
                  Excel
                </MenuItem>
                <MenuItem value={30}>
                  <CSVLink
                    data={generateCSVData()}
                    filename="tableData.csv"
                    style={{
                      color: 'rgba(0, 0, 0, 0.87)',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                  >
                    CSV
                  </CSVLink>
                </MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </BootstrapDialog>
    </div>
  );
}

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { CSVLink } from 'react-csv';
// import { utils, write } from 'xlsx';
// import { saveAs } from 'file-saver';
// import html2pdf from 'html2pdf.js';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialog-paper': {
//     position: 'fixed',
//     top: 170,
//     right: 100,
//     margin: 0,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     boxShadow: 'none',
//   },
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
//   backgroundColor: 'rgba(0, 0, 0, 0.2)',
// }));

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function ClientDialog({ table, tableData }) {
//   const exportToPDF = () => {
//     html2pdf()
//       .set({
//         margin: 10,
//         filename: 'tableData.pdf',
//         jsPDF: { format: 'a4', orientation: 'portrait' },
//       })
//       .from(table.current)
//       .save();
//   };

//   const generateCSVData = () => {
//     const csvData = tableData.map((row) => Object.values(row));
//     return csvData;
//   };

//   const exportToExcel = () => {
//     console.log('exported!');
//     const worksheet = utils.json_to_sheet(tableData);
//     const workbook = utils.book_new();
//     utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
//     const data = new Blob([excelBuffer], {
//       type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//     });
//     saveAs(data, 'tableData.xlsx');
//   };

//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={handleClickOpen}
//         style={{
//           padding: '12px 20px',
//           backgroundColor: '#0744d3',
//           color: '#fff',
//           cursor: 'pointer',
//           marginRight: '40px',
//           border: 'none',
//           outline: 'none',
//           borderRadius: '8px',
//         }}
//       >
//         Export Data
//       </button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle
//           id="customized-dialog-title"
//           onClose={handleClose}
//         ></BootstrapDialogTitle>
//         <List>
//           <ListItem>
//             <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//               <Select
//                 value={age}
//                 onChange={handleChange}
//                 displayEmpty
//                 inputProps={{ 'aria-label': 'Without label' }}
//                 sx={{
//                   borderRadius: '50px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                 }}
//               >
//                 <MenuItem value="" sx={{ fontSize: '12px', fontWeight: '600' }}>
//                   Select Format
//                 </MenuItem>
//                 <MenuItem
//                   value={10}
//                   onClick={exportToPDF}
//                   sx={{ fontSize: '12px', fontWeight: '600' }}
//                 >
//                   PDF
//                 </MenuItem>
//                 <MenuItem
//                   value={20}
//                   onClick={exportToExcel}
//                   sx={{ fontSize: '12px', fontWeight: '600' }}
//                 >
//                   Excel
//                 </MenuItem>
//                 <MenuItem value={30}>
//                   <CSVLink
//                     data={generateCSVData()}
//                     filename="tableData.csv"
//                     style={{
//                       color: 'rgba(0, 0, 0, 0.87)',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                     }}
//                   >
//                     CSV
//                   </CSVLink>
//                 </MenuItem>
//               </Select>
//             </FormControl>
//           </ListItem>
//         </List>
//       </BootstrapDialog>
//     </div>
//   );
// }
