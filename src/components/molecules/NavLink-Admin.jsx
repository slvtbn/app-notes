import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authServices';

export default function NavLink() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const isActive = (path) => {
    return currentPath === path
      ? 'bg-[#BFD8AF] rounded-[8px] p-[8px] w-full text-center'
      : '';
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (e) {
      console.log('Failed to log out', e);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[40px] m-[18px] text-[16px] px-[8px] items-center  ">
        <Link to="/admin/" className={`${isActive('/admin/')}`}>
          Dashboard
        </Link>
        <Link to="/admin/notes" className={`${isActive('/admin/notes')}`}>
          Notes
        </Link>
        <Link to="/admin/account" className={`${isActive('/admin/account')}`}>
          Account
        </Link>
        <Link to="/admin/users" className={`${isActive('/admin/account')}`}>
          Users
        </Link>
        <Link
          to="/admin/all-users-notes"
          className={`${isActive('/admin/account')}`}
        >
          All Notes
        </Link>
        <Link className={`${isActive('/logout')}`} onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </>
  );
}
