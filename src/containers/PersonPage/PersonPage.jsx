import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonImg from "@components/PersonPage/PersonImg";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";

import { getPeopleImg } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { API_PERSON } from "@constants/api";
import styles from "./PersonPage.module.scss";

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImg, setPersonImg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
          // {title: 'Films', data: res.films},
        ]);
        setPersonName(res.name);
        setPersonImg(getPeopleImg(id));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
      d;
    })();
  }, [id]);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImg img={personImg} name={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
