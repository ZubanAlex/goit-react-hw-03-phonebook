import React from "react";
import T from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <p className={styles.laibel}>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        className={styles.input}
        onChange={onChangeFilter}
        placeholder="Search Contact"
      />
    </>
  );
};

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired
};

export default Filter;
