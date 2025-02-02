// You will be provided with a chunk of HTML markup. Your task is to identify the unique domain names from the links or Urls which are present in the markup fragment.

// For example, if the link http://www.hackerrank.com/contest is present in the markup, you should detect the domain: hackerrank.com. In case there are second level or higher level domains present in the markup, all of them need to be treated as unique. For instance if the links http://www.xyz.com/news, https://abc.xyz.com/jobs, http://abcd.xyz.com/jobs2 are present in the markup then [xyz.com, abc.xyz.com, abcd.xyz.com] should all be identified as unique domains present in the markup. Prefixes like "www." and "ww2.", if present, should be scrubbed out from the domain name.

// Input Format

// An Integer N. This is equal to the number of lines in the HTML Fragment which follows. A chunk of HTML Markup with embedded links, the length of which is N lines.

// Output Format

// One line, containing the list of detected domains, separated by semi-colons, in lexicographical order. Do not leave any leading or trailing spaces either at the ends of the line, or before and after the individual domain names.

// Sample Input

//  10
// <div class="reflist" style="list-style-type: decimal;">
// <ol class="references">
// <li id="cite_note-1"><span class="mw-cite-backlink"><b>^ ["Train (noun)"](http://www.askoxford.com/concise_oed/train?view=uk). <i>(definition – Compact OED)</i>. Oxford University Press<span class="reference-accessdate">. Retrieved 2008-03-18</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Train+%28noun%29&rft.genre=article&rft_id=http%3A%2F%2Fwww.askoxford.com%2Fconcise_oed%2Ftrain%3Fview%3Duk&rft.jtitle=%28definition+%E2%80%93+Compact+OED%29&rft.pub=Oxford+University+Press&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
// <li id="cite_note-2"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Atchison, Topeka and Santa Fe Railway (1948). <i>Rules: Operating Department</i>. p. 7.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.aulast=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.btitle=Rules%3A+Operating+Department&rft.date=1948&rft.genre=book&rft.pages=7&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
// <li id="cite_note-3"><span class="mw-cite-backlink"><b>^ [Hydrogen trains](http://www.hydrogencarsnow.com/blog2/index.php/hydrogen-vehicles/i-hear-the-hydrogen-train-a-comin-its-rolling-round-the-bend/)</span></li>
// <li id="cite_note-4"><span class="mw-cite-backlink"><b>^ [Vehicle Projects Inc. Fuel cell locomotive](http://www.bnsf.com/media/news/articles/2008/01/2008-01-09a.html)</span></li>
// <li id="cite_note-5"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Central Japan Railway (2006). <i>Central Japan Railway Data Book 2006</i>. p. 16.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Central+Japan+Railway&rft.aulast=Central+Japan+Railway&rft.btitle=Central+Japan+Railway+Data+Book+2006&rft.date=2006&rft.genre=book&rft.pages=16&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>
// <li id="cite_note-6"><span class="mw-cite-backlink"><b>^ ["Overview Of the existing Mumbai Suburban Railway"](http://web.archive.org/web/20080620033027/http://www.mrvc.indianrail.gov.in/overview.htm). _Official webpage of Mumbai Railway Vikas Corporation_. Archived from [the original](http://www.mrvc.indianrail.gov.in/overview.htm) on 2008-06-20<span class="reference-accessdate">. Retrieved 2008-12-11</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Overview+Of+the+existing+Mumbai+Suburban+Railway&rft.genre=article&rft_id=http%3A%2F%2Fwww.mrvc.indianrail.gov.in%2Foverview.htm&rft.jtitle=Official+webpage+of+Mumbai+Railway+Vikas+Corporation&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>
// </ol>
// </div>

function processData(input) {
  //Enter your code here

  const pattern = /\b(?:https?:?\/?\/?)(?:[w+|\d*]{3}\.)?([\w\d\.\-]+\.[a-z]+)\b/g;
  //   let matches = input.match(pattern);
  let domains = [];
  let match;

  while ((match = pattern.exec(input))) {
    domains.push(match[1]);
  }

  domains.sort();
  let result = [...new Set(domains)];
  console.log(result.join("\n"));
}

let input = `
1027
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="format-detection" content="telephone=no" />
<title>Rediff.com - India, Business, Stock, Sports, Cricket, Entertainment, Bollywood, Music, Video and Breaking news, Rediffmail NG, Shopping</title>
<meta name="keywords" content="India news, India breaking news, Hindi songs, new songs, listen to music, Live cricket score, sports, Stock market, share value, finance, free mail, web email free, social networking, make friends, free videos, video clip, india shopping, online shopping, news , Music, Cricket, Money, Rediffmail, MyPage, iShare, Shopping, Rediffmail NG" />
<meta name="description" content="Rediff.com - India's leading portal which covers India news, Hindi Movies, Photos, Videos, Live Cricket Score, Stock updates from BSE and NSE, Bollywood news, Online shopping, Social networking, Rediffmail NG" />
<!-- IE9-Windows7: Pinned Sites: Starts -->
<meta http-equiv="X-UA-Compatible" content="IE=9" />
<meta name="application-name"       content="Rediff.com" />
<meta name="msapplication-tooltip"  content="Rediff.com"/>
<meta name="msapplication-window"   content="width=1500;height=900" />
<meta name="msapplication-task"
content="name=Cricket;action-uri=http://www.rediff.com/cricket?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<meta name="msapplication-task"
content="name=Rediff MoneyWiz;action-uri=http://money.rediff.com?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<meta name="msapplication-task"
content="name=Rediff Deal ho jaye!;action-uri=http://dealhojaye.rediff.com?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<meta name="msapplication-task"
content="name=rediffmailNG;action-uri=https://mail.rediff.com/cgi-bin/login.cgi?pin=ie9;icon-uri=http://www.rediff.com/favicon.ico"/>
<!-- IE9-Windows7: Pinned Sites: Ends -->
<link rel="shortcut icon" type=image/x-icon href="http://www.rediff.com/favicon.ico">
<link rel="stylesheet" href="http://imworld.rediff.com/worldrediff/style_3_16/home_tile_ind_7.css" />
<script type="text/javascript">
var homepage = 1;
var glb_vid_num = 0 ;
var dealimg_number = 5;
var s_buzz_no = (Math.floor(Math.random()*3));
var pages_domain ="http://pages.rediff.com" ;
var imgpath = "http://imworld.rediff.com/worldrediff/pix";
var loggedin = "";
var totalvideos = "10";
var totalfeaturedpages = "15";
var glb_citymapped = 0; var glb_trackdeal = ""; var glb_trackshop = ""; var glb_trackshop1 = ""; var glb_trackbook = ""; var glb_altrpromo = 0; var glb_scrll_met = 0;
var glb_promo_random = (Math.floor(Math.random()*3));
var booksArr = new Array();var shopArr = new Array();var shopPromoArr = new Array();
document.domain = "rediff.com";
</script>
</head>
<body>
<div id="divPinSite"></div>
<div id="trans_div"></div>

<!-- homewrapper starts -->
<div id="homewrapper" class="homewrapper">
	<div class="popupcontainer"><div id="div_signup"></div><div id="div_confirm"></div></div>
	<div class="f12 grey1 divtopsrchlink"> <a href="http://realtime.rediff.com/news?src=rediff_home" title="India As It Happens" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/news?src=rediff_home___&cmp=rt_news&lnk=rt_news&nsrv1=inhome');return false;">Realtime News &nbsp; &nbsp;<a href="http://realtime.rediff.com/images?src=rediff_home" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/images?src=rediff_home___&cmp=rt_images&lnk=rt_images&nsrv1=inhome');return false;">Images</a>&nbsp; &nbsp; &nbsp;  <a href="http://books.rediff.com/?sc_cid=inhome_srch" onclick="trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?sc_cid=inhome_srch___&cmp=HP&lnk=books_srchbar&nsrv1=HP');return false;">Books</a>&nbsp; &nbsp; &nbsp;  <a href="http://search.rediff.com/allsearch/index.html" onclick="trackURL('http://track.rediff.com/click?url=___http://search.rediff.com/allsearch/index.html___&cmp=rt_more&lnk=rt_more&nsrv1=inhome');return false;">More</a></div><div class="userinfo floatR"><span id="username"></span><span id="hp" style="BEHAVIOR: url(#default#homepage)"></span><span id="sethome"></span> <span>
<script type="text/javascript">
var ck=document.cookie;function getcookie(n)
{var ar=n+"=";var al=ar.length;var cl=ck.length;var i=0;while(i<cl)
{j=i+al;if(ck.substring(i,j)==ar)
{e=ck.indexOf(";",j);if(e==-1)
e=ck.length;return unescape(ck.substring(j,e));}
i=ck.indexOf(" ",i)+1;if(i==0)
break;}
return "";}
</script>

<span id="signin_info"> <a href='https://mail.rediff.com/cgi-bin/login.cgi'>Sign in</a>  &nbsp;|&nbsp; <a href='http://register.rediff.com/register/register.php?FormName=user_details'>Create a Rediffmail account</a></span>
<iframe src="about:blank" name="metric_iframe" id="metric_iframe" width="1" height="1" frameborder="0" class="hide" ></iframe>
	<script type="text/javascript">

		var querystring	= "";
		var path	= "";
		var domain	= "";
		var Rkey_data	= "";
		var Rkey	= Math.floor(Math.random() * 1000000);
		querystring	= window.location.search;
		path		= window.location.pathname;
		domain		= window.location.host;
		var tmp_ref = encodeURIComponent(document.referrer);
		if((tmp_ref == null) || (tmp_ref.length == 0)){tmp_ref = "";}


			var resolution = screen.width+'x'+screen.height;
			if (querystring == "")
			{
				Rkey_data = "?rkey="+Rkey+"&w="+resolution;
			}
			else
			{
				Rkey_data = "&rkey="+Rkey+"&w="+resolution;
			}



		if(tmp_ref != "")
		{
			Rkey_data += "&ref="+tmp_ref;
		}


		document.getElementById('metric_iframe').src ='http://metric.ind.rediff.com/'+domain+path+querystring+Rkey_data;
	</script>

<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "6035613" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();

	function comscore_ajax(url)
	{
		_comscore.push({ c1: "2", c2: "6035613",c4:url });
		var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
		s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
		el.parentNode.insertBefore(s, el);
	}
</script>

<noscript><img src="http://b.scorecardresearch.com/p?c1=2&c2=6035613&cv=2.0&cj=1" /></noscript>

<script  type="text/javascript" >
var endyear 	= "2013";
var  cdn_domain = "http://www.rediff.com";
var  org_domain = "http://mypage.rediff.com";
var  imgpath	= "http://imworld.rediff.com/worldrediff/pix";
var  ishare_domain	= "http://ishare.rediff.com";
var OAS_sitepage = "" ;
var OAS_listpos = "" ;


var Rlo="";
var Rl = "";
Rlo	=	getcookie("Rlo");
Rlo =	unescape(Rlo).replace(/\+/g," ");
Rlo =	Rlo.replace("@rediffmail.com","");
Rlo = Rlo.replace(/[^\w\d\s\-\_]/ig,'');
Rl = getcookie("Rl");
Rl = Rl.replace(/[^\w\d\s\-\_@\.]/ig,'');
var tmp_rsc1 = "";
var tmp_rm1 = "";
tmp_rsc1 = getcookie("Rsc");
tmp_rm1 = getcookie("Rm");
if((Rlo != "" || Rl!="" ) && tmp_rsc1 != "" && tmp_rm1 != "")
{

	if(Rlo != "" )
	{
		document.getElementById('username').innerHTML	= "<a href='"+org_domain+"/profile/myprofile' class='proper' onclick=\"trackURL('http://track.rediff.com/click?url=___"+org_domain+"/profile/myprofile___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;\">"+Rlo+"</a>&nbsp; | &nbsp;" ;
	}
	else
	{
		Rl = Rl.substring(0,Rl.lastIndexOf('@'));
		document.getElementById('username').innerHTML	= "<a href='"+org_domain+"/profile/myprofile' onclick=\"trackURL('http://track.rediff.com/click?url=___"+org_domain+"/profile/myprofile___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;\">"+Rl+"</a>&nbsp; | &nbsp;" ;
	}

	if(document.getElementById('signin_info'))document.getElementById('signin_info').innerHTML = "" ;
}
else
{
	if(document.getElementById('signin_info')){document.getElementById('signin_info').innerHTML = " <a href='https://mail.rediff.com/cgi-bin/login.cgi' onclick=\"javascript:signin();document.getElementById('c_uname').focus();return false;\" title='Already a user? Sign in'>Sign in</a>  &nbsp;|&nbsp; <a href='http://register.rediff.com/register/register.php?FormName=user_details' >Create a Rediffmail account</a>";}
	if(Rlo != "" && Rl != "" )
	{
		if(document.getElementById('signin_info')){document.getElementById('signin_info').innerHTML += "&nbsp;|&nbsp;";}
	}
}
if(Rl != "")
{
	if(document.getElementById('signin_info')){document.getElementById('signin_info').innerHTML += "<a href='"+org_domain+"/signout' title='Sign out'>Sign out</a>";}
}

</script>
<style type="text/css">.popupcontainer{z-index:1000;}</style></span></div>
	<span class="clear"></span>
	<div class="floatL"><img id="redifflogo" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite homelogo" title="Rediff India" alt="Rediff.com" /></div>
	<div id="topsrchhome"><form name="srchform" id="queryTop" method="post" action="http://realtime.rediff.com/phpnews" onsubmit="return submitSearch()"><div class="srch_outer"><input type="text" autocomplete="off" id="srchword" name="srchword" class="homesrchbox" /><input type="hidden" name="src" id="snsSRC" value="web"></input><input type="submit" value="    " class="homesprite newsrchbtn" /></div></form><div id="sug" class="sug"></div><span class="sm1">&nbsp;Happening Now :</span> <a href="http://realtime.rediff.com/news/Vanzara?src=home_cue1" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FVanzara%3Fsrc%3Dhome_cue1___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">DG Vanzara</a>,  <a href="http://realtime.rediff.com/news/Raghuram-Rajan?src=home_cue2" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FRaghuram-Rajan%3Fsrc%3Dhome_cue2___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">Raghuram Rajan</a>,  <a href="http://realtime.rediff.com/news/Syria-Strike?src=home_cue3" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FSyria-Strike%3Fsrc%3Dhome_cue3___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">Syria Strike</a>,  <a href="http://realtime.rediff.com/news/Teachers-Day-?src=home_cue4" class="sm1" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Frealtime.rediff.com%2Fnews%2FTeachers-Day-%3Fsrc%3Dhome_cue4___&cmp=rt_bot&lnk=rt_bot&nsrv1=inhome');return false;">Teachers Day</a></div>
	<span class="clear"></span>
	<!-- new design starts -->
	<div id="new_design">
	<div class="icondiv"><a href="https://mail.rediff.com/cgi-bin/login.cgi" onclick="return validmailuser();return false;" title="Lightning fast free email" class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite mailicon" alt="Lightning fast free email" /><u>rediffmail</u></div></a><a href="http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome" title="Lightning fast business email hosting" onclick="trackURL('http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome___&cmp=host&lnk=inhome&nsrv1=host');return false;"  class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite mailproicon" alt="Lightning fast business email hosting" /><u>Company Email</u></div></a><a href="http://money.rediff.com/" title="Live commentary of the Indian stock markets, stock quotes and business news" onclick="trackURL('http://track.rediff.com/click?url=___http://money.rediff.com/___&cmp=money&lnk=money&nsrv1=inhome');return false;"><div  class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite moneyicon" alt="Live commentary of the Indian stock markets, stock quotes and business news" /><u>Money</u></div></a><div class="divicon"><a href="http://mypage.rediff.com"  title="Share your stuff to discover more of what you like" onclick="trackURL('http://track.rediff.com/click?url=___http://mypage.rediff.com___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;"  class="curhand"><div class="homesprite mypageicon floatL" ><img id="myphoto" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" width="30" height="22" title="Share your stuff to discover more of what you like" alt="social networking, make friends" class="myphoto"></div></a><a href="http://mypage.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://mypage.rediff.com___&cmp=mypage&lnk=mypage&nsrv1=inhome');return false;"  class="curhand"><div class="mypagelink">MyPage</div></a></div><a href="http://shopping.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/?sc_cid=inhome_icon___&cmp=HP&lnk=shopping_icon&nsrv1=HP');return false;" title="Online Shopping" class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite shopicon" alt="Online Shopping" /><u>Shopping</u></div></a><a href="http://books.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://books.rediff.com?sc_cid=bk_inhome_icon___&cmp=HP&lnk=books_icon&nsrv1=HP');return false;" title="Buy books online"  class="curhand"><div class="divicon"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite booksicon" alt="Buy books online" /><u>Books</u></div></a><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare_icon&nsrv1=inhome');return false;" title="Watch videos"  class="curhand"><div class="divicon"><div class="floatL"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite videosicon" alt="Watch videos" /></div><div class="videocopy"><u>Videos</u></div></div></a><span class="clear"></span></div>
	<div><p class="t_date">Last Updated: Sep 05, 2013 IST 19:00:23</p><span class="clear"></span></div>
	<!-- maincontainer starts -->
	<div class="maincontainer">
		<div class="n_tabsul">
			<div class="telluslink floatR"><a href="http://mypage.rediff.com/feedback">Tell us what you think about this new layout!</a></div>
			<div class="n_tabsel">HOME</div>
			<a href="http://www.rediff.com/news" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_nav&lnk=news1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">NEWS</div></a>
			<a href="http://www.rediff.com/business" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=bus1_nav&lnk=bus1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">BUSINESS</div></a>
			<a href="http://www.rediff.com/movies" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=mov1_nav&lnk=mov1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">MOVIES</div></a>
			<a href="http://www.rediff.com/sports" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_nav&lnk=sports1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">SPORTS</div></a>
			<a href="http://www.rediff.com/cricket" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cric1_nav&lnk=cric1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">CRICKET</div></a>
			<a href="http://www.rediff.com/getahead" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=get1_nav&lnk=get1_nav&nsrv1=inhome');return false;"><div class="n_tabnormal">GET AHEAD</div></a>
			<a href="http://www.rediff.com/appstore/rediffnews" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/appstore/rediffnews___&lnk=inhome&newservice=newsapp');return false;"><div class="napp_tab"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite smmobicon" /> NEWS ON MOBILE</div></a>
		</div>
		<span class="clear"></span>
		<span class="ht5"></span>
		<div id="leftcontainer" class="leftcontainer">
			<div id="column1" class="wd50 floatL">
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05live-taliban.jpg" class="img" href="http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm"><img class="thumbimg" alt="Live! Indian author Sushmita Banerjee shot dead by militants in Afghanistan" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm">Live! Indian author Sushmita Banerjee shot dead by militants in Afghanistan</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/05watch6.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm"><img class="thumbimg" alt="Samsung launches smartwatch, Galaxy Note 3" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm">Samsung launches smartwatch, Galaxy Note 3</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05india2.jpg" class="img" href="http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm"><img class="thumbimg" alt="Hoisting the Indian flag where no one else has" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm">Hoisting the Indian flag where no one else has</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/04armadillo1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm"><img class="thumbimg" alt="Armadillo-T: A car that folds in half for easy parking" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-auto-armadillo-t-a-car-that-folds-in-half-for-easy-parking/20130905.htm">Armadillo-T: A car that folds in half for easy parking</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/cricket/2013/aug/02jitendrasingh.jpg" class="img" href="http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm"><img class="thumbimg" alt="Ministry backs IOC diktat; demands IOA amend constitution" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/sports-ministry-jitendra-singh-backs-ioc-diktat-demands-ioa-amend-constitution/20130905.htm">Ministry backs IOC diktat; demands IOA amend constitution</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05modi1.jpg" class="img" href="http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm"><img class="thumbimg" alt="I don't dream of being PM; have to serve Guj till 2017: Modi" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/slide-show/slide-show-1-i-dont-dream-of-being-pm-have-to-serve-guj-till-2017-modi/20130905.htm">I don't dream of being PM; have to serve Guj till 2017: Modi</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05tokyo1.jpg" class="img" href="http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm"><img class="thumbimg" alt="Tokyo dangles dollars in bid to win 2020 Olympic Games" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/slide-show/slide-show-1-tokyo-dangles-dollars-in-bid-to-win-2020-olympic-games-madrid-istanbul/20130905.htm">Tokyo dangles dollars in bid to win 2020 Olympic Games</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/04wef1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm"><img class="thumbimg" alt="Most competitive countries in the world; India ranks 60" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-special-most-competitive-countries-in-the-world-india-ranks-60/20130905.htm">Most competitive countries in the world; India ranks 60</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/05juvelile.jpg" class="img" href="http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm"><img class="thumbimg" alt="Delhi rape: Defence lawyers blame Braveheart, her friend, and govt" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/slide-show/slide-show-1-delhi-rape-defence-lawyers-blame-braveheart-her-friend-and-govt/20130905.htm">Delhi rape: Defence lawyers blame Braveheart, her friend, and govt</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/aug/27geet.jpg" class="img" href="http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm"><img class="thumbimg" alt="YOUR favourite television actor/actress? TELL US!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/report/your-favourite-televsion-actoractress-tell-us-tv/20130827.htm">YOUR favourite television actor/actress? TELL US!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05f1.jpg" class="img" href="http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm"><img class="thumbimg" alt="Mexico on draft F1 calendar for 2013, no New Jersey" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/mexico-on-draft-f1-calendar-for-2013-no-new-jersey/20130905.htm">Mexico on draft F1 calendar for 2013, no New Jersey</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2010/aug/30teacher.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm"><img class="thumbimg" alt="Teacher's Day: 'I'd be lost without you'" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-specials-teachers-day-id-be-lost-without-you/20130904.htm">Teacher's Day: 'I'd be lost without you'</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/aug/30pow4.jpg" class="img" href="http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm"><img class="thumbimg" alt="The Great Escape: India's unsung war heroes" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/special/the-great-escape-indias-unsung-war-heroes/20130905.htm">The Great Escape: India's unsung war heroes</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
			</div>
			<div id="column2"  class="wd50 floatL">
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cricket1_head&lnk=cricket1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/cricket">Cricket</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm___&cmp=HP&lnk=cricket-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/cricket/2013/sep/05west.jpg" class="img" href="http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm"><img class="thumbimg" alt="West Indies to play 2 Tests and 3 ODIs in India" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm___&cmp=HP&lnk=cricket-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm">West Indies to play 2 Tests and 3 ODIs in India</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cricket1_more&lnk=cricket1_more&nsrv1=inhome');return false;" title="Go to Cricket homepage" href="http://www.rediff.com/cricket">More Cricket stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2013/sep/05taj-rangin.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm"><img class="thumbimg" alt="Taj photos: Breathtaking images of the world's greatest wonder!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm">Taj photos: Breathtaking images of the world's greatest wonder!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/05hollywood1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm"><img class="thumbimg" alt="Sofia Vergara, Kardashians are Forbes' HIGHEST PAID TV actresses" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-sofia-vergara-kardashians-are-forbes-highest-paid-tv-actresses/20130905.htm">Sofia Vergara, Kardashians are Forbes' HIGHEST PAID TV actresses</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/05amitabh-sonu-nigam-kbc1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm"><img class="thumbimg" alt="PIX: A Sneak Peek into the FIRST episode of KBC 2013!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-pix-a-sneak-peek-into-the-first-episode-of-kbc-2013-tv/20130905.htm">PIX: A Sneak Peek into the FIRST episode of KBC 2013!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2013/sep/05curvyceleb1.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm"><img class="thumbimg" alt="Sunny, Kim and more: Red carpet styles that show off curves!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-glamour-red-carpet-styles-that-show-off-curves/20130905.htm">Sunny, Kim and more: Red carpet styles that show off curves!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/04ceos1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm"><img class="thumbimg" alt="Slowdown? Salaries of Indian CEOs have DOUBLED!" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-special-slowdown-salaries-of-indian-ceos-have-doubleddoubled/20130905.htm">Slowdown? Salaries of Indian CEOs have DOUBLED!</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/04desi-actor-for-batman1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm"><img class="thumbimg" alt="10 Indian Actors Who Would Make A GREAT Batman" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-10-indian-actors-who-would-make-a-great-batman/20130905.htm">10 Indian Actors Who Would Make A GREAT Batman</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05rupee-golf.jpg" class="img" href="http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm"><img class="thumbimg" alt="Rupee slump costs India its biggest golf tournament" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/rupee-slump-costs-india-its-biggest-golf-tournament-avantha-group/20130905.htm">Rupee slump costs India its biggest golf tournament</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
				<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel=" http://im.rediff.com/200-300/movies/2013/sep/05teachers-day.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm"><img class="thumbimg" alt=" Teacher's Day Special: Looking at Salman, SRK, Kareena's schools " src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-teachers-day-special-looking-at-salman-srk-kareenas-schools/20130905.htm"> Teacher's Day Special: Looking at Salman, SRK, Kareena's schools </a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2010/jun/07leaping.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm"><img class="thumbimg" alt="7 habits of highly successful people" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-career-7-habits-of-highly-successful-people/20130904.htm">7 habits of highly successful people</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_head&lnk=news1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/news">News</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm___&cmp=HP&lnk=news-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/news/2013/sep/04isro1.jpg" class="img" href="http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm"><img class="thumbimg" alt="Space race: China races ahead, India limps" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm___&cmp=HP&lnk=news-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/news/slide-show/slide-show-1-space-race-china-races-ahead-india-limps/20130905.htm">Space race: China races ahead, India limps</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_more&lnk=news1_more&nsrv1=inhome');return false;" title="Go to News homepage" href="http://www.rediff.com/news">More News stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_head&lnk=sports1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/sports">Sports</a></div>
								<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm___&cmp=HP&lnk=sports-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/sports/2013/sep/05ioa.jpg" class="img" href="http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm"><img class="thumbimg" alt="India's Olympic ban to continue after IOC rejects IOA's clause" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
								<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm___&cmp=HP&lnk=sports-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/sports/report/international-olympic-committee-rejects-indian-olympic-association-compromise-formula-chargesheeted-officials/20130905.htm">India's Olympic ban to continue after IOC rejects IOA's clause</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_more&lnk=sports1_more&nsrv1=inhome');return false;" title="Go to Sports homepage" href="http://www.rediff.com/sports">More Sports stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>			</div>
		</div>
		<div id="column3" class="midcontainer">
								<div id="videobox_0" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;" title="More on Videos">Videos</a> &nbsp;<a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;"><img class="homesprite playbtn vmiddle" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				<div class="newimgthumb"><a href="http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006"  onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;" rel="http://datastore01.rediff.com/h116-w174/thumb/56565C686468605965636E645E7064/bvnwrchvm90cmy8l.D.0.dhoom3c.jpg" class="img" title="First Look: Teaser video of DHOOM 3"><img alt="First Look: Teaser video of DHOOM 3" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" /></a></div>				<a href="http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/first-look-teaser-video-of-dhoom-3/8927006___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;">First Look: Teaser video of DHOOM 3</a>
				<div class="newmorediv bold"><a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare&lnk=ishare&nsrv1=inhome');return false;" title="More on Videos">More Videos <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div class="colbox">
				<div class="innerbox"><div class="sechead"><a href="http://money.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://money.rediff.com/___&cmp=money-box&lnk=money-box-head&nsrv1=inhome');return false;">MoneyWiz Live</a></div><iframe id="moneyiframe" name="moneyiframe" width="195" height="225" src="about:blank" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe><div class="newmorediv bold"><a href="http://money.rediff.com" title="More on stock market" onclick="trackURL('http://track.rediff.com/click?url=___http://money.rediff.com/___&cmp=money-box-more&lnk=money-box-more&nsrv1=inhome');return false;">More from Money <img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite morearrow1" /></a></div></div>
			</div>
									<div id="videobox_1" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;" title="More on Videos">Videos</a> &nbsp;<a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;"><img class="homesprite playbtn vmiddle" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				<div class="newimgthumb"><a href="http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876"  onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;" rel="http://datastore05.rediff.com/h116-w174/thumb/64675D595A6A64616C626D5D2F3131/wby7p2w6d7uvzdtt.D.0.Alia-Bhatt-upset-with-leaked-pics-1.jpg" class="img" title="Alia Bhatt upset about her LEAKED pics"><img alt="Alia Bhatt upset about her LEAKED pics" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" /></a></div>				<a href="http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/alia-bhatt-upset-about-her-leaked-pics/8923876___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;">Alia Bhatt upset about her LEAKED pics</a>
				<div class="newmorediv bold"><a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare1&lnk=ishare1&nsrv1=inhome');return false;" title="More on Videos">More Videos <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
						<div id="pagebox_0" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" title="More on Pages" href="http://pages.rediff.com">Pages</a></div>
								<div class="newimgthumb"><a href="http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video" onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" rel="http://simg03.rcdn.in/image.php?pageid=197983&amp;type=pages" class="img" title="Comedy Videos"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Comedy Videos" />/a></div>
								<a class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" href="http://pages.rediff.com/video/197983/6452199/girl-in-xerox-machine-video">Comedy Videos Girl Trapped in Xerox Machine </a>
				<div class="div_second"><a href="http://pages.rediff.com/shuddh-desi-romance/1944354" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com/shuddh-desi-romance/1944354___&cmp=pages&lnk=pages&nsrv1=inhome');return false;">Shuddh Desi Romance : Movie Latest News and Photos</a></div>
				<div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://pages.rediff.com___&cmp=pages&lnk=pages&nsrv1=inhome');return false;" title="More on Pages" href="http://pages.rediff.com">More Pages <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
						<div class="colbox">
				<div class="innerbox">
				<div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Wish-Your-Teacher%2F8912186___&cmp=zarabol&lnk=zarabol&nsrv1=inhome');return false;" href="http://zarabol.rediff.com/Wish-Your-Teacher/8912186">#Wish Your Teacher</a></div>
				<div class="newimgthumb"><a  href="http://zarabol.rediff.com/Wish-Your-Teacher/8912186" rel="http://datastore.rediff.com/h116-w174/thumb/605E6C5C6F626C606A627572/7hicsdnfx5e98pf3.D.0.Wish-Your-Teacher.jpg" class="img" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Wish-Your-Teacher%2F8912186___&cmp=zarabol&lnk=zarabol&nsrv1=inhome');return false;"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Wish Your Teacher"  /></a></div>
				<div class="newmorediv bold"><a href="http://zarabol.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://zarabol.rediff.com___&cmp=zarabol&lnk=zarabol&nsrv1=inhome');return false;" title="More on ZaraBol">More ZaraBol stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div id="videobox_2" class="colbox">
				<div class="innerbox">
				<div class="sechead"><a href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;" title="More on Videos">Videos</a> &nbsp;<a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;"><img class="homesprite playbtn vmiddle" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				<div class="newimgthumb"><a href="http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335"  onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;" rel="http://datastore04.rediff.com/h116-w174/thumb/56565C686468605965636E645E7064/htpmihf3k7b9jepb.D.0.anuhot.jpg" class="img" title="The many avatars of Anushka Sharma"><img alt="The many avatars of Anushka Sharma" src="http://imworld.rediff.com/worldrediff/pix/blank.gif" /></a></div>				<a href="http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com/video/entertainment/the-many-avatars-of-anushka-sharma/8925335___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;">The many avatars of Anushka Sharma</a>
				<div class="newmorediv bold"><a  href="http://ishare.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://ishare.rediff.com___&cmp=ishare2&lnk=ishare2&nsrv1=inhome');return false;" title="More on Videos">More Videos <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div class="colbox">
				<div class="innerbox">
				<div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Will-Nokia-Survive-In-India%2F8914333___&cmp=zarabol1&lnk=zarabol1&nsrv1=inhome');return false;" href="http://zarabol.rediff.com/Will-Nokia-Survive-In-India/8914333">#Will Nokia Survive In India?</a></div>
				<div class="newimgthumb"><a  href="http://zarabol.rediff.com/Will-Nokia-Survive-In-India/8914333" rel="http://datastore.rediff.com/h116-w174/thumb/605E6C5C6F626C606A627572/m7cdr2udevrpysx1.D.0.Will-Nokia-Survive-In-India.jpg" class="img" onclick="trackURL('http://track.rediff.com/click?url=___http%3A%2F%2Fzarabol.rediff.com%2F%23%21Will-Nokia-Survive-In-India%2F8914333___&cmp=zarabol1&lnk=zarabol1&nsrv1=inhome');return false;"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Will Nokia Survive In India?"  /></a></div>
				<div class="newmorediv bold"><a href="http://zarabol.rediff.com" onclick="trackURL('http://track.rediff.com/click?url=___http://zarabol.rediff.com___&cmp=zarabol1&lnk=zarabol1&nsrv1=inhome');return false;" title="More on ZaraBol">More ZaraBol stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
				</div>
			</div>
									<div id="realtimebox"  class="colbox">
			<div class="innerbox">
				<div class="sechead"><a href="http://realtime.rediff.com/topnews/india" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/topnews/india___&cmp=rt-box-head&lnk=rt-box-head&nsrv1=inhome');return false;">Realtime News</a></div>
				<div class="newimgthumb"><a href="http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6" rel="http://n01.rcdn.in/thumbnail2/dab35af223515110.jpg" class="img" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6___&cmp=rt-box-stimg&lnk=rt-box-stimg&nsrv1=inhome');return false;"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="3.16 Mln New Mobile Subscribers Added, 2.91 Mln From Rural India Alone! [June Stats]" /></a></div>				<a href="http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6" class="black" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/news/india/316-Mln-New-Mobile-Subscribers-Added-291-Mln-From-Rural-India-Alone-June-Stats/c6aa4d0d5e5c1bd6___&cmp=rt-box-sttxt&lnk=rt-box-sttxt&nsrv1=inhome');return false;">3.16 Mln New Mobile Subscribers Added, 2.91 Mln From Rural India Alone! [June Stats]</a>
				<div class="newmorediv bold"><a href="http://realtime.rediff.com/topnews/india" title="More Realtime News" onclick="trackURL('http://track.rediff.com/click?url=___http://realtime.rediff.com/topnews/india___&cmp=rt-box-more&lnk=rt-box-more&nsrv1=inhome');return false;">More Realtime News <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
			</div>
			</div>
						<div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_head&lnk=getahead1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/getahead">Get Ahead</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm___&cmp=HP&lnk=getahead-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/getahead/2013/sep/05recipe-halloumi-skewers-with-cherry-tomatoes-and-onions.jpg" class="img" href="http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm"><img class="thumbimg" alt="Recipe: Halloumi skewers with cherry tomatoes and onions" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm___&cmp=HP&lnk=getahead-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/getahead/slide-show/slide-show-1-food-recipe-halloumi-skewers-with-cherry-tomatoes-and-onions/20130905.htm">Recipe: Halloumi skewers with cherry tomatoes and onions</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=getahead1_more&lnk=getahead1_more&nsrv1=inhome');return false;" title="Go to Get Ahead homepage" href="http://www.rediff.com/getahead">More Get Ahead stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/05raghuramrajan1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm"><img class="thumbimg" alt="Raghuram Rajan is a hit on first day, can he sustain it?" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-raghuram-rajan-is-a-hit-on-first-day-can-he-sustain-it/20130905.htm">Raghuram Rajan is a hit on first day, can he sustain it?</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_head&lnk=movies1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/movies">Movies</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm___&cmp=HP&lnk=movies-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/movies/2013/sep/03male-superstars-in-100-crore-club1.jpg" class="img" href="http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm"><img class="thumbimg" alt="Salman, Shah Rukh, Ranbir: Bollywood's Rs 100 crore club men" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm___&cmp=HP&lnk=movies-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/movies/slide-show/slide-show-1-salman-shah-rukh-ranbir-bollywoods-rs-100-crore-club-men/20130904.htm">Salman, Shah Rukh, Ranbir: Bollywood's Rs 100 crore club men</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=movies1_more&lnk=movies1_more&nsrv1=inhome');return false;" title="Go to Movies homepage" href="http://www.rediff.com/movies">More Movies stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div><div class="colbox"><div class="innerbox"><div class="sechead"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_head&lnk=business1_head&nsrv1=inhome');return false;" class="capitalize" href="http://www.rediff.com/business">Business</a></div>
						<div class="newimgthumb"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm___&cmp=HP&lnk=business-art-img&nsrv1=inhome');return false;" rel="http://im.rediff.com/200-300/money/2013/sep/05debt1.jpg" class="img" href="http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm"><img class="thumbimg" alt="IMAGES: India among world's biggest stakeholders in US economy" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div>
						<a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm___&cmp=HP&lnk=business-art-txt&nsrv1=inhome');return false;" class="black" href="http://www.rediff.com/business/slide-show/slide-show-1-special-images-india-among-worlds-biggest-stakeholders-in-us-economy/20130905.htm">IMAGES: India among world's biggest stakeholders in US economy</a><div class="newmorediv bold"><a onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=business1_more&lnk=business1_more&nsrv1=inhome');return false;" title="Go to Business homepage" href="http://www.rediff.com/business">More Business stories <img class="homesprite morearrow1" src="http://imworld.rediff.com/worldrediff/pix/blank.gif"></a></div></div></div>
		</div>
		<div id="rightcontainer" class="rightcontainer">
			<div class="adcontainer"><div id="div_advt_right"></div></div>
			<span class="clear"></span><span class="ht5"></span>
			<div id="column4"  class="wd50 floatL">
				<div id="shbox_0" class="colboxR"></div>
				<div id="bkbox_0" class="colboxR"></div>
								<div id="hostbox_0" class="colboxR">
					<div class="innerbox"><div class="sechead"><a href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host">Rediffmail Pro</a></div><div class="newimgthumb"><a rel="http://hosting.rediff.com/rediffmailpro/pix/ad-componets/20130901122356rhome-Offer.gif" class="img" title="Rediffmail Pro" href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host"><img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" alt="Rediffmail Pro" /></a></div><a href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host" class="black" ><p></p><span class="ht10"></span><p class="alignR"><a class="sm1 bold morelikecolor" href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=inhome-promo___&cmp=host&lnk=inhome-promo&nsrv1=host">Check it out now &gt;</a></p></div>
				</div>
								<div id="shbox_2" class="colboxR"></div>
				<div id="spromobox_0" class="colboxR"></div>
				<div id="shbox_5" class="colboxR"></div>
				<div id="bkbox_2" class="colboxR"></div>
				<div id="shbox_6" class="colboxR"></div>
				<div id="shbox_8" class="colboxR"></div>
				<div id="shbox_10" class="colboxR"></div>
				<div id="shbox_12" class="colboxR"></div>
				<div id="shbox_14" class="colboxR"></div>
				<div id="spromobox_1" class="colboxR"></div>
			</div>
			<div id="column5" class="wd50 floatL">
				<div id="shbox_1" class="colboxR"></div>
				<div id="bkbox_1" class="colboxR"></div>
				<div id="shbox_3" class="colboxR"></div>
				<div id="shbox_4" class="colboxR"></div>
				<div id="bkbox_3" class="colboxR"></div>
				<div id="shbox_7" class="colboxR"></div>
				<div id="bkbox_4" class="colboxR"></div>
				<div id="spromobox_2" class="colboxR"></div>
				<div id="shbox_9" class="colboxR"></div>
				<div id="shbox_11" class="colboxR"></div>
				<div id="shbox_13" class="colboxR"></div>
				<div id="shbox_15" class="colboxR"></div>
			</div>
		</div>
		<span class="clear"></span><span class="ht10"></span>
		<div class="n_tabsul">
			<div class="n_tabsel">HOME</div>
			<a href="http://www.rediff.com/news" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/news___&cmp=news1_nav_bot&lnk=news1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">NEWS</div></a>
			<a href="http://www.rediff.com/business" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/business___&cmp=bus1_nav_bot&lnk=bus1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">BUSINESS</div></a>
			<a href="http://www.rediff.com/movies" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/movies___&cmp=mov1_nav_bot&lnk=mov1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">MOVIES</div></a>
			<a href="http://www.rediff.com/sports" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/sports___&cmp=sports1_nav_bot&lnk=sports1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">SPORTS</div></a>
			<a href="http://www.rediff.com/cricket" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/cricket___&cmp=cric1_nav_bot&lnk=cric1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">CRICKET</div></a>
			<a href="http://www.rediff.com/getahead" onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/getahead___&cmp=get1_nav_bot&lnk=get1_nav_bot&nsrv1=inhome');return false;"><div class="n_tabnormal">GET AHEAD</div></a>
			<a href="http://www.rediff.com/moreservices.html" title="More services"  onclick="trackURL('http://track.rediff.com/click?url=___http://www.rediff.com/moreservices.html___&cmp=moreservices&lnk=moreservices&nsrv1=inhome');return false;"><div class="n_tabnormal">MORE SERVICES</div></a>
		</div>
		<span class="clear"></span><span class="ht10"></span>
	</div><!-- maincontainer ends -->
	</div>
	<!-- new design ends -->
	<div id="div_alldata">
		<div id="ul_shop"><a id="sh_a_0" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=1&prodid=11813124">Tupperware Family Lunch Set with 1 Free Bottle</a><br /><a id="sh_a_1" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=2&prodid=11888060">Peter England Cotton Formal Shirt (Black)</a><br /><a id="sh_a_2" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=3&prodid=11866459">Mini LED Cinema Projector with Remote & Tripod Stand</a><br /><a id="sh_a_3" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=4&prodid=11895410">Multipurpose E Table with Free USB Optical Mouse</a><br /><a id="sh_a_4" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=5&prodid=11925133">Lenovo K900</a><br /><a id="sh_a_5" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=6&prodid=11897986">Lotto Traunt White Blue Shoes</a><br /><a id="sh_a_6" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=7&prodid=11844116">Kriaa Anmol Set of Anarkali & Short Kurti</a><br /><a id="sh_a_7" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=8&prodid=11746186">Lomani Deodorants (Set of 2)</a><br /><a id="sh_a_8" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=9&prodid=11927334">Seagate Expansion 1TB USB3.0 2.0 External HDD</a><br /><a id="sh_a_9" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=10&prodid=11923215">Brown Canvas Foldable Wardrobe</a><br /><a id="sh_a_10" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=11&prodid=11275529">Acme Fitness Rotating Push Up Bar</a><br /><a id="sh_a_11" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=12&prodid=11749316">Venus Electronics Digital Bathroom Weighing Scale</a><br /><a id="sh_a_12" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=13&prodid=11847661">Sukkhi Rodium Plated Necklace Set</a><br /><a id="sh_a_13" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=14&prodid=11612232">Simba Ecoiffier  Abrick Air Plane</a><br /><a id="sh_a_14" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=15&prodid=11917714">Envie Charger with 4 Rechargeable AA Batteries 2100 MAH</a><br /><a id="sh_a_15" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=16&prodid=11772338">French Republic Plain White Shirt</a><br /><a id="sh_a_16" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=17&prodid=11912319">Ambrane Power Bank P-10 Plus</a><br /><a id="sh_a_17" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=18&prodid=11487129">Intex Velvet Premium 5 In 1 Sofa Lounge Air Bed</a><br /><a id="sh_a_18" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=19&prodid=11835031">Full Face Helmet (ISI Marked)</a><br /><a id="sh_a_19" href="http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum=20&prodid=11682525">Numero Uno Men's Watch</a><br /></div>
		<div id="ul_books"><a id="bk_a_0" href="http://books.rediff.com/book?bksrno=1">The Secret Daily Teachings</a><br /><a id="bk_a_1" href="http://books.rediff.com/book?bksrno=2">Killing Us Softly</a><br /><a id="bk_a_2" href="http://books.rediff.com/book?bksrno=3">CAT Online Test Series</a><br /><a id="bk_a_3" href="http://books.rediff.com/book?bksrno=4">The Superstar Syndrome</a><br /><a id="bk_a_4" href="http://books.rediff.com/book?bksrno=5">What Works : Success in Stressful Times</a><br /><a id="bk_a_5" href="http://books.rediff.com/book?bksrno=6">Study Guide for NTSE</a><br /><a id="bk_a_6" href="http://books.rediff.com/book?bksrno=7">Idea Man</a><br /><a id="bk_a_7" href="http://books.rediff.com/book?bksrno=8">Study Guide IBPS CWE-RRB Officers</a><br /><a id="bk_a_8" href="http://books.rediff.com/book?bksrno=9">Harvey Walden's No Excuses!: Fitness Workout</a><br /><a id="bk_a_9" href="http://books.rediff.com/book?bksrno=10">Nigellissima: Instant Italian Inspiration</a><br /></div>
		<div id="ul_shpromo"><a id="sprmo_a_0" href="http://shopping.rediff.com/stores/7235?sc_cid=inhome_watch">Watch it</a><br /><a id="sprmo_a_1" href="http://shopping.rediff.com/stores/7058?sc_cid=inhome_Menslifestyle">Mens Branded Apparel</a><br /><a id="sprmo_a_2" href="http://shopping.rediff.com/categories/anarkali-suits/cat-10168/format-0?sc_cid=inhome_Anarkalisuits">Anarkali Dresses</a><br /><a id="sprmo_a_3" href="http://shopping.rediff.com/categories/electronics/cat-453?sc_cid=inhome_electronics">Electronics Sale</a><br /><a id="sprmo_a_4" href="http://shopping.rediff.com/stores/7020?sc_cid=inhome_mobile">Mobile Mania</a><br /><a id="sprmo_a_5" href="http://shopping.rediff.com/stores/7085?sc_cid=inhome_computers">Computers and IT</a><br /></div>
	</div>

	<div id="mobtip" class="bubbletip"><div class="homesprite topl"></div><div class="topmid"></div><div class="homesprite topr"></div><div class="clear"></div><div class="bubblecontent"><center>Using your mobile's internet browser<br />go to:&nbsp; <span class="f14"><b>m.rediff.com</b></span></center></div><div class="clear"></div><div class="homesprite botl"></div><div class="botmid"></div><div class="homesprite botr"></div><div class="homesprite botarr1"></div></div>
	<div id="div_mailsignin_ad" class="div_mailsignin_ad">
	<div id="div_mailsignin_inner" class="mailAdinner">
	<div id="div_rediffmail" ><span class="ht5"></span><form onsubmit="return chkLogin();" method="post" action="https://mail.rediff.com/cgi-bin/login.cgi" name="loginform" class="frmlogin"><div class="floatR"><a href="javascript:hideDiv1('trans_div');hideDiv1('div_mailsignin_ad');hideDiv1('frame_ad_hm_maillogin');" class="close" title="Close"><b>X</b></a></div><h2 class="homesprite nglogo1">&nbsp;</h2><span class="clear"></span><span class="ht10"></span><div><b>Username</b><br /><input id="login1" type="text" value="" class="uname" name="login" maxlength="30" style="width:200px;" tabindex="1" /></div><span class="clear ht10"></span>
	<div><b>Password</b>&nbsp; &nbsp; <a class="sm1" href="http://register.rediff.com/utilities/newforgot/index.php?FormName=showlogin" target="_blank">Forgot Password?</a><span class="ht2"></span><input type="password" value="" name="passwd"  style="width:200px;" tabindex="2" /></div><span class="ht5"></span><div><input type="checkbox" value="1" id="remember" name="remember" checked="checked" class="vmiddle" /><span class="f10">Be signed in (Uncheck if on shared computer)</span><span class="ht10"></span><input type="submit" title="Sign in" value="  Go  " class="vmiddle" tabindex="3" />&nbsp; &nbsp;<img src="http://imworld.rediff.com/worldrediff/pix/blank.gif" class="homesprite lock vmiddle" alt="Secured login" /><span class="sm1">&nbsp; Secured login</span><input type="checkbox" name="seclogin" class="hide" checked  /><span class="ht10"></span><span class="sm1 grey2">For Rediffmail NG Mobile, SMS "MAIL" to 57333</span></div><input type="hidden" name="FormName" value="existing"/></form><span class="ht15"></span><div class="div_loginpromo"><div class="div_loginpromoL">Do not have a Rediffmail ID?<span class="clear ht2"></span><a href="http://register.rediff.com/register/register.php?FormName=user_details"><u>Create a new account</u></a></div><div class="floatL bold"><div class="tborder"></div>&nbsp;OR<div class="bborder"></div></div><div class="div_loginpromoR">Want your own professional ID?<span class="clear ht2"></span><a href="http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=lgn" onclick="trackURL('http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=lgn___&cmp=lgn&lnk=lgn&nsrv1=host');return false;" ><u>Get a Rediffmail Pro account</u></a></div><span class=clear></span></div></div>
	<iframe id="frame_ad_hm_maillogin" src="about:blank" width="320" height="310" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="maillogin_ad hide"></iframe>
	</div>
	</div>
	<img id="tabtrack" src="" class="hide" width="1" height="1" border="0" />
	<div id="div_mypagelogin" class="div_mypagelogin"><div id="div_mypagelogin_inner" class="mypageAdinner"><div id="div_signin"></div><iframe id="frame_ad_hm_mypagelogin" src="about:blank" width="320" height="305" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="maillogin_ad  hide"></iframe></div></div>
	<div id="shoptippop" class="divshoptippop"><div class="homesprite poptop"></div><div id="assurancecopy" class="popmid"></div><div class="homesprite popbottom"></div></div>
	<div class='footerhome' >&#169; 2013 <a href="http://ia.rediff.com/" title="Rediff.com US" >Rediff.com US</a> - <a id="mobicon" href="javascript:;;" onmouseover="findPosXY('mobicon','mobtip',-150,-65);" onmouseout="hideDiv1('mobtip');" >On Mobile</a> - <a href="http://investor.rediff.com/">Investors</a> - <a href="http://clients.rediff.com/rediff_advertisewithus/contact.htm">Advertise</a> - <a href="http://www.rediff.com/disclaim.htm">Disclaimer</a> - <a href="http://www.rediff.com/w3c/policy.html">Privacy</a> - <a href="http://careers.rediff.com/jobs/">Careers</a> - <a href="http://www.rediff.com/sitemap.xml"  title="Sitemap.xml">Sitemap</a> - <a href="http://mypage.rediff.com/feedback">Feedback</a> - <a href="http://www.rediff.com/terms.html">Terms of use</a></div>

<script language="JavaScript" type="text/javascript">
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 9(a){2 b=e.f.u(\';\');2 d=a+"=";w(2 i=0;i<b.4;i++){2 c=b[i];y(c.z(0)==\' \')c=c.g(1,c.4);h(c.A(d)==0)j c.g(d.4,c.4)}j 7}3 5(n,v,x,p,d){2 a=(v==7||v==\'\')?(((k l).m())*8)+o.B(o.C()*8):D(v);e.f=n+"="+a+((x)?"; E="+x:"")+"; F=/; G=.H.I;"}3 q(a){2 b=k l();b.J(b.m()+(-1*K*r*r*8));5(a,"",b)}3 s(){2 a=9(\'6\');2 b="L, M-N-O P:t:t Q";h((a!=7)&&(a!=\'\')){q(\'6\');5(\'6\',a,b)}R{5(\'6\',a,b)}}s();',54,54,'||var|function|length|crtCk|RuW|null|1000|rdCk|||||document|cookie|substring|if||return|new|Date|getTime||Math||delCk|60|chkUVCk|59|split||for||while|charAt|indexOf|round|random|escape|expires|path|domain|rediff|com|setTime|24|Wed|31|Dec|2031|23|GMT|else'.split('|'),0,{}))


OAS_loc=getcookie('RLOC');
if (!(OAS_loc))
{
	   document.write("<table cellspacing='0' cellpadding='0' border='0'><tr><td><img src='http://loc.rediff.com/cgi-bin/loc/setup/blank.gif' border='0' hspace='0' vspace='0' alt='' /></td></tr></table>");
}

</script>


<script language="JavaScript" type="text/javascript">
function strpos( haystack, needle, offset){
var i = (haystack+'').indexOf( needle, offset );
return i===-1 ? false : i;
}

function trim(s){
s = s.replace(/^\s*/,'').replace(/\s*$/, '');
return s;
}


function signin()
{

	if (typeof(r_controller) == "undefined")
	{
		r_controller	= "";
	}
	if (typeof(r_action) == "undefined")
	{
		r_action		= "";
	}
	document.getElementById('div_signin').innerHTML='<form method="post" id="loginform1" name="loginform1" action="'+org_domain+'/login/dologin" onsubmit="return validateloginform();"><div><div class="floatR"><span title="Close" class="close" onclick="hideDiv1(\'div_mypagelogin\');hideDiv1(\'trans_div\');hideDiv1(\'frame_ad_hm_mypagelogin\');"><b>X</b></span>&nbsp;</div><b>Already a User? Sign in!</b></div><span class="clear ht10"></span><div class="fontsm">Sign-in to see what your friends are upto and make friends with people with similar interests.</div><span class="clear ht15"></span><div class="col1">Your email ID</div><div class="col2"><input type="text" name="id" id="c_uname"  class="txtbox" tabindex="1" /></div><span class="clear ht10"></span><div class="col1">Password<br /><a href="javascript:forgotpass()">(Forgot?)</a></div><div class="col2"><span class="ht5"></span><input type="password" name="num" id="c_pass"  class="txtbox" tabindex="2" /></div><span class="clear ht2"></span><div class="besign"><input type="checkbox" name="remember" id="remember" value="1" checked="checked" class=vmiddle /><span class="f10">Be signed in (Uncheck if on shared computer)</span></div><span class="clear ht10"></span><div class="col1">&nbsp;</div><div class="col2"><input type="hidden" name="r_controller" id="id_r_controller" value="'+r_controller+'" /><input type="hidden" name="r_action" id="id_r_action" value="'+r_action+'" /><input type="hidden" name="login" /><input type="hidden" name="passwd" /><input value="existing" name="FormName" type="hidden" /><input type="submit" value="Go"  id="btn_login" class="gobtn vmiddle" tabindex="3" /> <img id="waitimg1" src='+imgpath+'/blank.gif class="waitimg" /></div><span class="clear ht15"></span><div class="div_loginpromo"><div class="div_loginpromoL">New user?<span class="clear ht2"></span><a href="http://register.rediff.com/register/register.php?FormName=user_details"><u>Create a new Rediffmail account</u></a></div><div class="floatL bold"><div class="tborder"></div>&nbsp;OR<div class="bborder"></div></div><div class="div_loginpromoR">Want your own professional ID?<span class="clear ht2"></span><a href="http://track.rediff.com/click?url=___http://hosting.rediff.com/rediffmailpro/business-email?sc_cid=lgn___&cmp=lgn&lnk=lgn&nsrv1=host"><u>Get a Rediffmail Pro account</u></a></div><span class=clear></span></div></form>'
	showDiv1('trans_div');
	showDiv1('div_mypagelogin');
	document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/xt/?rkey="+Math.floor(Math.random() * 1000000);
	if(document.getElementById("frame_ad_hm_mypagelogin")){document.getElementById("frame_ad_hm_mypagelogin").src = "http://imworld.rediff.com/worldrediff/pix/ind_home_mailLoginAd.html";}
}

var uname="";
function validateloginform()
{
	uname	= document.getElementById("c_uname").value;
	var pass	= document.getElementById("c_pass").value;
	var remem	= document.getElementById("remember");
	remember = "";
	if (remem.checked)
	{
		remember = "On";
	}

	if ( uname == "" )
	{
		document.getElementById("c_uname").focus();
		alert("Please enter your email ID");
		return false;
	}
	if ( pass == "" )
	{
		document.getElementById("c_pass").focus();
		alert("Please enter a password");
		return false;
	}

	if(typeof(homepage) != "undefined")
	{
		if((strpos(uname,"@") == false || strpos(uname,"@rediffmail.com") != false) )
		{

			document.getElementById("loginform1").login.value = uname;
			document.getElementById("loginform1").passwd.value = pass;
			document.getElementById("loginform1").action = "https://mail.rediff.com/cgi-bin/login.cgi";
			return true;
		}
	}
	var url		=  org_domain+"/login/dologin";
	var postdata	= "id="+uname+"&num="+pass+"&format=xml";
	if (remember == "On")
	{
		postdata += "&remember=On";
	}
	return true;
}

function forgotpass()
{
	window.open("http://login.rediff.com/cgi-bin/subs/passwd_remind.cgi?FormName=showlogin",'forgetPswdWinRediff','toolbar=no,directories=no,resize=yes,menubar=no,location=no,scrollbars=yes,width=490,height=480,maximize=null,top=70,left=80');
}

function submitSearch()
{
  var srchword = trim(document.getElementById('srchword').value) ;
  if(srchword=="")
  {
	document.getElementById('srchword').focus();
	alert("Please enter search keyword");
	return false;
  }
  srchword = srchword.replace(/\s/g,'-').replace(/\//g,' ');
  var srchlink = "http://realtime.rediff.com/news/"+escape(srchword)+"?src=rediff_home_search";
  //document.location.href = srchlink;
  document.location.href = "http://track.rediff.com/click?url=___"+srchlink+"___&cmp=rt_srch&lnk=rt_srch&nsrv1=inhome";
  return false;
}

function PasswdRemindWin()
{window.open("http://register.rediff.com/utilities/newforgot/index.php?FormName=showlogin","win1","toolbar=no,directories=no,resize=yes,menubar=no,location=no,scrollbars=yes,width=670,height=480,maximize=null,top=70,left=80");}
_d = document;

function chkLogin()
{if(_d.loginform.login.value.replace(/ /g,"")==""&&_d.loginform.passwd.value=="")
{alert("Please enter valid Username and Password");_d.loginform.login.value=""
_d.loginform.login.focus();return false;}
if(_d.loginform.login.value.replace(/ /g,"")=="")
{alert("Please enter valid Username");_d.loginform.login.value=""
_d.loginform.login.focus();return false;}
if(_d.loginform.passwd.value=="")
{alert("Please enter valid Password");_d.loginform.passwd.value=""
_d.loginform.passwd.focus();return false;}
var seclogin=_d.loginform.seclogin;if(seclogin.checked==true)
{_d.loginform.action="https://mail.rediff.com/cgi-bin/login.cgi";}
else
{_d.loginform.action="http://mail.rediff.com/cgi-bin/login.cgi";}
return true;}

</script>
</div><!-- homewrapper ends -->

<script type="text/javascript" src="http://imworld.rediff.com/worldrediff/js_2_5/ws-global_hm_1.js"></script>
<script type="text/javascript">
Suggestionr.initr('sugbox','sug','srchword',true);
window.open("http://im.rediff.com/uim/ads/ind-home-pop.htm","popunder","top=60,left=80,toolbars=no,maximize=no,resize=no,width=640,height=480,location=no,directories=no,scrollbars=no");
parent.window.focus();
window.focus();


sn = 0
shopArr[sn]=new Array("33","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/4654/9/90june2013dm._tupperware-family-lunch-set-1-best-1-executive-1-bottle-free.jpg","","2450","1640","1","11813124","tiffin-carriers","8839","Tiffin Carriers","267");
sn = 1
shopArr[sn]=new Array("0","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/4928/s/shirt_001_new_1z._peter-england-black-english-cotton-formal-shirt-rsp3142.JPG","","699","699","2","11888060","formal-shirts-for-men","8076","Formal Shirts For Men","589");
sn = 2
shopArr[sn]=new Array("25","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/15634/l/led-cinema-projector-with-remote._mini-led-cinema-projector-with-remote-and-tripod-stand-makes-60inch-screen.jpg","","7999","5999","3","11866459","projectors","9528","Projectors","10");
sn = 3
shopArr[sn]=new Array("61","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16120/e/etable._multipurpose-e-table-get-free-usb-optical-mouse.jpg","","1800","699","4","11895410","other-laptop-accessories","7657","Other Laptop Accessories","514");
sn = 4
shopArr[sn]=new Array("1","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16075/l/lenovo-k900new._lenovo-k900.jpg","","24999","24799","5","11925133","other-mobile-phones","8373","Other Mobile Phones","363");
sn = 5
shopArr[sn]=new Array("71","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/15564/a/ar2132-2._lotto-traunt-white-blue-shoes.jpg","","3499","999","6","11897986","sports-shoes","243","Sports Shoes","206");
sn = 6
shopArr[sn]=new Array("50","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/8838/k/Kr_11844116_new._kriaa-anmol-set-of-anarkali-and-short-kurti-kckt272-.jpg","","1100","549","7","11844116","kurtis","8096","Kurtis","770");
sn = 7
shopArr[sn]=new Array("57","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/11150/l/lomanideodorant._set-of-2-lomani-deodorants.jpg","","699","299","8","11746186","deodorants-for-men","8589","Deodorants For Men","381");
sn = 8
shopArr[sn]=new Array("46","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16246/s/Seagate1._seagate-expansion1tb-usb3-0-2-0-external-harddrive.jpg","","9000","4850","9","11927334","1-tb---1.5-tb","7715","1 TB - 1.5 TB","31");
sn = 9
shopArr[sn]=new Array("45","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/14714/w/wordrobf._brown-canvas-foldable-wardrobe.jpg","","3999","2199","10","11923215","living-room","715","Living Room","155");
sn = 10
shopArr[sn]=new Array("20","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/13239/r/rotatingpushupbar._acme-fitness-rotating-push-up-bar.jpg","","800","640","11","11275529","ab-shaper,-cruncher","8612","Ab Shaper, Cruncher","53");
sn = 11
shopArr[sn]=new Array("53","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/13651/1/1989_2._venus-electronics-digital-bathroom-weighing-scale-with-printed-glass-square.jpg","","899","425","12","11749316","weighing-machines","7955","Weighing Machines","190");
sn = 12
shopArr[sn]=new Array("51","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16495/s/Su_11847661._sukkhi-rodium-plated-necklace-set.jpg","","1098","535","13","11847661","necklace","8743","Necklace","1274");
sn = 13
shopArr[sn]=new Array("10","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/14627/s/Si_11612232._simba-ecoiffier-abrick-air-plane.jpg","","1999","1799","14","11612232","other-toys","1377","Other Toys","453");
sn = 14
shopArr[sn]=new Array("33","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16306/b/bat_ry_new._envie-4-in-1-aa-aaa-quick-charger-with-4-aa-rechargeable-batteries.jpg","","995","669","15","11917714","camera-batteries-amp-chargers","8034","Camera Batteries & Chargers","464");
sn = 15
shopArr[sn]=new Array("42","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16369/7/7_21IF2Y001-FS2-1-40_Fr._french-republic-plain-white-shirt-21if2y001-fs2-1-40.jpg","","599","349","16","11772338","formal-shirts-for-men","8076","Formal Shirts For Men","589");
sn = 16
shopArr[sn]=new Array("50","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16619/p/p10plus-9._ambrane-power-bank-p-10-plus-white-.jpg","","1990","990","17","11912319","power-banks","10228","Power Banks","18");
sn = 17
shopArr[sn]=new Array("63","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/936/i/intexchair._intex-velvet-premium-5in1-sofa-bed-lounge-air-bed.jpg","","7995","2995","18","11487129","bedroom","713","Bedroom","131");
sn = 18
shopArr[sn]=new Array("52","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16101/e/eshan-oyes-black-full-face-helmet-blue-graphics._stylish-and-durable-black-full-face-helmet-with-blue-graphics-isi-marked-.jpg","","765","369","19","11835031","bike-accessories-and-apparels","9928","Bike Accessories And Apparels","526");
sn = 19
shopArr[sn]=new Array("87","http://imshopping.rediff.com/imgshop/200-200/shopping/pixs/16367/w/Watch000001._numero-uno-men-watches-ai-w-007.JPG","","2999","399","20","11682525","leather-watch-for-men","9640","Leather Watch For Men","100");

bn = 0
booksArr[bn]=new Array("9781471130618","","599","480","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/18/9781471130618.jpg","20","the-secret-daily-teachings","Live your life in accordance with the natural laws of the Universe","1");
bn = 1
booksArr[bn]=new Array("9780007532964","","350","280","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/64/9780007532964.jpg","20","killing-us-softly","How Alternative Medicine can actually be harmful to our health","2");
bn = 2
booksArr[bn]=new Array("9781259027239","","999","700","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/39/9781259027239.jpg","30","cat-online-test-series","Based on the latest pattern of the CAT Online examination","3");
bn = 3
booksArr[bn]=new Array("9788184004045","","399","320","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/45/9788184004045.jpg","20","the-superstar-syndrome","The ultimate success bible based on the lives of over 80 well-known people","4");
bn = 4
booksArr[bn]=new Array("9780007203789","","350","263","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/89/9780007203789.jpg","25","what-works-:-success-in-stressful-times","Examples ranging from Ikea to the slums of Mumbai","5");
bn = 5
booksArr[bn]=new Array("9789382961772","","570","456","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/72/9789382961772.jpg","20","study-guide-for-ntse","New chapters on Syllogisms, Cryptography, Data Sufficiency, Satement and Conclusion","6");
bn = 6
booksArr[bn]=new Array("9780241953716","","450","338","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/16/9780241953716.jpg","25","idea-man","A Memoir by the Co-founder of Microsoft, Paul Allen","7");
bn = 7
booksArr[bn]=new Array("9788183556491","","320","256","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/91/9788183556491.jpg","20","study-guide-ibps-cwe-rrb-officers","","8");
bn = 8
booksArr[bn]=new Array("9781594867460","","495","372","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/60/9781594867460.jpg","25","harvey-walden's-no-excuses!:-fitness-workout","Effective boot camp style methods to achieve the shapelier, fitter, healthier body","9");
bn = 9
booksArr[bn]=new Array("9780701187330","","1299","910","http://imshopping.rediff.com/imgchkbooks/140-200/books/pixs/30/9780701187330.jpg","30","nigellissima:-instant-italian-inspiration","Bring the spirit of Italy into the kitchen and onto the plate","10");

shp = 0
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Be on time. Everytime.</strong><br><span style=\"color:#58019f\">Trendy Watches for Men and Women</span></div>","http://imshopping.rediff.com/shopping/homepix/rediff_hp_watch.gif");
shp = 1
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Men's Branded Apparel and Accessories</strong><br><span style=\"color:#58019f\">Jeans, Cargoes, T-shirts, Sunglasses and more!</span></div>","http://imshopping.rediff.com/shopping/homepix/rediff_home_mensLS_130513.gif");
shp = 2
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Finest collection of Anarkali Dresses</strong><br><span style=\"color:#58019f\">Shop Now!</span></div>","http://imshopping.rediff.com/shopping/homepix/rediff_home_anarkali_120813.jpg");
shp = 3
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Electronics Sale</strong><br><span style=\"color:#58019f\">LED TVs, Home Theaters and more</span></div>","http://imshopping.rediff.com/shopping/homepix/ele_banner_01_03_120813.gif");
shp = 4
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Mobile Mania</strong><br><span style=\"color:#58019f\">All the latest Smartphones. With amazing discounts!</span></div>","http://imshopping.rediff.com/shopping/homepix/mobile_store_banner_01_03_120813.gif");
shp = 5
shopPromoArr[shp]=new Array("","","<div style=\"font-family:Arial, Helvetica, sans-serif; font-size:13px; width:145px\"><strong style=\"color:#f70707\">Computers and IT</strong><br><span style=\"color:#58019f\">Huge range of Tablets, Laptops, Pen Drives and Peripherals</span></div>","http://imshopping.rediff.com/shopping/homepix/it_computers_banner_280813.gif");

if(document.getElementById('div_alldata')){document.getElementById('div_alldata').style.display = "none";}
function trackURL(url)
{
	if(navigator.userAgent.toLowerCase().indexOf('msie') != -1)
	{
		var referLink = document.createElement('a');
		referLink.href = url;document.body.appendChild(referLink);
		referLink.click();
	}
	else
	{
		document.location.href = url;
	}
}
function findPosXY(tblid,tblid1,x,y){var curleft = 0;var curtop = 0;var obj = document.getElementById(tblid);if(obj.offsetParent){while(obj.offsetParent){curleft += obj.offsetLeft;obj = obj.offsetParent;}}else if(obj.x){curleft += obj.x;}document.getElementById(tblid1).style.left= parseInt(curleft + x) + 'px' ;var obj1 = document.getElementById(tblid);if(obj1.offsetParent){while(obj1.offsetParent){curtop += obj1.offsetTop;obj1 = obj1.offsetParent;}}else if(obj1.y){curtop += obj1.y;}document.getElementById(tblid1).style.top=parseInt(curtop + y) + 'px' ;document.getElementById(tblid1).style.display = "block";}
function showDiv1(dvnm){if(document.getElementById(dvnm)){document.getElementById(dvnm).style.display = "block";}}
function hideDiv1(dvnm){if(document.getElementById(dvnm)){document.getElementById(dvnm).style.display = "none";}}
function validmailuser()
{
	var Rl	="";
	var isvalidmailuser = true;
	Rl	= getcookie("Rl");
	var tmp_rsc = "";
	var tmp_rm = "";
	tmp_rsc = getcookie("Rsc");
	tmp_rm = getcookie("Rm");
	if(Rl.indexOf("@rediffmail") < 0 )
	{
		showDiv1('trans_div');
		showDiv1('div_mailsignin_ad');
		document.getElementById('login1').focus();
		document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/nxr?rkey="+Math.floor(Math.random() * 1000000);
		if(document.getElementById("frame_ad_hm_maillogin")){document.getElementById("frame_ad_hm_maillogin").src = "http://imworld.rediff.com/worldrediff/pix/ind_home_mailLoginAd.html";}
		return false;
	}
	if (Rl == "" || tmp_rsc == "" || tmp_rm == "")
	{
		isvalidmailuser = false;
	}
	else
	{
		window.location.href = "http://track.rediff.com/click?url=___https://mail.rediff.com/cgi-bin/login.cgi___&cmp=rediffmail&lnk=rediffmail&nsrv1=inhome";
		return false;
	}
	if (!isvalidmailuser)
	{
		showDiv1('trans_div');
		showDiv1('div_mailsignin_ad');
		document.getElementById('login1').focus();
		document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/nxr?rkey="+Math.floor(Math.random() * 1000000);
		if(document.getElementById("frame_ad_hm_maillogin")){document.getElementById("frame_ad_hm_maillogin").src = "http://imworld.rediff.com/worldrediff/pix/ind_home_mailLoginAd.html";}
		return false;
	}
}
if (navigator.userAgent.indexOf("MSIE")!=-1)
{
	var theText= '';
	var var_hp = document.getElementById("hp");
	var thePage='http://www.rediff.com/';
	theText += 'Set as homepage<span class="grey1">&nbsp; | &nbsp;</span>';
	if (!var_hp.isHomePage(thePage)) {document.getElementById("sethome").innerHTML="<a  href='#' onclick=\"style.behavior='url(#default#homepage)';setHomePage(thePage);window.location.href=window.location.href;return false;\">"+theText+"</a>";}
}
else if(navigator.userAgent.indexOf("Firefox")!=-1)
{
	document.getElementById("sethome").innerHTML += "<a onclick=\"alert('To set http://www.rediff.com as your home page, click and drag this link to the Home icon in your browser.'); return false;\" href='http://www.rediff.com'>Set as homepage</a> <span class='grey1'>&nbsp;|&nbsp;</span>" ;
}
if((getcookie("Rl") != "") && (getcookie("uid")!= "") )
{
if(document.getElementById('myphoto')){document.getElementById('myphoto').src = "http://simg.rcdn.in/image.php?uid="+getcookie("uid")+"&type=thumb";}
}
else
{
if(document.getElementById('myphoto')){document.getElementById('myphoto').src = imgpath+"/blank.gif";}
}


</script>


<script type="text/javascript">
var glb_boxmoved = 0;
var Imgs=[];
function ImgLoad(cls){
 var as=zxcByClassName(cls);
 for (var z0=0;z0<as.length;z0++){
  if (as[z0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0]){
   oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel'));
   Imgs.push(oop);
  }
 }
 CkTop();
}
function Fade(img,src){
 this.img=img;
 this.src=src;
 this.opc=90;
 zxcOpacity(this.img,0);
}
Fade.prototype.fade=function(){
 if (this.opc==90) this.img.src=this.src;
 zxcOpacity(this.img,this.opc++);
 var oop=this;
 if (this.opc<101) setTimeout(function(){ oop.fade(); },2);
}
function CkTop(){
 for (var z0=0;z0<Imgs.length;z0++){
  if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==90){
   Imgs[z0].fade();
   Imgs.splice(z0,1);
   z0--;
  }
 }
}
function zxcOpacity(obj,opc){
 if (opc<0||opc>100) return;
 obj.style.filter='alpha(opacity='+opc+')';
 obj.style.opacity=obj.style.MozOpacity=obj.style.KhtmlOpacity=opc/100-.001;
}
function zxcWWHS(){
 if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset];
 else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop];
 return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop];
}
function zxcPos(obj){
 var rtn=[0,0];
 while(obj){
  rtn[0]+=obj.offsetLeft;
  rtn[1]+=obj.offsetTop;
  obj=obj.offsetParent;
 }
 return rtn;
}
function zxcByClassName(nme,el,tag){
 if (typeof(el)=='string') el=document.getElementById(el);
 el=el||document;
 for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),ary=[],z0=0; z0<els.length;z0++){
  if(reg.test(els[z0].className)) ary.push(els[z0]);
 }
 return ary;
}

</script>



<script type="text/javascript">
var trackArr = new Array("","http://metric.ind.rediff.com/www.rediff.com/nx0?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx2?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx4?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx1?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx3?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx6?rkey=","http://metric.ind.rediff.com/www.rediff.com/nx5?rkey=");
var OAS_sitepage = "inrediffHP.com/mainhome.htm";
var OAS_listpos = "Right";
function createShopArray()
{
	var parent_ul = document.getElementById('ul_shop');
	var ah = parent_ul.getElementsByTagName('a');
	var totalah = ah.length;
	for(var i=0; i<totalah ; i++)
	{
		var imurl = "";
		var hddata = document.getElementById('sh_a_'+i).innerHTML;
		var aurl = document.getElementById('sh_a_'+i).href;
		shopArr[i][2] = hddata;
	}
}
function createBookArray()
{
	var parent_ul = document.getElementById('ul_books');
	var ah = parent_ul.getElementsByTagName('a');
	var totalah = ah.length;
	for(var i=0; i<totalah ; i++)
	{
		var hddata = document.getElementById('bk_a_'+i).innerHTML;
		var aurl = document.getElementById('bk_a_'+i).href;
		booksArr[i][1] = hddata;
	}
}

function createPromoArray()
{
	var parent_ul = document.getElementById('ul_shpromo');
	var ah = parent_ul.getElementsByTagName('a');
	var totalah = ah.length;
	for(var i=0; i<totalah ; i++)
	{
		var hddata = document.getElementById('sprmo_a_'+i).innerHTML;
		var aurl = document.getElementById('sprmo_a_'+i).href;
		shopPromoArr[i][0] = hddata;
		shopPromoArr[i][1] = aurl;
	}
}
createShopArray();
createBookArray();
createPromoArray();

var glb_productids = "&shop=";
function createShopData()
{
	var shnum = 0;
	var totalhd = shopArr.length;
	shnum = (Math.floor(Math.random()*totalhd));
	for(var k=shnum,s=0; s<totalhd; k++,s++ )
	{
		if(k >= totalhd){k=0;}

		var data = "";
		data += "<div class=innerbox>";
		data += "<div class=sechead><a href=\"http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_cat_"+shopArr[k][8]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_cat_"+shopArr[k][8]+"___&cmp=HP&lnk=shopping_cat_"+shopArr[k][8]+"&nsrv1=HP');return false;\">"+shopArr[k][9].replace(/\'/g,'\'')+"</a>";
		if(shopArr[k][10] != ""){data += "<span class=grey2>&nbsp; - ("+shopArr[k][10]+")</span>";}
		data += "</div>";
		if(shopArr[k][1] != "")
		{
		data += "<div class=newimgthumb><a href=\"http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"\" title=\""+shopArr[k][2]+"\" class=img rel=\""+shopArr[k][1]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/shopping/index.html?sc_cid=inhome_"+shopArr[k][6]+"&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"___&cmp=HP&lnk=shopping_"+shopArr[k][6]+"&nsrv1=HP');return false;\"><img src='"+imgpath+"/blank.gif' alt=\""+shopArr[k][2]+"\" class=thumbimgR /></a></div>";
		}
		data += "<a href=\"http://shopping.rediff.com/shopping/index.html?sc_cid=inhome&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"\" class=black onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/shopping/index.html?sc_cid=inhome_"+shopArr[k][6]+"&prodnum="+shopArr[k][5]+"&prodid="+shopArr[k][6]+"___&cmp=HP&lnk=shopping_"+shopArr[k][6]+"&nsrv1=HP');return false;\">";
		if(shopArr[k][0] > 0){
		data += "<span class=discotext>"+shopArr[k][0]+" % OFF - </span>";
		}
		data += shopArr[k][2]+"</a>";
		data += "<p class=shprice>";
		if(shopArr[k][0] > 0)
		{
		data += "<span class=listprice>Rs. "+shopArr[k][3]+"</span> &nbsp;";
		}
		data += "Rs. "+shopArr[k][4]+"</p>";

		data += "<p class=alignR><a href=\"http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_like_"+shopArr[k][8]+"\" class='sm1 bold morelikecolor' onclick=\"trackURL('http://track.rediff.com/click?url=___http://shopping.rediff.com/categories/"+shopArr[k][7].replace(/\'/g,'')+"/cat-"+shopArr[k][8]+"?sc_cid=inhome_like_"+shopArr[k][8]+"___&cmp=HP&lnk=shopping_like_"+shopArr[k][8]+"&nsrv1=HP');return false;\">More like this &gt;</a></p></div>";

		if(document.getElementById('shbox_'+s))
		{
			document.getElementById('shbox_'+s).innerHTML = data;
			glb_productids += shopArr[k][6]+","; //for metric
		}
	}
}

var glb_bookids = "&book=";
function createBookData()
{
	var b_num = 0;
	var totalhd = booksArr.length;
	b_num = (Math.floor(Math.random()*totalhd));

	for(var k=b_num,b=0; b<totalhd; k++,b++ )
	{
		if(k >= totalhd){k=0;}
		var data = "";
		data += "<div class=innerbox><div class=sechead><a href=\"http://books.rediff.com\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?sc_cid=bk_inhome_head___&cmp=HP&lnk=books_head&nsrv1=HP');return false;\">Books</a></div>";
		if(booksArr[k][4] != "")
		{
		data += "<div class=newimgthumb><a href=\"http://books.rediff.com?bksrno="+booksArr[k][8]+"\" title=\""+booksArr[k][1]+"\" class=img rel=\""+booksArr[k][4]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?bksrno="+booksArr[k][8]+"&sc_cid=bk_inhome_"+booksArr[k][0]+"___&cmp=HP&lnk=books_"+booksArr[k][0]+"&nsrv1=HP');return false;\"><img src='"+imgpath+"/blank.gif' alt=\""+booksArr[k][1]+"\" /></a></div>";
		}
		data += "<a href=\"http://books.rediff.com?bksrno="+booksArr[k][8]+"\" class=black  onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/?bksrno="+booksArr[k][8]+"&sc_cid=bk_inhome_"+booksArr[k][0]+"___&cmp=HP&lnk=books_"+booksArr[k][0]+"&nsrv1=HP');return false;\">";
		if(booksArr[k][5] > 0)
		{
		data += "<span class=discotext>"+booksArr[k][5]+" % OFF - </span>";
		}
		data += booksArr[k][1] + "</a>";
		if(booksArr[k][7] != "")
		{
		data += "<p class=grey2>"+booksArr[k][7]+"</p>";
		}

		data += "<p class=shprice>";
		if(booksArr[k][5] > 0)
		{
		data += "<span class=listprice>Rs. "+booksArr[k][2]+"</span> &nbsp;";
		}
		data += "Rs. "+booksArr[k][3]+"</p><p class=alignR><a href=\"http://books.rediff.com/similarbooks/"+booksArr[k][0]+"\" class='sm1 bold morelikecolor' onclick=\"trackURL('http://track.rediff.com/click?url=___http://books.rediff.com/similarbooks/"+booksArr[k][0]+"?sc_cid=bk_inhome_morelike___&cmp=HP&lnk=books_morelike&nsrv1=HP');return false;\">More like this &gt;</a></p></div>";
		if(document.getElementById('bkbox_'+b))
		{
		document.getElementById('bkbox_'+b).innerHTML = data;
		//glb_bookids += "&book"+b+"="+booksArr[k][0]; //for metric
		glb_bookids += booksArr[k][0]+","; //for metric
		}


	}
}

function createPromoData()
{
	var promo_num = 0;
	var totalhd = shopPromoArr.length;
	if(totalhd==0){return false;}
	promo_num = (Math.floor(Math.random()*totalhd));

	for(var k=promo_num,b=0; b<totalhd; k++,b++ )
	{
		if(k >= totalhd){k=0;}
		var data = "";
		data += "<div class=innerbox>";
		if(shopPromoArr[k][3] != "")
		{
		data += "<div class=newimgthumb><a href=\""+shopPromoArr[k][1]+"\" class=img rel=\""+shopPromoArr[k][3]+"\" onclick=\"trackURL('http://track.rediff.com/click?url=___"+shopPromoArr[k][1]+"___&cmp=HP&lnk=shopping_promo&nsrv1=HP');return false;\"><img src='"+imgpath+"/blank.gif' alt=\""+shopPromoArr[k][0]+"\" /></a></div><div><a href=\""+shopPromoArr[k][1]+"\" class=black onclick=\"trackURL('http://track.rediff.com/click?url=___"+shopPromoArr[k][1]+"___&cmp=HP&lnk=shopping_promo&nsrv1=HP');return false;\">"+shopPromoArr[k][2]+"</a></div>";
		}
		data += "<span class=ht5></span><p class=alignR><a href=\""+shopPromoArr[k][1]+"\" class='sm1 bold morelikecolor' onclick=\"trackURL('http://track.rediff.com/click?url=___"+shopPromoArr[k][1]+"___&cmp=HP&lnk=shopping_promo1&nsrv1=HP');return false;\">More like this &gt;</a></p></div>";
		if(document.getElementById('spromobox_'+b)){document.getElementById('spromobox_'+b).innerHTML = data;}
	}
}

function getNewDesign()
{
	createShopData();createBookData();createPromoData();
}

function columnAdjust()
{
	var clientHeight = parseInt(document.body.clientHeight);
	var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	if((zxcWWHS()[3] + height) >= (clientHeight - 200)){moveBox();}
}
function moveBox()
{
	var small = "";
	var big = "";
	var diff = 0;
	var ht1 = parseInt(document.getElementById('column1').offsetHeight) ;
	var ht2 = parseInt(document.getElementById('column2').offsetHeight) ;
	var ht3 = parseInt(document.getElementById('column3').offsetHeight) ;
	if(ht1 < ht2 && ht1 < ht3){small = "column1";}else if(ht2 < ht1 && ht2 < ht3){small = "column2";}else if(ht3 < ht2 && ht3 < ht1){small = "column3";}
	if(ht1 > ht2 && ht1 > ht3){big = "column1";}else if(ht2 > ht1 && ht2 > ht3){big = "column2";}else if(ht3 > ht2 && ht3 > ht1){big = "column3";}

	if(small != "" && big != "")
	{
		var bigparent = document.getElementById(big);
		var lastchild = bigparent.lastElementChild;
		if(lastchild == "undefined" || lastchild == null){glb_boxmoved = 1; return false;}
		diff = parseInt(document.getElementById(big).offsetHeight) - parseInt(document.getElementById(small).offsetHeight);
		if(diff >= 150 && glb_boxmoved == 0 && (lastchild.offsetHeight < diff) )
		{
			document.getElementById(small).appendChild(lastchild);
			glb_boxmoved = 1;
		}
	}
}

if(navigator.userAgent.search(/iPad/i)>=0){document.getElementById("homewrapper").style.width = "990px";}
getNewDesign();
if(document.getElementById("moneyiframe")){document.getElementById("moneyiframe").src = "http://money.rediff.com/widget/markets5";}
window.onscroll= function(){CkTop();if(glb_boxmoved == 0){columnAdjust();}if(glb_scrll_met == 0){glb_scrll_met = 1;if(document.getElementById('metric_iframe')){document.getElementById('metric_iframe').src = "http://metric.ind.rediff.com/www.rediff.com/newhomescroll?rkey="+Math.floor(Math.random() * 1000000);}}}

if(document.getElementById('tabtrack')){document.getElementById('tabtrack').src = "http://metric.ind.rediff.com/www.rediff.com/impression?rkey="+Math.floor(Math.random() * 1000000)+glb_productids+glb_bookids;}
ImgLoad('img');

if(screen.width < 850 ){
if(document.getElementById('div_mailsignin_inner')){document.getElementById('div_mailsignin_inner').style.marginLeft = "-375px";}
if(document.getElementById('div_mypagelogin_inner')){document.getElementById('div_mypagelogin_inner').style.marginLeft= "-375px";}
}

function setIframeHeight(iframe){if(iframe){var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;if(iframeWin.document.body){iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;}}}

if(document.getElementById('moneyiframe')){
document.getElementById('moneyiframe').onload = function(){setIframeHeight(document.getElementById('moneyiframe'));}
}
</script>

<script type="text/javascript" src="http://im.rediff.com/uim/common/realmedia_banner_1_5.js"></script>

<div id="div_advt_right_hidden" class="hide"><script type="text/javascript">if(document.getElementById("div_advt_right")){OAS_AD('Right');}</script></div>


<script language="JavaScript">
<!--
if(document.getElementById("div_advt_right"))
{
	var hdn = document.getElementById("div_advt_right_hidden");
	var vsbl = document.getElementById("div_advt_right");
	copyInnerHtml(hdn, vsbl);
}
//-->
</script>


<!-- IE9-Windows7: Pinned Sites: Starts -->
<script>
var headlinesArray = new Array;
	j = 0
	headlinesArray[j] = new Array("Live! Indian author Sushmita...","http://news.rediff.com/commentary/2013/sep/05/liveupdates.htm?pin=ie9");
	j = 1
	headlinesArray[j] = new Array("West Indies to play 2 Tests and...","http://www.rediff.com/cricket/report/west-indies-tour-play-2-tests-and-3-odis-in-india-sachin-tendulkar-200-tests/20130905.htm?pin=ie9");
	j = 2
	headlinesArray[j] = new Array("Samsung launches smartwatch,...","http://www.rediff.com/business/slide-show/slide-show-1-tech-samsung-launches-smartwatch-galaxy-note-3/20130905.htm?pin=ie9");
	j = 3
	headlinesArray[j] = new Array("Taj photos: Breathtaking images...","http://www.rediff.com/getahead/slide-show/slide-show-1-travel-taj-photos-breathtaking-images-of-the-worlds-greatest-wonder/20130905.htm?pin=ie9");
	j = 4
	headlinesArray[j] = new Array("Hoisting the Indian flag where...","http://www.rediff.com/news/special/india-independence-day-special-abhilash-tomy/20130905.htm?pin=ie9");
</script>

<script type="text/JavaScript">
function addSite()
{
    try {
        window.external.msAddSiteMode();
    }
    catch (e) {
        alert("This feature is only available in Internet Explorer 9.");
    }
}
function AddJumpList(nameJumpList,jumpListArray) {
	window.external.msSiteModeClearJumplist();
	window.external.msSiteModeCreateJumplist(nameJumpList);
	var i;
	jumpListArray.reverse();
	for(i = 0; i<jumpListArray.length;i++){
		window.external.msSiteModeAddJumpListItem
		(''+jumpListArray[i][0]+'', ''+jumpListArray[i][1]+'', 'http://www.rediff.com/favicon.ico');
	}
	window.external.msSiteModeShowJumplist();

}
try {
	if (window.external.msIsSiteMode()) {
		AddJumpList('Headlines',headlinesArray);
	}
	else
	{
		if(sessionStorage.getItem('showPinnedBar') == 1 || sessionStorage.getItem('showPinnedBar') == null)
		{
			document.getElementById('divPinSite').innerHTML = "<div class='floatL bold f14' style='padding:7px 50px 0 0'>Experience Rediff.com as a Pinned Site</div><div class=floatL><div class=floatL><img id=pinImage class=msPinSite src='http://www.rediff.com/favicon.ico' alt='' /></div><div class=floatL>&nbsp;<span class=bold>&lt; Drag this icon to your Taskbar</span><br />&nbsp; &nbsp; Or <a href=\"javascript:void(0)\" onclick=\"addSite();\" class=bold>click here</a> to add this site to your Start menu.</div></div><div class=pinclose onclick=\"hideDiv1('divPinSite');window.sessionStorage.setItem('showPinnedBar','0');\" title='Close' >X</div>";
			document.getElementById('divPinSite').style.display = "block";
		}
	}
}
catch(ex) {}
</script>

<!-- IE9-Windows7: Pinned Sites: Ends -->
<noscript><div class="msg_noscript">Your browser does not support JavaScript or it may be disabled!</div></noscript>
</body>
</html>
`;
processData(input);
