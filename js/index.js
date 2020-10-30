guides.disabled(true)

function functionA()
{
// Get the modal
	var modal1 = document.getElementById("myModal1");

	// Get the button that opens the modal
	var btn1 = document.getElementById("watchVideo/Test");

	// Get the <span> element that closes the modal
	var span1 = document.getElementsByClassName("close1")[0];

	// When the user clicks on the button, open the modal
	btn1.onclick = function() {
	  modal1.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span1.onclick = function() {
	  modal1.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal1) {
		modal1.style.display = "none";
	  }
	}
}

function functionB()
{
	// Get the modal
	var modal2 = document.getElementById("myModal2");

	// Get the button that opens the modal
	var btn2 = document.getElementById("learnMore");

	// Get the <span> element that closes the modal
	var span2 = document.getElementsByClassName("close2")[0];

	// When the user clicks on the button, open the modal
	btn2.onclick = function() {
	  modal2.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span2.onclick = function() {
	  modal2.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal2) {
		modal2.style.display = "none";
	  }
	}
}

//////////////// PENDO SNIPPET FOR TESTING ////////////////
// (function(apiKey){
// 	(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
// 	v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
// 		o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
// 		y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
// 		z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

// 		// Call this whenever information about your visitors becomes available
// 		// Please use Strings, Numbers, or Bools for value types.

// 		// Random VISITOR-ID generator - WARNING WARNING WARNING - will change VISITOR-ID on every refresh //
// 		// If needing static/"randomArray" VISITOR-ID, comment out up to WARNING WARNING WARNING label //

// 		function visitorId(length) {
// 			var result = "";
// 			var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// 			var charactersLength = characters.length;
// 			for ( var i = 0; i < length; i++ ) {
// 				result += characters.charAt(Math.floor(Math.random() * charactersLength));
// 			}
// 			return result;
// 		}

// 		pendo.initialize({
// 			visitor: {
// 				id: visitorId(5)
// 			},

// 			account: {
// 				id: 'null'
// 			}
// 		});
// })('0084f818-df93-42ca-712f-fcdc0093e2dc');