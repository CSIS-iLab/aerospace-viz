// Calculates the width of the user's scrollbar to modify the 100vw value in CSS.
// Taken from: https://codepen.io/Mamboleoo/post/scrollbars-and-css-custom-properties

const getScrollbarSize = () => {
  // Create a temporary div container and append it into the body
  const container = document.createElement('div')
  // Append the container in the body
  document.body.appendChild(container)
  // Force scrollbar on the container
  container.style.overflow = 'scroll'

  // Add ad fake div inside the container
  const inner = document.createElement('div')
  container.appendChild(inner)

  // Calculate the width based on the container width minus its child width
  const width = container.offsetWidth - inner.offsetWidth
  const height = container.offsetHeight - inner.offsetHeight
  // Remove the container from the body
  document.body.removeChild(container)

  return { width, height }
}

const setScrollbarSize = () => {
  // Get the scrollbar dimension
  const scrollbar = getScrollbarSize()
  // Set a custom property with the value we calculated
  document.documentElement.style.setProperty(
    '--scrollbarX',
    `${scrollbar.width}px`
  )
  document.documentElement.style.setProperty(
    '--scrollbarY',
    `${scrollbar.height}px`
  )
}

export { setScrollbarSize }
