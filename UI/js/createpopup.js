function tip(reqid) {
	reqid.addEventListener("mouseover", function() {
    alert('THIS MESSAGE APPEARS ONLY ONCE WHEN ADMIN LOGIN IS HOVERED:\nLink to admin panel would usually not be placed on customer site for security purpose. We place it here for ease of access.');
}, {once : true});
}