initSidebarItems({"fn":[["as_perfect_power","Returns integers `(y, k)` such that `x = y^k` with `k` maximised (other than for `x = 0, 1`, in which case `y = x`, `k = 1`)."],["as_prime_power","Return `Some((p, k))` if `x = p^k` for some prime `p` and `k >= 1` (that is, including when `x` is itself a prime)."],["estimate_nth_prime","Gives estimated bounds for pn, the `n`th prime number, 1-indexed (i.e. p1 = 2, p2 = 3)."],["estimate_prime_pi","Returns estimated bounds for π(n), the number of primes less than or equal to `n`."],["is_prime","Test if `n` is prime, using the deterministic version of the Miller-Rabin test."]],"struct":[["Primes","An iterator over all primes."],["Sieve","A heavily optimised prime sieve."],["SievePrimes","An iterator over the primes stored in a `Sieve` instance."],["StreamingSieve","A heavily optimised prime sieve."]]});