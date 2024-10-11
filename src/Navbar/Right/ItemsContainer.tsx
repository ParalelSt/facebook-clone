import "./ItemsContainer.scss";

interface ItemsContainerProps {
  className?: string;
  children: React.ReactNode;
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({
  className,
  children,
}) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

export default ItemsContainer;
