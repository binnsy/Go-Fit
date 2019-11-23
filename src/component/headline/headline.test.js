// import React from 'react'
// import { shallow, configure } from 'enzyme'
// import Headline from '.'
// import Adapter from 'enzyme-adapter-react-16'
//
// configure({adapter: new Adapter()})
//
// // could use this in global file for other test components and then import as needed
// const setUp = (props={}) => {
//   const component = shallow(<Headline {...props} />)
//   return component
// }
//
// // find each test by attribute (data-test name)
// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`)
//   return wrapper
// }
//
// describe('Headline Component', () => {
//
//   describe('Have props', () => {
//
//     let wrapper
//     beforeEach(() => {
//       const props = {
//         header: 'Test Header',
//         desc: 'Test Desc'
//
//       }
//       wrapper = setUp(props)
//     })
//
//     it('Should render without errors', () => {
//       const component = findByTestAttr(wrapper, 'HeadlineComponent')
//       expect(component.length).toBe(1)
//     })
//
//     it('Should render a H1', () => {
//       const h1 = findByTestAttr(wrapper, 'header')
//       expect(h1.length).toBe(1)
//     })
//
//     it('Should render a desc', () => {
//       const desc = findByTestAttr(wrapper, 'desc')
//       expect(desc.length).toBe(1)
//     })
//   })
//
//   describe('Have NO props', () => {
//
//     let wrapper
//     beforeEach(() => {
//       wrapper = setUp()
//     })
//     it('Should not render', () => {
//       const component = findByTestAttr(wrapper, '')
//       expect(component.length).toBe(0)
//     })
//   })
// })
