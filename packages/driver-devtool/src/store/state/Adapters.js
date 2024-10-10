import { uniqueId } from '@/utils/file'
import SectionBase from './SectionBase'

export default class Adapters extends SectionBase {
  constructor() {
    super('adapters', 'adapters')
  }
  defaultItemModel() {
    return {
      id: '',
      name: '',
      content: '',
      dirty: false,
    }
  }
  getDefaultData() {
    const idPrefix = `${this.key}_`;
    return {
      key: this.key,
      title: '适配器',
      idPrefix,
      items: [
        {
          id: uniqueId(idPrefix),
          name: 'template.js',
          content: require('@wechatsync/drivers/src/BaseAdapter?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'zhihu.js',
          content: require('@wechatsync/drivers/src/zhihu?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'weibo.js',
          content: require('@wechatsync/drivers/src/weibo?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: '51cto.js',
          content: require('@wechatsync/drivers/src/51cto?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: '163.js',
          content: require('@wechatsync/drivers/src/163?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'baijiahao.js',
          content: require('@wechatsync/drivers/src/baijiahao?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'bilibili.js',
          content: require('@wechatsync/drivers/src/bilibili?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'Cnblog.js',
          content: require('@wechatsync/drivers/src/Cnblog?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'CSDN.js',
          content: require('@wechatsync/drivers/src/CSDN?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'dayu.js',
          content: require('@wechatsync/drivers/src/dayu?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'Discuz.js',
          content: require('@wechatsync/drivers/src/Discuz?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'douban.js',
          content: require('@wechatsync/drivers/src/douban?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'focus.js',
          content: require('@wechatsync/drivers/src/focus?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'imooc.js',
          content: require('@wechatsync/drivers/src/imooc?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'ipfs.js',
          content: require('@wechatsync/drivers/src/ipfs?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'jianshu.js',
          content: require('@wechatsync/drivers/src/jianshu?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'Juejin.js',
          content: require('@wechatsync/drivers/src/Juejin?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'oschina.js',
          content: require('@wechatsync/drivers/src/oschina?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'Segmentfault.js',
          content: require('@wechatsync/drivers/src/Segmentfault?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'sohu.js',
          content: require('@wechatsync/drivers/src/sohu?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'toutiao.js',
          content: require('@wechatsync/drivers/src/toutiao?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'weixin.js',
          content: require('@wechatsync/drivers/src/weixin?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'wordpress.js',
          content: require('@wechatsync/drivers/src/wordpress?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'xueqiu.js',
          content: require('@wechatsync/drivers/src/xueqiu?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'YiDian.js',
          content: require('@wechatsync/drivers/src/YiDian?raw'),
          dirty: false,
        },
        {
          id: uniqueId(idPrefix),
          name: 'yuque.js',
          content: require('@wechatsync/drivers/src/yuque?raw'),
          dirty: false,
        }
      ],
    };
  }
}

