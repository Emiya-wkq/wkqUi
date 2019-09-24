const filterInt = Vue =>{
    Vue.filter('price', function (value,s='￥',d = 2 ,) {
        let nVal = parseFloat(value).toFixed(Number(d))
        return s + nVal
    })
}
export default filterInt