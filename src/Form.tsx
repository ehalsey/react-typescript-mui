import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

export default function Form() {

    const [age, setAge] = React.useState(0);
    const handleChange = (event: SelectChangeEvent<number>) => {
        setAge(event.target.value.valueOf() as number);
    };

    interface SelectProps {
        label: string;
        labelId: string;
        id: string;
        value: number;
        onChange: (e: SelectChangeEvent<number>) => void;
    }

    const styledSelect = styled('select')<SelectProps>(({ labelId,id,value,label,onChange }) => ({
        height: '36px',
        border: '1px solid rgba(34, 27, 78, 0.5)',
        color: '#000000',
        borderRadius: '8px',
        paddingLeft: '16px',
        onChange: onChange
      }));

    const temp = <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>

    return (<div></div>)
}

