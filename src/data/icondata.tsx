import Cooktop from '@/component/Svg/Cooktop';
import Dishwasher from '@/component/Svg/Dishwasher';
import Dryer from '@/component/Svg/Dryer';
import Microvawe from '@/component/Svg/Microvawe';
import Oven from '@/component/Svg/Oven';
import Refrigerator from '@/component/Svg/Refrigerator';
import Stove from '@/component/Svg/Stove';
import Washer from '@/component/Svg/Washer';

export const services = [
  {
    id: 1,
    icon: <Refrigerator width="64px" height="64px" />,
    link: '/services/refrigerator',
    name: 'Refrigerator',
  },
  {
    id: 2,
    icon: <Cooktop width="64px" height="64px" />,
    link: '/services/cooktop',
    name: 'Cooktop',
  },
  {
    id: 3,
    icon: <Oven width="64px" height="64px" />,
    link: '/services/oven',
    name: 'Oven',
  },
  {
    id: 4,
    icon: <Dishwasher width="64px" height="64px" />,
    link: '/services/dishwasher',
    name: 'Dishwasher',
  },
  {
    id: 5,
    icon: <Microvawe width="64px" height="64px" />,
    link: '/services/microwave',
    name: 'Microwave',
  },
  {
    id: 6,
    icon: <Stove width="64px" height="64px" />,
    link: '/services/stove',
    name: 'Stove',
  },
  {
    id: 7,
    icon: <Washer width="64px" height="64px" />,
    link: '/services/washer',
    name: 'Washer',
  },
  // {
  //   id: 8,
  //   icon: <Dryer width="64px" height="64px" />,
  //   link: '#',
  //   name: 'Dryer',
  // },
];
