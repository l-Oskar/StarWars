//PersonPage.jsx
import PropTypes from "prop-types";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import UiLoading from "@ui/UiLoading";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonImg from "@components/PersonPage/PersonImg";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";

import { getPeopleImg } from "@services/getPeopleData";

import { getApiResource } from "@utils/network";

import { API_PERSON } from "@constants/api";

import styles from "./PersonPage.module.scss";

const PersonFilms = React.lazy(
  () => import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImg, setPersonImg] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const isTheme = useTheme().theme;

  const storeDate = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height + "cm" },
          { title: "Mass", data: res.mass + "kg" },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonImg(getPeopleImg(id));
        setErrorApi(false);
        res.films.length && setPersonFilms(res.films);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImg
            img={personImg}
            name={personName}
            id={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme={isTheme} />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
