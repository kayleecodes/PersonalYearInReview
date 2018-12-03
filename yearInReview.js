// Initiate the chart
Highcharts.mapChart('container', {

    chart: {
        map: 'countries/us/us-all'
    },

    title:{
    	text:''
	},

	exporting: { 
		enabled: false 
	},

	legend: {
		enabled: false
    },

    mapNavigation: {
        enabled: false
    },

    tooltip: {
    		useHTML: true,
        headerFormat: '',
        pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
    },

    series: [{
        // Use the gb-all map with no data as a basemap
        name: 'Basemap',
        borderColor: '#000000',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
    }, {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#000000',
        showInLegend: false,
        enableMouseTracking: false
    }, {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Cities',
        color: Highcharts.getOptions().colors[1],
        data: [{
            name: 'Memphis',
            lat: 35.1495343,
            lon: -90.0489801
        }, {
            name: 'Chicago',
            lat: 41.878114,
            lon: -87.629798
        }, {
            name: 'Great Lakes',
            lat: 42.312403,
            lon: -87.841542
        }, {
            name: 'Winter Park',
            lat: 28.600000,
            lon: -81.339235
        }, {
            name: 'Riverside',
            lat: 33.980601,
            lon: -117.375494
        }, {
            name: 'Chapel Hill',
            lat: 35.913200,
            lon: -79.055845
        }, {
            name: 'Las Vegas',
            lat: 36.169941,
            lon: -115.139830
        }, {
            name: 'Herndon',
            lat: 38.969555,
            lon: -77.386098
        }, {
            name: 'Grand Canyon',
            lat: 36.054445,
            lon: -112.140111,
            dataLabels: {
                align: 'left',
                x: 0,
                verticalAlign: 'middle'
            }
        }]
    }]
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}