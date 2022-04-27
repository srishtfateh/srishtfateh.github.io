initSidebarItems({"enum":[["TrieError","Trie Errors."],["TrieKinds","All different kinds of tries. This is used to prevent a heap allocation for every created trie."],["TrieSpec","Trie types"]],"mod":[["node",""],["recorder","Trie query recorder."],["sectriedb",""],["sectriedbmut",""],["triedb",""],["triedbmut","In-memory trie representation."]],"struct":[["FatDB","A `Trie` implementation which hashes keys and uses a generic `HashDB` backing database. Additionaly it stores inserted hash-key mappings for later retrieval."],["FatDBIterator","Itarator over inserted pairs of key values."],["FatDBMut","A mutable `Trie` implementation which hashes keys and uses a generic `HashDB` backing database. Additionaly it stores inserted hash-key mappings for later retrieval."],["Lookup","Trie lookup helper object."],["NibbleSlice","Nibble-orientated view onto byte-slice, allowing nibble-precision offsets."],["TrieFactory","Trie factory."]],"trait":[["HashDB","Trait modelling datastore keyed by a hash defined by the `Hasher`."],["HashDBRef","Trait for immutable reference of HashDB."],["Hasher","Trait describing an object that can hash a slice of bytes. Used to abstract other types over the hashing algorithm. Defines a single `hash` method and an `Out` associated type with the necessary bounds."],["NodeCodec","Trait for trie node encoding/decoding"],["Query","Description of what kind of query will be made to the trie."],["Trie","A key-value datastore implemented as a database-backed modified Merkle tree."],["TrieIterator","A trie iterator that also supports random access (`seek()`)."],["TrieMut","A key-value datastore implemented as a database-backed modified Merkle tree."]],"type":[["DBValue",""],["Result","Trie result type. Boxed to avoid copying around extra space for the `Hasher`s `Out` on successful queries."],["TrieItem","Trie-Item type used for iterators over trie data."]]});