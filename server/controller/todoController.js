export const todofetch = async (req, res) => {
  try {
    const limit = 20;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.staus(500).json({ error: error });
  }
};
