import { RootState } from "@app/store";
import { UserState } from "@entities/viewer/api/Viewer.slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Main = () => {
  const userState = useSelector<RootState, UserState>((state) => state.viewer);

  return (
    <main>
      <h3>Name: {userState.name}</h3>
      <h3>ID: {userState.id}</h3>
      <Link to="/second">Second</Link>
    </main>
  );
};
