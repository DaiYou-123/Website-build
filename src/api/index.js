//封装的请求方法
// import base , {host}from "./base";
const base ={
    mafengwo:'https://m.mafengwo.cn',
    hotcity:'/api/?category=get_info_flow_list&page=0',//热门城市
}

// console.log(base,host360);
//二次封装的axios  (自己封装  1.项目中封装好了 请使用项目中 2. 未封装-可以封装 -百度一个 )
// import axios from "../utils/request.js";
import axios from 'axios'
//定义方法

  /* 
        热门城市
  */
  export const getHotCity = (params)=> {
    return axios.get(base.hotcity,{ params });
  };
