import {request1} from "../request";

export function getHomeMultiData() {
  return request1({
    url: '/home/multidata'
  });
}

export function getHomeGoodsXX(type, page) {
  return request1({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
