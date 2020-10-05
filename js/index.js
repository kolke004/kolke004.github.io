function functionA()
{
// Get the modal
	var modal1 = document.getElementById("myModal1");

	// Get the button that opens the modal
	var btn1 = document.getElementById("watchVideo");

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

// PENDO script func to prep for init //
(function(apiKey){
	(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
	v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
		o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
		y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
		z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

// VISITOR ID AUTOMATION CONENT LIVES BELOW //

// Random VISITOR-ID generator - WARNING WARNING WARNING - will change VISITOR-ID on every refresh //
// If needing static/"randomArray" VISITOR-ID, comment out up to WARNING WARNING WARNING label //

function visitorId(length) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
// !!!WARNING WARNING WARNING!!! //


// VISITOR ARRAYS FOR NON-STATIC TESTING //
// Iterate through Visitor IDs in array //
//var id = ["visitorTestId1", "visitorTestId2", "visitorTestId3"].find((_i, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through Names in array //
var name = ["Steve Smith", "Rick Sanchez", "Deandra Reynolds"].find((_i, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through full_name(s) in array PENDO FEEDBACK //
var full_name = ["Steve Smith", "Rick Sanchez", "Deandra Reynolds"].find((_i, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through Emails in array //
var email = ["test@yahoo.com", "test@gmail.com", "test@outlook.com"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through Roles in array //
var role = ["Technical Support Engineer", "Customer Success Manager", "Technical Account Manager"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through testLanguage(s) in array //
var testLanguage = ["EnglishNew", "Korean", "Finnish"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

// ACCOUNT ID AUTOMATION CONTENT LIVES BELOW //

// Random ACCOUNT-ID generator - WARNING WARNING WARNING - will change ACCOUNT-ID on every refresh //
// If needing static/"randomArray" ACCOUNT-ID, comment out up to WARNING WARNING WARNING label //

function accountMetaTestRandom(length) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
// !!!WARNING WARNING WARNING!!! //

//ACCOUNT ARRAYS FOR NON-STATIC TESTING //
// Iterate through Account IDs in array //
var aId = ["accountTestId1", "accountTestId2", "accountTestId3"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through Names in array //
var aName = ["Leanplum", "Pendo", "Zendesk"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through is_paying PENDO FEEDBACK //
var is_paying = ["true", "false"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

// Iterate through monthly_value PENDO FEEDBACK //
var monthly_value = ["100,000", "10,000", "1,000"].find((_, i, ar) => Math.random() < 1 / (ar.length -i));

	pendo.initialize({
// VISITOR INIT //
		visitor: {
        
        // uncomment line below if needing a TRUELY RANDOM VISITOR-IDs on each page refresh //
        id: visitorId(5),
        
        // uncomment line below if needing static string VISITOR-IDs //
        //id: 'staticTestId',
        
        // uncomment line below if needing to test a small sample of "random" VISITOR-IDs - note: VISITOR-IDs will cycle through an array of 3 pre-determined ID //
        //id: id,
        //
        name: name,
        full_name: full_name,
        email: email,
        role: role,
        testLanguage: testLanguage
		},

		account: {
// ACCOUNT INIT //

		// uncomment line below if needing a TRUELY RANDOM ACCOUNT-IDs on each page refresh //
        //name: accountMetaTestRandom(10),

        // uncomment line below if needing static string ACCOUNT-IDs //
    	//id: 'staticAccountId',

        // uncomment line below if needing to test a small sample of 'random' ACCOUNT-IDs - note: ACCOUNT-IDs will cycle through an array of 3 pre-determined IDs //
        id: aId,
        //
    	//name: aName,
    	name: accountMetaTestRandom(10),
    	is_paying: is_paying,
    	monthly_value: monthly_value
		}
	});
})('0084f818-df93-42ca-712f-fcdc0093e2dc');