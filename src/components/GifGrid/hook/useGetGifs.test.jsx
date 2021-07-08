import useGetGifs from './useGetGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('useGetGifs', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetGifs('Kaneki'))
    const { images, loading } = result.current

    await waitForNextUpdate()
    expect(images).toEqual([])
    expect(loading).toBe(false)
  })

  test('should return a images array and loading in true', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetGifs('Kaneki'))
    await waitForNextUpdate()
    const { images, loading } = result.current

    expect(images.length).toEqual(12)
    expect(loading).toBe(true)
  })
})
