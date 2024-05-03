import { Card, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NextPage } from "next";
import Header from "../components/Header";
import TokenList from "../components/tokenList";

const Home: NextPage = () => (
  <div>
    <TokenList />
  </div>
);

export default Home;
