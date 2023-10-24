import "./index.css";

const TabItem = (props) => {
  const { tab, changeTabItem, isActive } = props;

  const actveTabItem = isActive ? "active" : "";

  const onClickTabItem = () => {
    changeTabItem(tab);
  };
  return (
    <li>
      <button
        type="button"
        className={`tab-item ${actveTabItem}`}
        onClick={onClickTabItem}
      >
        {tab}
      </button>
    </li>
  );
};

export default TabItem;
