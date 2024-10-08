import React from "react";

import { PropTypes } from "prop-types";

import styles from "./styles.module.scss";

function Headline(props) {
  const { category, title, offset, icon: Icon } = props;

  return (
    <div className="row">
      <div className={`col col--${12 - offset} col--offset-${offset}`}>
        <div className={styles.headline}>
          {category && <span className={styles.category}>{category}</span>}
          {title && (
            <h2 className={styles.title}>
              {title}
              {Icon && <Icon className={styles.icon} />}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

Headline.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  offset: PropTypes.number,
  icon: PropTypes.elementType,
};

Headline.defaultProps = {
  offset: 0,
};

export default Headline;
