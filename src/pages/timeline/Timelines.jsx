import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineProvider";
import TimelineCard from "../../components/ui/TimelineCard";

const Timelines = () => {
  const { timelines } = useContext(TimelineContext);
  const [filterTimeline, setFilterTimeline] = useState("");

  const filteredTimeline =
    filterTimeline === "Call"
      ? timelines.filter((timeline) => timeline.status === "Call")
      : filterTimeline === "Text"
        ? timelines.filter((timeline) => timeline.status === "Text")
        : filterTimeline === "Video"
          ? timelines.filter((timeline) => timeline.status === "Video")
          : timelines;

  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-[#1F2937] font-bold text-5xl mb-6">Timeline </h2>
        <div className="dropdown dropdown-start mb-6">
          <div tabIndex={0} role="button" className="btn p-6 m-1 text-base">
            Filter timeline by {filterTimeline} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setFilterTimeline("Call")}>
              <a>Filtered by Call</a>
            </li>
            <li onClick={() => setFilterTimeline("Text")}>
              <a>Filtered by Text</a>
            </li>
            <li onClick={() => setFilterTimeline("Video")}>
              <a>Filtered by Video</a>
            </li>
            <li onClick={() => setFilterTimeline("")}>
              <a>Reset Timeline filter</a>
            </li>
          </ul>
        </div>
        {filteredTimeline.length === 0 && (
          <div className="bg-white h-[30vh] rounded-2xl text-center flex flex-col justify-center items-center shadow hover:shadow-xl space-y-2 text-[#64748B] p-6">
            <h2 className="text-2xl font-bold">No Activities</h2>
            <p>
              Interactions will appear here once you start connecting with your
              friends.
            </p>
          </div>
        )}
        <div className="space-y-5">
          {filteredTimeline.map((timeline, index) => (
            <TimelineCard key={index} timeline={timeline}></TimelineCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timelines;
