// import { useSelector } from 'react-redux';
// import { RootState } from "@app/store";
// import { UserState } from "@entities/viewer/api/Viewer.slice";
import { Profile } from './profile';

export const Header = () => {
  // const userData = useSelector<RootState, UserState>((state) => state.viewer);
  return <header><Profile/></header>;
};
