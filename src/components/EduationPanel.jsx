import Education from './Education';

const EduationPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Education className="inline align-text-bottom mb-0.5 mr-2" />
      教育经历
    </h2>
    <ul className="list-disc pl-6">
      <li className="mb-3">
        <div className="flex mb-2 w-1/3 items-center">
          <span className="flex-1 text-xl font-bold">电子科技大学</span>
          <span className="flex-none text-sm">2008 - 2012</span>
        </div>
        <div className="text-sm">计算机科学与工程学院 / 信息安全 / 学士</div>
      </li>
    </ul>
  </>
);

export default EduationPanel;
