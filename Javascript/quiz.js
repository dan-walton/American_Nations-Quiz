function quiz() {
	
	var yankeedom = 0;
	var leftCoast = 0;
	var midlands = 0;
	var tidewater = 0;
	var deepSouth = 0;
	var greaterAppalachia = 0;
	var elNorte = 0;
	var newNetherland = 0;
	var farWest = 0;

	function firstQuestion() {
		var party = prompt("Which political ideology do you most identify with: \n \nSteadfast Conservative\nBusiness Conservative\nYoung Outsider\nSkeptic\nNext Gen Left\nFamily Left\nSolid Liberal").toLowerCase();
		switch(party) {
			case "steadfast conservative":
				yankeedom -= 5;
				leftCoast -= 5;
				tidewater += 10;
				deepSouth += 10;
				greaterAppalachia += 10;
				newNetherland -= 5;
				farWest += 10;
				break;
			case "business conservative":
				yankeedom -= 5;
				deepSouth += 10;
				greaterAppalachia += 10;
				newNetherland += 10;
				farWest -= 5;
				break;
			case "young outsider":
				leftCoast += 10;
				tidewater -= 5;
				deepSouth -= 5;
				greaterAppalachia -= 5;
				elNorte += 10;
				break;
			case "skeptic":
				farWest += 10;
				break;
			case "next gen left":
				leftCoast += 10;
				tidewater -= 5;
				deepSouth -= 5;
				elNorte += 5;
				newNetherland += 5;
				break;
			case "family left":
				leftCoast -= 5;
				midlands += 10;
				tidewater += 10;
				elNorte += 10;
				newNetherland -= 5;
				break;
			case "solid liberal":
				yankeedom += 10;
				leftCoast += 5;
				greaterAppalachia -= 5;
				deepSouth -= 5;
				tidewater -= 5;
				farWest -= 5;
				break;
			case "other":
				break;
			default:
				alert("Please respond with one of the preset answers");
				firstQuestion();
		}
		secondQuestion();
	}

	function secondQuestion() {
		var religion = prompt("How important is religion in your life? \n\nVery important\nNot important").toLowerCase();
		switch(religion) {
			case "very important":
				greaterAppalachia += 10;
				deepSouth += 10;
				tidewater += 10;
				farWest += 10;
				midlands += 10;
				yankeedom -= 5;
				leftCoast -= 5;
				elNorte += 10;
				break;
			case "not important":
				yankeedom += 10;
				leftCoast += 10;
				greaterAppalachia -= 5;
				deepSouth -= 5;
				tidewater -= 5;
				elNorte -= 5;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				secondQuestion();
		}
		thirdQuestion();
	}

	function thirdQuestion() {
		var blacks = prompt("Do you belive that African Americans are inherently equal to whites and should be treated so?\n\nYes\nNo").toLowerCase();
		switch(blacks) {
			case "yes":
				yankeedom += 10;
				leftCoast += 10;
				midlands += 10;
				deepSouth -= 10;
				greaterAppalachia -= 5;
				break;
			case "no":
				yankeedom -= 20;
				leftCoast -= 10;
				deepSouth += 10;
				greaterAppalachia += 10;
				tidewater += 5;
				midlands -= 5;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				thirdQuestion();
		}
		fourthQuestion();
	}

	function fourthQuestion() {
		var social = prompt("Do you believe that society should be arranged to benefit the middle class or an elite few?\n\nMiddle Class\nAn elite few").toLowerCase();
		switch(social) {
			case "middle class":
				yankeedom += 20;
				leftCoast += 20;
				midlands += 20;
				deepSouth -= 10;
				tidewater -= 10;
				elNorte += 20;
				break;
			case "an elite few":
				yankeedom -= 20;
				midlands -= 20;
				deepSouth += 20;
				tidewater += 20
				elNorte -= 10;
				leftCoast -= 10;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				fourthQuestion();
		}
		fifthQuestion();
	}

	function fifthQuestion() {
		var government = prompt("Do you bellieve in the government's ability to manage and regulate the economy?\n\nYes\nNo").toLowerCase();	
		switch(government) {
			case "yes":
				yankeedom += 20;
				leftCoast += 10;
				midlands -= 5;
				deepSouth -= 20;
				greaterAppalachia -= 20;
				tidewater -= 5;
				elNorte += 20;
				newNetherland += 20;
				farWest -= 20;
				break;
			case "no":
				yankeedom -= 20;
				leftCoast -= 5;
				midlands += 10;
				deepSouth += 20;
				greaterAppalachia += 20;
				tidewater += 10;
				elNorte -= 10;
				newNetherland -= 5;
				farWest += 20;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				fifthQuestion();
		}
		sixthQuestion();
	}

	function sixthQuestion() {
		var ambition = prompt("What is your primary ambition in life?\n\nWealth\nFulfilment\nTradition\nFamily\nOrder\nFreedom\nSelf Sufficiency\nEquality").toLowerCase();
		switch(ambition) {
			case "wealth":
				newNetherland += 20;
				deepSouth += 10;
				leftCoast += 5;
				break;
			case "fulfilment":
				leftCoast += 20;
				yankeedom += 5;
				greaterAppalachia += 5;
				newNetherland += 5;
				break;
			case "traditiion":
				tidewater += 20;
				deepSouth += 10;
				leftCoast -= 10;
				midlands += 5;
				break;
			case "family":
				elNorte += 10;
				farWest += 10;
				tidewater += 10;
				midlands += 10;
				break;
			case "order":
				deepSouth += 15;
				greaterAppalachia += 15;
				break;
			case "self sufficiency":
				elNorte += 20;
				farWest += 20;
				greaterAppalachia += 10;
				midlands += 5;
				break;
			case "freedom":
				greaterAppalachia += 20;
				farWest += 5;
				deepSouth += 5;
				tidewater += 5;
				midlands += 5;
				break;
			case "equality":
				yankeedom += 20;
				elNorte += 10;
				leftCoast += 10;
				midlands += 10;
				deepSouth -= 10;
				greaterAppalachia -= 10;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				sixthQuestion();
		}
		seventhQuestion();
	}

	function seventhQuestion() {
		var environment = prompt("Do you believe that government and industry have a role to play in combatting climate change?\n\nYes\nNo").toLowerCase();
		switch(environment) {
			case "yes":
				yankeedom += 20;
				leftCoast += 20;
				deepSouth -= 10;
				greaterAppalachia -= 10;
				tidewater -= 10;
				elNorte += 10;
				newNetherland += 20;
				farWest -= 10;
				break;
			case "no":
				yankeedom -= 10;
				leftCoast -= 20;
				deepSouth += 10;
				greaterAppalachia += 10;
				tidewater += 10;
				elNorte -= 5;
				newNetherland -= 10;
				farWest += 10;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				seventhQuestion();
		}
		eighthQuestion();
	}	

	function eighthQuestion() {
		var immigrants = prompt("Do immigrants make this country better or worse?\n\nBetter\nWorse").toLowerCase();
		switch(immigrants) {
			case "better":
				yankeedom += 20;
				midlands += 20;
				leftCoast += 20;
				newNetherland += 20;
				deepSouth -= 10;
				greaterAppalachia -= 10;
				tidewater -= 10;
				elNorte += 20;
				farWest -= 10;
				break;
			case "worse":
				yankeedom -= 10;
				midlands -= 10;
				leftCoast -= 10;
				newNetherland -= 15;
				deepSouth += 10;
				greaterAppalachia += 10;
				tidewater += 10;
				elNorte -= 15;
				farWest += 10;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				eighthQuestion();
		}
		ninthQuestion();
	}

	function ninthQuestion() {
		var issue = prompt("What is the most important issue in politics today?\n\nFreedom\nPoverty\nEnvironment\nRegulation").toLowerCase();
		switch(issue) {
			case "freedom":
				greaterAppalachia += 20;
				deepSouth += 10;
				farWest += 15;
				tidewater += 5;
				midlands += 5;
				break;
			case "poverty":
				yankeedom += 20;
				leftCoast += 10;
				midlands += 20;
				elNorte += 20;
				deepSouth -= 10;
				greaterAppalachia -= 10;
				break;
			case "environment":
				leftCoast += 20;
				yankeedom += 10;
				deepSouth -= 5;
				farWest += 5;
				greaterAppalachia -= 5;
				break;
			case "regulation":
				yankeedom -= 5;
				greaterAppalachia += 10;
				deepSouth += 15;
				tidewater += 5;
				leftCoast += 5;
				midlands += 10;
				elNorte += 5;
				newNetherland += 15;
				farWest += 15;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				ninthQuestion();
		}
		tenthQuestion();
	}

	function tenthQuestion() {
		var war = prompt("Did you support the confederacy or the union?\n\nConfederacy\nUnion").toLowerCase();
		switch(war) {
			case "confederacy":
				deepSouth += 20;
				yankeedom -= 10;
				break;
			case "union":
				yankeedom += 20;
				midlands += 20;
				newNetherland += 20;
				deepSouth -= 10;
				elNorte += 20;
				leftCoast += 20;
				break;
			case "other":
				break;
			default:
				alert("Please try again");
				tenthQuestion();
		}
		culture();
	}

	function culture() {
		var culture = Math.max(yankeedom, leftCoast, deepSouth, greaterAppalachia, tidewater, midlands, newNetherland, elNorte, farWest);
		if (culture === yankeedom) {
			alert("You should live in Yankeedom, characterised by Boston and the North");
		}
		else if (culture === leftCoast) {
			alert("You should live on the Left Coast, e.g. San Francisco");
		}
		else if (culture === deepSouth) {
			alert("You should live in the Deep South, e.g. Atlanta or Jackson");
		}
		else if (culture === greaterAppalachia) {
			alert("You should live in Greater Appalachia, e.g. Dallas or Oklahoma");
		}
		else if (culture === tidewater) {
			alert("You should live in Tidewater, e.g. Virginia or NC");
		}
		else if (culture == midlands) {
			alert("You should live in the Midlands, e.g. Philadelphia");
		}
		else if (culture == newNetherland) {
			alert("You should live in New Netherland, or New York");
		}
		else if (culture == elNorte) {
			alert("You should live in el Norte, like LA or Phoenix");
		}
		else if(culture === farWest) {
			alert("You should live in the Far West, such as Denver");
		}
		return;
	}

	alert("Welcome to the quiz which will allocate you into one of the nine major american nations. Answer exactly to the word, and remember that you can always respond 'other' if you can't decide.")

	firstQuestion();
}

quiz();

/* nations:
- Yankeedom
- Left Coast
- Midlands
- Tidewater
- Deep South
- Greater Appalachia
- New France
- El Norte
- Far West
- New Netherland
*/
