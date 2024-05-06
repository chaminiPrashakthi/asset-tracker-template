import React, { useEffect, useState } from "react";
import { Flex, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { formatMarketCapture } from "@/util/formatData";
import PriceChange from "./priceChange";
import SearchBar from "./SearchBar";
import TokenNameRow from "./tokenNameRow";
import { useTable, useSortBy } from "react-table";

const TokenList: React.FC = () => {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredTokens, setFilteredTokens] = useState<any[]>([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch("/api/topTokens");
        const data = await response.json();
        setTokens(data);
        setFilteredTokens(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top tokens:", error);
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  const handleSearch = (query: string) => {
    // Filter tokens based on the search query
    const filtered = tokens.filter((token) =>
      token.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTokens(filtered);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "cmc_rank",
      },
      {
        Header: "Name",
        accessor: "symbol",
      },
      {
        Header: "Price",
        accessor: "quote.USD.price",
      },
      {
        Header: "24h %",
        accessor: "quote.USD.percent_change_24h",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data: filteredTokens },
    useSortBy
  );

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading>Asset Tracker</Heading>

      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Spinner size="xl" color="blue.500" />
      ) : (
        <Table variant="simple" className="token-table" {...getTableProps()}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>24h %</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTokens.map((token, index) => (
              <Tr key={index} className="token-row">
                <Td>#{token.cmc_rank}</Td>
                <Td>
                  <div className="flex">
                    <TokenNameRow tokenName={token.symbol} />
                    <div className="left">
                      <p>{token.symbol}</p>
                      <span className="market-cap">
                        {formatMarketCapture(token.quote.USD.market_cap)}
                      </span>
                    </div>
                  </div>
                </Td>
                <Td>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(token.quote.USD.price)}
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
