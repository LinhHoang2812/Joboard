import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, moveJob, removeJob } from "../redux/features/allJobsSlice";
import {
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  DndContext,
  rectIntersection,
  DragOverlay,
  closestCenter,
} from "@dnd-kit/core";

import Lane from "../components/JobBoardComponents/Lane";
import Card from "../components/JobBoardComponents/Card";
import { editJob } from "../redux/features/jobSlice";
import AddjobForm from "../components/JobBoardComponents/AddjobForm";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { setActiveData, setActiveId } from "../redux/features/jobBoardSlice";

const JobboardPage = () => {
  const dispatch = useDispatch();
  const { isAddCard, activeId, activeData } = useSelector(
    (store) => store.jobBoard
  );
  const { pendingJobs, interviewJobs, declinedJobs, jobs } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    if (!jobs) {
      dispatch(getJobs());
    }
  }, []);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor, pointerSensor);

  const handleDragEnd = (e) => {
    if (e.over?.id) {
      dispatch(
        moveJob({
          ...activeData,
          _id: activeId,
          status: e.over.id,
        })
      );
      dispatch(
        editJob({
          id: activeId,
          data: { ...activeData, status: e.over.id },
        })
      );
    }

    dispatch(setActiveId(null));
  };
  const handleDragStart = (e) => {
    dispatch(setActiveId(e.active.id));
    dispatch(setActiveData(e.active.data.current));
  };
  const handleDragOver = (e) => {
    if (e.over?.id) {
      if (e.active.data.current.lane !== e.over.id) {
        dispatch(
          removeJob({
            ...e.active.data.current,
            _id: e.active.id,
            status: e.active.data.current.lane,
          })
        );
        //change active lane to unknown
        dispatch(setActiveData({ ...activeData, lane: "unknown" }));
      }
    }
  };

  return (
    <ScrollArea.Root className=" h-[calc(100vh-80px)] ">
      <ScrollArea.Viewport className=" w-full h-full">
        <section className="p-10 bg-gradient-to-r from-purple-700 to-fuchsia-600 h-[calc(100vh-80px)]">
          {isAddCard && (
            <div className="fixed z-50 top-0 left-0 w-screen h-screen  bg-gray-700 opacity-[0.5] duration-700"></div>
          )}
          <DndContext
            sensors={sensors}
            collisionDetection={rectIntersection}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
          >
            <div className="flex gap-x-10 h-full">
              <Lane title="pending" items={pendingJobs || []} />
              <Lane title="interview" items={interviewJobs || []} />
              <Lane title="declined" items={declinedJobs || []} />
            </div>
            <DragOverlay
              dropAnimation={{
                duration: 500,
                easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
              }}
              style={{ width: 350 }}
            >
              {activeId ? (
                <Card
                  position={activeData.position}
                  company={activeData.company}
                  lane={activeData.lane}
                  jobLocation={activeData.jobLocation}
                />
              ) : null}
            </DragOverlay>
          </DndContext>
          {isAddCard && <AddjobForm />}
        </section>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="p-1 flex flex-col h-5 select-none touch-none bg-gray-200"
      >
        <ScrollArea.Thumb className="flex-1 rounded-md bg-gray-400 " />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
export default JobboardPage;
