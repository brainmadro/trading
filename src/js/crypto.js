import { getParam, loadHeaderFooter } from "./utils.mjs";
import CryptoDetails from "./CryptoDetails.mjs";

const cryptoId = getParam("id");
const crypto = new CryptoDetails(cryptoId);

loadHeaderFooter();
crypto.init();