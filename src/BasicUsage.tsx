import { styled } from '@mui/system';

const MyComponent = styled('select')({
  height: '36px',
  border: '1px solid rgba(34, 27, 78, 0.5)',
  color: '#000000',
  borderRadius: '8px',
  paddingLeft: '16px',
});

export default function BasicUsage() {
  return <MyComponent><option>one</option></MyComponent>;
}