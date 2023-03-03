import Box from '@mui/material/Box';

export default function AngleDivisor({
  color = 'background.default',
  bottom = '-30px',
  ...props
}) {
  return (
    <Box
      {...props}
      sx={{
        width: '0px',
        height: '0px',
        color: color,
        borderLeft: '30px solid transparent',
        borderRight: '30px solid transparent',
        borderTop: `30px solid`,
        position: 'relative',
        bottom: bottom,
        left: 'calc(50vw - 30px)',
      }}
    >
      {props.children}
    </Box>
  );
}
