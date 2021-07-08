import { shallow } from 'enzyme'
import GifGrid from './GifGrid'
import useGetGifs from './hook/useGetGifs'

// pasamos jest  mock el custom hook
jest.mock('./hook/useGetGifs')

describe('GifGrid test', () => {
  let category = 'Kaneki'
  test('should run snapshot', () => {
    // para con la funcion que estamos llamando retornar el mock
    useGetGifs.mockReturnValue({
      images: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show items when the images are loaded', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa'
      }
    ]

    useGetGifs.mockReturnValue({
      images: gifs,
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })

  test('should show items when the loading is false', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa'
      }
    ]

    useGetGifs.mockReturnValue({
      images: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGridItem').length).toBe(0)
  })
})
