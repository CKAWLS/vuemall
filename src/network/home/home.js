import {request1} from "../request";

export function getHomeMultiData() {
  return request1({
    url: '/home/multidata'
  });
}
