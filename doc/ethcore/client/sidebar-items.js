initSidebarItems({"enum":[["BlockId","Uniquely identifies block."],["BlockStatus","General block status"],["ChainMessageType","Messages to broadcast via chain"],["ChainRouteType","Route type to indicate whether it is enacted or retracted."],["ClientIoMessage","Message type for external and internal events"],["DatabaseCompactionProfile","Client state db compaction profile"],["Mode","Operating mode for the client."],["TransactionId","Uniquely identifies transaction."],["VMType","Type of EVM to use."]],"mod":[["registry",""],["traits","Traits implemented by client."]],"struct":[["BlockChainCacheSize","Represents blockchain’s in-memory cache size in bytes."],["BlockChainConfig","Blockchain configuration."],["BlockChainInfo","Information about the blockchain gathered together."],["BlockQueueInfo","Verification queue status"],["CallAnalytics","Options concerning what analytics we run on the call."],["ChainRoute","A complete chain enacted retracted route."],["Client","Blockchain database client backed by a persistent database. Owns and manages a blockchain and a block queue. Call `import_block()` to import a block asynchronously; `flush_queue()` flushes the queue."],["ClientConfig","Client configuration. Includes configs for all sub-systems."],["ClientReport","Report on the status of a client."],["EnvInfo","Information concerning the execution environment for a message-call/contract-creation."],["ExecutionQueue","Creates thread and uses AsyncQueue to queue and execute items that are received in queue function. Queue is restricted by max_items and will return false if we want enqueue items on full queue."],["NewBlocks","Used by `ChainNotify` `new_blocks()`"],["PruningInfo","Client pruning info. See module-level docs for more details."],["TraceFilter","Easy to use trace filter."],["TraceId","Uniquely identifies Trace."],["UncleId","Uniquely identifies Uncle."]],"trait":[["ChainNotify","Represents what has to be handled by actor listening to chain events"]],"type":[["LastHashes","Simple vector of hashes, should be at most 256 items large, can be smaller if being used for a block whose number is less than 257."]]});