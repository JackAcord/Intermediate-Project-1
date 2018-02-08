//This is refrencing the form so that it can be read by the script
var form = document.forms["cakeForm"]

//This is the array of prices for the first question
var cake_prices = new Array();
cake_prices["sixInch"] = 30;
cake_prices["eightInch"] = 35;
cake_prices["tenInch"] = 40;
cake_prices["twelveInch"] = 45;
cake_prices["fourteenInch"] = 50;
cake_prices["sixteenInch"] = 60;
cake_prices["eighteenInch"] = 65;
cake_prices["twentyInch"] = 70;
cake_prices["twentyTwoInch"] = 80;

//Using this code to make sure all of the checkboxes are checked
function selectedCake()
{
    var theForm = document.forms["cakeform"];
    var selectedcake = theForm.elements["selectedcake"];
    var selected = [];
    for (var i=0; i<selectedcake.length; i++) {
    	if (selectedcake[i].checked) {
    		selectedCake = cake_prices(selectedcake[i].value);
    	}
    }
    return candlePrice;
}

//This is giving values for the second question
//For the percentages, I am simply multiplying the percent ammount by 1
var flavor_prices = new Array();
flavor_prices["vanilla"] = 1*.05;
flavor_prices["chocolate"] = 1*.05;
flavor_prices["strawberry"] = 1*.05;
flavor_prices["butterscotch"] = 1*.07;
flavor_prices["marble"] = 1*.1;
flavor_prices["velvet"] = 1*.1;
flavor_prices["carrot"] = 1*.12;

//This is verifying that the radio button of this question is checked and it has a value
function getCakeTypePrice()
{
    var cakeTypePrice=0;
    var theForm = document.forms["cakeform"];
    var cakeType = theForm.elements["cakeType"];
    for(var i = 0; i < cakeType.length; i++)
    {
        if(cakeType[i].checked)
        {
            cakeTypePrice = flavor_prices[cakeType[i].value];
            break;
        }
    }
    return cakeTypePrice;
}

var icing_prices = new Array();
icing_prices["buttercream"] = 1*.02;
icing_prices["glossyGlaze"] = 1*.02;
icing_prices["creamCheese"] = 1*.05;
icing_prices["fudge"] = 1*.05;
icing_prices["meringue"] = 1*.05;
icing_prices["ganache"] = 1*.05;
icing_prices["fondant"] = 1*.07;

function getIcingPrice()
{
    var icingPrice=0;
    var theForm = document.forms["cakeform"];
    var icing = theForm.elements["icing"];
    for(var i = 0; i < icing.length; i++)
    {
        if(icing[i].checked)
        {
            icingPrice = icing_prices[icing[i].value];
            break;
        }
    }
    return icingPrice;
}

//This array contains the values of the drop down menu question
var filling_prices= new Array();
filling_prices["none"]=0;
filling_prices["custard"]=1*.03;
filling_prices["pastry"]=1*.03;
filling_prices["whiteChocolate"]=1*.06;
filling_prices["chocolateMousse"]=1*.06;
filling_prices["curd"]=1*.06;
filling_prices["chocolateGanache"]=1*.06;
filling_prices["berries"]=1*.08;
filling_prices["raspberryMousse"]=1*.07;
filling_prices["belgium"]=1*.08;
filling_prices["cannoli"]=1*.1;

//This is checking which drop down item has been chosen and applies that value
function getFillingPrice()
{
    var cakeFillingPrice=0;
    var theForm = document.forms["cakeform"];
    var selectedFilling = theForm.elements["filling"];
    cakeFillingPrice = filling_prices[selectedFilling.value];
    return cakeFillingPrice;
}


var topper_prices = new Array();
topper_prices["couple"] = 50;
topper_prices["sparklers"] = 70;
topper_prices["edibleSmall"] = 120;
topper_prices["edibleLarge"] = 200;

function getTopperPrice()
{
    var topperPrice=0;
    var theForm = document.forms["cakeform"];
    var topper = theForm.elements["topper"];
    for(var i = 0; i < topper.length; i++)
    {
        if(topper[i].checked)
        {
            topperPrice = topper_prices[topper[i].value];
            break;
        }
    }
    return topperPrice;
}

var decoration_prices = new Array();
decoration_prices["icing"] = 1*.05;
decoration_prices["caramelCrumble"] = 1*.1;
decoration_prices["chocolateCrumble"] = 1*.1;
decoration_prices["pearl"] = 1*.15;
decoration_prices["mirror"] = 1*.15;
decoration_prices["layered"] = 1*.15;
decoration_prices["folding"] = 1*.15;
decoration_prices["lace"] = 1*.15;
decoration_prices["fruit"] = 1*.2;
decoration_prices["florals"] = 1*.2;
decoration_prices["gumpaste"] = 1*.25;

function getDecorationPrice()
{
    var decorationPrice=0;
    var theForm = document.forms["cakeform"];
    var decoration = theForm.elements["decorations"];
    for(var i = 0; i < decoration.length; i++)
    {
        if(decoration[i].checked)
        {
            decorationPrice = decoration_prices[decoration[i].value];
            break;
        }
    }
    return decorationPrice;
}

var cut_prices = new Array();
cut_prices["yes"] = 20;
cut_prices["no"] = 0;

function getCutPrice()
{
    var cutPrice=0;
    var theForm = document.forms["cakeform"];
    var cut = theForm.elements["cut"];
    for(var i = 0; i < cut.length; i++)
    {
        if(cut[i].checked)
        {
            cutPrice = cut_prices[cut[i].value];
            break;
        }
    }
    return cutPrice;
}

//This is adding up the percentages into one percentage to use on the final price
function percentTotal()
{
	var percent = .055 + cakeType() + icing() + decoration();
}

//This is calculating the total price of the selected items
function addTotal()
{
    var cakePrice = 100 + 75 + 60 + 40 + selectedCake() + topper() + cut();
}

//This applies the percent to the base price, giving us the total price, as well as allowing it to be displayed.
function getTotal()
{
    var totalPrice = cakePrice * percent;
    document.getElementById('totalPrice').innerHTML = "Total Price For Cake $" + cakePrice;
}
