initSidebarItems({"enum":[["Derivation","Key derivation over generic label `T`"],["DerivationError",""]],"fn":[["public_to_address","Convert public key into the address"],["recover","Recovers the public key from the signature for the message"],["recover_allowing_all_zero_message","Recovers the public key from the signature for the given message. This version of `recover()` allows for all-zero messages, which is necessary for ethereum but is otherwise highly discouraged. Use with caution."],["sign","Signs message with the given secret key. Returns the corresponding signature."],["verify_address","Checks if the address corresponds to the public key from the signature for the message"],["verify_public","Performs verification of the signature for the given message with corresponding public key"]],"mod":[["ec_math_utils","Multiple primitives for work with public and secret keys and with secp256k1 curve points"],["ecdh","ECDH key agreement scheme implemented as a free function."],["ecies","Functions for ECIES scheme encryption and decryption"],["error","Module specific errors."]],"struct":[["ExtendedKeyPair",""],["ExtendedPublic","Extended public key, allows deterministic derivation of subsequent keys."],["ExtendedSecret","Extended secret key, allows deterministic derivation of subsequent keys."],["KeyPair","secp256k1 key pair"],["Random","Randomly generates new keypair, instantiating the RNG each time."],["Secret","Represents secret key"],["Signature","Signature encoded as RSV components"],["ZeroesAllowedMessage","In ethereum we allow public key recovery from a signature + message pair where the message is all-zeroes. This conflicts with the best practise of not allowing such values and so in order to avoid breaking consensus we need this to work around it. The `ZeroesAllowedType` wraps an `H256` that can be converted to a `[u8; 32]` which in turn can be cast to a `secp256k1::Message` by the `ThirtyTwoByteHash` and satisfy the API for `recover()`."],["ZeroizeSecretKey","A wrapper type around `SecretKey` to prevent leaking secret key data. This type will properly zeroize the secret key to `ONE_KEY` in a way that will not get optimized away by the compiler nor be prone to leaks that take advantage of access reordering."]],"trait":[["Generator","Generates new keypair."]],"type":[["Address",""],["Message",""],["Public",""]]});