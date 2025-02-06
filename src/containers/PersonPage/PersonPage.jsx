import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import styles from "./PersonPage.module.scss";

const PersonPage = () => {
  const [personInfo, setPersonInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      setPersonInfo(res.name);
    })();
  }, []);
  return (
    <>
      <h1>{personInfo}</h1>
    </>
  );
};

// PersonPage.propTypes = {
//   //   props: PropTypes.any,
// };

export default PersonPage;
