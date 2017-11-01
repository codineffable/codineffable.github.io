





$(window).bind("load", function() {
  $(".loading").each(function()
    { 
      $(this).removeClass("loading");
      });
});





function sendLetter()
{
  jQuery(document).ready(function()
  {
    $("#submit-form").addClass("sent");
    $("#submit-form").val("Error ocurred! Use another way for contact us please");
    $("#submit-form").attr("disabled");
  });
  var url='';
  var data = $('#send-form').serialize();
  return false;
}


jQuery(document).ready(function()
{
  //------------------------------Calculo automatico de height para algunos contenedores
  if ($(window).width() < 480) 
  {
    var a = $("#sect5").height();
    $("#anthonyPrev").css("height", a+"px");
    $("#mariaPrev").css("height", a+"px");

    var s1=$("#pc-left").outerHeight()*.5;
    var s2=$("#sect1").outerHeight()-s1;
    $("#sect1").css("height",s2+"px");
  }
  else if (($(window).width() > 479)&&($(window).width() < 768)) 
  {
    var a = $("#sect5").height();
    $("#anthonyPrev").css("height", a+"px");
    $("#mariaPrev").css("height", a+"px");

    var s1=$("#pc-left").outerHeight()*.3;
    var s2=$("#sect1").outerHeight()-s1;
    $("#sect1").css("height",s2+"px");
  }

  //-------------------------------Icono del menu

  $(".hamburger").on("click",function(e)
  {
    $(this).toggleClass("is-active");
    $("#navigation").toggleClass("is-active");
  })

  //-------------------------------Copiar logo a otro div (no se usa)
  $(".logo-copy").clone().appendTo("#logoLoading");

  //-------------------------------funciones para cambio de lenguaje
  var url = window.location.href;  
  var ur2 = url.substr(url.indexOf("/") + 1)
  var ur3 = ur2.substr(ur2.indexOf("/") + 1)
  var ur4 = ur3.substr(ur3.indexOf("/") + 1)
  var ur5 = ur4.substr(0,2);
  var language = $("#lang > div > select option:selected" ).val();

  $("body").on("change","#lang > div > select", function(e)
  {
    if($("#lang > div > select option:selected" ).val()!=language)
    {
      window.location.href = "/"+$("#lang > div > select option:selected" ).val() +'/';
    }
  })

  //--------------------------------Eventos para manejar contenedores dinamicos

  $(".close-inf").on("click",function(e)
  {
    $("#codnef-team-img").removeClass("mariaS");
    $("#mariaPrev").removeClass("mariaS");
    $("#codnef-team-img").removeClass("anthonyS");
    $("#anthonyPrev").removeClass("anthonyS");
  });


  $("body").on("click","#maria",function(e)
  {
    $("#codnef-team-img").addClass("mariaS");
    $("#mariaPrev").addClass("mariaS");
  })

  $("body").on("click","#anthony",function(e)
  {
    $("#codnef-team-img").addClass("anthonyS");
    $("#anthonyPrev").addClass("anthonyS");
  })

  //--------------------------------Parallax de elementos de la seccion 2
  if ($(window).width() > 767) 
  {
    $(window).bind('scroll',function(e)
    {
      var scrolledY = $(window).scrollTop();
      $('.parallax-div2').css('margin-top', +((scrolledY*0.6))+'px');
    });

    $(window).bind('scroll',function(e)
    {
      var scrolledY = $(window).scrollTop();
      $('.parallax-div3').css('margin-top', +((scrolledY*0.2+300))+'px');
    });
    $(window).bind('scroll',function(e)
    {
      var scrolledY = $(window).scrollTop();
      $('.parallax-div1').css('margin-top', +(($("#sect2-pt1").height()-$('.parallax-div1').height()+(scrolledY*-0.2)))+'px');
    });
  }
  $(".inputForm").on("focus",function()
  {
    var label = $("label[for='"+$(this).attr('id')+"']");
    label.addClass("move");
  })

  //--------------------------------Precargar divs con imagenes de fondo en CSS







  //--------------------------------Precargar divs con imagenes de fondo en CSS
  if ($(window).width() < 768) 
  {
    var posSlider=1;
    var sliderElemWidth = $('.project-thumb').width();
    console.log(sliderElemWidth);
    var sliderLength = $(".project-thumb").length;
    var transVal = $('.project-list').width()/$(".project-thumb").length;
    if(($(".project-thumb").length)>1)
    {
      $("#next-button").addClass("active");
    }

    $("body").on("click", "#portfolio-next", function(e)
    {
      posSlider = posSlider + 1;
      e.preventDefault()
      if(posSlider == sliderLength){$("#next-button").removeClass("active");}
      if(posSlider > 1){$("#prev-button").addClass("active");}
      var transVal = $('.project-list').width()/$(".project-thumb").length;
      var currTrans = $('.project-list').css('transform').split(/[()]/)[1];
      var posx = currTrans.split(',')[4];
      var posxx = parseInt(posx, 10);
      var trans = posxx - $(".project-thumb").width();
      $(".project-list").css(
      {
        'transform': 'translateX(' + trans+"px" + ')',
      });
      $(".project-thumb").addClass("animate");
      setTimeout(function()
      {
        $(".project-thumb").removeClass("animate");
      }, 500);
    })

    $("body").on("click", "#portfolio-prev", function(e)
    {
      posSlider = posSlider - 1;
      if(posSlider == 1){$("#prev-button").removeClass("active");}
      if(posSlider < sliderLength){$("#next-button").addClass("active");}
      e.preventDefault()
      var transVal = $('.project-list').width()/$(".project-thumb").length;
      var currTrans = $('.project-list').css('transform').split(/[()]/)[1];
      var posx = currTrans.split(',')[4];
      var posxx = parseInt(posx, 10);
      var trans = posxx + $(".project-thumb").width();
      $(".project-list").css(
      {
        'transform': 'translateX(' + trans+"px" + ')',
      });
      $(".project-thumb").addClass("animate");
      setTimeout(function()
      {
        $(".project-thumb").removeClass("animate");
      }, 500);
      var translated = transVal - trans;
      var currTrans2 = $('.project-list').css('transform').split(/[()]/)[1];
      var posx2 = currTrans.split(',')[4];
      var posxx2 = parseInt(posx2, 10);
      console.log(posxx2);
    })

  }

  if ($(window).width() > 768) 
  {


  $("body").on("click",(".project-thumb"), function(e){
    $(".proj-desc").removeClass("active");
    $(".project-thumb").removeClass("active");
    $(this).addClass("active");
    var number = $(this).attr("id").slice(-1);
    console.log(number);
    $("#desc-project-"+number).addClass("active");
    $(".proj-desc").addClass("animation");
    $(this).addClass("animation");
    $(".project-thumb").addClass("bottom");
  });

    $(window).on('resize', function(e){
if ($(window).width() < 768) 
            {
              headerHeight = 50;
            }
            if ($(window).width() > 767) 
            {
              headerHeight = 60;
            }

if($(".project-list").width()<=$(window).width())
  {
    $("#prev-button").removeClass("active");
    $("#next-button").removeClass("active");
    $(".project-list").css({
      'transform': 'translateX( 0px)',
    });
  }
  else
  {
    $("#next-button").addClass("active");
  }
    if($(".project-list").width()>=$(window).width())
  {
    var transVal = $('.project-list').width()/$(".project-thumb").length;
      var currTrans = $('.project-list').css('transform').split(/[()]/)[1];


      var pjRightSep = ($(".project-list").width()+$(".project-list").offset().left-$(window).width());
     if(pjRightSep<transVal)
     {
        transVal = pjRightSep+(16*4);
      


  var posx = currTrans.split(',')[4];
  var posxx = parseInt(posx, 10);
  var trans = posxx - transVal;
  if(trans<0)
  {
    $("#prev-button").addClass("active");
  }


  
    $(".project-list").css({
      /*  '-moz-transform': 'translateX(-' + "450px" + ')',
        '-webkit-transform': 'translateX(-' + "450px" + ')',
      '-ms-transform': 'translateX(-' + "450px" + ')',
      '-o-transform': 'translateX(-' + "450px" + ')',*/
      'transform': 'translateX(' + trans+"px" + ')',
    });
     
     if(transVal>(($(window).width()-($(".project-list").offset().left+$(".project-list").width()))*-1))
     {
      $("#next-button").removeClass("active");
     }}
}
    });


 if($(".project-list").width()<=$(window).width())
  {
    $("#prev-button").removeClass("active");
    $("#next-button").removeClass("active");
  }
  else
  {
    $("#next-button").addClass("active");
  }


  $("body").on("click", "#portfolio-next", function(e){
    e.preventDefault()
    var transVal = $('.project-list').width()/$(".project-thumb").length;
      var currTrans = $('.project-list').css('transform').split(/[()]/)[1];


      var pjRightSep = ($(".project-list").width()+$(".project-list").offset().left-$(window).width());
     if(pjRightSep<transVal)
     {
        transVal = pjRightSep+(16*4);
      }


  var posx = currTrans.split(',')[4];
  var posxx = parseInt(posx, 10);
  var trans = posxx - transVal;
  if(trans<0)
  {
    $("#prev-button").addClass("active");
  }


  
    $(".project-list").css({
      /*  '-moz-transform': 'translateX(-' + "450px" + ')',
        '-webkit-transform': 'translateX(-' + "450px" + ')',
      '-ms-transform': 'translateX(-' + "450px" + ')',
      '-o-transform': 'translateX(-' + "450px" + ')',*/
      'transform': 'translateX(' + trans+"px" + ')',
    });
     
     if(transVal>(($(window).width()-($(".project-list").offset().left+$(".project-list").width()))*-1))
     {
      $("#next-button").removeClass("active");
     }
     $(".project-thumb").addClass("animate");
       setTimeout(function(){
        $(".project-thumb").removeClass("animate");
      }, 800);
       

   
  })
    $("body").on("click", "#portfolio-prev", function(e){


    e.preventDefault()
    var transVal = $('.project-list').width()/$(".project-thumb").length;
      var currTrans = $('.project-list').css('transform').split(/[()]/)[1];
      
      var pjRightSep=($(".project-list").offset().left)*-1;
      console.log(transVal);
      console.log(pjRightSep);
       if(pjRightSep<transVal)
     {
        transVal = pjRightSep;
      }



  var posx = currTrans.split(',')[4];
  var posxx = parseInt(posx, 10);
  var trans = posxx + transVal;
  if(trans>=0)
  {
    $("#prev-button").removeClass("active");
  }
  
    $(".project-list").css({
      'transform': 'translateX(' + trans+"px" + ')',
    });
    $("#next-button").addClass("active");
     $(".project-thumb").addClass("animate");
       setTimeout(function(){
        $(".project-thumb").removeClass("animate");
      }, 800);
       

  })

}

  var em=$("#sect-title").height()/3;
  var number = 2 + Math.floor(Math.random() * 10);
  var i=0;
  for(i=0;i<=number;i++)
  {
    var number2 = 1 + Math.floor(Math.random() * 15);
    if(number2<10)
    {
      number2="0"+number2;
    }
    var serverEr = $("#server-unity"+number2);
    serverEr.addClass("error");
  }





  //---------------------------------------------------------------------Console Start

  var svEr = 0;
  $.each($(".server-unity"), function() 
          {
            var number = $(this).attr("id").slice(-2);
            if($(this).hasClass("error"))
            {
              svEr = 1;
            }
          });

if(svEr==1)
{
      if(ur5=="en")
      {
        $("#servers-status").html("# &nbsp datacenter status: error<br># &nbsp type --help for more information");
      }
      if(ur5=="es")
      {
        $("#servers-status").html("# &nbsp estado del datacenter: error<br># &nbsp escribe --help para mayor informacion");
      }

}
else
{
  $("#servers-status").html("# &nbsp datacenter status: okay<br># &nbsp type --help for more information");
}
  

  $( '#console-input-text' ).on( 'keydown', function ( evt ) {
    if( evt.keyCode == 13 )
    {
         
        
        if( $( this ).val()=="--help")
        {
          if(msg1S==1)
    {
      $("#term-tips").addClass("active");
      $("#term-help").html("Lets check which servers are down!")
      setTimeout(function(){
        $("#term-tips").removeClass("active");
      }, 2500);
      msg1S = 2;
    }
          $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"<br>"+"COMMAND GUIDE<br>servers-check: check status of every server unity<br>server-restart-(number): restart a server unity<br>datacenter-restart: restart all datacenter</p>");
        }
        else if( $( this ).val()=="servers-check")
        {
           if(msg1S==2)
    {
      $("#term-tips").addClass("active");
      $("#term-help").html("Okay! now try to restart one of the server with problems")
      setTimeout(function(){
        $("#term-tips").removeClass("active");
      }, 2500);
      msg1S = 3;
    }
          $.each($(".server-unity"), function() 
          {
            var number = $(this).attr("id").slice(-2);
            if($(this).hasClass("error"))
            {
              var status = "error";
            }
            else
            {
              var status = "okay";
            }
            $( '#console-messages' ).append("<p class='console-error-msg'>"+"server #"+number+": "+status+"</p>");
          });
          
        }
         else if( $( this ).val().substr(0,14)=="server-restart")
        {
          var servNumber =  $( this ).val().substr(15,17);
          var elServ = $("#server-unity"+servNumber);
          if($(elServ).length == 0) {
            $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"<br>"+"server #"+servNumber+" does not exists</p>");

          }
          else if($(elServ).hasClass('error'))
          {
            $(elServ).removeClass('error');
            $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"<br>"+"server #"+servNumber+" initialized</p>");
            if(msg1S==3)
    {
      $("#term-tips").addClass("active");
      $("#term-help").html("Good! But is not enought! Try restarting the datacenter!")
      setTimeout(function(){
        $("#term-tips").removeClass("active");
      }, 2500);
      msg1S = 4;
    }
          }
          else
          {
            $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"<br>"+"server #"+servNumber+" is already running</p>");
          }
          
        }
        else if( $( this ).val()=="server-check")
        {
          $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"</p>");
          $.each($(".server-unity"), function() 
          {
            var number = $(this).attr("id").slice(-2);
            if($(this).hasClass("error"))
            {
              $( '#console-messages' ).append("<p class='console-error-msg'>"+"server#"+number+": error</p>");
            }
            else
            {
              $( '#console-messages' ).append("<p class='console-error-msg'>"+"server#"+number+": okay</p>");
            }
          });
        }
        else if( $( this ).val()=="datacenter-restart")
        {
          $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"<br>"+" datacenter initialized</p>");
          $(".server-unity").removeClass("error");
          if(msg1S==3||msg1S==4)
    {
      $("#term-tips").addClass("active");
      $("#term-help").html("Awesome! The datacenter is running well now!")
      setTimeout(function(){
        $("#term-tips").removeClass("active");
      }, 2500);
      msg1S = 5;
    }
        }
        else
        {
          $( '#console-messages' ).append("<p class='console-error-msg'>"+"# &nbsp&nbsp"+$( this ).val()+"<br>"+"'"+$( this ).val()+"'"+" is not recognized as command</p>");
        } 
        var wtf    = $('#laptop-window-down');
        var height = wtf[0].scrollHeight;
        wtf.scrollTop(height);
        $(this).val('');
      }

  } );

  var msg1S = 0;
  $(document).on("click","#laptop", function(e){
    

    $("#console-input-text").focus();
    if(msg1S==0)
    {
      $("#term-tips").addClass("active");
      $("#term-help").html("Write --help in the terminal to see the available options")
      setTimeout(function(){
        $("#term-tips").removeClass("active");
      }, 2500);
      msg1S = 1;
    }
  })

//-----------------------------------------------------------------------------------Console End



/*


$("html").easeScroll(
  {
      frameRate: 60,
      animationTime: 600,
      stepSize: 120,
      pulseAlgorithm: 1,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 20,  
      accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });
*/


   $(".links").on("click",function(){
                if ($(window).width() < 768) 
                $("#navigation-items > li").removeClass("active");
                $(this).parent().addClass("active");
              $(".hamburger").removeClass("is-active");
            $("#navigation").removeClass("is-active");
                
              })

              $("#navigation-items > li").on("click",function(e)
              {
                $(this).children("a").trigger("click");
              })           
              
          

$(document).on('click', 'a', function(event){
    event.preventDefault();
    if ($(window).width() < 768) 
            {
              headerHeight = 50;
            }
            if ($(window).width() > 767) 
            {
              headerHeight = 60;
            }
    if($(this).hasClass("links"))
    {
      document.location.href=$.attr(this, 'href');
      var scroll = $(window).scrollTop();
      $(window).scrollTop(scroll-50);
  }
});
  /*   var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
  
    return false;
});*/
  var browserTopPos=$("#browser-window").offset().top;
var $window = $(window);

  $(window).on('scroll resize load', function(e){


      event.preventDefault();
      var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
      var window_top_position = $window.scrollTop();

      if(window_top_position>0)
      {
        $("#desk-navbar").addClass("scrolled");
      }
      else
      {
        $("#desk-navbar").removeClass("scrolled");
      }

     $.each($(".dynamic"), function() 
        {

          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
          if($($element).hasClass('timeline-item'))
        {
          //console.log($($element).attr('id'));
          var separation=$element.outerHeight();
        }
        else if($($element).hasClass('parallax'))
        {
          var separation=0;
        }
        else
        {
          //console.log($($element).attr('id'));
          var separation=200;
        }

          if ((element_bottom_position >= window_top_position + separation ) &&
            (element_top_position + separation <= window_bottom_position)) 
          { 
            if($($element).hasClass('timeline-item'))
          {
            $(this).children(".line").addClass("in-view");
            setTimeout(function(){$element.addClass('in-view');}, 400);
          }
          else if($($element).hasClass('parallax'))
          {
              if ($(window).width() > 767) 
            {
            $(this).css('background-position-y', ($(window).scrollTop()-$(this).offset().top+$(window).height())*0.3*-1-($(this).height()/9)+"px"   );
            }
          }

          else
          {
             
              $element.addClass('in-view');
            }
          } 
          else 
          {
          }
        });




        $.each($('.inf'), function() 
        {
          event.preventDefault();
          if ($(window).width() < 768) 
            {
              headerHeight = 50;
            }
            if ($(window).width() > 767) 
            {
              headerHeight = 60;
            }
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          if(($(window).scrollTop()+headerHeight>$element.offset().top-1)&&(($(window).scrollTop()<$element.offset().top+element_height)))
          { 
            $(".links").removeClass("active");
            var a='#link-'+$(this).attr('id');
            $(a).addClass("active");
            //window.location.replace('#'+$(this).attr('id'))
          }
        }); 

    /*    if(($(window).scrollTop())>=(($("#browser-window").offset().top)-($(window).height()/2)))
        {
          $("#browser-window").addClass("is-fixed");
        }*/
        

      /*  if(($(window).scrollTop())<=((browserTopPos)-($(window).height()*0.20)))*/
      if(($(window).scrollTop())<=($("#sect2-pt1").offset().top+($("#sect-title").outerHeight())))
        {
          $("#browser-window").removeClass("is-fixed");
        }
        else 
        {
          $("#browser-window").addClass("is-fixed");
          $("#browser-window").removeClass("is-down");
        }
        if(($("#browser-window").offset().top+$("#browser-window").height()+200)>=($("#sect2-pt1").offset().top+$("#sect2-pt1").height()))
        {
           $("#browser-window").removeClass("is-fixed");
              $("#browser-window").addClass("is-down");
        }

        
     /*   if(($(window).scrollTop())>=($("#sect2-pt1").offset().top+$("#sect2-pt1").height()-$(window).height()))

          {

             $("#browser-window").removeClass("is-fixed");
              $("#browser-window").addClass("is-down");
        
        }*/

        if(($(window).scrollTop())>=(($("#responsive-text").offset().top)-($(window).height()/2)))
        {
          $(".device-change").addClass("mobile");
        }
        else
        {
          $(".device-change").removeClass("mobile");
        }
        

    });


  $("body").on("click","#button",function(){
    console.log("a");
    $(".screen").addClass("on");
    $("#button").addClass("on");
    setTimeout(function(){
      $("#wr1-el1").addClass("active");
      $("#wr1-el2").addClass("active");
    }, 1500);
    setTimeout(function(){
      $("#screen-wrap2").addClass("active");
    }, 2000);
    setTimeout(function(){
      $("#wr3-el1").addClass("active");
    }, 2500);
    setTimeout(function(){
      $("#wr3-el2").addClass("active");
    }, 2800);
    setTimeout(function(){
      $("#wr3-el3").addClass("active");
    }, 3100);
    setTimeout(function(){
      $(".t1").addClass("active");
    }, 3200);
    setTimeout(function(){
      $(".t2").addClass("active");
    }, 3400);
    setTimeout(function(){
      $(".t3").addClass("active");
    }, 3600);
    setTimeout(function(){
      $(".t4").addClass("active");
    }, 3800);
    setTimeout(function(){
      $(".t5").addClass("active");
    }, 4000);
  })
});