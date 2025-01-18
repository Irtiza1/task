// component
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} width={30} height={30} />;

const navConfig = [
  {
    title: 'Asani',
    path: '/dashboard/app',
    icon: <img src="../assets/l.svg" alt="Asaani Icon" width={30} height={30} />,
  },
  {
    title: 'Paani',
    path: '/dashboard/user',
    icon: icon('mdi:water'),
  },
  {
    title: 'Bijli',
    path: '/dashboard/products',
    icon: icon('ant-design:thunderbolt-outlined'),
  },
  {
    title: 'Gas',
    path: '/dashboard/blog',
    icon: icon('mdi:gas'),
  },
  {
    title: 'Solar',
    path: '/login',
    icon: icon('ph:solar-panel-fill'),
  },
  {
    title: 'Login',
    path: '/login',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
