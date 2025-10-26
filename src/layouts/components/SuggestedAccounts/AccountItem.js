import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            loading="lazy"
            alt="hphuoc.2003"
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/8c7a32f90edb4808cba2602745f20228~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&amp;refresh_token=c37efd80&amp;x-expires=1761620400&amp;x-signature=%2FGqC0XrUPQozdAqxM%2BnQKzVR8ow%3D&amp;t=4d5b0474&amp;ps=13740610&amp;shp=a5d48078&amp;shcp=81f88b70&amp;idc=my"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Quốc Phú Nguyễn</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
