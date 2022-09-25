import { breakpointsHome } from '../foundation/breakpointsHome'
import useViewport from './useViewport'

export const DeviceType = {
  Mobile: 'Mobile',
  Tablet: 'Tablet',
  Desktop: 'Desktop',
} as const
export type DeviceType = typeof DeviceType[keyof typeof DeviceType]

/**
 * Viewport 너비에 따라 Content area의 DeviceType을 반환합니다.
 * Home 화면에서만 사용합니다.
 * @returns {'Mobile' | 'Desktop'}
 */
const useGetDeviceType = () => {
  const { width } = useViewport()

  if (width < breakpointsHome.mobileMaxWidth) {
    return DeviceType.Mobile
  } else {
    return DeviceType.Desktop
  }
}

export default useGetDeviceType
