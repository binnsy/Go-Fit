// import React from 'react'
// import { shallow, configure } from 'enzyme'
// import Header from '.'
// import Adapter from 'enzyme-adapter-react-16'
//
// configure({adapter: new Adapter()})
//
// // could use this in global file for other test components and then import as needed
// const setUp = (props={}) => {
//   const component = shallow(<Header {...props} />)
//   return component
// }
//
// // find each test by attribute (data-test name)
// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`)
//   return wrapper
// }
//
// describe('Header Component', () => {
//
//   // before each function runs, run the setup function
//   let component
//   beforeEach(() => {
//     component = setUp()
//   })
//
//   // this is where the meat of the test is being written
//   // find the attribute and make sure it exists
//   it('It should render without errors', () => {
//       const wrapper = findByTestAttr(component, 'headerComponent')
//       expect(wrapper.length).toBe(1)
//     })
//
//     it('It should render a logo', () => {
//         const logo = findByTestAttr(component, 'logoIMG')
//         expect(logo.length).toBe(1)
//
//     })
//
// })
