(function(){
	"use strict";

	angular
		.module("growOpApp")

		.service('plantPhotoSvc', function($http, $q, localStorageService) {
      		/**---local variables---**/
      		var vm = this;
      		vm._PHOTO = {
							"soil": [{
								"plantPic": 1,
								"url": "images/soil/soil1_5_seven_gal_pots.jpg"
							}],
							"nutrients": [{
											"plantPic": 1,
											"url": "images/nutrients/nutrients_1.jpg"
											}, 
										  {
											"plantPic": 2,
												"url": "images/plants/plant2/bigBloom_CU.png"
											}, 
										  {
											"plantPic": 3,
											"url": "images/plants/plant2/growBig_CU.png"
											}, 
										  {
											"plantPic": 4,
											"url": "images/plants/plant2/tigerBloom_CU.png"
										}],

							"compostTea": [{
								"plantPic": 1,
								"url": "images/compost_tea/compost_tea.jpg"
							}, {
								"plantPic": 2,
								"url": "images/compost_tea/compost_tea2.jpg"
							}, {
								"plantPic": 3,
								"url": "images/compost_tea/five_gal_bucket.jpg"
							}],

							"equipment": [{
								"plantPic": 1,
								"url": "images/equipment/45gph_pump.jpg"
							}, {
								"plantPic": 2,
								"url": "images/equipment/airhose_and_splitter.jpg"
							}, {
								"plantPic": 3,
								"url": "images/equipment/five_gal_bucket.jpg"
							}],

							"weekly": [{
								"week": "0",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week0/plant1/week0_1.jpg",
										"images/plants/week0/plant1/or_week0_3.jpg"
									]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week0/plant2/week0_2.jpg",
										"images/plants/week0/plant2/week0_1.jpg"
									]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week0/plant3/week0_1.jpg",
										"images/plants/week0/plant3/or_week0_3.jpg"
									]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week0/plant4/week0_1.jpg",
										"images/plants/week0/plant4/or_week0_3.jpg"
										
									]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week0/plant5/week0_1.jpg",
										"images/plants/week0/plant5/or_week0_5.jpg",
										"images/plants/week0/plant5/or_week0_4.jpg",
										"images/plants/week0/plant5/or_week0_3.jpg",
										"images/plants/week0/plant5/or_week0_2.jpg",
										"images/plants/week0/plant5/IMAG3363.jpg"
									]
								}]
							}, {
								"week": "0B",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week0B/plant1/week0B_3.jpg"
									 ]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week0B/plant2/week0B_1.jpg",
										"images/plants/week0B/plant2/week0B_2.jpg"
									]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week0B/plant3/week0B_3.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week0B/plant4/week0B_3.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week0B/plant5/week1_2.jpg"
										]
								}]
							}, {
								"week": "1",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week1/plant1/week1_5.jpg",
										"images/plants/week1/plant1/week1_3.jpg"
									]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week1/plant2/week_1_5.jpg",
										"images/plants/week1/plant2/week1_1.jpg",
										"images/plants/week1/plant2/week1_4.jpg"
									]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week1/plant3/week1_3.jpg",
										"images/plants/week1/plant3/week1_5.jpg"
									]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week1/plant4/week1_5.jpg",
										"images/plants/week1/plant4/week1_3.jpg"
									]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week1/plant5/week1_2.jpg"

									]
								}]
							}, {
								"week": "2",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week2/plant1/week2_5.jpg"
										]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week2/plant2/week2_4.jpg"
										]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week2/plant3/week2_3.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week2/plant4/week2_1.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week2/plant5/week2_2.jpg",
										"images/plants/week2/plant5/week2_2.jpg"
										]
								}]
							}, {
								"week": "3",
								"plants": [{
									"plant": 1,
									"plantPic": []
								}, {
									"plant": 2,
									"plantPic": []
								}, {
									"plant": 3,
									"plantPic": []
								}, {
									"plant": 4,
									"plantPic": []
								}, {
									"plant": 5,
									"plantPic": []
								}]
							}, {
								"week": "4",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week4/plant1/Week4-JH2.jpg",
										"images/plants/week4/plant1/Week4-JH1.jpg"
									]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week4/plant2/Week4-css2.jpg",
										"images/plants/week4/plant2/Week4-css1.jpg"
									]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week4/plant3/Week4-autodieselmatic1.jpg",
										"images/plants/week4/plant3/Week4-autodeiselmatic2.jpg"
									]
								}, {
									"plant": 4,
									"plantPic": ["images/plants/week4/plant4/Week4-gsc2.jpg",
										"images/plants/week4/plant4/Week4-gsc1.jpg"
									]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week4/plant5/Week4-orange-rooster2.jpg",
										"images/plants/week4/plant5/Week4-orange-rooster1.jpg"
									]
								}]
							}, {
								"week": "5",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week5/plant1/jhweek5p1.jpg",
										"images/plants/week5/plant1/jhweek5p4.jpg",
										"images/plants/week5/plant1/jhweek5p3.jpg",
										"images/plants/week5/plant1/jhweek5p2.jpg",
										]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week5/plant2/cssweek5p6.jpg",
										"images/plants/week5/plant2/cssweek5p5.jpg",
										"images/plants/week5/plant2/cssweek5p4.jpg",
										"images/plants/week5/plant2/cssweek5p3.jpg",
										"images/plants/week5/plant2/cssweek5p2.jpg",
										"images/plants/week5/plant2/cssweek5p1.jpg"
										]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week5/plant3/admweek5p3.jpg",
										"images/plants/week5/plant3/admweek5p2.jpg",
										"images/plants/week5/plant3/admweek5p1.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week5/plant4/gscweek5p3.jpg",
										"images/plants/week5/plant4/gscweek5p2.jpg",
										"images/plants/week5/plant4/gscweek5p1.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week5/plant5/orweek5p3.jpg",
										"images/plants/week5/plant5/orweek5p2.jpg",
										"images/plants/week5/plant5/orweek5p1.jpg"
										]
								}]
							}, {
								"week": "6",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week6/plant1/jhweek6p1.jpg",
										"images/plants/week6/plant1/jhweek6p.jpg"
										]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week6/plant2/cssweek6p2.jpg",
										"images/plants/week6/plant2/cssweek6p1.jpg"
										]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week6/plant3/admweek6p3.jpg",
										"images/plants/week6/plant3/admweek6p2.jpg",
										"images/plants/week6/plant3/admweek6p1.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week6/plant4/gscweek6p2.jpg",
										"images/plants/week6/plant4/gscweek6p1.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week6/plant5/orweek6p1.jpg",
										"images/plants/week6/plant5/orweek6p1.jpg"
										]
								}]
							}, {
								"week": "7",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week7/plant1/jhweek7p3.jpg",
										"images/plants/week7/plant1/jhweek7p2.jpg",
										"images/plants/week7/plant1/jhweek7p1.jpg"
										]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week7/plant2/cssweek7p3.jpg",
										"images/plants/week7/plant2/cssweek7p2.jpg",
										"images/plants/week7/plant2/cssweek7p1.jpg"
										]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week7/plant3/admweek7p3.jpg",
										"images/plants/week7/plant3/admweek7p2.jpg",
										"images/plants/week7/plant3/admweek7p1.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week7/plant4/gscweek7p3.jpg",
										"images/plants/week7/plant4/gscweek7p2.jpg",
										"images/plants/week7/plant4/gscweek7p1.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week7/plant5/orweek7p3b.jpg",
										"images/plants/week7/plant5/orweek7p2.jpg"
										]
								}]
							}, {
								"week": "8",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week8/plant1/jh_week8scrog.jpg",
										"images/plants/week8/plant1/jh_week8_scrog3.jpg",
										"images/plants/week8/plant1/jh_week8_scrog2.jpg",
										"images/plants/week8/plant1/jh_week8_1.jpg"
										]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week8/plant2/css_week8_scrog1.jpg",
										"images/plants/week8/plant2/css_week8_1.jpg",
										"images/plants/week8/plant2/css_week8_scrog1.jpg",
										"images/plants/week8/plant2/css_week8_1.jpg"
										]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week8/plant3/adm_week8_budCU2.png",
										"images/plants/week8/plant3/adm_week8_budCU1.png",
										"images/plants/week8/plant3/adm_week8_scrog2.jpg",
										"images/plants/week8/plant3/adm_week8_scrog.jpg",
										"images/plants/week8/plant3/adm_week8.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week8/plant4/gsc_week8_budcu2.png",
										"images/plants/week8/plant4/gsc_week8__budcu1.png",
										"images/plants/week8/plant4/gsc_week8_measuring_bud.jpg",
										"images/plants/week8/plant4/gsc_week8_topdown.jpg",
										"images/plants/week8/plant4/gsc_week8_scrog1.jpg",
										"images/plants/week8/plant4/gsc_week8_2.jpg",
										"images/plants/week8/plant4/gsc_week8.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week8/plant5/or_week8_2.jpg",
										"images/plants/week8/plant5/or_week8.jpg"
										]
								}]
							}, {
								"week": "9",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week9/plant1/Wk9jh2.jpg",
										"images/plants/week9/plant1/Week9jh1.jpg"
										]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week9/plant2/Wk9css2.jpg",
										"images/plants/week9/plant2/Wk9css1.jpg"
										]
								}, {
									"plant": 3,
									"plantPic": [
										"images/plants/week9/plant3/Wk9admcu9.png",
										"images/plants/week9/plant3/Wk9admcu8.png",
										"images/plants/week9/plant3/Wk9admcu7.png",
										"images/plants/week9/plant3/Wk9admcu6.png",
										"images/plants/week9/plant3/Wk9admcu5.png",
										"images/plants/week9/plant3/Wk9admcu4.png",
										"images/plants/week9/plant3/Wk9admcu3.png",
										"images/plants/week9/plant3/Wk9admcu2.png",
										"images/plants/week9/plant3/Wk9admcu1.png",
										"images/plants/week9/plant3/Wk9adm2.jpg",
										"images/plants/week9/plant3/Wk9adm1.jpg"
										]
								}, {
									"plant": 4,
									"plantPic": [
										"images/plants/week9/plant4/Wk9gsccu9.png",
										"images/plants/week9/plant4/Wk9gsccu8.png",
										"images/plants/week9/plant4/Wk9gsccu7.png",
										"images/plants/week9/plant4/Wk9gsccu6.png",
										"images/plants/week9/plant4/Wk9gsccu5.png",
										"images/plants/week9/plant4/Wk9gsccu4.png",
										"images/plants/week9/plant4/Wk9gsccu3.png",
										"images/plants/week9/plant4/Wk9gsccu2.png",
										"images/plants/week9/plant4/Wk9gsccu1.png",
										"images/plants/week9/plant4/Wk9gsc2.jpg",
										"images/plants/week9/plant4/Wk9gsc1.jpg"
										]
								}, {
									"plant": 5,
									"plantPic": [
										"images/plants/week9/plant5/wk9or2.png"
										]
								}]
							}, {
								"week": "10",
								"plants": [{
									"plant": 1,
									"plantPic": [
										"images/plants/week10/plant1/Week10jh1.jpg",
										"images/plants/week10/plant1/Week10jhCU1.png",
										"images/plants/week10/plant1/Week10jhCU2.png",
										"images/plants/week10/plant1/Week10jhCU2a.png",
										"images/plants/week10/plant1/Week10jhCU3.png",
										"images/plants/week10/plant1/Week10jhCU4.png"
									]
								}, {
									"plant": 2,
									"plantPic": [
										"images/plants/week10/plant2/Week10css1.jpg",
										"images/plants/week10/plant2/Week10css2.jpg",
										"images/plants/week10/plant2/Week10cssCU1.png",
										"images/plants/week10/plant2/Week10cssCU2.png",
										 "images/plants/week10/plant2/Week10cssCU3.png",
										 "images/plants/week10/plant2/Week10cssCU4.png",
										 "images/plants/week10/plant2/Week10cssCU5.png",
										 "images/plants/week10/plant2/Week10cssCU6.png",
										 "images/plants/week10/plant2/Week10cssCU7.png",
										 "images/plants/week10/plant2/Week10cssCU8.png",
										 "images/plants/week10/plant2/Week10cssCU9.png"
										]
								}, {
									"plant": 3,
									"plantPic": [
										 "images/plants/week10/plant3/Week10adm1.jpg",
										 "images/plants/Week10/plant3/Week10admCU1.png",
										 "images/plants/week10/plant3/Week10admCU2.png",
										 "images/plants/week10/plant3/Week10admCU3.png",
										 "images/plants/week10/plant3/Week10admCU4.png",
										 "images/plants/week10/plant3/Week10admCU5.png",
										 "images/plants/week10/plant3/Week10admCU6.png"
									]
								}, {
									"plant": 4,
									"plantPic": [
										 "images/plants/week10/plant4/Week10gsc1.jpg",
										 "images/plants/week10/plant4/Week10gscCU1.jpg",
										 "images/plants/week10/plant4/Week10gscCU2.png",
										 "images/plants/week10/plant4/Week10gscCU3.png",
										 "images/plants/week10/plant4/Week10gscCU4.png",
										 "images/plants/week10/plant4/Week10gscCU5.png"
									]
								}, {
									"plant": 5,
									"plantPic": [
										 "images/plants/week10/plant5/Week10or1.jpg",
										 "images/plants/week10/plant5/Week10orCU1.png",
										 "images/plants/week10/plant5/Week10orCU5.png",
										 "images/plants/week10/plant5/Week10orCU4.png",
										 "images/plants/week10/plant5/Week10orCU3.png",
										 "images/plants/week10/plant5/Week10orCU2.png"
									]
								}]
							}, {
								"week": "11",
								"plants": [{
									"plant": 1,
									"plantPic": []
								}, {
									"plant": 2,
									"plantPic": []
								}, {
									"plant": 3,
									"plantPic": []
								}, {
									"plant": 4,
									"plantPic": []
								}, {
									"plant": 5,
									"plantPic": []
								}]
							}, {
								"week": "12",
								"plants": [{
									"plant": 1,
									"plantPic": []
								}, {
									"plant": 2,
									"plantPic": []
								}, {
									"plant": 3,
									"plantPic": []
								}, {
									"plant": 4,
									"plantPic": []
								}, {
									"plant": 5,
									"plantPic": []
								}]
							}, {
								"week": "13",
								"plants": [{
									"plant": 1,
									"plantPic": []
								}, {
									"plant": 2,
									"plantPic": []
								}, {
									"plant": 3,
									"plantPic": []
								}, {
									"plant": 4,
									"plantPic": []
								}, {
									"plant": 5,
									"plantPic": []
								}]
							}, {
								"week": "14",
								"plants": [{
									"plant": 1,
									"plantPic": []
								}, {
									"plant": 2,
									"plantPic": []
								}, {
									"plant": 3,
									"plantPic": []
								}, {
									"plant": 4,
									"plantPic": []
								}, {
									"plant": 5,
									"plantPic": []
								}]
							}]

						};
				/** end plant photos **/
			vm.tempArray = [];
      		/**---function declarations---**/
      		vm.getWeeklyPlantPhoto = getWeeklyPlantPhoto;
			/**---function---**/
			function getWeeklyPlantPhoto(weekNum){
				console.log("_PHOTO", vm._PHOTO.weekly);
				for(var i=0; i<vm._PHOTO.weekly.length; i++){
					if(weekNum == null){
						vm.tempArray.push(vm._PHOTO.weekly[i].plants);
					}else{
						if(vm._PHOTO.weekly[i].week == weekNum){
							vm.tempArray = vm._PHOTO.weekly[i].plants;
						}
					}
				}
				
				return vm.tempArray;
			}
			
		})
}());