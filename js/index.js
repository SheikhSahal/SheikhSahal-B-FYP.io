$(document).ready(function () {

    // var x = $("#character").offset().left;
    // var y = $("#character").offset().top;

    // console.log('x: ' + x + ' y: ' + y);
    $('#1bg').click(function () {
        $('#mainbg').attr("src", "Background/bg.jpg");
    });

    $('#2bg').click(function () {
        $('#mainbg').attr("src", "Background/2.jpg");
    });

    $('#3bg').click(function () {
        $('#mainbg').attr("src", "Background/3.jpg");
    });

    $('#cha1').click(function (){
        $('#character').attr("src", "Character/1.png");
    });

    $('#cha2').click(function (){
        $('#character').attr("src", "Character/2.png");
    });


    

    $('#play').click(function () {
        var rg =parseInt($('#right').val());
        var lf =  parseInt($('#left').val());

        if (rg >= lf ) {
        mirrorright();

        $('#character').offset({ left: '0' });
        var r = $('#right').val();
        var f = parseInt($('#right').val());

        if (r <= 9) {

            for (var i = f; i <= r; i++) {
                repeatFunction(() => $("#character").animate({ left: "+=30" }, 500), 500, i);
             //  console.log(i , f);
            }

            
        }
        else {
            alert("Maximum length of Right is 5.")
        }

        var f = parseInt($('#right').val());
        setTimeout(function () {
            var l = $('#left').val();
            var k = parseInt($('#left').val());

            

            if (l <= 9) {
                mirrorswipe();
                for (var y = k; y <= l; y++) {
                   
                    repeatFunction(() => $("#character").animate({ left: "-=30" }, 500), 500, y);
                 //   console.log(y)

                }

                
            } else {
                alert("Maximum length of Left is 5.")
            }

        }, 5000);

    }
    else
    {
        alert("Right value must be greater then left ");
    }

    })


    function mirrorright(){
        var s =  $('#character').attr('src');
        var mirror = s.substr(-5,1);

        if (mirror == "1"){
          $('#character').attr("src", "Character/1.png");
        }
        else
        {
          $('#character').attr("src", "Character/2.png");
        }
    }

    function mirrorswipe(){
        var s =  $('#character').attr('src');
        var mirror = s.substr(-5,1);

        if (mirror == "1"){
          $('#character').attr("src", "Character/m1.png");
        }
        else
        {
          $('#character').attr("src", "Character/m2.png");
        }
    }

    async function repeatFunction(func, delay, repeat) {

        let counter = 0;
        let interval = setInterval(() => {

            if (repeat !== counter) {
                func();
                counter++;
                
            } else {
                clearInterval(interval)
            }
        }, delay);

    }
})