import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Mạng xã hội */}
        <div className="footer-social">
          <FacebookOutlined />
          <InstagramOutlined />
          <YoutubeOutlined />
        </div>

        {/* Nội dung chính */}
        <div className="footer-columns">
          <div className="footer-column">
            <img src="" alt="" className="footer-logo" />
            <p>Tầng 1 Helio Center, Đường 2/9, Hải Châu, Đà Nẵng</p>
          </div>

          <div className="footer-column">
            <h2>AN NGUYEN CINEMA</h2>
            <a href="">GIỚI THIỆU</a>
            <a href="">TUYỂN DỤNG</a>
            <a href="">LIÊN HỆ</a>
          </div>

          <div className="footer-column">
            <h2>THÔNG TIN CHUNG</h2>
            <a href="">ĐIỀU KHOẢN CHUNG</a>
            <a href="">CÂU HỎI THƯỜNG GẶP</a>
            <a href="">ĐIỀU KHOẢN GIAO DỊCH</a>
          </div>
        </div>

        {/* Thông tin công ty */}
        <div className="footer-info">
          <p>Tên Doanh Nghiệp: Công Ty TNHH Ân Nguyễn.</p>
          <p>
            Giấy CNĐKKD: 0400668112 - Ngày cấp: 05/11/2008. Đăng ký thay đổi lần
            thứ 11 ngày 21/12/2016
          </p>
          <p>Cơ quan cấp: Đặng Thành Vinh</p>
          <p>
            Địa chỉ đăng ký kinh doanh: 22 đường 2/9, Phường Bình Hiên, Q.Hải
            Châu, Tp.Đà Nẵng, Việt Nam.
          </p>
          <p>Điện thoại: 0236 xxx xx</p>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>MỘT SẢN PHẨM ĐẾN TỪ ÂN NGUYỄN, ANNDB2.</p>
          <img src="" alt="" className="footer-logo" />
          <p>BẢN QUYỀN © 2025 ÂN NGUYỄN CINEMA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
