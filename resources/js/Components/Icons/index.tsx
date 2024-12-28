import React from 'react';
import PasswordIcon from './PasswordIcon';
import TickIcon from './TickIcon';
import CrossIcon from './CrossIcon';
import MenuIcon from './MenuIcon';
import TruckDeliveryIcon from './TruckDeliveryIcon';
import SvgColor from './SvgColor';
import Iconify from './Iconify';

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  settings: <Iconify icon="solar:settings-bold-duotone" />,
  accountSettings: <Iconify icon="material-symbols:manage-accounts" />,
};

export {
  PasswordIcon,
  TickIcon,
  CrossIcon,
  MenuIcon,
  TruckDeliveryIcon,
  SvgColor,
  ICONS,
  Iconify,
};
