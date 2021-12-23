import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography } from '@material-ui/core';
// routes
import { PATH_PAGE } from '../../../routes/paths';
//
import { varFadeInUp, MotionInView } from '../../animate';
import CarouselBasic2 from '../../carousel/CarouselBasic2';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
   padding: theme.spacing(24, 0),
   backgroundImage:
      theme.palette.mode === 'light'
         ? `linear-gradient(180deg, #ffe7e9 0%, white 100%)`
         : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
   width: '100%',
   textAlign: 'center',
   marginBottom: theme.spacing(10),
   [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginBottom: 0
   }
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
   paddingRight: 2,
   paddingBottom: 1,
   maxWidth: 160,
   borderRadius: 8,
   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
   [theme.breakpoints.up('sm')]: {
      maxWidth: 320,
      paddingRight: 4,
      borderRadius: 12
   },
   '& img': {
      borderRadius: 8,
      [theme.breakpoints.up('sm')]: {
         borderRadius: 12
      }
   }
}));

const COMMON = {
   scaleX: -0.688,
   skewY: 8,
   skewX: 0,
   scaleY: 0.8,
   translateX: 0,
   translateY: 0,
   opacity: 0
};

const variantScreenLeft = {
   initial: COMMON,
   animate: { ...COMMON, translateX: '-60%', translateY: -40, opacity: 1 }
};
const variantScreenCenter = {
   initial: COMMON,
   animate: { ...COMMON, opacity: 1 }
};
const variantScreenRight = {
   initial: COMMON,
   animate: { ...COMMON, translateX: '60%', translateY: 40, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
   const theme = useTheme();
   const isLight = theme.palette.mode === 'light';
   const isRTL = theme.direction === 'rtl';

   const screenLeftAnimate = variantScreenLeft;
   const screenCenterAnimate = variantScreenCenter;
   const screenRightAnimate = variantScreenRight;

   return (
      <RootStyle>
         <Container maxWidth="lg">
            <Grid container spacing={5} justifyContent="center">


               <Grid item xs={12} md={8} dir="ltr">
                  <CarouselBasic2 />
               </Grid>
               <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ContentStyle>
                     {/* <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Interface Starter Kit
                </Typography>
              </MotionInView> */}

                     <MotionInView variants={varFadeInUp}>
                        <Typography variant="h2" sx={{ mb: 3 }} style={{textAlign: 'right'}}>
                           Event is attracting
                        </Typography>
                     </MotionInView>

                     <MotionInView variants={varFadeInUp}>
                        <Typography
                           sx={{
                              mb: 5,
                              color: isLight ? 'text.secondary' : 'common.white'
                           }}
                           style={{textAlign: 'right'}}
                        >
                           We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
                        </Typography>
                     </MotionInView>

                     {/* <MotionInView variants={varFadeInUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={RouterLink}
                  to={PATH_PAGE.components}
                >
                  View All Components
                </Button>
              </MotionInView> */}
                  </ContentStyle>
               </Grid>
            </Grid>
         </Container>
      </RootStyle>
   );
}
