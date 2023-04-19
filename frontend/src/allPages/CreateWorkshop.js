import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';


const theme = createTheme();

export default function CreateWorkshop() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" >

        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card sx={{
            minHeight: '180px', width: '100%', borderRadius: 8, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover',
            backgroundImage: `url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMGJhY2tncm91bmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')`
          }}>
            <CardContent>
              <Grid container justifyContent="flex-end" >
                <Grid item >
                  <Button
                    type="submit"
                    style={{ fontSize: "17px",marginTop:90, textTransform: "capitalize", borderRadius: "8px", backgroundColor: "#F2EFEF", color: "#000000" }}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <ImageIcon />&nbsp; Change Cover Image
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={5} columnSpacing={12}>
              <Grid item xs={12} sm={6} marginTop={2}>
                <Typography lineHeight={1} fontSize={20} fontWeight={600} color='#F80808' fontFamily='Roboto'> Workshop Name</Typography><br />
                <TextField id="standard-basic"
                  placeholder='Talk Show....'
                  name="firstName"
                  variant="standard" autoFocus fullWidth required
                />
              </Grid>
              <Grid item xs={12} sm={6} marginTop={2} >
                <Typography lineHeight={1} fontSize={20} fontWeight={600} color='#F80808' fontFamily='Roboto'> Workshop Venue</Typography><br />
                <TextField id="standard-basic"
                  placeholder='Delhi, India'
                  name="firstName"
                  variant="standard" autoFocus fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6} marginTop={2}>
                <Typography lineHeight={1} fontSize={20} fontWeight={600} color='#F80808' fontFamily='Roboto'> Workshop Type</Typography><br />
                <TextField id="standard-basic"
                  placeholder='Online / In Person'
                  name="firstName"
                  variant="standard" autoFocus fullWidth required

                />
              </Grid>
              <Grid item xs={12} sm={6} marginTop={2}>
                <Typography lineHeight={1} fontSize={20} fontWeight={600} color='#F80808' fontFamily='Roboto'> Workshop URL</Typography><br />
                <TextField id="standard-basic"
                  placeholder='zoom / google meet url'
                  name="firstName"
                  variant="standard" autoFocus fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6} marginTop={2}>
                <Typography lineHeight={1} fontSize={20} fontWeight={600} color='#F80808' fontFamily='Roboto'> Workshop Date</Typography><br />
                <TextField id="standard-basic"
                  placeholder='dd/mm/yyyy hh:mm:ss'
                  name="firstName"
                  variant="standard" autoFocus fullWidth required />
              </Grid>

            </Grid>

            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  type="submit"
                  style={{ fontSize: "20px", textTransform: "capitalize", borderRadius: "15px", backgroundColor: "#F80808" }}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Workshop
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}