export default function Sidebar({ listItems, title = 'History', }) {
  return (
    <div className={"sidebar text-center border"} >
      <h1 className={"text-xl underline"}>{title}</h1>
      <ul>
        {listItems?.map((item, index) => (
          <li key={index} onClick={() => console.log(`Clicked ${item}`)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


