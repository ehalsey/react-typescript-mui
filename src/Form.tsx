import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem, Button, useTheme } from '@mui/material';
import DialogConfirm from './dialog'

export default function Form() {

    const theme = useTheme();

    const [age, setAge] = React.useState(20);
    const [confirmDeleteShown, setConfirmDeleteShown] = React.useState(false);

    const onChange = (value: number) => {
        console.log(value);
        setAge(value);
    }

    const handleClear = () => {
        setConfirmDeleteShown(!confirmDeleteShown);
    }

    const handleConfirmDialogClose = (status: boolean) => {
        console.log(status);
        setConfirmDeleteShown(false);
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
        <Button onClick={handleClear}>Delete Template</Button>
        <DialogConfirm visible={confirmDeleteShown} title="Delete template" message="Are you sure you want to delete the template?" onClose={(status) => {handleConfirmDialogClose(status) }} />
    </FormControl>)
}



