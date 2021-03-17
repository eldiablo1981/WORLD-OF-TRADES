function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '14px';
  }
}



<div class="disqus">

<div id="disqus_thread"></div>

    
    var disqus_config = function () {
    this.page.url = 'https://fredyjackson-k4t.netlify.app/'  // Replace PAGE_URL with your page's canonical URL variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://fredyjackson-k4t.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>


function clickIE() {if (document.all) {(message);return false;}}
		function clickNS(e) {if 
		(document.layers||(document.getElementById&&!document.all)) {
		if (e.which==2||e.which==3) {(message);return false;}}}
		if (document.layers) 
		{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
		else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

		document.oncontextmenu=new Function("return false") 

	

<script id="dsq-count-scr" src="//fredyjackson-k4t.disqus.com/count.js" async></script>	