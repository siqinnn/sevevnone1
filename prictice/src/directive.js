//  https://baijiahao.baidu.com/s?id=1603883371090691442&wfr=spider&for=pc
export default {
    // 自定义指令
    testDirective: {
        update: (el, data, contex) => {
            console.log(el)
            console.log(data)
            console.log(contex)
        }
    }

}