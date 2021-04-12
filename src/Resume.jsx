import Header from './components/Header';
import SkillsPanel from './components/SkillsPanel';
import CareerPanel from './components/CareerPanel';
import OpenSourcePanel from './components/OpenSourcePanel';
import SharePanel from './components/SharePanel';
import EduationPanel from './components/EduationPanel';

export default function Resume() {
  return (
    <>
      <Header
        name="孙亮"
        title="研发部总经理"
        mobile="18676784297"
        email="353202532@qq.com"
        github={'github.com/cnmxiaobudian'}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <CareerPanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <OpenSourcePanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SharePanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SkillsPanel
        items={[
          '多年广告营销领域从业经验，负责阿里妈妈广告系统从巨石应用到中台化进程中的核心模块开发及架构设计，负责底层中间件的架构及开发',
          '大型中后台系统架构设计经验，能够根据业务实际需求设计系统架构、进行技术选型',
          '熟悉六边形、DDD、洋葱、COLA等架构，能够结合实际需求，设计高可用、高扩展、高并发的业务架构、系统架构、技术架构',
          '精通Java技术体系，包括SpringBoot、SpringCloud、阿里中间件（HSF、tair、diamond、ODPS、opensearch）、TMF等，具备多年微服务及中台化架构的实战经验',
          '了解Docker、K8s、CICD、自动化部署等，有APM（skywalking、zipkin等）、一站式devops（Jenkins、GitLab Runner、Jira、Argo）、xpocket等的实战经验',
          '具备一定的大型产研团队管理经验，负责架构、前端、后端、测试、运营、产品、数据等相关工作',
          '具备一定的前端开发经验，掌握react、antd、umi、qiankun、G2等',
          '能够阅读英文文档，Github，Stackoverflow上能够使用英语书面交流',
          '关注最新技术趋势(云原生、Micro Frontends、中台化、DDD等)',
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <EduationPanel />
    </>
  );
}
