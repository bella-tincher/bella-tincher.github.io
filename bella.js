$(document).ready(function() {
    $("#generate").click(function(){
        $("#identity").html("");
        $("#white").css("background-color","white")
        $("#black").css("background-color","white")
        $("#latinx").css("background-color","white")
        $("#asian").css("background-color","white")
        $("#lowIn").css("background-color","white")
        $("#mediumIn").css("background-color","white")
        $("#highIn").css("background-color","white")
    	race = getRandomInt(4);
    	income= getRandomInt(3);
    	if(race==0){
    		race_final = "White"
            $("#white").css("background-color","#e6f1ff")
    	}
    	if(race==1){
    		race_final = "Black"
            $("#black").css("background-color","#e6f1ff")
    	}
    	if(race==2){
    		race_final = "Latinx"
            $("#latinx").css("background-color","#e6f1ff")
    	}
    	if(race==3){
    		race_final = "Asian"
            $("#asian").css("background-color","#e6f1ff")

    	}
    	if(income==0){
    		income_final = "high income"
            $("#highIn").css("background-color","#e6f1ff")
    	}
    	if(income==1){
    		income_final = "medium income"
            $("#mediumIn").css("background-color","#e6f1ff")

    	}
    	if(income==2){
    		income_final = "low income"
            $("#lowIn").css("background-color","#e6f1ff")
    	}
    	$("#identity").append("<div class=\"col-md-12\"><p class=\"text-center\" id=\"iden\"> You are <span class=\"id\">"+ race_final + "</span> and have a <span class=\"id\">" + income_final + "</span></p></div>");
    });
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
});