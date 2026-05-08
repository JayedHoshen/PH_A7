import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const TimelineCard = ({ timeline }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl p-4 flex items-center gap-4">
      <img
        src={`${timeline.status === "Video" ? videoImg : timeline.status === "Text" ? textImg : callImg}`}
        alt={timeline.status}
      />
      <div className="space-y-2 text-[#64748B]">
        <h3 className="text-xl">{timeline.title}</h3>
        <p className="">{timeline.currentDate}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
