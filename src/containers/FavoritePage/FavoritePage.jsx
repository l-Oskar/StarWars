import { useSelector } from "react-redux";
import styles from "./FavoritePage.module.scss";

const FavoritePage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  return (
    <>
      FavoritePage
      {console.log(storeData)}
    </>
  );
};

export default FavoritePage;
