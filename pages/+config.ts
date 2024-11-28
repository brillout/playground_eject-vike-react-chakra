import vikeReact from "vike-react/config";
import vikeReactChakra from 'vike-react-chakra/config'
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "My Vike App",
  description: "Demo showcasing Vike",

  extends: [vikeReact, vikeReactChakra]
} satisfies Config;
