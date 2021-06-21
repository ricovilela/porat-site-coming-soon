$("#goBook").click(async () => {
  const namebook = $("#name").val()
  const peoplebook = $("#people").val()
  const datebook = $("#datapicker").val()
  const atbook = $("#attime").val()

  if(namebook && peoplebook && datebook && atbook){
    
    $(".edgtf-smooth-transition-loader").show();

    const options = {
      "name": namebook,
      "people": peoplebook,
      "forbook": datebook,
      "atbook": atbook
    };
    
    await fetch('http://localhost:2021/book-table-search', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(options)
    }).then(async (response) => {
      const result = await response.json();

      if(result.length === 0){
        //START ADD DATE

        await fetch('http://localhost:2021/book-table', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(options)
        }).then(async (response) => {
          const resultFinal = await response.json();
          $(".edgtf-smooth-transition-loader").hide();
          if(resultFinal.confirm === 1){
            alert("Hey! Thanks for choosing us! Your reservation is confirmed and is valid until 15 minutes after the chosen time.")
          } else {
            alert("Ops! Something is wrong. Please, try again!")
          }
        });

        //END ADD DATE
      } else {
        $(".edgtf-smooth-transition-loader").hide();
        alert('The date or time you are booking already has a reservation. Choice another date or time.');
      }
    });
  } else {
    alert("All fields must be completed!")
  }
});

$("#datapicker").datepicker($.datepicker.regional[ "hr" ]);
$("#datapicker").datepicker( "option", "dateFormat", "dd/mm/yy" );

$("#coming-soon")
  .countdown("2021/07/20 18:00:00", function(event) {
    var $this = $(this).html(event.strftime(`
    <div class="container">
      <div class="row countDownDist">
        <div class="col-lg-1 col-1"></div>
        <div class="col-lg-2 col-2">%m<br /><span>months</span></div>
        <div class="col-lg-2 col-2">%D<br /><span>days</span></div>
        <div class="col-lg-2 col-2">%H<br /><span>hours</span></div>
        <div class="col-lg-2 col-2">%M<br /><span>minutes</span></div>
        <div class="col-lg-2 col-2">%S<br /><span>seconds</span></div>
        <div class="col-lg-1 col-1"></div>
      </div>
    </div>`));
  });

const bgSite = [{
  image: 'images/bgs/sebastian-voortman.jpg',
  alt: 'Sebastian Voortman',
},
{
  image: 'images/bgs/pok-rie.jpg',
  alt: 'Pok Rie',
},
{
  image: 'images/bgs/rok-romih.jpg',
  alt: 'Rok Romih',
},
{
  image: 'images/bgs/ruth-currie.jpg',
  alt: 'Ruth Currie',
}];

const min = Math.ceil(0);
const max = Math.floor(3);

const bgImage = Math.floor(Math.random() * (max - min + 1)) + min;

$('#bgSite').css('background-image', 'url(' + bgSite[bgImage].image + ')');

/* <![CDATA[ */
var edgtfGlobalVars = { "vars": { "edgtfAddForAdminBar": 0, "edgtfElementAppearAmount": -150, "edgtfFinishedMessage": "No more posts", "edgtfMessage": "Loading new posts...", "edgtfTopBarHeight": 0, "edgtfStickyHeaderHeight": 60, "edgtfStickyHeaderTransparencyHeight": 60, "edgtfStickyScrollAmount": 0, "edgtfLogoAreaHeight": 0, "edgtfMenuAreaHeight": 70, "edgtfMobileHeaderHeight": 100 } };
var edgtfPerPageVars = { "vars": { "edgtfStickyScrollAmount": 0, "edgtfHeaderTransparencyHeight": 0 } };
/* ]]> */