import React from "react";
import { Counter } from "./Counter.js";
import { HStack, Button } from '@chakra-ui/react'

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div>
        Chakra component:
        <HStack>
          <Button>Click me</Button>
          <Button>Click me</Button>
        </HStack>
      </div>
    </>
  );
}
