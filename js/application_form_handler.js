function getAppilcationSubmitInfo()
{
	var input_text = document.getElementById('surname');
	var surname = input_text.value;
	
	input_text = document.getElementById('familyname');
	var familyname = input_text.value;
	
	var input_radios = document.getElementsByName('sex');
	var sex;
	for(var i=0;i<input_radios.length;i++){
        if(input_radios[i].checked){
            sex = input_radios[i].value;
            break;
        }
    }
	
	input_text = document.getElementById('age');
	var age = input_text.value;

	input_radios = document.getElementsByName('pregnant_method');
	var pregnant_method;
	for(var i=0;i<input_radios.length;i++){
        if(input_radios[i].checked){
            pregnant_method = input_radios[i].value;
            break;
        }
    }	

	input_text = document.getElementById('pregnant_week');
	var pregnant_week = input_text.value;

	input_text = document.getElementById('father_age');
	var father_age = input_text.value;
	
	input_text = document.getElementById('father_height');
	var father_height = input_text.value;
	
	input_text = document.getElementById('mother_age');
	var mother_age = input_text.value;
	
	input_text = document.getElementById('mother_height');
	var mother_height = input_text.value;

	input_radios = document.getElementsByName('legacy');
	var is_legacy;
	for(var i=0;i<input_radios.length;i++){
        if(input_radios[i].checked){
            is_legacy = input_radios[i].value;
            break;
        }
    }	

	input_text = document.getElementById('legacy_relation');
	var legacy_relation = input_text.value;    

	input_text = document.getElementById('status_abnormal');
	var status_abnormal = input_text.value; 

	input_text = document.getElementById('status_estimate');
	var status_estimate = input_text.value; 
	
	input_text = document.getElementById('status_doctor');
	var status_doctor = input_text.value; 
}