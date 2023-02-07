export const DELETE_ITEM = 'DELETE_ITEM';

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});
