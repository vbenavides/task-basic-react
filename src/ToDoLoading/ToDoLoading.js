import { SkeletonLoader } from "./SkeletonLoader";

function ToDoLoading() {
  return (
    <div className='ToDoList'>
      <SkeletonLoader />
    </div>
  );
}

export { ToDoLoading };