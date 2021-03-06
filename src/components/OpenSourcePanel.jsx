import Github from './Github';

const sources = [
  {
    name: 'leetcode-java',
    link: 'https://github.com/cnmxiaobudian/leetcode-java',
    desc: 'leetcode题解',
  },
];

const OpenSourcePanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Github className="inline align-text-bottom mb-0.5 mr-2" />
      开源项目
    </h2>
    <ul className="list-disc pl-6">
      {sources.map(({ name, link, desc }, index) => (
        <li className="mb-2">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="italic bg-gray-100 p-1 px-2 mr-2 rounded hover:text-blue-500"
          >
            {name}
          </a>
          <span className="">- {desc}</span>
        </li>
      ))}
    </ul>
  </>
);

export default OpenSourcePanel;
