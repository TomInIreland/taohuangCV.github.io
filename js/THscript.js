// Tao's JavaScript
var lnStickyNavigation;

$(document).ready(function()
{	
	applyNavigation(); 
});
/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
	applyStickyNavigation();
	applyClickEvent();
}

function applyClickEvent()
{
	$('a[href*=#]').on('click', function(e)
	{
		e.preventDefault();
		
		if( $( $.attr(this, 'href') ).length > 0 )
		{
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}
		return false;
	});
}

function applyStickyNavigation()
{
	lnStickyNavigation = $('.nav').offset().top ;
	
	$(window).on('scroll', function() 
	{  
		stickyNavigation();  
	});  
	
	stickyNavigation();
}

function stickyNavigation()
{         
	if($(window).scrollTop() > lnStickyNavigation) 
	{   
		$('body').addClass('fixed');  
	} 
	else 
	{  
		$('body').removeClass('fixed');   
	}  
}