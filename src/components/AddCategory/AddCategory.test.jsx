import { shallow } from 'enzyme'
import AddCategory from './AddCategory'

describe('AddCAtegory Tests', () => {
  const setCategories = jest.fn()
  const categories = []
  let wrapper = shallow(<AddCategory setCategories={setCategories} categories={categories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} categories={categories} />)
  })

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the text box', () => {
    const input = wrapper.find('input')
    const value = 'Hola Mundo'
    // EL segundo parametro seria la simulacion de e.target.value
    input.simulate('change', { target: { value } })
  })

  test('Should not post the information', () => {
    // recuerda utilizar beforeeach para restaurar el wrapper en cada test(cuando sea necesario)
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(setCategories).not.toHaveBeenCalled()
  })
})
