function tip(reqid) {
	reqid.addEventListener("mouseover", function() {
    alert('link to admin panel would usually not be placed on customer site for security purpose. We place it here for ease of access.');
}, {once : true});
}