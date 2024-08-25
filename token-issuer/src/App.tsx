import { Grid, Typography } from '@mui/material';
import TokenIssuanceForm from './components/TokenIssuanceForm';

function App() {  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '90vh' }}  // Adjusted for slightly upward position
      >
        <Grid item xs={3} sx={{ marginBottom: '20px' }}>  {/* Added margin */}
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Welcome to SeWa
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TokenIssuanceForm />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
