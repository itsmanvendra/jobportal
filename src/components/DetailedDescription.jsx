import React from "react";
import Modal from "@mui/material/Modal";
import "../App.css";
import { Box, Button, Typography } from "@mui/material";

// DetailedDescription component
const DetailedDescription = ({open, handleClose, jobDescription}) => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalClass">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Job Description:
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            variant="body1"
          >
            {jobDescription}
          </Typography>
          <Box
            className="modalButton"
          >
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    );
};

export default DetailedDescription;
