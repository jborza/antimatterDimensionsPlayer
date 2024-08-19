function loop()
{
	//big reset, click it
	bigReset = document.getElementsByClassName("btn-big-crunch");
	if(bigReset.length == 1){
		if(isClickable(bigReset[0])) bigReset[0].click();
	}

	//dimensional sacrifice, click if greater than a threshold
	sacrifice = document.getElementsByClassName("o-primary-btn o-primary-btn--sacrifice")[0];
	if(isClickable(sacrifice)){
		sacrificeAmountRegex = /\(×(.+?)\)/;
		sacrificeAmount = sacrificeAmountRegex.exec(sacrifice.textContent)[1];
		if(sacrificeAmount > 2) sacrifice.click();
	}
	
	rst = document.getElementsByClassName("o-primary-btn--dimension-reset")[0];
	dim = document.getElementsByClassName("o-primary-btn--dimension-reset")[1]; 
	
	function isClickable(element){
	  for(const className of element.classList){
	    if(className == "o-primary-btn--disabled")
				return false;
	  }
	  return true;
	}
	
	if(isClickable(dim)) dim.click(); 
	if(isClickable(rst)) rst.click(); 
	setTimeout(loop, 1000);
}

setTimeout(loop, 1000);