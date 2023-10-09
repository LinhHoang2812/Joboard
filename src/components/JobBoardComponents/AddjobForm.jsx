import { useDispatch, useSelector } from "react-redux";
import SelectRow from "./SelectRow";
import TextRow from "./TextRow";
import { RiCloseFill } from "react-icons/ri";
import { setAddCard, setEditData } from "../../redux/features/jobBoardSlice";
import { createJob, editJob } from "../../redux/features/jobSlice";

const AddjobForm = () => {
  const dispatch = useDispatch();
  const { chosenStatus, isEditCard, editData } = useSelector(
    (store) => store.jobBoard
  );

  const { user } = useSelector((store) => store.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (isEditCard) {
      dispatch(
        editJob({ id: editData.id, data: { ...data, _id: editData.id } })
      );
    } else {
      dispatch(createJob(data));
    }

    dispatch(setAddCard());
  };

  return (
    <div className="px-5 py-20 bg-white rounded-lg w-[80%] absolute z-[100] left-[10%] top-[50%] translate-y-[-50%] duration-700 ">
      <h3 className="text-2xl text-gray-500 tracking-wide leading-loose">
        {isEditCard ? "Edit Job Card" : "Add job card"}
      </h3>
      <button
        className="absolute  top-4 right-4 text-3xl  text-purple-700"
        onClick={() => {
          dispatch(setAddCard());
          dispatch(
            setEditData({
              editStatus: false,
              data: null,
            })
          );
        }}
      >
        <RiCloseFill />
      </button>
      <form
        className="pt-5 pb-20 grid grid-cols-3 gap-5"
        onSubmit={handleSubmit}
      >
        <TextRow
          type="text"
          name="company"
          label="company"
          defaultValue={isEditCard ? editData.company : ""}
        />
        <TextRow
          type="text"
          name="position"
          label="position"
          defaultValue={isEditCard ? editData.position : ""}
        />
        <TextRow
          type="text"
          name="jobLocation"
          label="job location"
          defaultValue={
            isEditCard
              ? editData.jobLocation
              : user.location
              ? user.location
              : ""
          }
        />
        <SelectRow
          name="status"
          label="status"
          options={["pending", "interview", "declined"]}
          defaultValue={isEditCard ? editData.status : chosenStatus}
        />
        <SelectRow
          name="jobType"
          label="job type"
          options={["full-time", "part-time"]}
        />

        <button
          type="submit"
          className="w-fit self-end px-8 py-1 bg-gradient-to-r bg-gray-100 from-purple-400 to-purple-600 rounded-lg text-white"
        >
          {isEditCard ? "Save changes" : "Create"}
        </button>
      </form>
    </div>
  );
};
export default AddjobForm;
