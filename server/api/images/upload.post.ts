export default eventHandler(async (event) => {
  return hubBlob().handleUpload(event, {
    multiple: false,
    maxSize: '200MB',
    types: ['image/png', 'image/jpeg']
  })
})
