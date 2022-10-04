function $(selector) {
  const selectedElement = document.querySelector(selector)
  console.log(selectedElement)

    return {
      css(propertyName, value) {
        selectedElement.style[propertyName] = value
        return this
      }
    }
}

$('#button')
  .css('color', '#fff')
  .css('backgroundColor', '#000')
  .css('fontWeight', 'bold')

