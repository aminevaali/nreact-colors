import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const BlueRed = {
  primary: "#2196F3",
  darkPrimary: "#1976D2",
  lightPrimary: "#BBDEFB",
  text_icon: "#FFFFFF",
  accent: "#FF5252",
  primaryText: "#212121",
  secondaryText: "#757575",
  dividerColor: "#BDBDBD"
}

export const OrangeBlack = {
  primary: "#2196F3",
  darkPrimary: "#E64A19",
  lightPrimary: "#FFAB91",
  text_icon: "#FFFFFF",
  accent: "#212121",
  primaryText: "#212121",
  secondaryText: "#757575",
  dividerColor: "#BDBDBD"
}