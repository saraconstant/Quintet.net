// creates a list of lists each separated by a ";".// Author: Georg Hajdu 2005var a = new Array();var b = new Array();var c = new Array(";");function anything(){	a = arrayfromargs(messagename,arguments);	b = b.concat(a,c);}//anything.immediate=1;function bang(){	outlet(0, b);	b.length = 0; // clears array}//bang.immediate = 1;