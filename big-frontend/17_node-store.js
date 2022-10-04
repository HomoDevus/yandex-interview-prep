class NodeStore {
  constructor() {
    this.nodes = {}
  }

  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.nodes[node.id] = [node, value]
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.nodes[node.id][1]
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return Boolean(this.nodes[node.id])
  }
}