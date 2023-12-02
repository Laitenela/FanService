import { useSelector } from 'react-redux';
import { RootState } from "@app/store";
import { UserState } from "@entities/viewer/api/Viewer.slice";
import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/ui';

export const Profile: React.FC = () => {
  const userState = useSelector<RootState, UserState>((state) => state.viewer);
  const navigate = useNavigate();

  const ProfileLink = (
    <Button onClick={() => navigate('/profile')} type={"link"}>
      Профиль
    </Button>
  )

  const ProfileButton = (
    <Button onClick={() => navigate('/login')} type={"link"}>
      Войти
    </Button>
  )


  return userState.isLogged ? ProfileLink : ProfileButton;
}