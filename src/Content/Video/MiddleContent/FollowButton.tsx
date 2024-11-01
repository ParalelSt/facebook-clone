interface FollowButtonProps {
  className?: string;
}

const FollowButton = ({ className }: FollowButtonProps) => {
  return <button className={`follow-button ${className}`}>Follow</button>;
};

export default FollowButton;
