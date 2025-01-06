const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class treeNode {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
};

class BinarySearchTree {
  tree = null;

  root() {
    if (this.tree === null) {
      return null;
    } else {
      return this.tree;
    }
  }

  add(data) {
    const newNode = new treeNode(data); // Создаем новый узел

    if (this.tree === null) {
      // Если дерево пустое, новый узел становится корнем
      this.tree = newNode;
      return;
    }

    let current = this.tree;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let item = this.tree;
    while (item !== null && item.data !== data) {
      if (item.data < data) {
        item = item.right;
      } else {
        item = item.left;
      }
    }
    if (item?.data === data) {
      return true
    } else {
      return false
    };
  }

  find(data) {
    let item = this.tree;
    while (item !== null && item.data !== data) {
      if (item.data < data) {
        item = item.right;
      } else {
        item = item.left;
      }
    }
    if (item?.data === data) {
      return item
    } else {
      return null
    };
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let minNode = node.right;
        while (minNode.left !== null) {
          minNode = minNode.left;
        }
        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data);
        return node;
      }
    };

    this.tree = removeNode(this.tree, data);
  }

  min() {
    let item = this.tree;
    while (item.left !== null) {
      item = item.left;
    }
    return item.data;
  }

  max() {
    let item = this.tree;
    while (item.right !== null) {
      item = item.right;
    }
    return item.data;
  }
}

module.exports = {
  BinarySearchTree
};