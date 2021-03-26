export const addText = text => ({
  type: 'ADD_TEXT',
  payload: text
})

export const fetchData = typeOfData => ({
  type: 'FETCH_DATA', 
  payload: typeOfData
})