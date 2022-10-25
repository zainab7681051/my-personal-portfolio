<template>
<svg id="visual" viewBox="0 0 960 540" width="960" 
height="540" xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" 
version="1.1">
	<g fill="#7289da" id="g1">
		<circle r="43" cx="185" cy="470"></circle>
		<circle r="22" cx="776" cy="87"></circle>
		<circle r="25" cx="122" cy="365"></circle>
		<circle r="21" cx="302" cy="430"></circle>
		<circle r="37" cx="138" cy="52"></circle>
		<circle r="36" cx="727" cy="236"></circle>
		<circle r="37" cx="504" cy="113"></circle>
		<circle r="36" cx="270" cy="332"></circle>
		<circle r="23" cx="405" cy="459"></circle>
		<circle r="31" cx="227" cy="73"></circle>
		<circle r="40" cx="488" cy="253"></circle>
	</g>

	<g fill="#7289da" id="g2" class="hidden">
		<circle r="43" cx="693" cy="415"></circle>
		<circle r="22" cx="190" cy="329"></circle>
		<circle r="26" cx="491" cy="45"></circle>
		<circle r="34" cx="901" cy="354"></circle>
		<circle r="30" cx="614" cy="188"></circle>
		<circle r="41" cx="495" cy="232"></circle>
		<circle r="34" cx="87" cy="163"></circle>
		<circle r="36" cx="793" cy="191"></circle>
		<circle r="32" cx="363" cy="321"></circle>
		<circle r="25" cx="242" cy="440"></circle>
		<circle r="33" cx="196" cy="216"></circle>
	</g>
</svg>	
</template>

<script setup>
	import KUTE from 'kute.js'

	const tween=KUTE.fromTo(
		'#g1',
		{
			g:'#g1'
		},
		{
			g:'#g2'
		},
		{
			repeate:999,
			duration:1000,
			yoyo:true
		})
	tween.start()

</script>