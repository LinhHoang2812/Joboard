import { useDispatch, useSelector } from "react-redux";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { setAddCard, setEditData } from "../../redux/features/jobBoardSlice";
import { deleteJob } from "../../redux/features/jobSlice";

const Card = ({ position, company, jobLocation, id, lane }) => {
  const dispatch = useDispatch();
  const { activeId } = useSelector((store) => store.jobBoard);

  return (
    <article
      className={
        activeId === id
          ? "flex justify-between items-center p-2  border-[1px] border-gray-300 w-[95%] rounded-[10px] bg-white opacity-70 group"
          : "p-2 flex justify-between  items-center border-[1px] border-gray-300 w-[95%] rounded-[10px] bg-white group"
      }
    >
      <div className="flex flex-col gap-y-1">
        <h3 className="text-sm text-gray-700 font-semibold capitalize">
          {position}
        </h3>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-xs text-gray-500">{jobLocation}</p>
      </div>

      <div className="hidden group-hover:block">
        <div
          className="w-7 h-7 rounded-full  hover:bg-gray-100 text-gray-500 flex justify-center items-center "
          onClick={() => {
            dispatch(setAddCard());
            dispatch(
              setEditData({
                editStatus: true,
                data: { id, position, company, jobLocation, status: lane },
              })
            );
          }}
        >
          <FiEdit2 />
        </div>
        <div
          className="w-7 h-7 rounded-full hover:bg-gray-100 text-gray-500 flex justify-center items-center"
          onClick={() => {
            dispatch(deleteJob(id));
          }}
        >
          <FiTrash2 />
        </div>
      </div>
    </article>
  );
};
export default Card;
