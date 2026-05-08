import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineProvider";
import TimelineCard from "../../components/ui/TimelineCard";

const Timelines = () => {
  const { timelines } = useContext(TimelineContext);

  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-[#1F2937] font-bold text-5xl mb-6">Timeline </h2>
        {timelines.length === 0 && (
          <div className="bg-white h-[30vh] rounded-2xl text-center flex flex-col justify-center items-center shadow hover:shadow-xl space-y-2 text-[#64748B] p-6">
            <h2 className="text-2xl font-bold">No Activities</h2>
            <p>
              Interactions will appear here once you start connecting with your
              friends.
            </p>
          </div>
        )}
        <div className="space-y-5">
          {timelines.map((timeline, index) => (
            <TimelineCard key={index} timeline={timeline}></TimelineCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timelines;
