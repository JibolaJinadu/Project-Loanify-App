import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const style = {
  position: 'absolute',
  top: '33%',
  left: '53%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  borderRadius: '8px',
  boxShadow: 0,
  p: 0,
};

export default function ClientModal({ filterStatus, handleFilterStatus }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ border: '0.5px solid #83a1e8' }}>
        <span style={{ color: 'black', textTransform: 'none' }}>Filter</span>
        <FilterAltOutlinedIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Box sx={style}>
          <div className="search-filter">
            <select
              className="filter-select"
              value={filterStatus}
              onChange={handleFilterStatus}
              style={{
                width: '100%',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                cursor: 'pointer',
              }}
            >
              <option value="">All</option>
              <option value="Approved">Approved</option>
              <option value="Due">Due</option>
              <option value="Declined">Declined</option>
              <option value="Extended">Extended</option>
              <option value="Defaulted">Defaulted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
