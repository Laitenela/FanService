import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from "@app/store";
import { UserState } from "@entities/viewer/api/Viewer.slice";

export const General = () => {
  const userState = useSelector<RootState, UserState>((state) => state.viewer);
  return (
    <div>
      <h1>General Page</h1>
      <Link to="/second">Second</Link>
      <h3>Name: {userState.name}</h3>
      <h3>ID: {userState.id}</h3>
    </div>
  );
};
