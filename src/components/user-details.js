const { default: SkeletonProfile } = require("../skeletons/skeleton-profile")

const UserDetails = (props) => {
  return (
    <div className="user-details">
      <h1>User Details</h1>
      <SkeletonProfile />
    </div>
  );
};

export default UserDetails;
