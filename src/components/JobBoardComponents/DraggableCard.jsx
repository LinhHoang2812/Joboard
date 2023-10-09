import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import Card from "./Card";
import { useSelector } from "react-redux";

const DraggableCard = ({ id, position, company, jobLocation, lane }) => {
  const { activeId } = useSelector((store) => store.jobBoard);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      position,
      company,
      jobLocation,
      lane,
    },
  });

  return (
    <div
      className={"focus:outline-none"}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: activeId === id ? null : CSS.Translate.toString(transform),
      }}
    >
      <Card
        company={company}
        position={position}
        key={id}
        jobLocation={jobLocation}
        id={id}
        lane={lane}
      />
    </div>
  );
};
export default DraggableCard;
