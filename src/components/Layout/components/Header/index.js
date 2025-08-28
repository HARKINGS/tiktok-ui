import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Popper/Menu';
import { MessageIcon, NotificationIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const currentUser = true; // Simulating a logged-in user
  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@xrl-8',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Logout',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        {/* Search */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <div>
                  <button className={cx('action-btn')}>
                    <UploadIcon />
                  </button>
                </div>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <div>
                  <button className={cx('action-btn')}>
                    <MessageIcon />
                  </button>
                </div>
              </Tippy>
              <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                <div>
                  <button className={cx('action-btn')}>
                    <NotificationIcon />
                  </button>
                </div>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button text>Message</Button>
              <Button text>Notification</Button>
              <Button primary>Login</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="XLR-8"
                src="https://lh3.googleusercontent.com/a/ACg8ocLj85h1jv8YGcrrrf4ZeXifFi-c7bgsO9lyqp9-3REObOGvvEo=s360-c-no"
                fallBack="https://linkimage.com/cdn/shop/products/Poppyno45_900x.jpg?v=1651519879"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
