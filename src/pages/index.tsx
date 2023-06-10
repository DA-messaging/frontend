import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Button, HStack, Input, Select, Text, VStack } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [batchTransactions, setBatchTransactions] = useState<any[]>([{}]);
  const onClickAddTransaction = () => {
    setBatchTransactions([...batchTransactions, {}]);
  };
  return (
    <VStack>
      {/* //For hackathon, input light client address */}
      <VStack>
        <Text>Light Client Address</Text>
        <Input type="text" />
      </VStack>
      {batchTransactions.map((transaction) => (
        <VStack>
          <VStack className="transactionBox">
            <Text className="transactionBoxTitle">Transaction</Text>
            <HStack className="transactionBoxContent">
              <Text>From</Text>
              <Select>
                <option>network 1</option>
                <option>network 2</option>
                <option>network 3</option>
              </Select>
              {/* //arrow icon */}
              <Text>To</Text>
              <Select>
                <option>network 1</option>
                <option>network 2</option>
                <option>network 3</option>
              </Select>
            </HStack>

            <VStack className="transactionBoxContentCurrency">
              <Text>You send</Text>
              <HStack>
                <Select>
                  <option>Currency 1</option>
                  <option>Currency 2</option>
                  <option>Currency 3</option>
                </Select>
                <Input type="number" defaultValue={0} />
              </HStack>
            </VStack>
            <VStack>
              <Text>You receive</Text>
              <HStack>
                <Text>Currency1</Text>
                <Text>Balance</Text>
              </HStack>
            </VStack>
            {/* //TODO : THINK ABOUT HOW TO CHARGE */}
            <Text>Estimated Fees</Text>
          </VStack>
          <Button onClick={onClickAddTransaction}>Add Transaction</Button>
        </VStack>
      ))}
      <Button>Send Transaction</Button>
    </VStack>
  );
}
