initSidebarItems({"struct":[["BlockView","View onto block rlp."],["BodyView","View onto block rlp."],["HeaderView","View onto block header rlp."],["TypedTransactionView","View onto transaction rlp. Assumption is this is part of block. Typed Transaction View. It handles raw bytes to search for particular field. EIP1559 tx: 2 | [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas(gasPrice), gasLimit, to, value, data, access_list, senderV, senderR, senderS] Access tx: 1 | [chainId, nonce, gasPrice, gasLimit, to, value, data, access_list, senderV, senderR, senderS] Legacy tx: [nonce, gasPrice, gasLimit, to, value, data, senderV, senderR, senderS]"],["ViewRlp","Wrapper for trusted rlp, which is expected to be valid, for use in views When created with view!, records the file and line where it was created for debugging"]]});