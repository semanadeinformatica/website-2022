import React from "react"

import styles from "../../styles/talk/link.module.css"

const Link = ({ link }) =>
  link && (
    <a
      className={styles.container}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Link
    </a>
  )

export default Link
