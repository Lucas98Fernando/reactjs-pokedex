import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, minWidth: "400px" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
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
};

export default function DialogDetails({ open, onClose, data }: any) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          Detalhes do {data.name}
        </BootstrapDialogTitle>
        <DialogContent>
          <Typography gutterBottom>Altura: {data.height}</Typography>
          <Typography gutterBottom>Peso: {data.weight}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
