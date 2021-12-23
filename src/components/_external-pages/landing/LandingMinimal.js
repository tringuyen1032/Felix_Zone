// material
import { Box, Card, Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useTheme, styled } from '@material-ui/core/styles';
//
import { varFadeIn, varFadeInUp, MotionInView } from '../../animate';
import { CarouselControlsArrowsBasic2 } from '../../carousel';

// ----------------------------------------------------------------------

const MEMBERS = [
   {
      name: 'Minh Tú',
      role: 'Model',
      avatar: '/static/home/model/1.jpg'
   },
   {
      name: 'Hà Phương',
      role: 'Model',
      avatar: '/static/home/model/2.jpg'
   },
   {
      name: 'Kỳ Duyên',
      role: 'Model',
      avatar: '/static/home/model/3.jpg'
   },
   {
      name: 'Đỗ Thị Hà',
      role: 'Model',
      avatar: '/static/home/model/4.jpeg'
   },
   // {
   //    name: 'Minh Tú',
   //    role: 'Model',
   //    avatar: '/static/home/model/1.jpg'
   // },
   {
      name: 'Hà Phương',
      role: 'Model',
      avatar: '/static/home/model/2.jpg'
   },
];

// ----------------------------------------------------------------------

MemberCard.propTypes = {
   member: PropTypes.object
};

function MemberCard({ member }) {
   const { name, role, avatar } = member;
   return (
      <Card key={name} sx={{ p: 1, mx: 1.5 }}>
         <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
            {name}
         </Typography>
         <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            {role}
         </Typography>
         <Box component="img" src={avatar} sx={{ width: '100%', borderRadius: 1.5 }} />
      </Card>
   );
}

const RootStyle = styled('div')(({ theme }) => ({
   padding: theme.spacing(24, 0),
   paddingBottom: 0,
   backgroundImage:
      theme.palette.mode === 'light'
         ? `linear-gradient(180deg, #ffe7e9 0%, white 100%)`
         : 'none'
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
   const theme = useTheme();
   const carouselRef = useRef();

   const settings = {
      speed: 500,
      slidesToShow: 4,
      centerMode: true,
      centerPadding: '0 80px',
      rtl: Boolean(theme.direction === 'rtl'),
      responsive: [
         {
            breakpoint: 1279,
            settings: { slidesToShow: 3 }
         },
         {
            breakpoint: 959,
            settings: { slidesToShow: 2 }
         },
         {
            breakpoint: 600,
            settings: { slidesToShow: 1 }
         }
      ]
   };

   const handleNext = () => {
      carouselRef.current.slickNext();
   };

   const handlePrevious = () => {
      carouselRef.current.slickPrev();
   };

   return (
      <RootStyle>
         <Container maxWidth="lg" sx={{ pb: 10, textAlign: 'center' }} >
            <MotionInView variants={varFadeInUp} style={{ marginTop: 100 }}>
               <Typography variant="h2" sx={{ mb: 3 }}>
                  Hot models
               </Typography>
            </MotionInView>
            <Box sx={{ position: 'relative' }} >
               <Slider ref={carouselRef} {...settings}>
                  {MEMBERS.map((member) => (
                     <MotionInView key={member.name} variants={varFadeIn}>
                        <MemberCard key={member.name} member={member} />
                     </MotionInView>
                  ))}
               </Slider>
               <CarouselControlsArrowsBasic2
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  sx={{ transform: 'translateY(-64px)' }}
               />
            </Box>
         </Container>
      </RootStyle>
   );
}
