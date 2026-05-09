import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineProvider";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Stats = () => {
  const { timelines } = useContext(TimelineContext);

  const data = [
    {
      name: "Text",
      value: timelines.filter((item) => item.status === "Text").length,
      fill: "#37A163",
    },
    {
      name: "Call",
      value: timelines.filter((item) => item.status === "Call").length,
      fill: "#7F37F5",
    },
    {
      name: "Video",
      value: timelines.filter((item) => item.status === "Video").length,
      fill: "#244D3F",
    },
  ];
  console.log(data);
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-[#1F2937] font-bold text-5xl mb-6">
          Friendship Analytics{" "}
        </h2>
        {timelines.length === 0 ? (
          <div className="bg-white h-[30vh] rounded-2xl text-center flex flex-col justify-center items-center shadow hover:shadow-xl space-y-2 text-[#64748B] p-6">
            <h2 className="text-2xl font-bold">No Chart Available</h2>
            <p>
              Interactions will appear here once you start connecting with your
              friends.
            </p>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl">
            <h3 className="text-xl text-[#244D3F] p-6">By Interaction Type</h3>
            <ResponsiveContainer width={"100%"} height={340}>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={130}
                  cornerRadius={15}
                  paddingAngle={10}
                  dataKey="value"
                ></Pie>
                <Tooltip></Tooltip>
                <Legend></Legend>
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
