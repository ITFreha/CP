<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html>
<head>
	<title>Beautiful places</title>
	
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
  
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
	<link rel="stylesheet" href="css/style.css"/>
</head>

<body bgcolor="lightgrey">
	<!--            ffffffffffff    -->

	<nav id="navbarTop" class="navbar navbar-collapse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="index.html"><span class="glyphicon glyphicon-road"></span> Beatiful places </a>
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".info-menu">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>

			<ul class="nav navbar-nav navbar-right info-menu navbar-collapse collapse">
				<li id="modal-caller"><a href="" data-toggle="modal" data-target="#modal-menu-left"><span class="glyphicon glyphicon-th"></span>Меню</a></li>
				<li><a href="contacts.xml"><span class="glyphicon glyphicon-envelope"></span>Контакты</a></li>
				<li><a href="about.html"><span class="glyphicon glyphicon-info-sign"></span>О сайте</a></li>
			</ul>
		</div>
	</nav>

	<div id="modal-menu-left" class="modal fade"><div class="modal-dialog"><div class="modal-body">
	<nav id="menu">
		<div>
			<ul>
				<li><a href="canada.html"><img src="img/flags/ca.png"/>Канада</a></li>
				<li><a href="italy.html"><img src="img/flags/it.png"/>Италия</a></li>
				<li><a href="usa.html"><img src="img/flags/us.png"/>США</a></li>
				<li><a href="russia.html"><img src="img/flags/ru.png"/>Россия</a></li>
				<li><a href="belarus.html"><img src="img/flags/BY.png"/>Беларусь</a></li>
			</ul>
		</div>
	</nav>
	</div></div></div>
	<script type="text/javascript">changeMenu()</script>
	
	<!-- 			ffffffffffff  	-->
	
    <h2 align="center">Контакты</h2>
    <table style="border-collapse: collapse" border="1" align="center">
  
    <xsl:for-each select="tabl/CONTACTS">
    <tr bgcolor="lightblue">
		<td><xsl:value-of select="NAME"/></td>
		<td><xsl:value-of select="VALUE"/></td>
	</tr>
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template></xsl:stylesheet>