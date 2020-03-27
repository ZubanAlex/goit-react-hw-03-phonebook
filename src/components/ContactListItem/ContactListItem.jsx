import React from "react";
import T from "prop-types";

import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <span className={styles.name}>{name}:</span>
      <span className={styles.number}>{number}</span>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        Delet contact
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: T.string.isRequired,
  number: T.string.isRequired,
  onDeleteContact: T.func.isRequired
};

export default ContactListItem;
