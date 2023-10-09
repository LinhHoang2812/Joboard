import { useDroppable } from "@dnd-kit/core";
import { useEffect, useRef } from "react";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setAddCard } from "../../redux/features/jobBoardSlice";
import DraggableCard from "./DraggableCard";

const Lane = ({ title, items }) => {
  const dispatch = useDispatch();
  const { activeData } = useSelector((store) => store.jobBoard);
  const { isLoading } = useSelector((store) => store.allJobs);
  const { setNodeRef, isOver, rect } = useDroppable({
    id: title,
  });
  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [isOver]);

  return (
    <div className="shrink-0 p-3 pb-5 flex flex-col gap-y-2 bg-gray-200 rounded-[10px] self-start min-h-rem[5rem] max-h-full w-[23rem]">
      <h3 className="text-purple-700 font-semibold capitalize">{title}</h3>
      <div
        className="pt-5 mb-2 flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden "
        // style={{
        //   height: isOver && `${rect.current.height + 70}px`,
        // }}
        ref={setNodeRef}
      >
        {items.map(({ _id, company, position, jobLocation }) => (
          <DraggableCard
            lane={title}
            company={company}
            position={position}
            id={_id}
            key={_id}
            jobLocation={jobLocation}
          />
        ))}
        {isOver && activeData.lane !== title && (
          <div
            ref={divRef}
            className="border-[1px] pt-20 border-gray-300 w-[95%] rounded-[10px] bg-gray-300 h-[80px]"
          ></div>
        )}
      </div>
      {!isLoading && (
        <button
          className="flex gap-x-2 items-center p-2 rounded-[10px] hover:bg-gray-300 w-[80%] text-left text-sm"
          onClick={() => dispatch(setAddCard(title))}
        >
          <HiPlus className="text-lg text-gray-600" />
          Add new job card
        </button>
      )}
    </div>
  );
};
export default Lane;
