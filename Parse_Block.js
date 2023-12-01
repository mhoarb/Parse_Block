const fs = require('fs');
const bitcoin = require('bitcoinjs-lib');

// Read raw block data from a file asynchronously
fs.readFile('Block.txt', 'utf8', (err, rawBlockData) => {
  if (err) {
    console.error('Error reading raw block data file:', err);
    return;
  }

  // Parse the raw block data
  const block = bitcoin.Block.fromHex(rawBlockData);
  const parsedBlock = {
    blockHash: block.getHash(),
    version: block.version,
    prevHash: block.prevHash,
    merkleRoot: block.merkleRoot,
    timestamp: block.timestamp,
    bits: block.bits,
    nonce: block.nonce,
    transactions: block.transactions
  };

  // Convert parsedBlock object to JSON string
  const jsonData = JSON.stringify(parsedBlock, null, 2);

  // Write parsed block data to a new file asynchronously
  fs.writeFile('Parsed block/parsedBlockData.json', jsonData, (err) => {
    if (err) {
      console.error('Error writing parsed block data file:', err);
      return;
    }
    console.log('Parsed block data has been written to parsedBlockData.json');
  });
});
