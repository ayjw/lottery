import {service} from './axios'
export const historyLottery = (data) => (
  service({
    url: 'chat/history',
    method: 'post',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
)
