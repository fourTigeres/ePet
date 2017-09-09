/**
 * Created by Administrator on 2017/9/9.
 */
import Mock from 'mockjs'
import data from './data.json'

import everydayData from './everyday.json'
import brandData from './brand.json'

//分类
import sortsData from './sorts.json'
import recommend from './为您推荐.json'
import mainFoods from './猫咪主粮.json'
import snacks from './猫咪零食.json'
import dailyUse from './猫咪日用.json'

//首页的路由
Mock.mock('/api1/indexpage', {code: 0, indexData: data})
Mock.mock('/api1/everyData', {code: 0, everydayData: everydayData})
Mock.mock('/api1/brand', {code: 0, brandData: brandData})
Mock.mock('/api1/brand', {code: 0, brandData: brandData})


//分类的路由
Mock.mock('/api2/sortsData', {code: 0, sortsData: sortsData})

Mock.mock('/api2/recommend', {code: 0, recommend: recommend})
Mock.mock('/api2/mainFoods', {code: 0, mainFoods: mainFoods})
Mock.mock('/api2/snacks', {code: 0, snacks: snacks})
Mock.mock('/api2/dailyUse', {code: 0, dailyUse: dailyUse})

