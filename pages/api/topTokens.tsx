/**
 * Api call to cmp api to get top 25 cryptocurrency tokens
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<void>} - A promise resolving to void.
 */
export default async function handler(req: any, res: any) {
  try {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=25&sort=market_cap&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "0cb61b43-fe49-42ce-8e3a-e030fb104f24",
        },
      }
    );
    const data = await response.json();
    if (response.ok && data && data.data && Array.isArray(data.data)) {
      res.status(200).json(data.data);
    } else {
      console.error("Invalid API response:", data);
      res.status(500).json({ error: "Invalid API response" });
    }
  } catch (error) {
    console.error("Error fetching top tokens:", error);
    res.status(500).json({ error: "Failed to fetch top tokens" });
  }
}
