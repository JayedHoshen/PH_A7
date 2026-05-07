import { Suspense } from "react";
import Friends from "../friends/Friends";

const fetchFriends = async () => {
  const res = await fetch("/friendsData.json");
  return res.json();
};

const AllFriends = () => {
  const friendsPromise = fetchFriends();
  return (
    <div className="p-4">
      <h2 className="font-semibold text-2xl">Your Friends</h2>
      <div className="mt-4">
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-dots loading-md"></span>
            </div>
          }
        >
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>
      </div>
    </div>
  );
};

export default AllFriends;
