function calculateMinCost(arr) {
	let ans = 0;
	while(arr.length>1){
		arr.sort((a, b) => a-b);
		let add = (arr.shift() + arr.shift());
		arr.unshift(add);
		ans+=add;
	}
	return ans;
}  
// 6 12 16 28