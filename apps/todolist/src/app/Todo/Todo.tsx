import styles from './Todo.module.css';

/* eslint-disable-next-line */
export interface TodoProps {
  name: string;
  complete: boolean;
  onClick: (haha: { name: string; complete: boolean }) => void;
}

export function Todo(props: TodoProps) {
  return (
    <div className={styles['container']}>
      <div
        onClick={() =>
          props.onClick({ name: props.name, complete: props.complete })
        }
      >
        {props.name} : {props.complete ? 'done' : ''}
      </div>
    </div>
  );
}

export default Todo;
