import { Box, Typography } from '@mui/material';
import React from 'react';

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <Box textAlign="center" py={12}>
      <Typography variant="h1" component="h1" gutterBottom>
        404 Page Not Found
      </Typography>
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};

export default ErrorPage;
