const FriendCard = ({ friend }) => {
  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;
  return (
    <div className="card bg-white shadow hover:shadow-2xl rounded-xl">
      <figure className="px-4 pt-4">
        <img src={picture} alt={name} className="w-24 h-24 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-[#64748B]">{days_since_contact}d ago</p>
        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((tag, indx) => (
            <span key={indx} className="badge bg-[#CBFADB] text-[#244D3F]">
              {tag}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <button
            className={`btn text-white rounded-4xl mt-2 ${status === "overdue" ? "bg-[#EF4444]" : status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
