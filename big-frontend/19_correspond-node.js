// const findCorrespondingNode = (rootA, rootB, target) => {
//   let rootBElements = rootB.querySelectorAll('*')
//
//   for (let element of rootBElements) {
//     if (element.isEqualNode(target)) {
//       return element
//     }
//   }
// }

const findCorrespondingNode = (rootA, rootB, target) => {
  const nodeIterator = document.createNodeIterator(rootB)
  let currentNode

  while (currentNode = nodeIterator.nextNode()) {
    if (currentNode.isEqualNode(target)) {
      return currentNode
    }
  }
}

const A = document.createElement('div')
A.setAttribute('id', '#rootA')
A.innerHTML = `
<div>
  <div>
    <div>
      <div id="node1"></div>
    </div>
    <div>
    </div>
    <div>
      <div>
        <p id="node2"></p>
      </div>
    </div>
  <div>
</div>
`

const B = A.cloneNode(true)
const node1 = A.querySelector('#node1')
const node2 = A.querySelector('#node2')
const node1Target = B.querySelector('#node1')
const node2Target = B.querySelector('#node2')
console.log(findCorrespondingNode(A, B, node1))
console.log(findCorrespondingNode(A, B, node2))