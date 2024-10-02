import "./ItemsContainer.scss";

interface ItemsContainerProps {
  children: React.ReactNode;
}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ children }) => {
  return <div className="nav-items-container">{children}</div>;
};

export default ItemsContainer;
