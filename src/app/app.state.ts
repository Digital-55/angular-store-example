import { Task } from './tasks/task.model';

export interface AppState {
  readonly tasks: Task[];
}