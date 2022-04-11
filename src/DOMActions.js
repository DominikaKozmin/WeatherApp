const _getElement = id => {
    return document.getElementById(id)
  }
  
  export const mapList = listOfId => {
    const _viewElement = {}
  
    for (const id of listOfId) {
      _viewElement[id] = _getElement(id);
    }
  
    return _viewElement;
  }
  