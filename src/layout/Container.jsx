import React from 'react'
import classNames from 'classnames'
import classes from "./container.module.css"



const Container = ({children,className}) => {
  return (
    <div className={classNames(classes['container'], className)}>{children}</div>
  )
}

export default Container