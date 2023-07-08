import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 135,
  height: 150,
  bgcolor: 'background.paper',
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
      >
        <Box sx={style}>
          <div className="search-filter">
            <select
              className="filter-select"
              value={filterStatus}
              onChange={handleFilterStatus}
            >
              <option value="">All</option>
              <option value="Approved">Approved</option>
              <option value="Due">Due</option>
              <option value="Declined">Declined</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
