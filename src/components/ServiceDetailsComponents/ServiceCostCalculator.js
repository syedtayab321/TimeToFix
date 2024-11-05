import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Grid, // Import Grid for layout
} from '@mui/material';

const CostCalculator = () => {
  const [numUnits, setNumUnits] = useState(1);
  const [annualPlanCost, setAnnualPlanCost] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [annualWaterTankClean, setAnnualWaterTankClean] = useState(false);
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [ownershipStatus, setOwnershipStatus] = useState('');

  const handleCalculate = () => {
    const totalInitialPayment = annualPlanCost; // Use the annualPlanCost directly
    const totalMonthlyPayment = monthlyPayment * 12; // Monthly payment over the year
    const tankCleanCost = annualWaterTankClean ? (annualPlanCost * 0.20) : 0;

    const totalCost = totalInitialPayment + totalMonthlyPayment + tankCleanCost;

    alert(`Total Estimated Cost: AED ${totalCost}`);
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        AC Cost Calculator
      </Typography>
      <Box sx={{ maxWidth: 600, width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Number of AC Units"
              type="number"
              variant="outlined"
              fullWidth
              value={numUnits}
              onChange={(e) => setNumUnits(e.target.value)}
              inputProps={{ min: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Approximate Yearly Plan Cost in AED"
              type="number"
              variant="outlined"
              fullWidth
              value={annualPlanCost}
              onChange={(e) => setAnnualPlanCost(e.target.value)}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Monthly Instalment Payments"
              type="number"
              variant="outlined"
              fullWidth
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={annualWaterTankClean}
                  onChange={(e) => setAnnualWaterTankClean(e.target.checked)}
                />
              }
              label="Add Annual Water Tank Clean (20% discount for AMC customers)"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="location-label">Select Location</InputLabel>
              <Select
                labelId="location-label"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Select Location"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="location1">Location 1</MenuItem>
                <MenuItem value="location2">Location 2</MenuItem>
                <MenuItem value="location3">Location 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="property-type-label">Type of Property</InputLabel>
              <Select
                labelId="property-type-label"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                label="Type of Property"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Are you the tenant, landlord, or homeowner?
            </Typography>
            <RadioGroup
              value={ownershipStatus}
              onChange={(e) => setOwnershipStatus(e.target.value)}
              row
            >
              <FormControlLabel value="tenant" control={<Radio />} label="Tenant" />
              <FormControlLabel value="landlord" control={<Radio />} label="Landlord" />
              <FormControlLabel value="homeowner" control={<Radio />} label="Home Owner" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleCalculate} sx={{ mt: 2 }}>
              Calculate Cost
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CostCalculator;
