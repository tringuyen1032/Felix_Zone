import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Link, Grid, List, Stack, Popover, ListItem, ListSubheader, CardActionArea } from '@material-ui/core';
import LanguagePopover from '../dashboard/LanguagePopover';
// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
   ...theme.typography.subtitle2,
   color: theme.palette.text.primary,
   marginRight: theme.spacing(5),
   transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest
   }),
   fontSize: '1.2rem',
   '&:hover': {
      opacity: 0.48,
      textDecoration: 'none'
   },
   alignItems: 'center',
   display: 'flex',
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
   type: PropTypes.oneOf(['subheader', 'item'])
};

function IconBullet({ type = 'item' }) {
   return (
      <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
         <Box
            component="span"
            sx={{
               ml: '2px',
               width: 4,
               height: 4,
               borderRadius: '50%',
               bgcolor: 'currentColor',
               ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 })
            }}
         />
      </Box>
   );
}

MenuDesktopItem.propTypes = {
   item: PropTypes.object,
   pathname: PropTypes.string,
   isHome: PropTypes.bool,
   isOffset: PropTypes.bool,
   isOpen: PropTypes.bool,
   onOpen: PropTypes.func,
   onClose: PropTypes.func
};

function MenuDesktopItem({ item, pathname, isHome, isOpen, isOffset, onOpen, onClose }) {
   const { title, path, children } = item;
   const isActive = pathname === path;

   if (children) {
      return (
         <div key={title} style={{display: 'flex', justifyContent: 'center' }}>
            <LinkStyle
               onClick={onOpen}
               sx={{
                  display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                  ...(isHome && { color: 'black' }),
                  ...(isOffset && { color: 'black' }),
                  ...(isOpen && { opacity: 0.48 })
               }}
            >
               {title}
               <Box
                  component={Icon}
                  icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
                  sx={{ ml: 0.5, width: 16, height: 16 }}
               />
            </LinkStyle>

            <Popover
               open={isOpen}
               anchorReference="anchorPosition"
               anchorPosition={{ top: 80, left: 0 }}
               anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
               transformOrigin={{ vertical: 'top', horizontal: 'center' }}
               onClose={onClose}
               PaperProps={{
                  sx: {
                     px: 3,
                     pt: 5,
                     pb: 3,
                     margin: 'auto',
                     marginLeft: '71%',
                     maxWidth: 200,
                     borderRadius: 2,
                     boxShadow: (theme) => theme.customShadows.z24
                  }
               }}
            >
               <Grid container spacing={3} style={{ marginTop: '-60px' }}>
                  {children.map((list) => {
                     const { subheader, items } = list;

                     return (
                        <Grid key={subheader} item xs={12} md={12}>
                           <List disablePadding>
                              {items.map((item) => (
                                 <ListItem
                                    key={item.title}
                                    to={item.path}
                                    component={RouterLink}
                                    underline="none"
                                    sx={{
                                       p: 0,
                                       mt: 3,
                                       typography: 'body2',
                                       color: 'text.secondary',
                                       transition: (theme) => theme.transitions.create('color'),
                                       '&:hover': { color: 'text.primary' },
                                       ...(item.path === pathname && {
                                          typography: 'subtitle2',
                                          color: 'text.primary'
                                       })
                                    }}
                                 >
                                    <IconBullet />
                                    {item.title}
                                 </ListItem>
                              ))}
                           </List>
                        </Grid>
                     );
                  })}
               </Grid>
            </Popover>
         </div>
      );
   }

   //   if (title === 'Documentation') {
   //     return (
   //       <LinkStyle
   //         href={path}
   //         target="_blank"
   //         sx={{
   //           ...(isHome && { color: 'black' }),
   //           ...(isOffset && { color: 'black' }),
   //           ...(isActive && { color: 'primary.main' })
   //         }}
   //       >
   //         {title}
   //       </LinkStyle>
   //     );
   //   }

   return (
      <LinkStyle
         to={path}
         component={RouterLink}
         sx={{
            ...(isHome && { color: 'black' }),
            ...(isOffset && { color: 'black' }),
            ...(isActive && { color: 'primary.main' })
         }}
      >
         {title}
      </LinkStyle>
   );
}

MenuDesktop.propTypes = {
   isOffset: PropTypes.bool,
   isHome: PropTypes.bool,
   navConfig: PropTypes.array
};

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
   const { pathname } = useLocation();
   const [open, setOpen] = useState(false);

   useEffect(() => {
      if (open) {
         handleClose();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname]);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Stack direction="row">
         {navConfig.map((link) => (
            <MenuDesktopItem
               key={link.title}
               item={link}
               pathname={pathname}
               isOpen={open}
               onOpen={handleOpen}
               onClose={handleClose}
               isOffset={isOffset}
               isHome={isHome}
            />
         ))}
         {/* <div style={{position: 'absolute', top: '21%', left: '92%'}}> */}
         <LanguagePopover />
         {/* </div> */}
      </Stack>
   );
}
