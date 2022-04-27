initSidebarItems({"constant":[["BLS12_G1_AND_G2_PAIR_LEN","Length of single G1 + G2 points pair for pairing operation"],["BLS12_MULTIEXP_DISCOUNTS_TABLE","Discount table for multiexponentiation (Pippenger’s Algorithm) Later on is normalized using the divisor"],["BLS12_MULTIEXP_DISCOUNT_DIVISOR","Divisor for discounts table"],["BLS12_MULTIEXP_MAX_DISCOUNT","Max discount allowed"],["BLS12_MULTIEXP_PAIRS_FOR_MAX_DISCOUNT","Max discount is reached at this number of pairs"]],"struct":[["AltBn128ConstOperations","Pricing for constant alt_bn128 operations (ECADD and ECMUL)"],["Blake2F",""],["Bls12ConstOperations","Pricing for constant Bls12 operations (ADD and MUL in G1 and G2, as well as mappings)"],["Bls12G1Add","The Bls12G1Add builtin."],["Bls12G1Mul","The Bls12G1Mul builtin."],["Bls12G1MultiExp","The Bls12G1MultiExp builtin."],["Bls12G2Add","The Bls12G2Add builtin."],["Bls12G2Mul","The Bls12G2Mul builtin."],["Bls12G2MultiExp","The Bls12G2MultiExp builtin."],["Bls12MapFp2ToG2","The Bls12MapFp2ToG2 builtin."],["Bls12MapFpToG1","The Bls12MapFpToG1 builtin."],["Bls12MultiexpPricer","Pricing for constant Bls12 operations (ADD and MUL in G1 and G2, as well as mappings)"],["Bls12Pairing","The Bls12Pairing builtin."],["Bn128Add",""],["Bn128Mul",""],["Bn128Pairing",""],["Builtin","Pricing scheme, execution definition, and activation block for a built-in contract."],["EcRecover",""],["G1Marker","Marker trait that indicated that we perform operations in G1"],["G2Marker","Marker trait that indicated that we perform operations in G2"],["Identity",""],["Modexp",""],["Ripemd160",""],["Sha256",""]],"trait":[["Implementation","Native implementation of a built-in contract."],["PointScalarLength","Marter trait for length of input per one pair (point + scalar)"]],"type":[["Blake2FPricer","Pricing for the Blake2 compression function (aka “F”). Computes the price as a fixed cost per round where the number of rounds is part of the input byte slice."],["Bls12MultiexpPricerG1","Multiexp pricer in G1"],["Bls12MultiexpPricerG2","Multiexp pricer in G2"]]});