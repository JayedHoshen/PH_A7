import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="p-4 border-b border-gray-200 mb-6">
      <div className="text-center space-y-4">
        <h1 className="text-[#1F2937] text-2xl md:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
          <FaPlus />
          Add a Friend
        </button>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="shadow hover:shadow-2xl p-8 space-y-2 flex flex-col justify-center bg-white rounded-2xl items-center">
          <h4 className="text-[#244D3F] font-semibold text-3xl">8</h4>
          <p className="text-[#64748B] text-lg">Total Friends</p>
        </div>
        <div className="shadow hover:shadow-2xl p-8 space-y-2 flex flex-col justify-center bg-white rounded-2xl items-center">
          <h4 className="text-[#244D3F] font-semibold text-3xl">3</h4>
          <p className="text-[#64748B] text-lg">On Track</p>
        </div>
        <div className="shadow hover:shadow-2xl p-8 space-y-2 flex flex-col justify-center bg-white rounded-2xl items-center">
          <h4 className="text-[#244D3F] font-semibold text-3xl">6</h4>
          <p className="text-[#64748B] text-lg">Need Attention</p>
        </div>
        <div className="shadow hover:shadow-2xl p-8 space-y-2 flex flex-col justify-center bg-white rounded-2xl items-center">
          <h4 className="text-[#244D3F] font-semibold text-3xl">12</h4>
          <p className="text-[#64748B] text-lg">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
