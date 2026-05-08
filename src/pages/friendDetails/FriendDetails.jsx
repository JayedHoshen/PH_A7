import { useContext } from "react";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { TimelineContext } from "../../context/TimelineProvider";

const FriendDetails = () => {
  const friends = useLoaderData();
  const { id } = useParams();
  const expectedFriend = friends.find((friend) => friend.id === Number(id));
  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;

  const { handleTimeline } = useContext(TimelineContext);

  return (
    <div className="bg-[#F8FAFC] p-4">
      <div className="container mx-auto py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="w-full lg:max-w-[35%]">
            <div className="card bg-white shadow hover:shadow-2xl rounded-xl">
              <figure className="px-4 pt-4">
                <img
                  src={picture}
                  alt={name}
                  className="w-24 h-24 rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <button
                  className={`btn text-white rounded-4xl mt-2 ${status === "overdue" ? "bg-[#EF4444]" : status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}
                >
                  {status}
                </button>
                <div className="flex gap-2 flex-wrap justify-center">
                  {tags.map((tag, indx) => (
                    <span
                      key={indx}
                      className="badge bg-[#CBFADB] text-[#244D3F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#64748B] italic">"{bio}"</p>
                <p className="text-base text-[#19191a]">
                  <span className="font-bold">Email:</span> {email}
                </p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <button className="btn w-full rounded-md shadow text-base bg-white hover:shadow-xl">
                <HiOutlineBellSnooze className="text-xl" />
                Snooze 2 Weeks
              </button>
              <button className="btn w-full rounded-md shadow text-base bg-white hover:shadow-xl">
                <FiArchive />
                Archive
              </button>
              <button className="btn w-full text-red-600 rounded-md shadow text-base bg-white hover:shadow-xl">
                <RiDeleteBinLine className="text-xl" />
                Delete
              </button>
            </div>
          </div>
          <div className="w-full lg:max-w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="shadow hover:shadow-2xl p-8 space-y-4 flex flex-col justify-center bg-white rounded-2xl items-center">
                <h4 className="text-[#244D3F] font-semibold text-3xl">
                  {days_since_contact}
                </h4>
                <p className="text-[#64748B] text-lg">Days Since Contact</p>
              </div>
              <div className="shadow hover:shadow-2xl p-8 space-y-4 flex flex-col justify-center bg-white rounded-2xl items-center">
                <h4 className="text-[#244D3F] font-semibold text-3xl">
                  {goal}
                </h4>
                <p className="text-[#64748B] text-lg">Goal (Days)</p>
              </div>
              <div className="shadow hover:shadow-2xl p-8 space-y-4 flex flex-col justify-center bg-white rounded-2xl items-center">
                <h4 className="text-[#244D3F] font-semibold text-3xl">
                  {next_due_date}
                </h4>
                <p className="text-[#64748B] text-lg">Next Due</p>
              </div>
            </div>
            <div className="my-4 bg-white flex justify-between shadow hover:shadow-xl p-8 rounded-2xl">
              <div className="space-y-4">
                <h4 className="text-[#244D3F] font-semibold text-2xl">
                  Relationship Goal
                </h4>
                <p className="text-[#64748B] text-lg">
                  Connect every <span className="font-bold">{goal} days</span>
                </p>
              </div>
              <button className="btn">Edit</button>
            </div>
            <div className="bg-white shadow hover:shadow-xl p-6 rounded-2xl">
              <h4 className="mb-3 text-[#244D3F] font-semibold text-2xl">
                Quick Check-In
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => handleTimeline("Call", name)}
                  className="shadow hover:shadow-xl p-4 space-y-2 flex flex-col justify-center bg-gray-100 rounded-2xl items-center text-xl"
                >
                  <FiPhoneCall />
                  <span>Call</span>
                </div>
                <div
                  onClick={() => handleTimeline("Text", name)}
                  className="shadow hover:shadow-xl p-4 space-y-2 flex flex-col justify-center bg-gray-100 rounded-2xl items-center text-xl"
                >
                  <MdOutlineTextsms />
                  <span>Text</span>
                </div>
                <div
                  onClick={() => handleTimeline("Video", name)}
                  className="shadow hover:shadow-xl p-4 space-y-2 flex flex-col justify-center bg-gray-100 rounded-2xl items-center text-xl"
                >
                  <IoVideocamOutline className="text-2xl" />
                  <span>Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
