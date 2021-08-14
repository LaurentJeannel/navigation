

exports.action = function(data) {

var exec = require('child_process').exec ; var path = require('path');

var nircmd = JarvisIANircmd
var data1=data.valeur

try{

if(data.valeurchargephrases!==undefined){
	var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
	console.log(tempo1,'eeeeeeeeee')
		     		var smartlife1 = require(tempo1);
					smartlife1.init()

					delete require.cache[require.resolve(tempo1)]
					return
}

if(data.veille!==undefined){
	var process="scrnsave.scr /s"
	var child=exec(process)
	return false
}

if(data.need=="s_restart"){

	
	var process = '%CD%/plugins/navigation/Restart.vbs';
	//console.log("Process : " + process);	
	var child = exec(process)
	 return false
}

if(data.valeurchemin!==undefined){

	var process='explorer '+data.valeurchemin; var child = exec(process)
	 return false
}//fin if data.valeurchemin

if(data.valeururl!==undefined){
	
	var process='chrome '+data.valeururl; var child = exec(process);console.log('ddddddddddddd')
	 return false
}//fin if data.valeururl

if(data.valeurbat!==undefined){
	
	var process = data.valeurbat;
	var child = exec(process)
	 return false
}//fin if data.valeurbat


//sécurité
if(data.valeur.search("initshutdown")>-1){
console.log("confirmation !!!!!!!!!!!!!!!")



//return false
 return false
}//fin if sécurité


else{init(data1);return false}








function depart(data1){
	
var data1=" sendmouse left click &"+data1
var data2=data1.split('&') ; var exec = require('child_process').exec ; var path = require('path');

//var nircmd = path.resolve('%CD%', './plugins/navigation/nircmd/nircmd.exe').replace('\\%CD%', '');

var procclick1=nircmd + ' sendmouse left click '//focus fenetre
var child=exec(procclick1)

console.log(procclick1)
console.log(data2)
		for(var z=0;z<data2.length;z++){
				var dt = new Date();
				dt.setTime(dt.getTime() + 100);
				while (new Date().getTime() < dt.getTime())

				var proc=nircmd+' '+data2[z].trim()
				var child=exec(proc)
				console.log(proc)
				
		}//fin for z

 return false


}//fin fnct depart



function init(data1){

var procclick=nircmd + ' sendmouse move 0 -222220 '

 depart(data1)
	//setTimeout(function(){  ; }, 1000);//départ

return false  

}//fin fnct init

}//fin try
catch(err){console.log("erreur : "+err)}
}//fin