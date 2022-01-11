import { useEffect } from 'react';
import { goToLogin } from '../routes/Coordinator';
import { useHistory } from 'react-router-dom';

const useProtectedPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};

export default useProtectedPage;
