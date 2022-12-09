import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import DialogConfirm from './dialog'

export default function Form() {

    const [age, setAge] = React.useState(20);
    const [confirmDialogShown, setConfirmDialogShown] = React.useState(false);

    const onChange = (value: number) => {
        console.log(value);
        setAge(value);
    }

    const handleClear = () => {
        setConfirmDialogShown(!confirmDialogShown);
    }

    const handleConfirmDialogClose = (status: boolean) => {
        console.log(status);
        setConfirmDialogShown(false);
    }
    interface SelectProps {
        label: string;
        labelId: string;
        id: string;
        value: number;
    }

    const StyledSelect = styled(Select)<SelectProps>(({ labelId, id, value, label }) => ({
        height: '36px',
        border: '1px solid rgba(34, 27, 78, 0.5)',
        color: '#000000',
        borderRadius: '8px',
        paddingLeft: '16px',
    }));

    return (<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={event => onChange(event.target.value as number)}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </StyledSelect>
        <Button onClick={handleClear}>Clear Form</Button>
        <DialogConfirm visible={confirmDialogShown} title="Clear Form" message="Are you sure you want to clear the form?" onClose={(status) => {handleConfirmDialogClose(status) }} />
    </FormControl>)
}



