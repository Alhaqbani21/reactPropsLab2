import iconTwitter from '../assets/twitter-x.svg';
import iconLinkedIn from '../assets/linkedin.svg';
import iconInstagram from '../assets/instagram.svg';

function Footer1() {
  return (
    <div className="footerContainer opacity-75">
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="">
          <img src={iconTwitter} alt="" />
        </a>
        <a href="">
          <img src={iconLinkedIn} alt="" />{' '}
        </a>
        <a href="">
          {' '}
          <img src={iconInstagram} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer1;
