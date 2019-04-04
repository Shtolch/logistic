
(function ($) {
    $(document).ready(function () {

        /****** NavBar ******/

        var adjustNavBar = function() {
            if ($(window).scrollTop() == 0) { 
                $('header').addClass('top'); 
            } else { 
                $('header.top').removeClass('top'); 
            }
        }

        var lpNav = $('header ul');

        var updateNavBarActive = function() {
           
            var curItem = '';
           
            $('section').each(function () {             
                if ($(window).scrollTop() > $(this).offset().top - $(window).height()/2) {
                    curItem = $(this).attr('id');
                }
            });
            
            
            if (lpNav.find('li.active a').attr('href') != '#' + curItem || lpNav.find('li.active').length == 0) {
                
                lpNav.find('li.active').removeClass('active');
                lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('active');
            }
        }

        $(window).on('load scroll', function(){
            adjustNavBar();
            updateNavBarActive();
        }); 
        
        
        lpNav.find('li a').on('click', function (e) {

            var linkTrgt = $($(this).attr('href'));

            if (linkTrgt.length > 0) { 
                e.preventDefault(); 
                var offset = linkTrgt.offset().top; 
                $('body, html').animate({
                    scrollTop: offset - $("#header").height()
                }, 750); 
            }
        });
        /****** NavBar ******/
        
    

        /****** Carousel ******/

        $('.gallery-slideshow').owlCarousel({
            items: 4,
            nav: true,
            loop:true,
            dots: false,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                900:{
                    items:4
                }
            }
        });

        $('.testimonials-slider').owlCarousel({
            items: 1,
            nav: true,
            loop:true,
            dots: false,
            smartSpeed:1000,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });

        /*
        $('.gallery-slideshow').owlCarousel({
            onDragged: callback
            });
            function callback(event) {
            var item = event.item.index;
            console.log(item);
            }
        
        $('.slide').mouseover(function(){
            console.log('go')
            $(".slide p.slide-text-addition").css('display', 'block')
        })
        */
         /****** Carousel ******/



         /****** Modals ******/

        $('.learn-more').magnificPopup({
            type: 'inline'
        });
        $('.registration-form').magnificPopup({
            type: 'inline'
        });

         /****** Modals ******/
      

         /****** Feedback ******/

        $('#feature-form').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: false
        });

        $('#request-call-form').click(function(e){
            e.preventDefault() 
            $(this).wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink: false
            });
            $('#call-form').css('right', "-500px");
        });
         /****** Feedback ******/


         /****** call-block ******/
        $('#floating-btn').click( function(){
            $('#call-form').css('right', "14px");
        }) 

        
        $('.closed-call-form').click( function(){
            $('#call-form').css('right', "-500px");
        })


        var positionCallForm = $('#call-form').css('right');

        if ( positionCallForm = "14px") { 
            $(document).mouseup(function (e){ 
                var ourBlock = $("#call-form");
                if (!ourBlock.is(e.target) && ourBlock.has(e.target).length === 0) { 
                    $('#call-form').css('right', "-500px");
                }   
            }); 
        }
        /****** call-block ******/


        /****** video ******/
        new Vue({
            el: '#video',
            data: {
                show: true,
                isVisible: true,
            },
            methods: {
                visibilityChanged (isVisible) {

                  this.isVisible = isVisible;
                  console.log(isVisible); 

                  if (!isVisible) {
                    this.show = true;
                  }
                },

                showPlayer(e){
                    e.preventDefault()
                    this.show = false;
                }
            },
        });
        /****** video ******/





    });
})(jQuery);
