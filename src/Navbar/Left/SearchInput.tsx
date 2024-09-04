import { FaMagnifyingGlass } from "react-icons/fa6";

export interface PlaceholderTyping {
  placeholder: string;
}

function SearchInput({ placeholder }: PlaceholderTyping) {
  return (
    <div className="input-container">
      <div className="left">
        <FaMagnifyingGlass></FaMagnifyingGlass>
      </div>
      <div className="right">
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default SearchInput;
