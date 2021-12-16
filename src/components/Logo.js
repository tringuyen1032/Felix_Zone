import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
   sx: PropTypes.object
};

export default function Logo({ sx }) {
   //   const theme = useTheme();
   //   const PRIMARY_LIGHT = theme.palette.primary.light;
   //   const PRIMARY_MAIN = theme.palette.primary.main;
   //   const PRIMARY_DARK = theme.palette.primary.dark;

   return (
      <Box sx={{ width: 130, height: 130, ...sx }}>
         <img src='https://firebasestorage.googleapis.com/v0/b/pimo-fc268.appspot.com/o/images%2Fwatermark%20black.png?alt=media&token=dba2a1a8-37c7-4500-8f47-f2870bbd0078' alt="Logo" viewBox="0 0 512 512" />
      </Box>
   );
}
