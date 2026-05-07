import { use } from "react";
import FriendCard from "../../components/ui/FriendCard";

const Friends = ({ friendsPromise }) => {
  const allFriends = use(friendsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {allFriends.map((friend) => (
        <FriendCard key={friend.id} friend={friend}></FriendCard>
      ))}
    </div>
  );
};

export default Friends;
