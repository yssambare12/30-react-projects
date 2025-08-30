const TaskShow = ({ inputvalue }) => {
  console.log(inputvalue);
  return (
    <div>
      <h3 className="font-bold">Task Title :</h3>
      <h3>{inputvalue}</h3>
    </div>
  );
};

export default TaskShow;
