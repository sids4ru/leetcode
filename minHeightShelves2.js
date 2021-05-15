/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
    return recurese(0,0,0,books,shelf_width);
};
function recurese(pos,width,currheight,books,shelf_width){
	if(pos === books.length)
		return currheight;
	if(width>shelf_width)
		return Infinity;
	var book = books[pos];
	var bookwidth = books[pos][0];
	var bookheight = books[pos][1];
	var minh = recurese(pos+1,width+bookwidth,Math.max(currheight,bookheight),books,shelf_width);
	minh = Math.min(minh,recurese(pos+1,width,bookheight,books,shelf_width)+currheight);
	return minh;
}
console.log(minHeightShelves(

[[7,3],[8,7],[2,7],[2,5]],
15

));
