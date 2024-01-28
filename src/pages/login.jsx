import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/molecules/Button';
import LabeledInput from '../components/molecules/LabeledInput';
import { login } from '../services/authServices';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (Cookies.get('ci_session') != null) {
      const getGroup = Cookies.get('group_id');

      if (getGroup === '1') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  }, []);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(formData)
      .then(() => {
        if (Cookies.get('ci_session')) {
          if (Cookies.get('group_id') === '1') {
            window.alert('Login Successfully');

            navigate('/admin');
          } else {
            window.alert('Login Successfully');

            navigate('/');
          }
        }
      })
      .catch((error) => {
        console.log('Login Failed ', error);
        throw error;
      });
  };

  return (
    <>
      <div className="bg-[#D4E7C5] w-full min-h-screen flex justify-center items-center ">
        <div className="w-[30%] bg-[#99BC85] flex flex-col gap-[12px] p-[18px] rounded-[8px] ">
          <h1 className="text-white text-[24px] font-[500] text-center tracking-widest">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <LabeledInput
              label="Username"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleOnChange}
            />
            <LabeledInput
              label="Password"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleOnChange}
            />
            <Button type="submit" name="LOGIN" className1="mt-[20px]" />
          </form>
        </div>
      </div>
    </>
  );
}
