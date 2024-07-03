import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, FormControl, FormHelperText, FormLabel, Grid, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import '../Styles/Components/ReserveRoomForm.css';
import { dismiss, loading } from '../Tostify';

function ReserveRoomForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleSubmit = () => {

    const loadingId = loading("Reserving room....");

    console.log(name);
    dismiss(loadingId);
  }

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, marginTop: '20px' },
          textAlign: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <Grid container>

          <Grid item xs={12} textAlign='left'>
            <ThemeProvider theme={theme}>
              <Typography
                variant='h6'
                sx={{ fontWeight: 400, marginRight: 1, marginBottom: 1 }}
              >
                Reserve Room
              </Typography>
            </ThemeProvider>
          </Grid>

          <Grid item xs={12} textAlign='center'>
            <FormControl>
              <FormHelperText sx={{ color: 'red', position: 'absolute', top: '-10px', fontSize: '12px' }}>
                Fullname
              </FormHelperText>
              <TextField
                sx={{
                  width: {
                    xs: '350px',
                    sm: '400px',
                    md: '420px'
                  },
                  '& .MuiInputBase-input': {
                    height: '0.7em',
                    padding: '12px'
                  },
                }}
                value={name}
                onChange={(e) => (setName(e.target.value))}
                size='small'
                id="demo-helper-text-aligned"
                label="Enter your fullname"
                InputLabelProps={{ style: { fontSize: '13px' } }}
              />
            </FormControl><br />

            <FormControl>
              <FormHelperText sx={{ color: 'red', position: 'absolute', top: '-10px', fontSize: '12px' }}>
                Email
              </FormHelperText>
              <TextField
                sx={{
                  width: {
                    xs: '350px',
                    sm: '400px',
                    md: '420px'
                  },
                  '& .MuiInputBase-input': {
                    height: '0.7em',
                    padding: '12px'
                  },
                }}
                value={email}
                onChange={(e) => (setEmail(e.target.value))}
                size='small'
                id="demo-helper-text-aligned"
                label='Enter your email'
                InputLabelProps={{ style: { fontSize: '13px' } }}
              />
            </FormControl>

            <Grid item xs={12} textAlign='left' sx={{ marginRight: 1, marginBottom: 1 }}>
              <FormLabel>
                <Typography variant='body1'>
                  Lodging Period
                </Typography>
              </FormLabel>
            </Grid>

            <Grid item textAlign='left' position='absolute'>
              <FormControl>
                <FormHelperText sx={{ color: 'red', position: 'absolute', top: '-10px', fontSize: '12px' }}>
                  Check-in-date
                </FormHelperText>
                <TextField
                  sx={{
                    width: {
                      xs: '175px',
                      sm: '200px',
                    },
                    '& .MuiInputBase-input': {
                      height: '0.6em',
                      padding: '12px'
                    },
                  }}
                  value={checkInDate}
                  onChange={(e) => (setCheckInDate(e.target.value))}
                  type='date'
                  size='small'
                  id="demo-helper-text-aligned"
                  InputLabelProps={{ style: { fontSize: '13px' } }}
                />
              </FormControl>
            </Grid>

            <Grid item textAlign='right'>
              <FormControl>
                <FormHelperText sx={{ color: 'red', position: 'absolute', top: '-10px', fontSize: '12px' }}>
                  Check-out-date
                </FormHelperText>
                <TextField
                  sx={{
                    width: {
                      xs: '175px',
                      sm: '200px',
                    },
                    '& .MuiInputBase-input': {
                      height: '0.6em',
                      padding: '12px'
                    },
                  }}
                  value={checkOutDate}
                  onChange={(e) => (setCheckOutDate(e.target.value))}
                  size='small'
                  id="demo-helper-text-aligned"
                  type='date'
                  InputLabelProps={{ style: { fontSize: '13px' } }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} textAlign='left' sx={{ marginRight: 1, marginBottom: 1 }}>
              <FormLabel>
                <Typography variant='body1'>
                  Number Of Guest
                </Typography>
              </FormLabel>
            </Grid>

            <Grid item textAlign='left' position='absolute'>
              <FormControl>
                <FormHelperText sx={{ color: 'red', position: 'absolute', top: '-10px', fontSize: '12px' }}>
                  Adults
                </FormHelperText>
                <TextField
                  sx={{
                    width: {
                      xs: '175px',
                      sm: '200px',
                    },
                    '& .MuiInputBase-input': {
                      height: '0.6em',
                      padding: '12px'
                    },
                  }}
                  value={adults}
                  onChange={(e) => (setAdults(e.target.value))}
                  type='number'
                  size='small'
                  id="demo-helper-text-aligned"
                  InputLabelProps={{ style: { fontSize: '13px' } }}
                />
              </FormControl>
            </Grid>

            <Grid item textAlign='right'>
              <FormControl>
                <FormHelperText sx={{ color: 'red', position: 'absolute', top: '-10px', fontSize: '12px' }}>
                  Children
                </FormHelperText>
                <TextField
                  sx={{
                    width: {
                      xs: '175px',
                      sm: '200px',
                    },
                    '& .MuiInputBase-input': {
                      height: '0.6em',
                      padding: '12px'
                    },
                  }}
                  value={children}
                  onChange={(e) => (setChildren(e.target.value))}
                  size='small'
                  id="demo-helper-text-aligned"
                  type='number'
                  InputLabelProps={{ style: { fontSize: '13px' } }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid><br />

        <Grid item textAlign='left'>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Grid>
      </Box>
    </div>
  )
}

export default ReserveRoomForm;