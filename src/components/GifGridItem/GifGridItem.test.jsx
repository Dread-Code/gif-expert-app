import { shallow } from 'enzyme'
import GifGridItem from './GifGridItem'

describe('Gif Grid Item', () => {
  test('should Show shallow', () => {
    const wrapper = shallow(<GifGridItem />)

    expect(wrapper).toMatchSnapshot()
  })
})
