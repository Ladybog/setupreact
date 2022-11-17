// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Todolist from './Todolist/Todolist';

export function App() {
  return (
    <>
      <Todolist />
      <NxWelcome title="todolist" />
      <div />
    </>
  );
}

export default App;
