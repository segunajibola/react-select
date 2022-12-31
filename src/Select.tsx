import React from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[]; // array of different options i.e label & value
  value?: SelectOption; // one of those options i.e label and value
  onChange: (value: SelectOption | undefined) => void; // arrow func, value as parameter, value is either a label type of value type i.e string or any (any type)
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <>
      <div className="container">
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={styles.optiond}>
            {options.map(option => (
                <li key={option.label} className={styles.option}>{option.label}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
