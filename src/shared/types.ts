export interface ListType {
  _id: string;
  title: string;
  todos: string;
  completed: Date | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}
