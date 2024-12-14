// Exported Method Description: API Main Logic
module.exports = async (req, res) => {
  try {
    const successPayload = { my_message: 'Update One Customer!' }
    res.status(200).send(successPayload)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
