$( document ).ready(function() {
	var data = [{
		id: 'context1',
		imageUrl: '4438_1403618571.png',
		type: 'available',
		title: 'Leadership Komplettkurs',
		info2: {
			lectures: 24,
			questions: 61,
		},
		info1: {
			rate: 2.5,
			count: 3,
			price: 54.99,
			currency: 'eur',
			price_period_trans: 'mounth'
		}
	},{
		id: 'context2',
		imageUrl: '4438_1403618571.png',
		type: 'started',
		title: 'Leadership Komplettkurs',
		info2: {},
		info1: {
			percent: 66,
			percent_trans: 'finished'
		}
	},{
		id: 'context3',
		imageUrl: '4438_1403618571.png',
		type: 'started_exp',
		title: 'Leadership Komplettkurs',
		info2: {
			text: 'Your access will end on 01.15.2016',
		},
		info1: {
			percent: 66,
			percent_trans: 'finished'
		}
	},{
		id: 'context4',
		imageUrl: '4438_1403618571.png',
		type: 'finished',
		title: 'Leadership Komplettkurs',
		info2: {
			rate_trans: 'rate this'
		},
		info1: {
			percent: 100,
			percent_trans: 'finished'
		}
	},{
		id: 'context5',
		imageUrl: '4438_1403618571.png',
		type: 'finished_sub',
		title: 'Leadership Komplettkurs',
		info2: {},
		info1: {
			percent: 100,
			percent_trans: 'finished'
		}
	}]


	var html =	'<div>';
		html +=		'<div class="image"></div>';
		html +=	'</div>';
		html +=	'<div>';
		html +=		'<div class="title">';
		html +=			'<div class="title_left">';
		html +=				'<div class="title_text ellipsis"></div>';
		html +=			'</div>';
		html +=			'<div class="title_right"></div>';
		html +=		'</div>';
		html +=		'<div class="info">';
		html +=			'<div class="info2"></div>';
		html +=			'<div class="info1">';
		html +=				'<div class="info1_a"></div>';
		html +=				'<div class="info1_b"></div>';
		html +=			'</div>';
		html +=		'</div>';
		html +=	'</div>';
	$.each(data, function(index, row){
		$('.container').append('<div class="row" id="'+ row.id +'">' + html +'</div>');
		$('#'+ row.id +' .image').css('background-image', 'url("' + row.imageUrl + '")');
		$('#'+ row.id +' .title_text').append('<p>'+ row.title +'</p>');
		switch(row.type){
			case 'available': 
				// info2
				$('#'+ row.id +' .info2').append('<div class="available_info2_links"><a href="#">'+ row.info2.lectures +' lectures </a><a href="">'+ row.info2.questions +' quiz questions</a></div>');
				// info1
				// info1_a
				var info1 = '<div class="rating">';
				for(var i = 0; i < parseInt(row.info1.rate); i++){
					info1 += '<span class="glyphicon glyphicon-star"></span>';
				}
				if(!!(row.info1.rate%1)){
					info1 += '<span class="glyphicon glyphicon-star half-left"></span>';
					info1 += '<span class="glyphicon glyphicon-star-empty half-right"></span>';
				}
				for(var i = 0; i < 5-Math.ceil(row.info1.rate); i++){
					info1 += '<span class="glyphicon glyphicon-star-empty"></span>';
				}
				$('#'+ row.id +' .info1_a').append(info1 + '</div><div class="count_rate"> ('+ row.info1.count +') </div>');

				// info1_b
				var currency = '';
				switch(row.info1.currency){
					case 'eur':
						currency = '<div class="glyphicon glyphicon-euro"></div>';
						break;
				}
				$('#'+ row.id +' .info1_b').append('<div class="price">'+ row.info1.price + currency +'/ '+ row.info1.price_period_trans +'</div></div>');
				break;
			case 'started':
				$('#'+ row.id +' .title_right').append('<div onclick="openSubMenu(this)" data-id="'+ row.id +'"><li></li><li></li><li></li></div>');
				// info2
				$('#'+ row.id +' .info1').append('');
				// info1
				// info1_a
				$('#'+ row.id +' .info1_a').append('<div class="finished">'+ row.info1.percent +'% '+ row.info1.percent_trans +'</div><div class="progress_container"><div class="finished_percent" style="width: '+ row.info1.percent +'%"></div></div>');
				break;
			case 'started_exp':
				$('#'+ row.id +' .title_right').append('<div onclick="openSubMenu(this)" data-id="'+ row.id +'"><li></li><li></li><li></li></div>');
				// info2
				$('#'+ row.id +' .info2').append('<div class="started_exp_info2">'+ row.info2.text +'</div>');
				// info1
				// info1_a
				$('#'+ row.id +' .info1_a').append('<div class="finished">'+ row.info1.percent +'% '+ row.info1.percent_trans +'</div><div class="progress_container"><div class="finished_percent" style="width: '+ row.info1.percent +'%"></div></div>');
				break;
			case 'finished':
				$('#'+ row.id +' .title_right').append('<div onclick="openSubMenu(this)" data-id="'+ row.id +'"><li></li><li></li><li></li></div>');
				// info2
				var rating_container = '';
				for(var i = 0; i < 5; i++) {
					rating_container += '<span class="glyphicon glyphicon-star-empty"></span>';
				}
				$('#'+ row.id +' .info2').append('<div class="finished_rate"><div class="rating_container">'+ rating_container +'</div><div class="rate_context">'+ row.info2.rate_trans +'</div></div>');
				// info1
				// info1_a
				$('#'+ row.id +' .info1_a').append('<div class="finished">'+ row.info1.percent +'% '+ row.info1.percent_trans +'</div><div class="progress_container"><div class="finished_percent" style="width: '+ row.info1.percent +'%"></div></div>');
				break;
			case 'finished_sub': 
				$('#'+ row.id +' .title_right').append('<div onclick="openSubMenu(this)" data-id="'+ row.id +'"><li></li><li></li><li></li></div>');
				// info1
				// info1_a
				$('#'+ row.id +' .info1_a').append('<div class="finished">'+ row.info1.percent +'% '+ row.info1.percent_trans +'</div><div class="progress_container"><div class="finished_percent" style="width: '+ row.info1.percent +'%"></div></div>');
			break;
		}
	});
});

function openSubMenu(element){
	$(element).before('<div class="submenu"><div><h4>Edit review</h4></div><div><h4>Dowload Certificate</h4></div><div><h4>Reset progress</h4></div></div>')
}