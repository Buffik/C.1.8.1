function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}

jQuery.prototype.html = function(html){
	if(html!= undefined){
	this.each(element => element.innerHTML = html)
  return this;
  }
  else {
  this.each(element => element.innerText) 
  return this;
  }
}

