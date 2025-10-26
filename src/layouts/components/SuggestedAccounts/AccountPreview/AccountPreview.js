import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/8c7a32f90edb4808cba2602745f20228~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=c37efd80&x-expires=1761620400&x-signature=%2FGqC0XrUPQozdAqxM%2BnQKzVR8ow%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>

      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Quốc Phú Nguyễn</p>
        <p className={cx('analytics')}>
            <strong className={cx('value')}>11.8M </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>11.8M </strong>
            <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
