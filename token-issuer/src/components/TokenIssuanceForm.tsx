import React, { useState } from 'react';
import { TextField, Button, MenuItem, Container, Typography, CircularProgress, Alert, Box, Grid } from '@mui/material';
import { useIssueToken } from '../hooks/useIssueToken';

const serviceCategories = [
  { value: 0, label: 'Retirees' },
  { value: 1, label: 'Unemployed' },
  { value: 2, label: 'Disabled' },
];

function TokenIssuanceForm() {
  const [clientName, setClientName] = useState<string>('');
  const [serviceCategory, setServiceCategory] = useState<string>('');
  const { token, loading, error, handleIssueToken } = useIssueToken();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const success = await handleIssueToken(clientName, serviceCategory);
    if (success) {
      // Clear the form fields if the token was issued successfully
      setClientName('');
      setServiceCategory('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Get New Token
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select
          label="Service Category"
          value={serviceCategory}
          onChange={(e) => setServiceCategory(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {serviceCategories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          Issue Token
        </Button>
      </form>
      {error && <Alert severity="error" style={{ marginTop: '20px' }}>{error}</Alert>}
      {token && (
        <Box mt={4} display="flex" justifyContent="center">
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h6" align="center">
                Token Issued
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center">Token ID: {token.id}</Typography>
            </Grid>
            <Grid item>
              <Typography align="center">Client Name: {token.clientName}</Typography>
            </Grid>
            <Grid item>
              <Typography align="center">Service Category: {token.serviceCategory}</Typography>
            </Grid>
            <Grid item>
              <Typography align="center">Status: {token.status}</Typography>
            </Grid>
            <Grid item>
              <Typography align="center">Issue Date: {new Date(token.issueDateTime).toLocaleString()}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default TokenIssuanceForm;
