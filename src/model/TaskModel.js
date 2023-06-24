// model does the queries

import TaskSchema from "./TaskSchema.js";

// C Create data indb
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

export const readTasks = () => {
  return TaskSchema.find();
};

export const switchTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
