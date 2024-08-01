// 公共地址配置
const base ={
    host360:'https://bang.360.cn',
    hotcity:'/api/aj/getcitycode',//热门城市
    todyInfo:'/foo/qcross/home/index.php?action=recommend',//今日推荐
    homeShop:'/foo/qcross/home/index/recommendbiz',//首页穷游商城 ?page=1
    hotTravel:'/foo/qcross/home/ajax?action=thread',//热门游记\
    destSearch:'/boo/qcross/place/public.php?action=placesearch&client=web',//目的地搜索
}

export default base

//单独导出某个属性
export const host ='https://bang.360.cn';