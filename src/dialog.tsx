import { FC } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';


type DialogProps = {
    visible: boolean,
    title: string,
    message: string,
    onClose: (status: boolean) => void,
}
const DialogConfirm: FC<DialogProps> = (params) => {
    const { visible, title, message, onClose } = { ...params };

    const theme = useTheme();

    return <Dialog
        maxWidth="sm"
        fullWidth={true}
        aria-labelledby="check-delete-dialog-title"
        className="futura"
        open={visible}
        onClose={() => onClose(false)}
    >
        <DialogTitle id="responsive-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={() => onClose(false)}>
                No
            </Button>
            <Button onClick={() => onClose(true)} autoFocus>
                Yes
            </Button>
        </DialogActions>
    </Dialog>
};

export default DialogConfirm;