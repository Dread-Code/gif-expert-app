import { getGifs } from './getGifts'

describe('GetGifts', () => {
  test('should return ten elements', async () => {
    const gifs = await getGifs('kaneki')

    expect(gifs.length).toBe(12)
  })

  test('should return 0 if we donts set the parameter', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
})
