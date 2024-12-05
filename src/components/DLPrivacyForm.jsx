import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DLPrivacyForm() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="black" variant="text" onClick={handleClickOpen}>
        DL Privacy Policy
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>DownLow Privacy Policy</DialogTitle>
        <DialogContent>
          {/* TODO: Write and add privacy policy */}
          <DialogContentText> PRIVACY POLICY PLACEHOLDER</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Got it</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
