import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { format } from 'date-fns'
import { Button, ButtonGroup } from '@blueprintjs/core'
import Avatar from 'components/ui/Avatar'

const Todo = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

  return (
    <div className={`${styles.root} ${todo.done ? styles.done : ''}`}>
      <Avatar icon={todo.icon} disabled={!todo.done} />
      <div className={styles.content}>
        <div className={styles.title}>{todo.description}</div>
        <div className={styles.subTitle}>{todo.location}</div>
      </div>
      <div className={styles.details}>
        <span className={styles.date}>{format(todo.date, 'ha')}</span>
        <div className={styles.actions}>
          <ButtonGroup minimal>
            {!todo.done && (
              <Button icon={'tick'} minimal onClick={handleToggle} />
            )}
            {todo.done && (
              <Button icon={'undo'} minimal onClick={handleToggle} />
            )}
            <Button icon={'trash'} minimal onClick={handleDelete} />
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Todo
