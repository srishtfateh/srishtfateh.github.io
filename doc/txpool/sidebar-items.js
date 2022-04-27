initSidebarItems({"enum":[["Error","Transaction Pool Error"],["Readiness","Transaction readiness."]],"mod":[["scoring","A transactions ordering abstraction."]],"struct":[["LightStatus","Light pool status. This status is cheap to compute and can be called frequently."],["NoopListener","A no-op implementation of `Listener`."],["Options","Transaction Pool options."],["PendingIterator","An iterator over all pending (ready) transactions. NOTE: the transactions are not removed from the queue. You might remove them later by calling `cull`."],["Pool","A transaction pool."],["ReplaceTransaction","Encapsulates a transaction to be compared, along with pooled transactions from the same sender"],["Status","A full queue status. To compute this status it is required to provide `Ready`. NOTE: To compute the status we need to visit each transaction in the pool."],["Transaction","Internal representation of transaction."],["UnorderedIterator","An iterator over all pending (ready) transactions in unoredered fashion."]],"trait":[["Listener","Transaction pool listener."],["Ready","A readiness indicator."],["ShouldReplace","Chooses whether a new transaction should replace an existing transaction if the pool is full."],["VerifiedTransaction","Already verified transaction that can be safely queued."],["Verifier","Transaction verification."]]});