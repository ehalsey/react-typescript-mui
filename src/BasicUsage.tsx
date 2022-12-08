import { InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const MyComponent = styled('select')({
  height: '36px',
  border: '1px solid rgba(34, 27, 78, 0.5)',
  color: '#000000',
  borderRadius: '8px',
  paddingLeft: '16px'
});

export default function BasicUsage() {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  }
  const [age, setAge] = React.useState(0);
  
  return <><MyComponent onChange={() => console.log("here1")}>
    <option>one</option>
    <option>two</option>
    <option>three</option>
  </MyComponent>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={event => {console.log('here');setAge(event.target.value as number) as void}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  </>;
}