import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const style = {
  position: 'absolute',
  top: '47%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 180,
  height: 230,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 0,
  borderRadius: '8px',
  p: 0,
};

export default function FilterModal({ filterStatus, handleFilterStatus }) {
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
              <option value="Incomplete Docs">Incomplete Docs</option>
              <option value="Received Docs">Received Docs</option>
              <option value="Pending">Pending</option>
              <option value="Active">Active</option>
              <option value="Due">Due</option>
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
