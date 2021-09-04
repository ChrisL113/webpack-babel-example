import _ from 'lodash'

function component() {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Why not getting the change then ?', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
