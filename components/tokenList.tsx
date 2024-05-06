import { formatCurrency, formatMarketCapture } from "@/util/formatData";
import { Flex, Heading, Spinner, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import PriceChange from "./PriceChange";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import TokenIconRow from "./tokenIconRow";

const TokenList: React.FC = () => {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredTokens, setFilteredTokens] = useState<any[]>([]);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"ascn" | "desc">("ascn");

  const tableHeaders = [
    { key: "cmc_rank", label: "#" },
    { key: "symbol", label: "Name" },
    { key: "quote.USD.price", label: "Price" },
    { key: "quote.USD.percent_change_24h", label: "24h %" },
  ];

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch("/api/topTokens");
        const data = await response.json();
        setTokens(data);
        setFilteredTokens(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top 25 tokens:", error);
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  /**
   * Filter tokens based on the search query
   * @param  {string} query - The search query
   * @returns {any} obj - The searched tokens array.
   */
  const handleSearch = (query: string) => {
    const filtered = tokens.filter((token) =>
      token.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTokens(filtered);
  };

  /**
   * Sorts the tokens array based on the provided sortKey(column) and sortOrder(asc/desc).
   * @returns {any[]} The sorted tokens array.
   */
  const sortData = useCallback(() => {
    if (!sortKey) return filteredTokens;

    const sortedData = [...filteredTokens].sort((a, b) => {
      const valueA = getValue(a, sortKey);
      const valueB = getValue(b, sortKey);

      if (valueA === null || valueB === null) return 0;

      return sortOrder === "ascn" ? valueA - valueB : valueB - valueA;
    });

    return sortedData;
  }, [filteredTokens, sortKey, sortOrder]);

  /**
   * Retrieves the value of a nested key from an object.
   * @param {any} obj - The object from which to retrieve the value.
   * @param {string} key - The nested key to retrieve (e.g., "quote.USD.price").
   * @returns {any} The value of the nested key in the object.
   */
  const getValue = (obj: any, key: string) => {
    const keys = key.split(".");

    return keys.reduce((acc, currentKey) => {
      if (acc && acc.hasOwnProperty(currentKey)) {
        return acc[currentKey];
      }
      return null;
    }, obj);
  };

  /**
   * Handles sorting tokens based on the provided key.
   * @param {string} key - The key used for sorting tokens.
   */
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    } else {
      setSortKey(key);
      setSortOrder("ascn");
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading color="white">Asset Tracker</Heading>
      <SearchBar onSearch={handleSearch} />
      <div />{" "}
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100%">
          <Spinner size="xl" color="#f7931a" thickness="4px" />
        </Flex>
      ) : (
        <Table variant="simple" className="token-table">
          <Thead>
            <Tr>
              {tableHeaders.map((header) => (
                <td key={header.key}>
                  {header.label}{" "}
                  <SortButton
                    columnKey={header.key}
                    onClick={() => handleSort(header.key)}
                    {...{
                      sortOrder,
                      sortKey,
                    }}
                  />
                </td>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {sortData().map((token, index) => (
              <Tr key={index} className="token-row">
                <Td>
                  <div className="flex ">#{token.cmc_rank} </div>
                </Td>
                <Td>
                  <div className="flex ">
                    <TokenIconRow tokenName={token.symbol} />
                    <div className="left">
                      <p>{token.symbol}</p>
                      <span className="market-cap">
                        {formatMarketCapture(token.quote.USD.market_cap)}
                      </span>
                    </div>
                  </div>
                </Td>
                <Td className="right">
                  <div className="flex">
                    <p>{formatCurrency(token.quote.USD.price)}</p>
                  </div>
                </Td>

                <Td>
                  <PriceChange percentChange={token.quote.USD.percent_change_24h} />{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Flex>
  );
};

export default TokenList;
