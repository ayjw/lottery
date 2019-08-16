export const formatDateMill = (i) => {
  let now = new Date(i)
  let hour = now.getHours() + 8
  let minute = now.getMinutes()
  let second = now.getSeconds()
  let mill = parseInt(now.getMilliseconds() / 100)
  return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}.${mill}`
}
export const formatDate = (i) => {
  let now = new Date(i)
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  let mill = parseInt(now.getMilliseconds() / 100)
  return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}.${mill}`
}
export const cutStr = (num) => {
  let str = '...'.concat(num.substr(-39)).replace(/\s*/g, '')
  return str
}
export const cutStrs = (num) => {
  let str = '...'.concat(num.slice(-39, -1)).replace(/\s*/g, '')
  return str
}
export const cutStrLast = (num) => {
  let str = num.substr(-1).replace(/\s*/g, '')
  return str
}
export const judgeTime = (time) => {
  let timer = time.slice(-6)
  if (timer === '00.000') {
    return true
  }
}
export const lastNum = (num) => {
  let n = num.slice(-1)
  if (isNaN(n)) {
    return true
  }
}
export const price = (datas, data, show) => {
  let n = datas.unshift({
    num: data.data.num,
    id: cutStrs(data.data.id),
    time: formatDateMill(data.data.time),
    high_light: cutStrLast(data.data.id),
    show: show
  })
  return n
}
export const priceOne = (datas, data, show) => {
  let n = datas.unshift({
    num: data.data.num,
    id: cutStr(data.data.id),
    time: formatDateMill(data.data.time),
    high_light: '',
    show: show
  })
  return n
}
export const last = (num) => {
  let n = num.slice(-1)
  return n
}
