var Component=function(){function t(t){this._="-",this.suffixs=[],this.classList=[t],this.prefix=t}return t.prototype.setProp=function(t){this.suffixs.push(t)},t.prototype.getComponentClassName=function(){var s=this;return this.suffixs.map(function(t){return s.prefix+s._+t})},t.prototype.getClassName=function(t){var s=this.getComponentClassName();return(t?(t=t.split(" "),this.classList.concat(s,t)):this.classList.concat(s)).join(" ")},t}();export default Component;