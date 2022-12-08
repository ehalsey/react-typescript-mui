import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

export default function Form() {

    const [age, setAge] = React.useState("20");
    const onChange = (value:string) => {
        console.log(value);
        setAge(value);
      }

    interface SelectProps {
        label: string;
        labelId: string;
        id: string;
        value: string;
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
            onChange={event=>onChange(event.target.value as string)}
        >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
        </StyledSelect>
    </FormControl>)
}

