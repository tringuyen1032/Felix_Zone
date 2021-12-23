import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
   width: 22,
   height: 22
};

const menuConfig = [
   {
      title: 'Home',
      icon: <Icon icon={homeFill} {...ICON_SIZE} />,
      path: '/'
   },
   {
      title: 'About us',
      icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
      path: '/maintenance'
      // path: PATH_PAGE.components
   },
   {
      title: 'Model',
      icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
      // path: '/maintenance'
      path: PATH_PAGE.modelSearch
   },
   {
      title: 'Casting',
      icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
      path: '/maintenance'
      // path: PATH_PAGE.components
   },
   {
      title: 'Sign up',
      path: '/maintenance',
      // path: '/pages',
      icon: <Icon icon={fileFill} {...ICON_SIZE} />,
      children: [
         {
            subheader: 'Sign up',
            items: [
               {
                  title: 'Sign up for Model',
                  path: '/maintenance'
                  // path: PATH_PAGE.about
               },
               {
                  title: 'Sign up for Brand',
                  path: '/maintenance'
                  // path: PATH_PAGE.contact
               },
            ]
         },
      ]
   }
];

export default menuConfig;
