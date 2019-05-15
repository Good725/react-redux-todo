import React from 'react'
import PropTypes from 'prop-types'
import styles from './todo.module.scss'
import { distanceInWordsToNow } from 'date-fns'
import { Button } from '@blueprintjs/core'
import TodoIcon from '../todoIcon'

const Todo = ({ todo }) => {
  return (
    <div className={styles.root}>
      <TodoIcon icon={todo.icon} />
      <div className={styles.content}>
        <div className={styles.title}>{todo.description}</div>
        <div className={styles.subTitle}>{todo.location}</div>
      </div>
      <div className={styles.details}>
        <span className={styles.date}>
          {distanceInWordsToNow(todo.date, { addSuffix: true })}
        </span>
        <div className={styles.actions}>
          <Button icon={'tick'} minimal />
        </div>
      </div>
    </div>
  )
}

Todo.propTypes = {}

export default Todo
