import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import UiInput from "@ui/UiInput";

import SearchPageinfo from "@components/SearchPage/SearchPageInfo";

import { getPeopleId, getPeopleImg } from "@services/getPeopleData";

import { getApiResource } from "@utils/network";

import { API_SEARCH } from "@constants/api";

import styles from "./SearchPage.module.scss";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH);

    if (res) {
      const peopleList = res
        .filter(({ name }) => name.toLowerCase().includes(param.toLowerCase()))
        .map(({ name, url }) => {
          const id = getPeopleId(url);
          const img = getPeopleImg(id);
          return {
            id,
            name,
            img,
          };
        });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResponse("");
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character name"
        classes={styles.input__search}
      />
      <SearchPageinfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
