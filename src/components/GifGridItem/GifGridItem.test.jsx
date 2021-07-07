import { shallow } from 'enzyme'
import GifGridItem from './GifGridItem'

describe('Gif Grid Item', () => {
  const title = 'Un titulo'
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('should Show shallow', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have a equal alt', () => {
    const div = wrapper.find('div')
    expect(div.prop('alt')).toBe(title)
  })

  test('should have a equal url', () => {
    const div = wrapper.find('div')
    expect(div.prop('style').backgroundImage).toBe(`url("${url}")`)
  })

  test('should have animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  })
})
