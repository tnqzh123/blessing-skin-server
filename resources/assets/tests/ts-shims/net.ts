/* eslint-disable @typescript-eslint/indent */
import * as net from '../../src/scripts/net'

export { ResponseBody } from '../../src/scripts/net'

export const init = {} as typeof net.init

export const walkFetch = {} as jest.Mock<
  ReturnType<typeof net.walkFetch>,
  Parameters<typeof net.walkFetch>
>

type FetchFn = <T = any>(url: string, data?: object) => Promise<T>

export const get = {} as jest.Mock<
  ReturnType<typeof net.get>,
  Parameters<typeof net.get>
> &
  FetchFn

export const post = {} as jest.Mock<
  ReturnType<typeof net.post>,
  Parameters<typeof net.post>
> &
  FetchFn

export const put = {} as jest.Mock<
  ReturnType<typeof net.post>,
  Parameters<typeof net.post>
> &
  FetchFn

export const del = {} as jest.Mock<
  ReturnType<typeof net.post>,
  Parameters<typeof net.post>
> &
  FetchFn
