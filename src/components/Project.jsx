const Project = ({ name, desc, renderDesc, items, beginTime, endTime }) => (
  <div className="my-3">
    <div className="flex items-center mb-2">
      <h2 className="font-bold text-lg flex-grow">{name}</h2>
      <span className="flex-none text-sm">
          {beginTime} ~ {endTime}
      </span>
    </div>
    <div className="mb-2 border-gray-800 rounded pl-3 py-3 bg-gray-100">
      {desc || renderDesc?.()}
    </div>
    <ul className="list-circle pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Project;
