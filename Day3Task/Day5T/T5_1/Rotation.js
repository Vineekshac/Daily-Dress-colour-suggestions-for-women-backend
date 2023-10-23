function Rotation(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }

    K = K % A.length;
    
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }

    return A;
}
console.log(Rotation([1,2,3,4,5],[2]))