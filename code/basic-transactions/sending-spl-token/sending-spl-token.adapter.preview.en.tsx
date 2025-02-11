// Create transfer instruction
const transferInstruction = splToken.createTransferInstruction(
  fromTokenAccount.address, // source
  toTokenAccount.address, // destination
  fromWallet.publicKey, // owner
  50, // amount
  [], // multiSigners
  splToken.TOKEN_PROGRAM_ID
);

// Send and confirm instruction
const signature = await web3.sendAndConfirmTransaction(
  connection,
  new Transaction().add(transferInstruction),
  [fromWallet],
  { commitment: "confirmed" }
);