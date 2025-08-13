import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c27c4b223014b1c510f5eccb42b25851~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=656bd3c2&x-expires=1755252000&x-signature=84gBiDBlRtrO8y%2BMdPsRx7O4OA4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
        alt="XXX"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van X</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvanx</span>
      </div>
    </div>
  );
}

export default AccountItem;
