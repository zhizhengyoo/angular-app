export const MENU_LIST = [{
  name: 'home',
  title: '首页',
  path: '',
  icon: '',
}, {
  name: 'journal',
  title: '手账集市',
  path: '/journal',
  icon: '',
}, {
  name: 'learningLogs',
  title: '学习日志',
  path: '/learning-logs',
  icon: '',
  children: [{
    name: 'angular',
    title: 'angular',
    path: '/angular-logs',
    icon: '',
  }, {
    name: 'react',
    title: 'react',
    path: '/react-logs',
    icon: '',
  }]
}, {
  name: 'about',
  title: '关于',
  path: '/about',
  icon: '',
}];
