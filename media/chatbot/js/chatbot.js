var age = 0;
var gender = -1;
var working = 0;
var travel = 0;
var job = 0;
var abroad = 0;
var cb_tick = false;
var close_contact = 0;
var checked_boses = 0;
var chk_symp1_yes_value_val = 0;
var severe_status_val = 0;
var checked_boses2 = 0;
var checked_boses3 = 0;
var score = 0;
var quiz_score = 0;

function quiz() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Do you Wash your hands frequently?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Yes I do<input type="radio" value="1" name="q1" onclick="q1_c(1);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">No I Don\'t<input type="radio" value="1" name="q1" onclick="q1_c(0);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
}

function q1_c(ch) {
	$("input[type=radio]").attr('disabled', true);
	if (ch) {
		$('<li class="replies"><p style="color: green;">' + "Good. Correct Answer. By washing your hands regularly, you can keep the virus at bay." + '</p></li>').appendTo($('.messages ul'));
		quiz_score += 1;
	} else
		$('<li class="replies"><p style="color: red;">' + "You must wash hands at regular interval. By washing your hands regularly, you can keep the virus at bay." + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="q2()">Next</button></li>').appendTo($('.messages ul'));
}

function q2() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Do you often touch your eyes, nose and mouth?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Regularly<input type="radio" value="1" name="q1" onclick="q2_c(0);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Not often<input type="radio" value="1" name="q1" onclick="q2_c(1);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
}

function q2_c(ch) {
	$("input[type=radio]").attr('disabled', true);
	if (ch) {
		$('<li class="replies"><p style="color: green;">' + "Good. Correct Answer. Corona Virus spreads when you touch your eyes, nose and mouth." + '</p></li>').appendTo($('.messages ul'));
		quiz_score += 1;
	} else
		$('<li class="replies"><p style="color: red;">' + "You must avoid that. Corona Virus spreads when you touch your eyes, nose and mouth." + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="q3()">Next</button></li>').appendTo($('.messages ul'));
}

function q3() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Do you cover your mouth and nose with your bent elbow or tissue when you cough or sneeze?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Yes<input type="radio" value="1" name="q1" onclick="q3_c(1);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">No<input type="radio" value="1" name="q1" onclick="q3_c(0);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
}

function q3_c(ch) {
	$("input[type=radio]").attr('disabled', true);
	if (ch) {
		$('<li class="replies"><p style="color: green;">' + "Good. You take care of people around you." + '</p></li>').appendTo($('.messages ul'));
		quiz_score += 1;
	} else
		$('<li class="replies"><p style="color: red;">' + "One must cover his/her mouth while sneezing/coughing." + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="q4()">Next</button></li>').appendTo($('.messages ul'));
}

function q4() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Are you a patient of any Cardiovascular or Chronic respiratory disease, Diabetes, Hypertension or Cancer?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Yes<input type="radio" value="1" name="q1" onclick="q4_c(1);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">No<input type="radio" value="1" name="q1" onclick="q4_c(0);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
}

function q4_c(ch) {
	$("input[type=radio]").attr('disabled', true);
	if (ch) {
		$('<li class="replies"><p style="color: red;">' + "Do take very good care of yourself" + '</p></li>').appendTo($('.messages ul'));
		quiz_score += 1;
	} else
		$('<li class="replies"><p style="color: green;">' + "Congratulations. People with medical history are at high risk of corona infection." + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="q5()">Next</button></li>').appendTo($('.messages ul'));
}

function q5() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "If you find yourself with fever, cough or difficulty in breathing, do you know exactly what to do in the current scenario?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Yes<input type="radio" value="1" name="q1" onclick="q5_c(1);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">No<input type="radio" value="1" name="q1" onclick="q5_c(0);"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
}

function q5_c(ch) {
	$("input[type=radio]").attr('disabled', true);
	if (ch) {
		$('<li class="replies"><p style="color: green;">' + "Good. Seek immediate medical care." + '</p></li>').appendTo($('.messages ul'));
		quiz_score += 1;
	} else
		$('<li class="replies"><p style="color: red;">' + "You must contact the doctor immediately. Alternatively, contact helpline +91-11-23978046" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="submit_quiz()">Submit</button></li>').appendTo($('.messages ul'));
}

function submit_quiz() {
	$('.messages ul').empty();
	if (quiz_score >= 3)
		$('<li class="sent"><div class="p-3 mb-2 bg-success text-white">Congratulations! You are aware about corona virus.</div></li>').appendTo($('.messages ul'));
	else
		$('<li class="sent"><div class="p-3 mb-2 bg-warning text-dark">You should make yourself more aware about corona virus. How about you go through our FAQ section to start with.</div></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="start_over()">Finish</button></li>').appendTo($('.messages ul'));
}

function chk() {
	if ($('input[type=checkbox]').is(":checked")) {
		$("#none_btn").html("Done");
		$("#none_btn").removeClass("btn btn-primary");
		$("#none_btn").addClass("btn btn-success");
	}
	return false;
}

function start() {
	$('<li class="replies"><p>' + "Your age?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class=""><input class="form-control-sm" type="number" id="age" name="age" value="0" min="1" max="120" required placeholder="Age" style="background-color:#dae0e5 !important;color:darkblue;"></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_age()">Done</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function update_age() {
	age = document.getElementById("age").value;
	age = parseInt(age);
	if (age >= 0 && age <= 5)
		score += 1;
	if (age >= 6 && age <= 20)
		score += 0.75;
	if (age >= 21 && age <= 50)
		score += 0.50;
	if (age >= 51)
		score += 1;
	/* alert(age); */
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Your Gender?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-success" onclick="update_gender(0)">Male <i class="fa fa-mars"></button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-danger" onclick="update_gender(1)">Female <i class="fa fa-venus"></button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_gender(0.5)">Other <i class="fa fa-transgender"></i></button></li>').appendTo($('.messages ul'));

	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function update_gender(ch) {
	gender = ch;
	/* alert(gender); */
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Are you working?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-success" onclick="update_working(1)">YES</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-danger" onclick="update_working(0)">NO</button></li>').appendTo($('.messages ul'));

	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function update_working(ch) {
	working = ch;
	$('.messages ul').empty();
	/* alert(working); */
	if (working) {
		$('<li class="replies"><p>' + "How do you commute to your work?" + '</p></li>').appendTo($('.messages ul'));
		$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_travel(0.5)">Personal Vehicle</button></li>').appendTo($('.messages ul'));
		$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_travel(1)">Public Transport</button></li>').appendTo($('.messages ul'));

		$(".messages").animate({
			scrollTop: $(document).height()
		}, "fast");
	} else {
		score += 0.5;
		$('<li class="replies"><p>' + "Have you visited any of the following countaries during last one month?" + '</p></li>').appendTo($('.messages ul'));

		$('<li class="sent"><label class="container1">China<input type="checkbox" id="cb_1" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label class="container1">Italy<input type="checkbox" id="cb_2" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label class="container1">Iran<input type="checkbox" id="cb_3" value="1" name="countaries[] " onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label class="container1">USA<input type="checkbox" id="cb_4" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label class="container1">France<input type="checkbox" id="cb_5" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label class="container1">South Korea<input type="checkbox" id="cb_6" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label class="container1">Other<input type="checkbox" id="cb_7" value="0" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));

		/*$('<li class="sent"><label><input type="checkbox" id="cb_1" value="1" name="countaries[]">China</label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label><input type="checkbox" id="cb_2" value="1" name="countaries[]">Italy</label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label><input type="checkbox" id="cb_3" value="1" name="countaries[]">Iran</label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label><input type="checkbox" id="cb_4" value="1" name="countaries[]">USA</label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label><input type="checkbox" id="cb_5" value="1" name="countaries[]">France</label></li>').appendTo($('.messages ul'));
		$('<li class="sent"><label><input type="checkbox" id="cb_6" value="0" name="countaries[]">Other</label></li>').appendTo($('.messages ul'));*/
		$('<li class="sent"><button type="button" class="btn btn-primary" id="none_btn" onclick="update_abroad(0)">None</button></li>').appendTo($('.messages ul'));

		//var atLeastOneIsChecked = $('input[name="countaries[]"]:checked').length > 0;
		//alert (atLeastOneIsChecked);

		$(".messages").animate({
			scrollTop: $(document).height()
		}, "fast");
	}
};

function update_travel(ch) {
	travel = ch;
	/* alert(travel); */
	$('.messages ul').empty();
	score += parseInt(ch);
	$('<li class="replies"><p>' + "What is the nature of your work?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_job(1)">Health Staff</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_job(0.5)">Animal Industry</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_job(0.2)">Work from Home</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="update_job(0.3)">Other</button></li>').appendTo($('.messages ul'));

	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function update_job(ch) {
	job = ch;
	score += parseInt(ch);
	$('.messages ul').empty();
	/* alert(job); */
	$('<li class="replies"><p>' + "Have you visited any of the following countaries during last one month?" + '</p></li>').appendTo($('.messages ul'));

	$('<li class="sent"><label class="container1">China<input type="checkbox" id="cb_1" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Italy<input type="checkbox" id="cb_2" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Iran<input type="checkbox" id="cb_3" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">USA<input type="checkbox" id="cb_4" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">France<input type="checkbox" id="cb_5" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">South Korea<input type="checkbox" id="cb_6" value="1" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Other<input type="checkbox" id="cb_7" value="0" name="countaries[]" onclick="chk();"> <span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));

	/*$('<li class="sent"><label><input type="checkbox" id="cb_1" value="1" name="countaries">China</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb_2" value="1" name="countaries">Italy</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb_3" value="1" name="countaries">Iran</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb_4" value="1" name="countaries">USA</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb_5" value="1" name="countaries">France</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb_6" value="0" name="countaries">Other</label></li>').appendTo($('.messages ul'));*/
	$('<li class="sent"><button type="button" class="btn btn-primary" id="none_btn" onclick="update_abroad(0)">None</button></li>').appendTo($('.messages ul'));

	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function update_abroad(msg) {

	if (msg) {
		abroad = 1
	}
	if (document.getElementById("cb_1").checked)
		score += 5;
	if (document.getElementById("cb_2").checked)
		score += 5;
	if (document.getElementById("cb_3").checked)
		score += 5;
	if (document.getElementById("cb_4").checked)
		score += 5;
	if (document.getElementById("cb_5").checked)
		score += 5;
	if (document.getElementById("cb_6").checked)
		score += 5;
	if (document.getElementById("cb_7").checked)
		score += 0.5;
	/* alert(abroad); */
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	update_contact();
};

function update_contact() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Have you been in close contact with someone who has corona virus?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-success" onclick="update_close_contact(5)">Yes</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-danger" onclick="update_close_contact(1)">No</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn-primary" onclick="update_close_contact(1)">Dont Know</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function update_close_contact(ch) {
	close_contact = ch;
	score += parseInt(ch);
	/* alert(ch); */

	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	update_symp1();
};

function update_symp1() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Do you have any of the following symptoms?" + '</p></li>').appendTo($('.messages ul'));

	$('<li class="sent"><label class="container1">Cough<input type="checkbox" id="cb2_1" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Fever<input type="checkbox" id="cb2_2" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Difficulty Breathing<input type="checkbox" id="cb2_3" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Pain in throat<input type="checkbox" id="cb2_4" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Tiredness<input type="checkbox" id="cb2_5" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));


	/*$('<li class="sent"><label><input type="checkbox" id="cb2_1" value="1" >Cough</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb2_2" value="1" >Fever</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb2_3" value="1" >Difficulty Breathing</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb2_4" value="1" >Pain in throat</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb2_5" value="1" >Tiredness</label></li>').appendTo($('.messages ul'));*/
	$('<li class="sent"><button type="button" class="btn btn-primary" id="none_btn" onclick="chlsympt1()">None</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function chlsympt1() {
	if (document.getElementById("cb2_1").checked) {
		score += 1;
		checked_boses = 1;
	}
	if (document.getElementById("cb2_2").checked) {
		score += 1;
		checked_boses = 1;
	}
	if (document.getElementById("cb2_3").checked) {
		score += 1;
		checked_boses = 1;
	}
	if (document.getElementById("cb2_4").checked) {
		score += 0.6;
		checked_boses = 1;
	}
	if (document.getElementById("cb2_5").checked) {
		score += 0.6;
		checked_boses = 1;
	}
	/* alert(checked_boses); */
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	if (checked_boses)
		chk_symp1_yes();
	else
		add_sympt();
};

function chk_symp1_yes() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "How long have you being facing these symptomps?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="chk_symp1_yes_value(0.3)">Hours</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="chk_symp1_yes_value(0.7)">Days</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="chk_symp1_yes_value(1)">Weeks</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function chk_symp1_yes_value(ch) {
	chk_symp1_yes_value_val = ch;
	score += parseInt(ch);
	/* alert(chk_symp1_yes_value_val); */
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	how_severe();
};

function how_severe() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "How severe are your symptoms?" + '</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="severe_status(0.5)">Mild</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="severe_status(0.75)">Moderate</button></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="severe_status(1)">Severe</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function severe_status(ch) {
	severe_status_val = ch;
	score += parseInt(ch);
	/* alert(severe_status_val); */
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	add_sympt();
};

function add_sympt() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Do you have any of the following symptoms?" + '</p></li>').appendTo($('.messages ul'));

	$('<li class="sent"><label class="container1">Body ache<input type="checkbox" id="cb3_1" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Nausea<input type="checkbox" id="cb3_2" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Headache<input type="checkbox" id="cb3_3" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Diarrea<input type="checkbox" id="cb3_4" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));

	/*$('<li class="sent"><label><input type="checkbox" id="cb3_1" value="1" >Body ache</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb3_2" value="1" >Nausea</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb3_3" value="1" >Headache</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb3_4" value="1" >Diarrea</label></li>').appendTo($('.messages ul'));*/
	$('<li class="sent"><button type="button" class="btn btn-primary" id="none_btn" onclick="chkaddsympt()">None</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function chkaddsympt() {
	if (document.getElementById("cb3_1").checked)
		score += 0.75;
	if (document.getElementById("cb3_2").checked)
		score += 0.6;
	if (document.getElementById("cb3_3").checked)
		score += 0.8;
	if (document.getElementById("cb3_4").checked)
		score += 0.5;
	/* alert(checked_boses2); */
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	previous_conditions();
};

function previous_conditions() {
	$('.messages ul').empty();
	$('<li class="replies"><p>' + "Do you have medical history with any of the following diseases?" + '</p></li>').appendTo($('.messages ul'));

	$('<li class="sent"><label class="container1">Heart disease<input type="checkbox" id="cb4_1" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Diabetes<input type="checkbox" id="cb4_2" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Lung diseases<input type="checkbox" id="cb4_3" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Hypertension<input type="checkbox" id="cb4_4" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label class="container1">Cancer<input type="checkbox" id="cb4_5" value="1" onclick="chk();"><span class="checkmark"></span> </label></li>').appendTo($('.messages ul'));

	/*$('<li class="sent"><label><input type="checkbox" id="cb4_1" value="1" >Heart disease</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb4_2" value="1" >Diabetes</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb4_3" value="1" >Lung diseases</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb4_4" value="1" >Hypertension</label></li>').appendTo($('.messages ul'));
	$('<li class="sent"><label><input type="checkbox" id="cb4_5" value="1" >Cancer</label></li>').appendTo($('.messages ul'));*/
	$('<li class="sent"><button type="button" class="btn btn-primary" id="none_btn" onclick="precond()">None</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function precond() {
	if (document.getElementById("cb4_1").checked)
		score += 2;
	if (document.getElementById("cb4_2").checked)
		score += 1;
	if (document.getElementById("cb4_3").checked)
		score += 2;
	if (document.getElementById("cb4_4").checked)
		score += 1;
	if (document.getElementById("cb4_5").checked)
		score += 2;
	/* alert(checked_boses3); */
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
	results();
};

function results() {
	$('.messages ul').empty();
	/* score = parseInt(age)+parseInt(working)+parseInt(travel)+parseInt(job)+parseInt(abroad)+parseInt(close_contact)+parseInt(chk_symp1_yes_value_val)+parseInt(severe_status_val)+parseInt(checked_boses)+parseInt(checked_boses2)+parseInt(checked_boses3); */
	/* alert(score); */
	if (score >= 0 && score <= 4)
		$('<li class="sent"><div class="p-3 mb-2 bg-success text-white">You do not show signs of concern. Keep monitoring. For any queries contact +91-11-23978046.</div></li>').appendTo($('.messages ul'));
	if (score >= 4.1 && score <= 7.5)
		$('<li class="sent"><div class="p-3 mb-2 bg-warning text-dark">Your responses show enough signs of concern, please contact your doctor. Need not to panic. For any queries contact +91-11-23978046.</div></li>').appendTo($('.messages ul'));
	if (score >= 7.6)
		$('<li class="sent"><div class="p-3 mb-2 bg-danger text-white">Based on your answers your condition seems alarming. Contact your doctor immediately. For any queries contact +91-11-23978046.</div></li>').appendTo($('.messages ul'));
	$('<li class="sent"><button type="button" class="btn btn-primary" onclick="start_over();">Start Over</button></li>').appendTo($('.messages ul'));
	$(".messages").animate({
		scrollTop: $(document).height()
	}, "fast");
};

function start_over() {
	$('.messages ul').empty();
	age = 0;
	gender = -1;
	working = 0;
	travel = 0;
	job = 0;
	abroad = 0;
	cb_tick = false;
	close_contact = 0;
	checked_boses = 0;
	chk_symp1_yes_value_val = 0;
	severe_status_val = 0;
	checked_boses2 = 0;
	checked_boses3 = 0;
	score = 0;
	quiz_score = 0;

	$('<li class="replies"><p>Hello I am Corona Bot. And I am here to help you during novel corona virus outbreak.</p></li>').appendTo($('.messages ul'));
	$('<li class="replies"><p>Warning: Do not take this as medical advise. Consult your doctor if you feel sick.</p></li>').appendTo($('.messages ul'));
	$('<li class="sent"> <button type="button" class="btn btn-success" onclick="start()">Risk Analyzer. &#129298;</button> <button type="button" class="btn btn-danger" onclick="quiz()">Take Quiz. &#129299;</button> </li>').appendTo($(
		'.messages ul'));
	//start();
}
function newsfeed() {
// alert("Inside newsfeed");
//var myurl = 'https://newsapi.org/v2/everything?qInTitle=+corona%20+india&pageSize=6&apiKey=db7f4ed8533240f39bafa44572908166';
//var myurl = 'https://newsapi.org/v2/top-headlines?country=in&category=health&q=+corona%20+india&pageSize=20&apiKey=db7f4ed8533240f39bafa44572908166'
//var myurl = 'https://newsapi.org/v2/top-headlines?category=health&q=corona%20india&pageSize=20&apiKey=db7f4ed8533240f39bafa44572908166'
var myurl = 'https://newsapi.org/v2/top-headlines?country=in&q=corona&pageSize=20&apiKey=db7f4ed8533240f39bafa44572908166'
$.ajax({
	type: "GET",
	url: myurl,
	dataType: "json",
	success: function(result) {
		for (key in result["articles"]) {
			var title = result["articles"][key].title;
			var url = result["articles"][key].url;
			var img_url = result["articles"][key].urlToImage;
			var date = convert_date(result["articles"][key].publishedAt);
			//console.log(date);
			$('#newsfeed').append("<div class='card' style='width: 20rem;'><img class='card-img-top' src='"+img_url+"' style='width: 100%;height: 20vh;object-fit:cover;' alt='Card image cap'><div class='card-body'><h6 class='card-title'><span class='badge badge-secondary'>"+date+"</span><br>"+title+"</h6><a href='"+url+"'class='btn btn-dark text-center' target='_blank'>Read More</a></div></div>&nbsp;");
		}
	},
	error: function(results) {
		console.log("There is an error in newsapi. " + results.stringfy);

	},
});
}
function convert_date(date){
	const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
	date = date.split("T")[0];
	date = date.split("-");
	var new_date = date[2]+' '+months[parseInt(date[1])-1]+' '+date[0]
	return(new_date);
}

// object.onload = function(){newsfeed()};
document.addEventListener("DOMContentLoaded", function() {
	newsfeed();

	$("#questionList li").on("click",function(){
		var question = $(this).html();
		$("#question").val(question);
		searchAnswer();
	})
});
var questionData = [];
function searchAnswer() {
	console.log("calling search answer")
	var question = document.getElementById("question");
	if($.trim(question.value) == ""){
		alert("Please enter your question");
		$(question).focus();
		("#answerFeed").hide();
		$("#aboutAnswerContent").show();
		return;
	}
	console.log("question in ",question.value);
	$("#answerFeed").hide();
	$("#aboutAnswerContent").hide();
	$("#loading").show();
	var myurl = 'https://www.menggabungkanpdf.id/faq1.php?query='+encodeURI(question.value);
	console.log("url is",myurl);

	$.ajax({
		type: "GET",
		url: myurl,
		dataType: "json",
		success: function(results) {
			console.log("response", results);
			questionData = results.response;
			results = results.response;
			for (data in results) {
				var abstractedText = getHighlightedText(results[data]);
				var title = results[data].title;
				console.log("data is",results[data]);

				console.log("title",title);
				//console.log(date);

				$('#answerFeed').append("<div class='card mr-2 ml-2' style='width: 80rem;'><h6 class='card-title'><br><b>"+title+"</b></h6><div class='card-body'><p class='text-justify'>"+abstractedText+"</p><button type='button' onclick=\"openAllDetails('"+data+"')\" class='btn btn-dark text-center' target='_blank'>Read More</button></div></div>&nbsp;");
			}
			$("#answerFeed").unhighlight();
			var questArray = tokenize(question.value);
			for(var i=0;i<questArray.length;i++){
				$("#answerFeed").highlight(questArray[i]);
				console.log("tokens are",questArray);
			}
			$("#loading").hide();
			$("#answerFeed").show();
		},
		error: function(results) {
			console.log("There is an error in newsapi. " + results.stringfy);

		},
	});

	}
	function getHighlightedText(data){
		console.log("data",data);
		var isHighlight = data['highlighted_abstract'];
		var highlightAbs = null; data["highlights"][0];
		var highlightPara = null;
		var abstractedText = "";

		if(isHighlight){
			highlightAbs = data["highlights"][0];
			highlightPara = data["highlights"][1];
		}
		else{
			highlightPara = data["highlights"][0];
		}

		if(isHighlight){
			for(var i=0;i<highlightAbs.length;i++){
				var temphighlight = highlightAbs[i];
				console.log("highlights are",temphighlight);

				console.log("inside abs");
				//console.log("complete text",data.abstract)
				console.log("temphighlight[0]",temphighlight[0]);
				console.log("temphighlight[0]",temphighlight[1]);
				abstractedText += "..."+data.abstract.substring(temphighlight[0],temphighlight[1]);
			}
		}

		if(typeof highlightPara != 'undefined'){

			for(var i=0;i<highlightPara.length;i++){
				var temphighlight = highlightPara[i];
				if(typeof data.paragraphs[i] !='undefined'){

					console.log("highlights are",temphighlight);
					console.log("complete text",data.paragraphs[i]);
					//console.log("data should be",data.paragraphs[i].substring(temphighlight[0],temphighlight[1]));
					abstractedText += "..."+data.paragraphs[i].substring(temphighlight[0],temphighlight[1]);
				}
				else{
					abstractedText += "..."+data.paragraphs[i-1].substring(temphighlight[0],temphighlight[1]);
				}


			}
		}

			return abstractedText;
		}

	function getHighlightedTextArray(data){

		console.log("data",data);
		var isHighlight = data['highlighted_abstract'];
		var highlightAbs = null; data["highlights"][0];
		var highlightPara = null;
		var abstractedText = [];

		if(isHighlight){
			highlightAbs = data["highlights"][0];
			highlightPara = data["highlights"][1];
		}
		else{
			highlightPara = data["highlights"][0];
		}

		if(isHighlight){
			for(var i=0;i<highlightAbs.length;i++){
				var temphighlight = highlightAbs[i];
				abstractedText.push(data.abstract.substring(temphighlight[0],temphighlight[1]));
			}
		}

		if(typeof highlightPara != 'undefined'){

			for(var i=0;i<highlightPara.length;i++){
				var temphighlight = highlightPara[i];
				if(typeof data.paragraphs[i] !='undefined'){
					abstractedText.push(data.paragraphs[i].substring(temphighlight[0],temphighlight[1]));
				}
				else{
					abstractedText.push(data.paragraphs[i-1].substring(temphighlight[0],temphighlight[1]));
				}


			}
		}

			return abstractedText;
	}


	function openAllDetails(index){

		var question = document.getElementById("question").value;
		var data = questionData[index];
		var abstractedTextArr = getHighlightedTextArray(data);
		var authors = data.authors;
		var title = data.title;
		var abstract = data.abstract;
		var paragraphs = data.paragraphs;
		var url = data.url;
		var authHtml = "";
		var paragraphHtml = "";

		for(var i=0;i<authors.length;i++){
			authHtml += "&nbsp;<span class='badge badge-danger'>"+authors[i]+"</span>";
		}
		for(var i=0;i<paragraphs.length;i++){
			paragraphHtml += "<p class='text-justify'>"+paragraphs[i]+"</p>";
		}
		paragraphHtml +="Read complete <a href='"+url+"' target='_blank'>here</a>";

		$("#questionTitle").html(title);
		$("#authors").html(authHtml);
		$("#abstract").html(abstract);
		$("#paragraphs").html(paragraphHtml);

		for(var i=0;i<abstractedTextArr.length;i++){
			$("#questionModal").highlight(abstractedTextArr[i]);

		}

		var questArray = tokenize(question);
		$("#questionModal").unhighlight();
		for(var i=0;i<questArray.length;i++){
			$("#questionModal").highlight(questArray[i]);
		}
		$("#questionModal").modal("show");
	}


	function tokenize(text){
		var results = [];
		var words = text
		.toLowerCase()
		.replace('-', ' ')
		.replace('.', ' ')
		.replace(',', ' ')
		.replace('?', ' ')
		.split(' ');

		words.forEach((word) => {
			if (!GRAM_WORDS.includes(word)) {
			  results.push(word);
			}
		  });
		  return results;
	}
	//highlight script
	jQuery.extend({highlight:function(e,t,n,i){if(3===e.nodeType){var r=e.data.match(t);if(r){var a=document.createElement(n||"span");a.className=i||"highlight";var h=e.splitText(r.index);h.splitText(r[0].length);var s=h.cloneNode(!0);return a.appendChild(s),h.parentNode.replaceChild(a,h),1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&(e.tagName!==n.toUpperCase()||e.className!==i))for(var l=0;l<e.childNodes.length;l++)l+=jQuery.highlight(e.childNodes[l],t,n,i);return 0}}),jQuery.fn.unhighlight=function(e){var t={className:"highlight",element:"span"};return jQuery.extend(t,e),this.find(t.element+"."+t.className).each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},jQuery.fn.highlight=function(e,t){var n={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(n,t),e.constructor===String&&(e=[e]),e=jQuery.grep(e,function(e,t){return""!=e}),0==(e=jQuery.map(e,function(e,t){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")})).length)return this;var i=n.caseSensitive?"":"i",r="("+e.join("|")+")";n.wordsOnly&&(r="\\b"+r+"\\b");var a=new RegExp(r,i);return this.each(function(){jQuery.highlight(this,a,n.element,n.className)})};

	//GRAMMER WORDS
	var GRAM_WORDS = [
		'i',
		'me',
		'my',
		'myself',
		'we',
		'our',
		'ours',
		'ourselves',
		'you',
		'your',
		'yours',
		'yourself',
		'yourselves',
		'he',
		'him',
		'his',
		'himself',
		'she',
		'her',
		'hers',
		'herself',
		'it',
		'its',
		'itself',
		'they',
		'them',
		'their',
		'theirs',
		'themselves',
		'what',
		'which',
		'who',
		'whom',
		'this',
		'that',
		'these',
		'those',
		'am',
		'is',
		'are',
		'was',
		'were',
		'be',
		'been',
		'being',
		'have',
		'has',
		'had',
		'having',
		'do',
		'does',
		'did',
		'doing',
		'a',
		'an',
		'the',
		'and',
		'but',
		'if',
		'or',
		'because',
		'as',
		'until',
		'while',
		'of',
		'at',
		'by',
		'for',
		'with',
		'about',
		'against',
		'between',
		'into',
		'through',
		'during',
		'before',
		'after',
		'above',
		'below',
		'to',
		'from',
		'up',
		'down',
		'in',
		'out',
		'on',
		'off',
		'over',
		'under',
		'again',
		'further',
		'then',
		'once',
		'here',
		'there',
		'when',
		'where',
		'why',
		'how',
		'all',
		'any',
		'both',
		'each',
		'few',
		'more',
		'most',
		'other',
		'some',
		'such',
		'no',
		'nor',
		'not',
		'only',
		'own',
		'same',
		'so',
		'than',
		'too',
		'very',
		's',
		't',
		'can',
		'will',
		'just',
		'don',
		'should',
		'now',
	  ];
