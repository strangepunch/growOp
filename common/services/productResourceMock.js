/** mock **/
(function(){
	"use strict";

	var app = angular
				.module("productResourceMock",
						["ngMockE2E"]);
	
	app.run(function ($httpBackend){

		/***************************/
		/* growOp data starts here */
		/***************************/
/*************************************************/		
		var phases = [
		{
			"seedling" : "0"
		}, 
		{
			"vegetation" : "1"
		}, 
		{
			"flowering" : "2"
		}, 
		{
			"drying" : "3"
		}, 
		{
			"cure" : "4"
		}];
		
		/* use the feed sequence here to order the retrieval and display of daily feeding and compost tea data*/
		var feedStyles = [
			{
				"feedStyleName" :"foxfarm",
				"feedSequence" : ["0", "1", "2", "3", "4", "flush", "5", "6", "7", "flush", "8", "9", "10", "flush", "11", "12"]
			},
			{
				"feedStyleName" :"custom",
				"feedSequence" : ["0", "1", "2", "3", "4", "flush", "5", "6", "7", "flush", "8", "9", "10", "flush", "11", "12"]
			}

		];

		/* we could use this as a template for daily log - push to the logs colletion in local storage temporarily */
		var phases = [
		{
			"seedling" : "0"
		}, 
		{
			"vegetation" : "1"
		}, 
		{
			"flowering" : "2"
		}, 
		{
			"drying" : "3"
		}, 
		{
			"cure" : "4"
		}];



/** daily plant log data structure **/
 var plantLog = [
 {
 	"environment" : [
 		{
 			"roomTemp":70,
 			"roomHumidity":45,
 			"roomLight":80,
 			"totalWater":5,
 			"totalPPM":0,
 			"totalPH":0,
 			"timeOfDay":"evening",
 			"roomMsg":"nothing is going on around here.",
 			"entryTime":"11:55:45:130",
 			"entryDate":"2016/1/15"
 		}
 	], 
				"plant1" : [ 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				}],
				"plant2" :[ 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
			}],
			"plant3" :[ 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
			}],
			"plant4" :[ 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
			}],
			"plant5" :[ 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
			}],
			"plant6" :[ 
				{
					"PlantName":"Empty",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
			}]
		}];

		/** we could use this as a basis for the suggested feeding schedule based on the current foxfarm feedstyle  - this can form the basis of reminders ont he status screen and data on the feeding screen **/
		var foxfarmSchedule = [
			{
				"week" : "0",
				"growPhase" : "seedling",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "0 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "6 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "0 tsp"
					}
				],
				"light" : "18",
				"ECLow" : "0.6",
				"ECHigh" : "0.8",
				"PPMLow": "420",
				"PPMHigh": "560"
			},
			{
				"week" : "1",
				"growPhase" : "vegetative",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "0 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "6 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "0 tsp"
					}
				],
				"light" : "18",
				"ECLow" : "0.6",
				"ECHigh" : "0.8",
				"PPMLow": "420",
				"PPMHigh": "560"
			},
			{
				"week" : "2",
				"growPhase" : "vegetative",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "2 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "6 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "0 tsp"
					}
				],
				"light" : "18",
				"ECLow" : "0.6",
				"ECHigh" : "0.8",
				"PPMLow": "1260",
				"PPMHigh": "1470"
			},
			{
				"week" : "3",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "6 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "0 tsp"
					}
				],
				"light" : "18",
				"ECLow" : "2.3",
				"ECHigh" : "2.8",
				"PPMLow": "1610",
				"PPMHigh": "1960"
			},
			{
				"week" : "4",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "0 tsp"
					}
				],
				"light" : "18",
				"ECLow" : "2.5",
				"ECHigh" : "3.0",
				"PPMLow": "1750",
				"PPMHigh": "2100"
			},
			{
				"week" : "5",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "2 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "2 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "2.5",
				"ECHigh" : "3.0",
				"PPMLow": "1750",
				"PPMHigh": "2100"
			},
			{
				"week" : "6",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "2 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "2 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "2.8",
				"ECHigh" : "3.0",
				"PPMLow": "1960",
				"PPMHigh": "2100"
			},
			{
				"week" : "7",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "2 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "2 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "2.8",
				"ECHigh" : "3.0",
				"PPMLow": "1960",
				"PPMHigh": "2100"
			},
			{
				"week" : "8",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "2 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "2 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "3.0",
				"ECHigh" : "3.3",
				"PPMLow": "2100",
				"PPMHigh": "2310"
			},
			{
				"week" : "9",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "1 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "2 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "2.5",
				"ECHigh" : "2.8",
				"PPMLow": "1750",
				"PPMHigh": "1960"
			},
			{
				"week" : "10",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "0 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "2 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "2.0",
				"ECHigh" : "2.2",
				"PPMLow": "1400",
				"PPMHigh": "1540"
			},
			{
				"week" : "11",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "0 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "1 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "1.4",
				"ECHigh" : "1.7",
				"PPMLow": "980",
				"PPMHigh": "1190"
			},
			{
				"week" : "12",
				"growPhase" : "",
				"nutrients" : [
					{
						"name" : "GB",
						"Amt" : "0 tsp"
					},
					{
						"name" : "BB",
						"Amt" : "3 tsp"
					},
					{
						"name" : "TB",
						"Amt" : "1 tsp"
					}
				],
				"light" : "12",
				"ECLow" : "1.4",
				"ECHigh" : "1.7",
				"PPMLow": "980",
				"PPMHigh": "1190"
			}
		];

/** Use this to create a grwoth stage indicator for use on plant progress summary screen (and others)**/
var growthPhase = [
{
	"weekPhase" : [
	{
		"week" : "0",
		"phase" : "seedling"
	},
	{
		"week" : "0B",
		"phase" : "seedling"
	},
	{
		"week" : "1",
		"phase" : "vegetative"
	},
	{
		"week" : "2",
		"phase" : "vegetative"
	},
	{
		"week" : "3",
		"phase" : "vegetative"
	},
	{
		"week" : "4",
		"phase" : "vegetative"
	},
	{
		"week" : "5",
		"phase" : "flower"
	},
	{
		"week" : "6",
		"phase" : "flower"
	},
	{
		"week" : "7",
		"phase" : "flower"
	},
	{
		"week" : "8",
		"phase" : "flower"
	},
	{
		"week" : "9",
		"phase" : "flower"
	},
	{
		"week" : "10",
		"phase" : "flower"
	},
	{
		"week" : "11",
		"phase" : "flower"
	},
	{
		"week" : "12",
		"phase" : "flower"
	},
	{
		"week" : "13",
		"phase" : "drying"
	},
	{
		"week" : "14",
		"phase" : "curing"
	}]
}];

/* Use this to populate weekly schedule with graphics and give user control by week number */
var weeklySchedule = [
{
	"weekImages" : [
	{
		"week" : "0",
		"weekImg" : "images/schedule/week0.jpg"
	},
	{
		"week" : "0B",
		"weekImg" : "images/schedule/week0B.jpg"
	},
	{
		"week" : "1",
		"weekImg" : "images/schedule/week1.jpg"
	},
	{
		"week" : "2",
		"weekImg" : "images/schedule/week2.jpg"
	},
	{
		"week" : "3",
		"weekImg" : "images/schedule/week3.jpg"
	},
	{
		"week" : "4",
		"weekImg" : "images/schedule/week4.jpg"
	},
	{
		"week" : "5",
		"weekImg" : "images/schedule/week5.jpg"
	},
	{
		"week" : "6",
		"weekImg" : "images/schedule/week6.jpg"
	},
	{
		"week" : "7",
		"weekImg" : "images/schedule/week7.jpg"
	},
	{
		"week" : "8",
		"weekImg" : "images/schedule/week8.jpg"
	},
	{
		"week" : "9",
		"weekImg" : "images/schedule/week9.jpg"
	},
	{
		"week" : "10",
		"weekImg" : "images/schedule/week10.jpg"
	},
	{
		"week" : "11",
		"weekImg" : "images/schedule/week11.jpg"
	},
	{
		"week" : "12",
		"weekImg" : "images/schedule/week12.jpg"
	},
	{
		"week" : "13",
		"weekImg" : "images/schedule/week13.jpg"
	},
	{
		"week" : "14",
		"weekImg" : "images/schedule/week14.jpg"
	}]
}];

/** end weekly scheudule **/

/** this is the current json strucure of the data being returned by the grower via the daily plantLog screen**/
/*var logData = [
{
	"environment" : 
				{
					"roomTemp":70,
					"roomHumidity":45,
					"roomLight":80,
					"totalWater":5,
					"totalPPM":0,
					"totalPH":0,
					"timeOfDay":"evening",
					"roomMsg":"nothing is going on around here.",
					"entryTime":"10:22:7:590",
					"entryDate":"2016/1/14"
				},
				"plant1" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant2" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant3" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant4" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant5" :
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant6" : 
				{
					"PlantName":"",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"00:0:0:000",
					"entryDate":"2016/1/1"
				}];

*/
/* push new values into a structure like this to record and retrieve ongoing data */
/*		var myGrowData = [
		{
				"week" : "0D1",
				"environment" : 
				{
					"roomTemp":70,
					"roomHumidity":45,
					"roomLight":80,
					"totalWater":5,
					"totalPPM":0,
					"totalPH":0,
					"timeOfDay":"evening",
					"roomMsg":"nothing is going on around here.",
					"entryTime":"10:22:7:590",
					"entryDate":"2016/1/14"
				},
				"plant1" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant2" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant3" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant4" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant5" :
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant6" : 
				{
					"PlantName":"",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"00:0:0:000",
					"entryDate":"2016/1/1"
				},
			},
			{
				"week" : "0D2",
				"environment" : 
				{
					"roomTemp":70,
					"roomHumidity":45,
					"roomLight":80,
					"totalWater":5,
					"totalPPM":0,
					"totalPH":0,
					"timeOfDay":"evening",
					"roomMsg":"nothing is going on around here.",
					"entryTime":"10:22:7:590",
					"entryDate":"2016/1/14"
				},
				"plant1" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant2" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant3" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant4" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant5" :
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant6" : 
				{
					"PlantName":"",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"00:0:0:000",
					"entryDate":"2016/1/1"
				},
			},
			{
				"week" : "0D3",
				"environment" : 
				{
					"roomTemp":70,
					"roomHumidity":45,
					"roomLight":80,
					"totalWater":5,
					"totalPPM":0,
					"totalPH":0,
					"timeOfDay":"evening",
					"roomMsg":"nothing is going on around here.",
					"entryTime":"10:22:7:590",
					"entryDate":"2016/1/14"
				},
				"plant1" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant2" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant3" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant4" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant5" :
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant6" : 
				{
					"PlantName":"",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"00:0:0:000",
					"entryDate":"2016/1/1"
				},
			},
			{
				"week" : "0D4",
				"environment" : 
				{
					"roomTemp":70,
					"roomHumidity":45,
					"roomLight":80,
					"totalWater":5,
					"totalPPM":0,
					"totalPH":0,
					"timeOfDay":"evening",
					"roomMsg":"nothing is going on around here.",
					"entryTime":"10:22:7:590",
					"entryDate":"2016/1/14"
				},
				"plant1" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant2" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant3" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant4" : 
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant5" :
				{
					"PlantName":"Jack",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"10:5:8:856",
					"entryDate":"2016/1/14"
				},
				"plant6" : 
				{
					"PlantName":"",
					"PlantDesc":"NA",
					"plantType":"annual",
					"plantWater":1,
					"plantPPM":0,
					"plantPH":0,
					"plantHeight":0,
					"plantCond":"good",
					"timeOfDay":"morning",
					"plantMsg":"",
					"entryTime":"00:0:0:000",
					"entryDate":"2016/1/1"
				},
			},
			{
				"week" : "0D5",
				"weekImg" : "images/schedule/week3.jpg"
			},
			{
				"week" : "0D6",
				"weekImg" : "images/schedule/week4.jpg"
			},
			{
				"week" : "0D7",
				"weekImg" : "images/schedule/week5.jpg"
			},
			{
				"week" : "1D1",
				"weekImg" : "images/schedule/week6.jpg"
			},
			{
				"week" : "1D2",
				"weekImg" : "images/schedule/week7.jpg"
			},
			{
				"week" : "8",
				"weekImg" : "images/schedule/week8.jpg"
			},
			{
				"week" : "9",
				"weekImg" : "images/schedule/week9.jpg"
			},
			{
				"week" : "10",
				"weekImg" : "images/schedule/week10.jpg"
			},
			{
				"week" : "11",
				"weekImg" : "images/schedule/week11.jpg"
			},
			{
				"week" : "12",
				"weekImg" : "images/schedule/week12.jpg"
			},
			{
				"week" : "13",
				"weekImg" : "images/schedule/week13.jpg"
			},
			{
				"week" : "14",
				"weekImg" : "images/schedule/week14.jpg"
			}
	}];
 

*/

/*************************************************/

/** strain data **/
		var strains = [
			{"strainId": 1,
			 "strainName": "Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
				 	{ 
				 		"name": "THC9", 
				 		"value": 15.15
				 	},
				 	{ 
				 		"name": "CBD", 
				 		"value": 0.25
				 	},
				 	{ 
				 		"name": "CBN", 
				 		"value": 0.57
				 	},
				 	{ 
				 		"name": "CBG", 
				 		"value": 0.62
				 	},
				 	{ 
				 		"name": "CBC", 
				 		"value": 0.30
				 	},
				 	{ 
				 		"name": "THCV", 
				 		"value": 0.03
				 	},
				 	{ 
				 		"name": "THCA", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "THC8", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Pulegone", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Myrcene", 
				 		"value": 0.40
				 	},
				 	{ 
				 		"name": "Caryophyllene", 
				 		"value": 0.40
				 	},
				 	{ 
				 		"name": "Limonene", 
				 		"value": 0.50
				 	},
				 	{ 
				 		"name": "Linalool", 
				 		"value": 0.01
				 	},
				 	{ 
				 		"name": "Eucalyptol", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Pinene", 
				 		"value": 0.20
				 	},
				 	{ 
				 		"name": "Terpineol", 
				 		"value": 0.00
				 	},
				 	{ 
				 		"name": "Terpineol-4", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Cymene", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Apigenin", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Quercetin", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Cannflavin A", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Beta-sitosterol", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "CBL", 
				 		"value": 0.0
				 	},
				 	{ 
				 		"name": "Humulene", 
				 		"value": 0.00
				 	},
				 	{ 
				 		"name": "Terpinolene", 
				 		"value": 0.00
				 	} 	
		 	],
		 	 "taste": ["Earthy","Pine","Pungent"],
		 	 "conditions": ["ADD/ADHD", "HCV", "Anxiety", "Bipolar", "Depression", "Insomnia", "Pain", "Stress", "Headache"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "They call it Trainwreck for a reason: First comes euphoria, then creativity and happiness. This train is leaving the station.",
			 "tags": [""],
			 "imageUrl": "images/strains/trainwreck_100x100.jpg"
			},
			{"strainId": 2,
			 "strainName": "White Widow", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.12
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
			 ],
			 "taste": ["Earthy","Woody","Pungent"],	 	
		 	 "conditions": ["Anxiety","Depression", "Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Uplifted", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Great for conversations and feeling creative, you'll feel both energetic and uplifted with White Widow.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-widow_100x100.jpg"
			},
			{"strainId": 3,
			 "strainName": "Sage", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.82
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
		 	],
		 	 "taste": ["Sage","Earthy","Woody"],   
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Pain", "Fatigue", "Muscle Spasms", "Fibromyalgia", "Appetite Loss"],
			 "positiveEffects": ["Long Lasting", "Uplifted", "Pain relief", "Happy", "Hungry"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Depression, stress and axiety will fade away with the spicy and sandalwood flavors of this long lasting strain.",
			 "tags": [""],
			 "imageUrl": "images/strains/sage_100x100.jpg"
			},
			{"strainId": 4,
			 "strainName": "Skywalker OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 26.88
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.74
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.7
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 3.12
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy","Pungent", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Tension", "Anxiety", "Depression", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted","Hungry", "Tingly", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Munchies", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll be comfortably numb with a little tingle as you relax with the strong body effects that Skywalker OG provides.",
			 "tags": [""],
			 "imageUrl": "images/strains/skywalker-og_100x100.jpg"
			},
			{"strainId": 5,
			 "strainName": "Permafrost", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.76
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.07
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.37
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy","Pine", "Sweet"],
			"conditions": ["Gastrointestinal Disorders", "ADD/ADHD", "Anxiety", "Arthritis", "Asthma", "Multiple Sclerosis", "Stress", "Pain", "Depression", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Creative", "Euphoric", "Potent", "Balanced", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "An uplifting, creative balance between mind and body effects lead to a relaxing desire to rest with this potent strain.",
			 "tags": [""],
			 "imageUrl": "images/strains/permafrost_100x100.jpg"
			},
			{"strainId": 6,
			 "strainName": "Querkle", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet","Berry","Earthy"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Arthritis", "Depression", "Fibromyalgia", "Insomnia", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Almost instantly you'll feel the creativity soar as your muscles relax into a grape and earthy flavored happiness.",
			 "tags": [""],
			 "imageUrl": "images/strains/querkle_100x100.jpg"
			},
			{"strainId": 7,
			 "strainName": "Papaya", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.21
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Tropical","Sweet","Mango"],
		 	 "conditions": ["Stress", "Pain", "Headache", "Insomnia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Creative", "Uplifted", "Calmness", "Mellow", "Energetic", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Papaya will have you feeling energetic, calm, productive and mellow. With a taste of mango in the tropics, Papaya can lead you into creative endeavors while easing stress and pain.",
			 "tags": [""],
			 "imageUrl": "images/strains/papaya_100x100.jpg"
			},
			{"strainId": 8,
			 "strainName": "Pennywise", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 8.12
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 7.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.56	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.12
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.42
				} 	
		 	],
		 	"taste": ["Earthy","Sweet","Woody", "Coffee", "Lemon"],
		 	 "conditions": ["Stress", "Pain", "Arthritis", "PTSD", "Epilepsy", "Cancer", "Migraines", "Headache", "Hypertension", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Pain relief", "Psychoactive", "Therapeutic", "Relaxed", "Mellow", "Clear headed", "Euphoric"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
 			 "descriptionAbbrev":  "The CBD in Pennywise makes it a popular treatment for arthritis, PTSD, cancer symptoms and neurological disorders like epilepsy. You can expect to feel clear headed, energetic, happy and focused.",
			 "tags": [""],
			 "imageUrl": "images/strains/pennywise_100x100.jpg"
			},
			{"strainId": 9,
			 "strainName": "OG #18", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.84
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.76
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Diesel", "Earthy", "Skunk"],   
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": ["Long Lasting", "Potent", "Pain relief", "Relaxed", "Mellow", "Conversational"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a long-lasting, somewhat sedative effect you can expect to feel relaxed, mellow and conversational with OG #18.",
			 "tags": [""],
			 "imageUrl": "images/strains/og--18_100x100.jpg"
			},
			{"strainId": 10,
			 "strainName": "OG Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.32
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Anorexia", "ADD/ADHD", "Pain", "Appetite Loss", "Insomnia", "Migraines", "Stress", "Anxiety", "Depression"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifting", "Relaxed", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With it's well known Pine and Earthy flavors, OG Kush will have you feeling happy, uplifted and a bit hungry as you ease into a relaxed and restful mood.",
			 "tags": [""],
			 "imageUrl": "images/strains/og-kush_100x100.jpg"
			},
			{"strainId": 11,
			 "strainName": "Canna-Tsu", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 8.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.70
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Pungent", "Woody", "Citrus", "Mint"],
		 	 "conditions": ["Cancer", "Nausea", "Epilepsy", "Stress", "Pain", "Appetite Loss", "Inflammation", "Depression"],
			 "positiveEffects": ["Potent", "Clear headed", "Euphoric", "Drowsiness", "Pain relief", "Relaxed", "Mellow", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you're looking for a high CBD strain, Canna-Tsu delivers. Mellow but potent effects bring mental clarity along with pain relief and a citrus, minty flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/canna-tsu_100x100.jpg"
			},
			{"strainId": 12,
			 "strainName": "Nebula", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.75
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.93
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.74
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Honey", "Sweet", "Flowery"],
		 	 "conditions": ["Depression", "Stress", "Nausea", "Pain", "Fatigue", "Migraines"],
			 "positiveEffects": ["Intense", "Mind + Body", "Euphoric", "Happy", "Uplifted", "Relaxed", "Mellow", "Creative", "Focused"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll feel like you're in space with Nebula's intense head and body buzz that has been described as almost psychedelic.",
			 "tags": [""],
			 "imageUrl": "images/strains/nebula_100x100.jpg"
			},
			{"strainId": 13,
			 "strainName": "XJ-13", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.92
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.82
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.16
				} 	
		 	], 
		 	"taste": ["Citrus", "Pine", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Appetite Loss", "Anorexia", "Pain", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Creative", "Hungry", "Conversational", "Therapeutic", "Energetic", "Relaxed", "Mellow"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
 			 "descriptionAbbrev":  "Combining therapeutic effects and good conversation, XJ-13 will make you feel creative and uplifted while stimulating your appetite as it relieves pain.",
			 "tags": [""],
			 "imageUrl": "images/strains/xj-13_100x100.jpg"
			},
			{"strainId": 14,
			 "strainName": "Yumboldt", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.77
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.94
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Pain", "Stress", "Insomnia", "Nausea", "Appetite Loss"],
			 "positiveEffects": ["Drowsiness", "Euphoric", "Relaxed", "Mellow",  "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll feel mellow, relaxed and content with an enhanced appetite just before you drift off into a refreshing bit of sleep with Yumboldt.",
			 "tags": [""],
			 "imageUrl": "images/strains/yumboldt_100x100.jpg"
			},
			{"strainId": 15,
			 "strainName": "Vortex", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pungent", "Citrus", "Lemon"],
		 	 "conditions": ["Stress", "Depression", "Fatigue", "Appetite Loss", "Pain"],
			 "positiveEffects": ["Happy", "Euphoric", "Energetic", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Depression and fatigue will melt away into happiness and creativity with Vortex.",
			 "tags": [""],
			 "imageUrl": "images/strains/vortex_100x100.jpg"
			},
			{"strainId": 16,
			 "strainName": "Warlock", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.31
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Tea"],
		 	 "conditions": ["Pain", "Stress", "Nausea", "Depression", "Insomnia", "ADD/ADHD"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Tingly", "Uplifted", "Happy", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Headache", "Paranoid", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "When you need to focus, Warlock will make those pesky distractions fade away with its stimulating and uplifting effects. Currently being used to treat patients with ADD/ADHD.",
			 "tags": [""],
			 "imageUrl": "images/strains/warlock_100x100.jpg"
			},
			{"strainId": 17,
			 "strainName": "Strawberry Cough", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.89
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Energetic", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you're feeling anxious about social situations, Strawberry Cough will help with its energetic yet relaxing conversational effects. The sweet berry flavor is icing on the cake.",
			 "tags": [""],
			 "imageUrl": "images/strains/strawberry-cough_100x100.jpg"
			},
			{"strainId": 18,
			 "strainName": "Stardawg", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 11.45
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pungent", "Diesel", "Earthy"],
		 	 "conditions": ["Stress", "Depression", "ADD", "PTSD", "Anxiety", "Fatigue"],
			 "positiveEffects": ["Potent", "Uplifted", "Clear headed", "Energetic", "Productive", "Conversational", "Relaxed", "Long Lasting"],
			 "negativeEffects": ["Energetic"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "When you're stressed and feeling fatigued, Stardawg can help with its uplifting and energetic effects. You may also feel like talking so be sure to be around someone who likes to listen.",
			 "tags": [""],
			 "imageUrl": "images/strains/stardawg_100x100.jpg"
			},
			{"strainId": 19,
			 "strainName": "Strawberry", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.61
			 	},
			 	{ 
			 		"name": "CBD",
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 4.15
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["Anxiety", "Stress", "Depression", "Insomnia", "Pain", "Nausea"],
			 "positiveEffects": ["Relaxed", "Calmness", "Mellow", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "When you need to relax and relieve stress, Strawberry will bring calmness and a bit of drowsiness along with its refreshing berry flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/strawberry_100x100.jpg"
			},
			{"strainId": 20,
			 "strainName": "Sour Diesel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.86
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Diesel", "Pungent", "Earthy"],
		 	 "conditions": ["Anorexia","Anxiety", "Depression", "Insomnia", "Appetite Loss","Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Relaxed",  "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known to be a popular choice among medical patients, Sour Diesel gives long-lasting relief from stress, pain and anxiety along with an enhanced appetite.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-diesel_100x100.jpg"
			},
			{"strainId": 21,
			 "strainName": "Shipwreck", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Citrus"],
		 	 "conditions": ["Pain", "Eye Pressure", "Fatigue", "Stress", "Headache"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Energetic", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known to help with Glaucoma, you'll also feel a mellow lift with a strong body buzz that ends in a bit of relaxed inactivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/Shipwreck_100x100.jpg"
			},
			{"strainId": 22,
			 "strainName": "Skywalker", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.25
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Stress", "Pain", "Insomnia","Depression", "Anxiety"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Less Social"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "When you need to relax and get some rest, Skywalker will deliver without making you feel too hazy or unfocused.",
			 "tags": [""],
			 "imageUrl": "images/strains/skywalker_100x100.jpg"
			},
			{"strainId": 23,
			 "strainName": "Romulan", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.53
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.01
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.63
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Woody"],
		 	 "conditions": ["Stress", "Appetite Loss", "Anorexia", "Insomnia", "Pain", "Depression", "Nausea"],
			 "positiveEffects": ["Potent", "Relaxed", "Drowsiness", "Happy", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll be in the neutral zone but you won't mind. Heavily intoxicating effects with a full body calm are accompanied with a woody, pine flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/romulan_100x100.jpg"
			},
			{"strainId": 24,
			 "strainName": "Purple Wreck", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Berry", "Pine", "Tar"],
		 	 "conditions": ["Pain", "Stress", "Insomnia", "Appetite Loss", "Depression"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Productive", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Relieve pain and stress while staying active and productive. Taste the berry and pine combination with Purple Wreck and then taste everything in your fridge.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-wreck_100x100.jpg"
			},
			{"strainId": 25,
			 "strainName": "Pineapple", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.72
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pineapple", "Sweet", "Tropical"],
		 	 "conditions": ["PMS", "Stress", "Pain", "Anxiety", "Nausea", "Depression", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Energetic", "Euphoric", "Uplifted", "Conversational", "Creative", "Drowsiness"],
			 "negativeEffects": ["Couch Lock", "Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known to be effective for stress relief and anxiety, the distinctive tropical pineapple flavor starts out energetic, conversational and uplifting but you can plan on rest ",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple_100x100.jpg"
			},
			{"strainId": 26,
			 "strainName": "Purple Cheese", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.96
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.64
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Cheese", "Sweet", "Grape"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Depression", "Insomnia", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Uplifted", "Focused", "Relaxed", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Powerful full body effects will have you feeling creative and pain-free long into the night.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-cheese_100x100.jpg"
			},
			{"strainId": 27,
			 "strainName": "ACDC", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 20.60
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.78
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.48
				},
					{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],  
		 	"taste": ["Earthy", "Skunk", "Sweet"],
		 	 "conditions": ["Cancer", "Epilepsy", "Migraines", "Muscle Spasms", "Pain", "Stress", "Bipolar", "Depression", "Nausea", "Hypertension", "HIV/AIDS", "Glaucoma", "PTSD", "Anxiety", "Multiple Sclerosis"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Dizzy", "Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you're looking for therapeutic relief without intoxication, ACDC may be a good choice. Popular with patients seeking relief from pain, anxiety, mulitple sclerosis and negative side effects associated with chemotherapy.",
			 "tags": [""],
			 "imageUrl": "images/strains/acdc_100x100.jpg"
			},
			{"strainId": 28,
			 "strainName": "Shark Shock", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.72
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],  
		 	"taste": ["Sweet", "Skunk", "Pungent", "Tobacco"],
		 	 "conditions": ["Anorexia", "Anxiety", "Pain", "Asthma", "Depression", "Fibromyalgia", "Stress", "Appetite Loss", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Pain relief", "Drowsiness", "Productive", "Hungry", "Euphoric", "Creative"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Shark Shock tastes fruity and offers chronic pain relief as well as help with depression and lack of appetite. The effects can be a bit intense so it's best to use this when you don't mind getting some rest.",
			 "tags": [""],
			 "imageUrl": "images/strains/shark-shock_100x100.jpg"
			},
			{"strainId": 29,
			 "strainName": "Superman OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.32
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	],  
		 	"taste": ["Pine", "Pungent", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Depression", "Insomnia", "Appetite Loss", "Pain", "PMS", "Stress" ],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Drowsiness", "Euphoric", "Stimulate Hunger"],
			 "negativeEffects": ["Munchies", "Drowsiness", "Couch Lock", "Dry Eyes", "Dry Mouth", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you need to rest quickly and don't mind a strong body sensation along with a bit of hunger,Superman OG is the strain for you. Also known to help with patients suffering from Asthma symptoms.",
			 "tags": [""],
			 "imageUrl": "images/strains/superman-og_100x100.jpg"
			},
			{"strainId": 30,
			 "strainName": "Thin Mint", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.0
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 4.21
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.92
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.31
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	], 
		 	"taste": ["Sweet", "Mint"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Bipolar", "Depression", "Nausea", "PMS", "Pain", "Swelling", "Insomnia", "Appetite Loss", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Also known as thin mint girl scout cookies, it's reputation is well deserved. Powerful full body effects provide relief from a variety of conditions including bipolar disorder, anorexia, insomia, athsma and more.",
			 "tags": [""],
			 "imageUrl": "images/strains/thin-mint-girl-scout-cookies_100x100.jpg"
			},
			{"strainId": 31,
			 "strainName": "Banana Diesel", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.92
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Diesel", "Sweet", "Chemical"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety","Bipolar", "Epilepsy", "Migraines", "Pain", "Stress", "Appetite Loss", "Mood Disorders"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Great for daytime consumption, with Banana Diesel you'll get an energizing kick with enhanced ability to focus alogn with increased appetite and relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/banana-diesel_100x100.jpg"
			},
			{"strainId": 32,
			 "strainName": "Candy OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.80
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": [""],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety", "Bipolar", "Depression", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Focused", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A good choice for late night medication, patients report relief from insomnia and sleep apnea with Candy OG.",
			 "tags": [""],
			 "imageUrl": "images/strains/Candy-Og.jpg"
			},
			{"strainId": 33,
			 "strainName": "Chem Valley Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Earthy", "Sweet"], 
		 	 "conditions": ["Bipolar", "Stress", "Pain", "Appetite Loss", "Insomnia", "Depression"],
			 "positiveEffects": ["Happy", "Euphoric", "Creative", "Relaxed"],
			 "negativeEffects": ["Dizzy", "Cotton Mouth", "Dry Eyes", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Comfortable and well balanced, enjoy citrus and fruity flavors without being overwhelmed with Chem Valley Kush.",
			 "tags": [""],
			 "imageUrl": "images/strains/chem-valley-kush_100x100.jpg"
			},
			{"strainId": 34,
			 "strainName": "Confidential Cheese", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.49
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Cheese", "Pungent", "Earthy"], 
		 	 "conditions": ["ADD/ADHD","Anorexia","Arthritis", "Pain","Bipolar","Depression", "Insomnia", "Appetite Loss", "Nausea", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Conversational", "Creative"],
			 "negativeEffects": ["Anxious", "Dry Mouth", "Dry Eyes", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With dominant Indica charactersitics, you can expect relief from severe pain, insomnia and appetite loss with Confidential Cheese.",
			 "tags": [""],
			 "imageUrl": "images/strains/confidential-cheese_100x100.jpg"
			},
			{"strainId": 35,
			 "strainName": "Deadhead OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.87
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.52
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Pungent", "Skunk", "Earthy"],
		 	 "conditions": ["ADD/ADHD","Anxiety","Bipolar", "Depression", "Migraines", "Headache", "Stress", "Insomnia", "Muscle Pain"],
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Deadhead OG is known to treat anxiety, muscle and joint pain as well as insomnia. You'll have increased focus, but it might just be the couch.",
			 "tags": [""],
			 "imageUrl": "images/strains/deadhead-og_100x100.jpg"
			},
			{"strainId": 36,
			 "strainName": "Diablo", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.64
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Berry", "Sweet", "Spicy", "Herbal"],
		 	 "conditions": ["Bipolar", "Pain", "Insomnia", "Migraines", "Headache", "Nausea", "Stress", "Depression"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyess", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you're looking for relief from Migraines and a bit of rest, Diablo can help. With both fruity and spicy flavors, your headache and insomnia will fade into relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/diablo_100x100.jpg"
			},
			{"strainId": 37,
			 "strainName": "Dutch Passion", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.78
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.15
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Fruity", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Bipolar", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "When you want to feel creative, focused and productive, Dutch Passion delivers.",
			 "tags": [""],
			 "imageUrl": "images/strains/dutch-passion.JPG"
			},
			{"strainId": 38,
			 "strainName": "Eden OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.31
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Stress", "Seizures", "Pain", "Nausea", "Migraines", "Appetite Loss", "Depression", "Bipolar", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Productive", "Sexual", "Relaxed", "Hungry"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Eden OG hits like a freight train with a strong body effect in the caboose. Reported to treat impotence as well as migraines, appetite loss and even seizures, you'll feel relaxed yet productive with this strain.",
			 "tags": [""],
			 "imageUrl": "images/strains/eden.jpg"
			},
			{"strainId": 39,
			 "strainName": "Euphoria", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.87
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet","Flowery","Woody"], 
		 	 "conditions": ["Bipolar", "Social Anxiety", "Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Energetic", "Creative", "Conversational", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll get a sense of well being and relief from social anxiety with Euphoria. Like its name implies, happiness and uplifted mood lead to enhanced conversations.",
			 "tags": [""],
			 "imageUrl": "images/strains/euphoria_100x100.jpg"
			},
			{"strainId": 40,
			 "strainName": "Fire Bomb", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 28.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 3.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Fruity"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Migraines", "Appetite Loss", "Insomnia", "Depression", "Bipolar", "Arthritis", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry", "Potent", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Fire Bomb starts with a rush of energy which follows through with a more relaxed, happy, chilled effect which smoulders on and on.",
			 "tags": [""],
			 "imageUrl": "images/strains/fire_bomb.jpg"
			},
			{"strainId": 41,
			 "strainName": "Forum Cookies/GSC", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.86
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Pain", "Stress", "Nausea"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Considered by many to be the true Girl Scout Cookies, this hybrid will make you feel happy, creative and focused.",
			 "tags": [""],
			 "imageUrl": "images/strains/forum_cookies.jpg"
			},
			{"strainId": 42,
			 "strainName": "Gooey Wreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Cheese", "Cherry"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety",  "Bipolar", "Migraines", "Headache", "Hypertension", "Depression", "Glaucoma", "Appetite Loss", "Muscle Spasms", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed"],
			 "negativeEffects": ["Munchies", "Dry Eyes", "Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Reported to treat both inflammation and migraines as well as chroninc pain, Gooey Wreck taste a bit like cherry cheesecake.",
			 "tags": [""],
			 "imageUrl": "images/strains/gooey-wreck.jpg"
			},
			{"strainId": 43,
			 "strainName": "Grapefruit Haze", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.24
				} 	
		 	], 
		 	 "taste": ["Pepper", "Grapefruit", "Citrus"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Migraines", "PMS", "Stress", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Both fruity and spicy, you'll experience a strong mental high with a creative boost of energy and happiness wth Grapefruit Haze.",
			 "tags": [""],
			 "imageUrl": "images/strains/grapefruit-haze_100x100.jpg"
			},
			{"strainId": 44,
			 "strainName": "Green Crack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 2.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Citrus", "Earthy"],   
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Energetic", "Happy", "Uplifted", "Euphoric", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Happy, creative and productive is how many describe the effects of Green Crack. Also known as Cush in many circles, you'll want to try this one during the day to keep anxiety and stress away.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-crack_100x100.jpg"
			},
			{"strainId": 45,
			 "strainName": "Green Dream", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.18
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.80
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.82
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.38
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Blueberry"], 
		 	 "conditions": ["Anorexia", "Anxiety", "Asthma", "Depression", "Bipolar", "PMS", "Appetite Loss", "Pain", "Muscle Spasms", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Euphoric", "Productive", "Creative", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The Green Crack intensity and energetic buzz compliments the Blue Dream's soulfulness.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-dream_100x100.jpg"
			},
			{"strainId": 46,
			 "strainName": "Green Thailand", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 28.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.64
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.63
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.01
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	],  
		 	"taste": ["Fruity", "Sweet"],
		 	 "conditions": ["Anxiety", "Arthritis", "Bipolar", "Depression", "Glaucoma", "Appetite Loss", "Migraines", "Headache", "Nausea", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Creative", "Productive", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "One of the highest THC contents of any cannabis variety in the world. Green Thailand is a pure landrace Thai strain from the island of Ko Chang in Thailand.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-thai_100x100.jpg"
			},
			{"strainId": 47,
			 "strainName": "H-Train Wreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.05
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Pine", "Pungent"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Bipolar", "Migraines", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "People swear by Trainwreck for its pain relief and other medicinal qualities.",
			 "tags": [""],
			 "imageUrl": "images/strains/H-trainwreck.jpg"
			},
			{"strainId": 48,
			 "strainName": "Hawaiian Hulk", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.16
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Sweet", "Tropical", "Citrus"],
		 	 "conditions": ["Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Pain", "Chronic Back Pain", "Heart Murmur",  "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Productive", "Creative", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A great strain for relaxing with friends or listening to music.",
			 "tags": [""],
			 "imageUrl": "images/strains/bruce-banner_100x100.jpg"
			},
			{"strainId": 49,
			 "strainName": "Jack Chemdawg", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.19
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 1.06
				} 	
		 	],  
		 	"taste": ["Earthy", "Diesel", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Migraines", "PMS", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Expect to have a very cerebral experience, coupled with a strong heavy-bodied feeling.",
			 "tags": [""],
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"
			},
			{"strainId": 50,
			 "strainName": "Jack Herer", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.25
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.29
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Woody"], 
		 	 "conditions": ["Anorexia","Depression", "Anxiety", "Bipolar", "Stress", "Pain", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Uplifted", "Euphoric", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Consumers typically describe this 55% sativa hybrid as blissful, clear headed, and creative.",
			 "tags": [""],
			 "imageUrl": "images/strains/jack-herer_100x100.jpg"
			},
			{"strainId": 51,
			 "strainName": "Jillybean", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.53
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.43
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],  
		 	"taste": ["Sweet", "Citrus", "Orange"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy","Euphoric", "Energetic", "Pain relief", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A top choice for creative minds and social butterflies looking for unencumbered euphoria during daytime hours.",
			 "tags": [""],
			 "imageUrl": "images/strains/jillybean_100x100.jpg"
			},
			{"strainId": 52,
			 "strainName": "Lamb's Bread", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.81
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.68
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],  
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Appetite Loss", "Pain", "Stress", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": " The origins of this plant comes from Jamaica and it has been reported that even Bob Marley himself has encountered this wonderful slice of cannabis genealogy.",
			 "descriptionAbbrev":  "Known to give mass amounts of energy and positive introspection, stress subsides quickly from the Lamb's Bread buzz, which can help ease depression.",
			 "tags": ["Sativa", "Lamb's Bread", "Bipolar"],
			 "imageUrl": "images/strains/lamb-s-bread_100x100.jpg"
			},
			{"strainId": 53,
			 "strainName": "Lemon Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 	 	"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.18
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 1.82
				} 	
		 	],
		 	"taste": ["Lemon", "Citrus", "Sweet"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Asthma", "Bipolar", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Lemon Haze Has been characterized as smelling of fresh peeled lemon slices with a similar taste.",
			 "tags": [""],
			 "imageUrl": "images/strains/lemon-haze_100x100.jpg"
			},
			{"strainId": 54,
			 "strainName": "Lemon Head OG", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.24
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Lemon", "Diesel"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Asthma", "Bipolar", "Depression", "Migraines", "Pain", "Stress", "Cramps", "Nausea"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Its taste and aroma carry a strong citrus note that is entangled with tones of spicy pepper and pungent diesel fuel.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-lemon-og_100x100.jpg"
			},
			{"strainId": 55,
			 "strainName": "Lulu", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 28.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.99
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.01
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.52
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	], 
		 	"taste": ["Earthy", "Chocolate", "Lemon"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Migraines", "Insomnia", "Hypertension", "Fibromyalgia", "Depression", "Bipolar", "Arthritis", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Creative", "Productive"],
			 "negativeEffects": ["Conversational", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The result of a Mikado daddy and a clone-only Green Crack mother that came from British Columbia.",
			 "tags": [""],
			 "imageUrl": "images/strains/lulu200x160.jpg"
			},
			{"strainId": 56,
			 "strainName": "Magic Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.31
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.33
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.37
				} 	
		 	],   
		 	"taste": ["Lemon", "Woody"],
		 	 "conditions": ["Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Migraines", "Pain", "PMS", "Stress", "Fibromyalgia", "Nausea"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This is a perfect daytime strain, energetic but not too racy, and great for helping relieve stress and promoting a sense of peace and relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/Magic-Jack-300.jpg"
			},
			{"strainId": 57,
			 "strainName": "Mike Tyson", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.33
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.69
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Sweet", "Skunk", "Diesel"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety","Bipolar", "Depression", "Hypertension", "Appetite Loss", "Muscle Spasms", "Pain","PMS"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Certainly pays respect to the man with the greatest one hitter in the history of the sport.",
			 "tags": [""],
			 "imageUrl": "images/strains/mike-tyson-marijuana-strain.jpg"
			},
			{"strainId": 58,
			 "strainName": "Moon Candy", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Fruity"], 
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Bipolar", "Depression", "Insomnia", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a sweet and fruity taste, Moon Candy will make you feel happy and creative while relieving stress and pain.",
			 "tags": [""],
			 "imageUrl": "images/strains/moon_candy.jpg"
			},
			{"strainId": 59,
			 "strainName": "Moonshine Diesel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.57
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.16
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],   
		 	"taste": ["Citrus", "Flowery", "Diesel", "Grapefruit"],
		 	 "conditions": ["Anorexia", "Anxiety", "Bipolar", "Depression", "Fibromyalgia", "Migraines", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Long Lasting", "Focused", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Munchies", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The high is long lasting and physical, commonly beginning with hilarity, followed by extreme appetite stimulation then sedation.",
			 "tags": [""],
			 "imageUrl": "images/strains/moonshine-Deisel.jpg"
			},
			{"strainId": 60,
			 "strainName": "Northern Lights", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.69
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.13
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.11
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.69
				} 	
		 	],   
		 	"taste": ["Earthy", "Sweet", "Pine"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Arthritis", "Bipolar", "Depression", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Conversational", "Drowsiness", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Comfortable laziness allows patients to relieve pain and sleeplessness, while its mellow contentment roots out depression and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/northern-lights_100x100_7d43.jpg"
			},
			{"strainId": 61,
			 "strainName": "Pineapple Express", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.73
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.76
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.47
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Pineapple", "Sweet", "Tropical"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Appetite Loss", "Pain", "PMS", "Stress", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Focused", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This hard-hitting sativa provides an energetic high up to 2 hours.",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple-express_100x100.jpg"
			},
			{"strainId": 62,
			 "strainName": "Platinum Trinity Kush", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.95
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Sweet", "Hash"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Mellow", "Relaxed"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A clear headed, happy high develops into a mellow contentment.",
			 "tags": [""],
			 "imageUrl": "images/strains/platinum_trinity_kush.jpg"
			},
			{"strainId": 63,
			 "strainName": "Private Reserve OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.52
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.59
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Sour", "Diesel"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Bipolar", "Depression", "Insomnia", "Appetite Loss", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Delivers a long-lasting sedative and trancey high, ideal for leisure and relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/private_reserve_OG.jpg"
			},
			{"strainId": 64,
			 "strainName": "Purple Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.17
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.32
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],   
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Bipolar", "Depression", "Muscle Spasms", "Pain", "Stress", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Energetic", "Productive", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Delivers a dreamy burst of euphoria that brings veteran consumers back to their psychedelic heyday.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-haze_100x100.jpg"
			},
			
			{"strainId": 65,
			 "strainName": "Purple Urkle", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.07
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.57
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.06
				} 	 
		 	], 
		 	"taste": ["Sweet", "Grape", "Berry"],
		 	 "conditions": ["Arthritis", "Anxiety", "Stress", "Bipolar", "Migraines", "Headache", "PMS", "Insomnia", "Pain", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Hungry"],
			 "negativeEffects": ["Couch Lock", "Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The indica effects are deeply relaxing, sleep-inducing, and a great option for full-body Pain relief.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-urkle_100x100.jpg"
			},
			{"strainId": 66,
			 "strainName": "Raskal OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 9.67
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.03
				} 	
		 	], 
		 	"taste": ["Earthy", "Citrus", "Lemon"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fatigue", "Anorexia",  "Muscle Spasms", "Headache", "Bipolar", "Nausea", "PMS", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Relaxed", "Productive", "Creative", "Uplifted", "Focused"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Raskal OG smells of lemon and pine with a musty and grassy taste.",
			 "tags": [""],
			 "imageUrl": "images/strains/raskal-og_100x100.jpg"
			},
			{"strainId": 67,
			 "strainName": "Regulator OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.84
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.65
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Lemon"],
		 	 "conditions": ["Anorexia", "Bipolar", "Migraines", "Pain", "Anxiety", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Balanced", "Relaxed"],
			 "negativeEffects": ["Munchies", "Mild"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The high produced from Regulator OG is a pleasant balance of cerebral and body effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/regulator-og.jpg"
			},
			{"strainId": 68,
			 "strainName": "Saturn OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.29
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],
		 	"taste": ["Earthy", "Citrus", "Pungent"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Hypertension", "Fibromyalgia", "Bipolar", "Anxiety", "Anorexia", "ADD/ADHD"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry", "Giggly"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Effects are most commonly described as hybrid-like in its balanced calm and moderate cerebral effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/saturn-og_100x100.jpg"
			},
			{"strainId": 69,
			 "strainName": "Sherbet Cookies", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.93
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	], 
		 	"taste": ["Citrus", "Pine", "Earthy"],
		 	 "conditions": ["Stress", "Migraines", "Appetite Loss", "Insomnia", "Depression", "Bipolar", "Arthritis", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Hungry"],
			 "negativeEffects": ["Giggly", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The perfect strain for users that want to get motivated, and stay awake.",
			 "tags": [""],
			 "imageUrl": "images/strains/sunset-sherbet_100x100.jpg"
			},
			{"strainId": 70,
			 "strainName": "Sour Cherry", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 9.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.26
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.39
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Berry"],
		 	 "conditions": ["Anxiety", "Bipolar", "Depression", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Great for daytime use enabling you to get through your day with a super cherry smile on your face.",
			 "tags": [""],
			 "imageUrl": "images/strains/Sour_Cherry_Kush.jpg"
			},
			{"strainId": 71,
			 "strainName": "Stratosphere", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.11
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	], 
		 	"taste": ["Lemon", "Earthy", "Berry"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety", "Bipolar","Depression", "Migraines", "Pain", "PMS", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Productive", "Creative", "Sexual"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Indica dominant phenotypes are perfect for relaxation and healing.",
			 "tags": [""],
			 "imageUrl": "images/strains/stratosphere.jpg"
			},
			{"strainId": 72,
			 "strainName": "Super Grandaddy", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Grape"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Bipolar", "Depression", "Hypertension", "Muscle Spasms", "Pain", "PMS"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This is worthy of the name Super GDP. From the gorgeous crystal covered buds to the grape smell, the taste, and then the buzz, just a step above any other GDP.",
			 "tags": [""],
			 "imageUrl": "images/strains/Super_GDP.jpg"
			},
			{"strainId": 73,
			 "strainName": "Tangerine", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.15
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],
		 	"taste": ["Orange", "Citrus", "Mango"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Bipolar","Fibromyalgia","Appetite Loss","Muscle Spasms", "Pain","PMS", "Stress", "Impotence"],
			 "positiveEffects": ["Happy","Relaxed","Energetic", "Focused", "Conversational", "Creative", "Productive", "Sexual", "Fatigue"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The fruity tangerine aroma is accompanied with notes of mango and pineapple. Helps with Fibromyalgia, PMS and Impotence.",
			 "tags": [""],
			 "imageUrl": "images/strains/tangerine_100x100jpg"
			},
			{"strainId": 74,
			 "strainName": "Tangilope", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.43
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.77
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.73
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Orange", "Sweet", "Citrus"],
		 	 "conditions": ["Anxiety","Bipolar","Depression","Appetite Loss", "PMS", "Stress"],
			 "positiveEffects": ["Uplifted", "Happy", "Creative", "Energetic","Euphoric", "Focused"],
			 "negativeEffects":["Dry Mouth", "Munchies"], 
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The cerebral effects evoke happiness, giggles, and can stimulate creativity.",
			 "tags": [""],
			 "imageUrl": "images/strains/tangilope_100x100.jpg"
			},
			{"strainId": 75,
			 "strainName": "Tropical OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.50
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Tropical", "Pungent"],
		 	 "conditions": ["Stress", "PMS", "Pain", "Appetite Loss", "Depression", "Bipolar", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Productive", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Tropical OG has an exceptional high which is very clear & uplifting. Tropical OG offers a very good strength and a mixed physical and mental medicinal effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/Tropical_OG.jpg"
			},
			{"strainId": 76,
			 "strainName": "Ancient OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Mango", "Citrus", "Berry", "Tropical"],
		 	 "conditions": ["Insomnia", "Depression", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Couch Lock", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Its thickly resinous buds exude aromatic notes of earthy pine and sweet citrus that are fully realized in Ancient OG's taste.",
			 "tags": [""],
			 "imageUrl": "images/strains/ancient-og_100x100.jpg"
			},
			{"strainId": 77,
			 "strainName": "Afghani", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.96
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.63
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.55
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Sweet"], 
		 	 "conditions": ["Seizures", "Parkinsons", "Anxiety", "Hypertension", "Cancer", "HIV/AIDS", "Insomnia", "Migraines", "Pain", "Stress", "Depression"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Energetic", "Productive", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a sweet, earthy aroma, Afghani delivers a deep, sedating relaxation and euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/afghani_100x100_902b.jpg"
			},
			{"strainId": 78,
			 "strainName": "Avi-Dekel", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 15.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Chestnut", "Earthy", "Woody"],
		 	 "conditions": ["Anxiety", "Cancer", "Epilepsy", "Pain", "Stress", "Muscle Spasms", "Nausea", "Inflammation"],
			 "positiveEffects": ["Focused", "Happy", "Relaxed", "Aroused"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With it's high CBD content, Avi-Dekel is intended to treat inflammation as well as sleep and digestive disorders",
			 "tags": [""],
			 "imageUrl": "images/strains/avi-dekel_100x100.jpg"
			},
			{"strainId": 79,
			 "strainName": "Bull Rider", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.62
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.97
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Pungent"],
		 	 "conditions": ["Anxiety", "Arthritis", "Cancer", "Epilepsy", "Insomnia", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Couch Lock", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A very heavy initial cerebral punch to the head that eventually fades into a very nice, but extremely heavy body sedation.",
			 "tags": [""],
			 "imageUrl": "images/strains/bull-rider-1498.jpg"
			},
			{"strainId": 80,
			 "strainName": "Cannatonic", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 23.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.68
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Pungent", "Pine"],
		 	 "conditions": ["Cancer", "Depression", "Epilepsy", "Stress", "Pain", "Inflammation", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Focused", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "It's recommended for one to use this as a daytime or wake and bake strain. You will likely be able to medicate throughout the day without feeling bogged down.",
			 "tags": [""],
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"
			},
			{"strainId": 81,
			 "strainName": "Charlotte's Web", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 10.46
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.02
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.27
				} 	
		 	],
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Cancer", "Epilepsy", "Arthritis", "Stress", "Pain", "Anxiety", "Depression", "Muscle Spasms", "Insomnia", "Seizures", "Fatigue"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Uplifted", "Euphoric", "Conversational", "Productive"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Axious", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This strain is effective with little to no psychoactive effects, making it great for those who don't want their medication to affect their daily tasks.",
			 "tags": [""],
			 "imageUrl": "images/strains/charlotte-s-web_100x100.jpg"
			},
			{"strainId": 82,
			 "strainName": "G13 Haze", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Woody", "Pepper"],
		 	 "conditions": ["Anxiety","Cancer", "Depression","Epilepsy", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Bred for maximum potency and renowned for its medical use, and it's definitely not recommended for beginners.",
			 "tags": [""],
			 "imageUrl": "images/strains/g13-haze_100x100.jpg"
			},
			{"strainId": 83,
			 "strainName": "Great White Shark", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 2.31
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.04
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.29
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.47
				} 	
		 	],
		 	"taste": ["Earthy", "Citrus", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Cancer", "Depression", "Appetite Loss", "Pain", "Stress", "Fatigue"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Productive", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Often recommended medically to treat chronic pain ailments, Great White Shark is known for its ability to provide a strong indica body buzz very quickly.",
			 "tags": [""],
			 "imageUrl": "images/strains/great-white-shark_100x100.jpg"
			},
			{"strainId": 84,
			 "strainName": "Harle-Tsu", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 6.11
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.85
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.07
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Spicy", "Herbal", "Sweet"],
		 	 "conditions": ["ADD/ADHD","Anorexia", "Anxiety", "Arthritis", "Asthma", "Cancer", "Migraines", "Depression", "Epilepsy", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Brings relief to pain and inflammation without psychoactivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/harle-tsu_100x100.jpg"
			},
			{"strainId": 85,
			 "strainName": "Harlequin", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 6.07
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 10.65
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.99
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Arthritis", "Cancer", "Nausea", "Epilepsy", "Pain", "Stress", "Inflammation", "Depression", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Energetic", "Focused", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Anxious", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "What draws crowds to Harlequin is its ability to relax without sedation, and to relieve without intoxication.",
			 "tags": [""],
			 "imageUrl": "images/strains/harlequin_100x100.jpg"
			},
			{"strainId": 86,
			 "strainName": "Hog", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.84
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Cancer", "Migraines", "Headache"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Uplifted"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Anxious", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This strain is recognized by its pungent aroma, indicative of its world-renowned, extremely heavy body buzz.",
			 "tags": [""],
			 "imageUrl": "images/strains/hog_100x100.jpg"
			},
			{"strainId": 87,
			 "strainName": "King's Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.75
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.58
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.85
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Citrus", "Earthy"],
		 	 "conditions": ["Cancer", "Pain", "Stress", "Depression", "Anxiety", "Insomnia", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Euphoric", "Relaxed", "Happy", "Drowsiness", "Uplifted", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This strain comes across as sweet and sour with a powerful and tangy grape scent, as well as some hints of lavender.",
			 "tags": [""],
			 "imageUrl": "images/strains/king-s-kush_100x100.jpg"
			},
			{"strainId": 88,
			 "strainName": "Kosher Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.22
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.41
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.65
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.11
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Cancer", "Chronic Aches", "Depression", "Insomnia", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Being a heavy, full-bodied strain, Kosher Kush will produce a slight body melt followed by an cerebral effect that can be best described as spacey and/or zone-inducing.",
			 "tags": [""],
			 "imageUrl": "images/strains/kosher-kush_100x100.jpg"
			},
			{"strainId": 89,
			 "strainName": "Lemon Larry OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.03
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pineapple", "Pine", "Lemon"],
		 	 "conditions": ["Cancer", "Epilepsy", "Stress", "Pain", "Depression", "Appetite Loss", "Insomnia"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Produces a potent yet easy body buzz that will allow you to relax while getting things done.",
			 "tags": [""],
			 "imageUrl": "images/strains/larry-og_100x100.jpg"
			},
			{"strainId": 90,
			 "strainName": "Master Bubba", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 8.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Skunk", "Spicy", "Herbal"],
		 	 "conditions": ["Cancer", "Insomnia", "Stress", "Pain", "Muscle Spasms", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Drowsiness", "Hungry", "Happy"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This strain can be very potent, making it best in the evening or as a nightcap.",
			 "tags": [""],
			 "imageUrl": "images/strains/master-bubba_100x100jpg"
			},
			{"strainId": 91,
			 "strainName": "Pineapple Thai", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 5.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pineapple", "Sweet", "Woody", "Chestnut", "Earthy"],
		 	 "conditions": ["Cancer", "Depression", "Fatigue", "Stress", "Inflammation", "Migraines", "Insomnia", "Pain", "Muscle Spasms"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Conversational","Focused", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid" ],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Although an option for daytime use, its strength may lead to a nighttime preference.",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple-thai_100x100.jpg"
			},
			{"strainId": 92,
			 "strainName": "Sour Tsunami", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 4.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.53
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.63
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Citrus"],
		 	 "conditions": ["Stress", "Pain", "Muscle Spasms", "Cancer", "Arthritis", "Anxiety", "Migraines", "Headache", "Epilepsy"],
			 "positiveEffects": ["Relaxed", "Focused", "Uplifted", "Happy", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Effective at treating pain and inflammation without producing a significant high that is linked to high THC and CBD.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-tsunami_100x100.jpg"
			},
			{"strainId": 93,
			 "strainName": "The White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.95
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.16
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Pungent"],
		 	 "conditions": ["Stress", "Insomnia", "Depression", "Pain", "Cancer", "Nausea", "Migraines"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The superb muscle and nerve pain-relieving qualities of this strain are its lasting medical value.",
			 "tags": [""],
			 "imageUrl": "images/strains/the-white_100x100.jpg"
			},
			{"strainId": 94,
			 "strainName": "Valentine X", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 1.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 24.57
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Honey"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Cancer", "Epilepsy", "Pain", "Stress", "Impotence", "Muscle Spasms", "Seizures", "Spasticity", "Inflammation"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Tingly", "Euphoric", "Drowsiness", "Aroused"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "In addition to its medicinal effects this strain is known to spark creative thinking. A great help for seizure disorders, inflammation, and when treating cancer.",
			 "tags": [""],
			 "imageUrl": "images/strains/Valentine-X.jpg"
			},
			{"strainId": 95,
			 "strainName": "White Fire Alien OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.80
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Diesel", "Earthy", "Woody"],
		 	 "conditions": ["Cancer", "Pain", "Anxiety", "Tension", "Stress"],
			 "positiveEffects": ["Relaxed", "Calming"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A full-body calm that eases pain, anxiety, and tension.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-fire-alien-og_100x100.jpg"
			},
			{"strainId": 96,
			 "strainName": "Yoda OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.22
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Cancer", "Stress", "Insomnia", "Pain", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Seasoned consumers may be able to withstand its heaviness during the day, but Yoda OG is most popularly chosen for nighttime consumption.",
			 "tags": [""],
			 "imageUrl": "images/strains/yoda-og_100x100.jpg"
			},
			{"strainId": 97,
			 "strainName": "707 Headband", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.69
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.37
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.27
				} 	
		 	],
		 	"taste": ["Pungent", "Sweet", "Skunk"],
		 	 "conditions": ["Stress", "Depression","Pain", "Muscle Spasms", "Nausea", "Seizures", "Insomnia", "Hypertension", "HIV/AIDS", "Migraines"],
			 "positiveEffects": ["Energetic", "Relaxed", "Happy", "Uplifted", "Euphoric", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "An indica dominant hybrid, this strain is known to have high THC levels and can be strong.",
			 "tags": [""],
			 "imageUrl": "images/strains/707-headband_100x100.jpg"
			},
			{"strainId": 98,
			 "strainName": "Acapulco Gold", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.43
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Anorexia", "Depression", "Appetite Loss", "Stress", "Pain", "Headache", "Fatigue", "Arthritis"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Euphoric", "Creative", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "One of the most well-known strains, Acapulco Gold has been likened to dinner at a five-star restaurant.  An aroma of burnt toffee lingers when the bud is broken up.",
			 "tags": [""],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"strainId": 99,
			 "strainName": "Alien OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.32
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.03
				} 	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pine"],
		 	 "conditions": ["Anxiety", "Depression", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Energetic", "Euphoric", "Uplifted", "Productive", "Creative", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Alien OG is a cross between Tahoe OG and Alien Kush.",
			 "tags": [""],
			 "imageUrl": "images/strains/alien-og_100x100.jpg"
			},
			{"strainId": 100,
			 "strainName": "Alien Rock Candy", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.60
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Citrus"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Full relaxation of the mind and body make this strain ideal for the end of an active or stressful day, with a heaviness that segueways nicely into sleep.",
			 "tags": [""],
			 "imageUrl": "images/strains/alien-rock-candy_100x100.jpg"
			},
			{"strainId": 101,
			 "strainName": "Amnesia Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.62
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.42
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.46
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Citrus"],
		 	 "conditions": ["Anorexia","Anxiety","Depression", "Insomnia", "Appetite Loss", "Pain", "Stress", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Creative", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The uplifting, energetic buzz is one you won't soon forget.",
			 "tags": [""],
			 "imageUrl": "images/strains/amnesia-haze_100x100.jpg"
			},
			{"strainId": 102,
			 "strainName": "ATF", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 10.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.96
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.05
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.29
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue","Insomnia", "Migraines", "Arthritis", "Anxiety", "ADD/ADHD"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Productive", "Creative", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A strong sativa that will have you feeling the effects soon after exhale.",
			 "tags": [""],
			 "imageUrl": "images/strains/alaskan-thunder-fuck_100x100.jpg"
			},
			{"strainId": 103,
			 "strainName": "Bay Cookies", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.45
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Nausea", "PTSD","OCD", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Anxiety", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The delicate terpene profile created a sweet-tasting vapor that may remind you of pink lemonade.",
			 "tags": [""],
			 "imageUrl": "images/strains/bay_cookies.jpg"
			},
			{"strainId": 104,
			 "strainName": "Berry Queen", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.86
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Stress", "Pain", "Nausea", "Depression", "Anxiety", "Anorexia", "Insomnia",],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies", "Less Social"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits.",
			 "tags": [""],
			 "imageUrl": "images/strains/berryQueen.jpg"
			},
			{"strainId": 105,
			 "strainName": "Berry White", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.03
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.23
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	], 
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Depression", "Pain", "Stress", "Anxiety"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Energetic", "Focused", "Uplifted", "Creative", "Productive", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Perfect for inspiring an upbeat mood that may lead to conversation and creative pursuits, Berry is famous in its own right for its even, balanced effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/berry-white_100x100.jpg"
			},
			{"strainId": 106,
			 "strainName": "UW", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.69
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.65
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.89
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.74
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Woody"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Insomnia", "Inflammation", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Happy", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Anxious", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Almost entirely indica, this strain's powerful high is sedative and popular for pain relief and insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/uw_100x100.jpg"
			},
			{"strainId": 107,
			 "strainName": "Blue Dream", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.91
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.36
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.45 
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.44
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.08
				} 	
		 	], 
		 	"taste": ["Sweet", "Blueberry", "Berry"],
		 	 "conditions": ["Anxiety","Depression", "Insomnia", "Migraines", "Headache", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Energetic", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a sweet berry aroma redolent of its Blueberry parent, Blue Dream delivers swift symptom relief without heavy sedative effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-dream_100x100.jpg"
			},
			{"strainId": 108,
			 "strainName": "Blue Moonshine", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 28.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.06
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Blueberry", "Berry"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Muscle Spasms", "Insomnia", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Sexual", "Euphoric", "Giggly", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "For a sensual boost, Blue moonshine can also make you giggle and focused while it relaxes you. With both earthy and blueberry flavors, this indica can also help with insomnia, pain and anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-moonshine_100x100.jpg"
			},
			{"strainId": 109,
			 "strainName": "Blueberry Trainwreck", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.93
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.07
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.38
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Blueberry", "Pungent", "Sweet", "Skunk"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Pain", "Stress", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Conversational", "Creative", "Sexual"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "For a creative and talkative boost you may want to try Blueberry Trainwreck. Also reported to enhance sexuality you may want to share this with your special someone.",
			 "tags": [""],
			 "imageUrl": "images/strains/blueberry_100x100.jpg"
			},
			{"strainId": 110,
			 "strainName": "Cannatonic #4", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 6.24
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 8.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Pine", "Sweet"],
		 	 "conditions": ["Depression", "Pain", "Stress", "Inflammation", "Muscle Spasms"],
			 "positiveEffects": ["Pain relief", "Relaxed", "Happy", "Focused", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Often used for medical patients because of the high cbd and low thc, Cannatonic #4 can help with inflammation, pain, and muscle spasms. With almost no couch lock effect, you can stay productive too.",
			 "tags": [""],
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"
			},
			{"strainId": 111,
			 "strainName": "Candy Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 4.31
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.81
				} 	
		 	], 
		 	"taste": ["Sweet", "Pine", "Citrus"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Appetite Loss", "Fatigue", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Creative", "Euphoric", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Counter lack of appetite with an energetic when you choose Candy Jack. With hints of sweet citrus and pine, say goodbye to anxiety and fatigue.",
			 "tags": [""],
			 "imageUrl": "images/strains/candy-jack_100x100.jpg"
			},
			{"strainId": 112,
			 "strainName": "CandyLand", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.94
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.92
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Spicy", "Herbal"],
		 	 "conditions": ["Anxiety", "Depression", "Migraines", "Pain", "Fatigue", "Headache", "Stress"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Conversational", "Creative", "Relaxed", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Get social and productive with Candyland. An uplifitng creative boost will follow it's sweet and spicy flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/candyland_100x100.jpg"
			},
			{"strainId": 113,
			 "strainName": "Cannalope Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],
		 	"taste": ["Tropical", "Sweet", "Flowery"],
		 	 "conditions": ["Anxiety", "Depression", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Creative", "Productive", "Uplifted", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Kiss fatigue goodbye with Cannalope Haze. Reported to help with anxiety and depression, you'll feel happy, creative and energetic.",
			 "tags": [""],
			 "imageUrl": "images/strains/cannalope-haze_100x100.jpg"
			},
			{"strainId": 114,
			 "strainName": "Cataract Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.41
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.93
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Skunk"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Reported to help with both sleeping and eating disorders you can expect to feel hungry and a bit drowsy with Cataract Kush. It can also be helpful with pain and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/cataract-kush_100x100.jpg"
			},
			{"strainId": 115,
			 "strainName": "Chemdawg", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.66
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.058
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.03
				} 	
		 	],   
		 	"taste": ["Earthy", "Diesel", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Arthritis", "Depression", "Insomnia", "Nausea", "Appetite Loss", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll feel creative and uplifted with Chemdawg. The Dieslel and Pungent flavors can also bring relief to arthritis, insomnia and Anorexia.",
			 "tags": [""],
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"
			},
			{"strainId": 116,
			 "strainName": "Cherry Pie", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.41
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	],   
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Happy", "Energetic", "Euphoric", "Uplifted", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You can have your pie and eat it too with this potent hyrbrid. Boost your creative productivity while feeling relaxed and uplifted.",
			 "tags": [""],
			 "imageUrl": "images/strains/cherry-pie_100x100.jpg"
			},
			{"strainId": 117,
			 "strainName": "Chocolate Thai", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.37
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.57
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				} 	
		 	],
		 	"taste": ["Coffee", "Sweet", "Earthy"],
		 	 "conditions": ["Migraines", "Pain", "Headache", "Stress", "Appetite Loss", "Depression", "Anxiety", "ADD/ADHD"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Uplifting"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Treat headaches, pain and appetite loss with this potent sativa. Reported to have a sweet coffee and earthy taste, Chocolate Thai provides an energeticm focused boost for your day.",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolate-thai_100x100.jpg"
			},
			{"strainId": 118,
			 "strainName": "Clear Lake", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 4.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.96
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": [""],
		 	 "conditions": ["ADD/ADHD","Anxiety","Asthma","Insomnia", "Migraines", "Pain","Seizures", "Stress"],
			 "positiveEffects": ["Potent", "Focused", "Relaxed", "Arousing"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Think of how still a clear lake is and you'll get an idea of how still you will be with Clear Lake. Well known potency is reported to help treat pain, muscle spasms and asthma conditions.",
			 "tags": [""],
			 "imageUrl": "images/strains/clear_lake.jpg"
			},
			{"strainId": 119,
			 "strainName": "Dubtech", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.77
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.15
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.03
				} 	
		 	],
		 	"taste": ["Sweet", "Fruity", "Flowery"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Insomnia", "Appetite Loss", "Migraines", "Muscle Spasms",  "Nausea", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Creative", "Productive", "Euphoric", "Relaxed", "Hungry", "Energetic", "Happy", "Focused", "Balanced", "Calmness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Sweet and fruity flavors bring peaceful and centered thoughts and and a healthy appetite. You may feel drowsy as well reportedly making Dubtech effective for anorexia and insomia patients.",
			 "tags": [""],
			 "imageUrl": "images/strains/dubtech.jpg"
			},
			{"strainId": 120,
			 "strainName": "Ghost OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.51
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.43
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	],
		 	"taste": ["Citrus", "Earthy", "Pine"],
		 	 "conditions": ["Migraines", "Headache", "Pain", "Fibromyalgia", "Arthritis", "Anorexia", "Appetite Loss", "Insomnia", "Depression", "Anxiety", "Stress"],
			 "positiveEffects": ["Potent", "Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Creative", "Productive"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Both potent and non-intrusive, Ghost OG brings an energetic boost with a conversational yet productive relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/ghost-og_100x100.jpg"
			},
			{"strainId": 121,
			 "strainName": "Grape Cookies", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.82
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Grape", "Sweet", "Fruity"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression","Fibromyalgia", "Glaucoma", "Insomnia", "Appetite Loss","Migraines", "Nausea", "Pain", "Seizures", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Paitents report good results treating conditions associated with Fibromyalgia, Glaucoma and Insomnia among others. A fruity grape flavor will also provide a relaxed happy mood.",
			 "tags": [""],
			 "imageUrl": "images/strains/grape_Cookies.jpg"
			},
			{"strainId": 122,
			 "strainName": "Grape Kool Aid", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.58
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.93
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Grape", "Sour", "Dank"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety","Arthritis","Depression","Insomnia","Migraines", "Pain", "Nausea", "Stress", "Hypertension"],
			 "positiveEffects": ["Happy", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Get creative without the couch lock. Grape Kool Aid has been known to effectively treat Anorexia, Arthritis and Hypertension among other conditions.",
			 "tags": [""],
			 "imageUrl": "images/strains/Purple Wreck-578x433.jpg"
			},
			{"strainId": 123,
			 "strainName": "Jupiter Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.79
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.38
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.55
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Pine", "Citrus", "Diesel"],
		 	 "conditions": ["Stress", "Pain",  "Migraines", "Insomnia","Depression", "Epilepsy"],
			 "positiveEffects": ["Uplifted","Happy", "Energetic", "Relaxed","Pain relief", "Creative", "Conversational","Drowsiness", "Euphoric"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Drowsiness", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Jupiter isn't that far away with this Indica. Euphoric and uplifiting energy is followed by creativity, conversation and drowsiness.",
			 "tags": [""],
			 "imageUrl": "images/strains/jupiter-kush_100x100.jpg"
			},
			{"strainId": 124,
			 "strainName": "L.A. Confidential", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.52
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.03
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Pine", "Earthy", "Pungent"],
		 	 "conditions": ["Anorexia", "Insomnia", "Migraines", "Pain", "Stress", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With well-rounded effects, the pungent adnd pine flavors will produce a euphoric almost psychedelic mood that is uplifting and relaxing. Patients report effective treatment for Migraines, Insomnia and Anorexia among other conditions.",
			 "tags": [""],
			 "imageUrl": "images/strains/la-confidential_100x100.jpg"
			},
			{"strainId": 125,
			 "strainName": "Lemon Jack", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.83
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.95
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.47
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],
		 	"taste": ["Lemon", "Citrus", "Lime"],
		 	 "conditions": ["ADD/ADHD", "Depression", "Anxiety", "Appetite Loss", "Migraines", "Pain", "Stress", "Spasticity", "Fatigue"],
			 "positiveEffects": ["Uplifted", "Energetic", "Conversational", "Happy", "Focused", "Productive", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a tingly, energetic boost, this strain can be effective for both headaches and fatigue.",
			 "tags": [""],
			 "imageUrl": "images/strains/lemon-jack_100x100.jpg"
			},
			{"strainId": 126,
			 "strainName": "Lemon OG Kush", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.33
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.78
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.43
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	],
		 	"taste": ["Lemon", "Citrus", "Sweet"],
		 	 "conditions": ["Migraines", "Headache","Arthritis","Stress", "Pain", "Insomnia", "Depression"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Energetic", "Creative", "Productive", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Sweet citrus flavors bring uplifting and creative effects to your day. You may also feel hungry and drowsy which makes it a good choice for those experiencing insomnia or lack of appetite.",
			 "tags": [""],
			 "imageUrl": "images/strains/lemon-og-kush_100x100.jpg"
			},
			{"strainId": 127,
			 "strainName": "Mad Max", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.86
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.51
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.13
				} 	
		 	],
		 	"taste": ["Pine", "Woody", "Earthy"],
		 	 "conditions": ["Migraines", "Depression", "Arthritis", "Anxiety", "Headache", "ADD/ADHD"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With the signature aroma of the OG Kush strains, Mad Max brings patients relief from Migraines, Arthritis and Anxiety with a focused boost of energy.",
			 "tags": [""],
			 "imageUrl": "images/strains/MADMAX.jpg"
			},
			{"strainId": 128,
			 "strainName": "Mafia OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 30.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.59
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.80
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.74
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],
		 	"taste": ["Sweet", "Citrus", "Earthy", "Spicy", "Diesel"],
		 	 "conditions": ["Stress", "Seizures", "PMS", "Pain", "Nausea", "Migraines", "Appetite Loss","Headache", "Glaucoma", "Fibromyalgia", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Euphoric"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This Indica is well known for it's hard hitting effects. Say goodbye to pain associated with Fibromyalgia, Glaucoma and Migraines with Mafia OG.",
			 "tags": [""],
			 "imageUrl": "images/strains/mafia-og.jpg"
			},
			{"strainId": 129,
			 "strainName": "Mango Maui", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.74
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.16
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],   
		 	"taste": ["Diesel", "Lemon", "Pungent", "Mango", "Tropical"],
		 	 "conditions": ["Anxiety", "Depression", "Migraines", "Nausea", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Get your mango on with this uplifting sativa. Tropical flavors bring energetic and conversational effects that melt away stress, pain and anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/mango-maui-578x385.jpg"
			},
			{"strainId": 130,
			 "strainName": "May Weather Kush", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 29.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.61
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.43
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				} 	
		 	], 
		 	"taste": ["Diesel"],
		 	 "conditions": ["Anorexia", "Anxiety", "Arthritis", "Depression", "Fibromyalgia", "Insomnia", "Migraines", "Muscle Spasms", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "An energetic boost is followed by relaxing drowsiness with May Weather Kush. Patients report effective treatment for conditions related to Anorexia, Arthritis, Fybromyalgia and Insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/May-weather-kush.jpg"
			},
			{"strainId": 131,
			 "strainName": "Phantom OG", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.73
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.77
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],
		 	"taste": ["Flowery", "Earthy", "Pine", "Menthol"],
		 	 "conditions": ["Anorexia", "Stress", "Pain",  "Migraines", "Hypertension", "Depression", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Productive", "Creative", "Euphoric", "Pain relief"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Like a phantom, your energetic, creative burst will fade into a relaxed drowsiness. Patients report effective treatment for Anorexia, MIgraines and Hypertension among other conditions.",
			 "tags": [""],
			 "imageUrl": "images/strains/phantom-og_100x100.jpg"
			},
			{"strainId": 132,
			 "strainName": "Pineapple Hogsbreath", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.91
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.49
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pineapple", "Cheese"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Arthritis", "Depression", "Appetite Loss", "Migraines", "Muscle Spasms", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid", "Anxious", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Experience focused energy with both Pineapple and Cheese flavors. Patients report effective relief of conditions related to PMS, Nausea asnd Appetite Loss among others.",
			 "tags": [""],
			 "imageUrl": "images/strains/hog-s-breath_100x100.jpg"
			},
			{"strainId": 133,
			 "strainName": "Silverback Gorilla", 
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.74
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 2.38
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Migraines", "Headache", "Appetite Loss", "Insomnia", "Anorexia"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Hungry", "Drowsiness", "Tingly"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Bringing relief to patients experiencing insomnia, pain and appetite loss, Silverback Gorilla is a must try Indica with both sweet and pine flavors.",
			 "tags": [""],
			 "imageUrl": "images/strains/silverback-gorilla_100x100.jpg"
			},
			{"strainId": 134,
			 "strainName": "Sugar Plum", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.14
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Berry", "Plum", "Spicy", "Herbal", "Tar"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Arthritis","Inflammation","Seizures","Depression","Cramps", "Glaucoma","Appetite Loss", "Migraines", "Nausea", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Euphoric", "Energetic", "Uplifted", "Focused", "Relaxed", "Tingly", "Conversational"],
			 "negativeEffects": ["Dizzy", "Dry Mouth", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Hard hitting and long-lasting, Sugar Plum will make you both conversational and energetic. It is known to help with Inflammation, Anorexia and Nausea.",
			 "tags": [""],
			 "imageUrl": "images/strains/sugar-plum_100x100.jpg"
			},
			{"strainId": 135,
			 "strainName": "Super Lemon Haze", 
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.50
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.37
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 1.17
				} 	
		 	], 
		 	"taste": ["Lemon", "Citrus", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anorexia","Anxiety","Arthritis","Depression","Appetite Loss","Migraines", "Pain", "Fatigue", "Stress"],
			 "positiveEffects": ["Happy","Uplifted","Euphoric","Energetic", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known to boost creativity and energy levels, Super Lemon Haze is also known to provided uplifting relief from Anorexia, Pain and Anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-lemon-haze_100x100.jpg"
			},
			{"strainId": 136,
			 "strainName": "Lemon Marmalade", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 30.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Citrus", "Lemon", "Pine"],
		 	 "conditions": ["Depression", "Stress", "Hypertension"],
			 "positiveEffects": ["Euphoric", "Energetic", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Quick energy alleviates depression and stress with flavors of lemon and pine.",
			 "tags": [""],
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"
			},
			{"strainId": 137,
			 "strainName": "White Fire OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.29
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.49
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Migraines", "Headache", "Nausea"],
			 "positiveEffects": ["Uplifted", "Focused", "Conversational", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A great choice for social activities during the day, White Fire OG brings uplifting focus with creativity.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-fire-og_100x100.jpg"
			},
			{"strainId": 138,
			 "strainName": "White Walker OG", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.82
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.22
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	],
		 	"taste": ["Citrus", "Earthy", "Pungent"],
		 	 "conditions": ["Stress", "Pain", "Nausea", "Muscle Spasms", "Migraines", "Appetite Loss", "Insomnia", "Headache", "Depression", "Arthritis", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Uplifted", "Happy", "Energetic", "Relaxed", "Productive", "Creative", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "For a quick mood lift, White Walker OG is an award winning hybrid that tastes both pungent and citrus.",
			 "tags": [""],
			 "imageUrl": "images/strains/whitewalker-og_100x100.jpg"
			},
			{"strainId": 139,
			 "strainName": "Cherry Bomb", 
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Berry", "Woody"],
		 	 "conditions": ["Anorexia", "Anxiety", "Appetite Loss", "Nausea", "Pain", "Fibromyalgia", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Uplifted", "Productive", "Creative", "Euphoric"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Headache", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Creative and productive are the effects reported by most people with Cherry Bomb. With both woody and berry flavors you may also notifce hints of pine and earthiness.",
			 "tags": [""],
			 "imageUrl": "images/strains/cherry-bomb_100x100.jpg"
			},
			{"strainId": 140,
			 "strainName": "DJ Short Blueberry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.93
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.10
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Blueberry", "Berry"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Nausea", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Drowsiness", "Long Lasting"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known for fruity taste and long-lasting effects, DJ Short Blueberry is known to treat Anorexia, Anxiety, Insomnia and Stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/dj-short-blueberry_100x100.jpg"
			},
			{"strainId": 141,
			 "strainName": "El Alquimista",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 11.76
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.28
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.13
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Fruity", "Sweet"],
		 	 "conditions": ["Nausea"],
			 "positiveEffects": ["Relaxed", "Active", "Happy", "Creative", "Long Lasting", "Productive"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known for effectively treating nausea, you'll also experience a creative boost that is long-lasting and active.",
			 "tags": [""],
			 "imageUrl": "images/strains/El-Alquimista.jpg"
			},
			{"strainId": 142,
			 "strainName": "Godfather OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.37
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Pain", "Stress", "Depression", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Hungry" ],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You can expect classic Indica effects with a Pungent and Pine flavor. Godfather OG brings pain relief with increased hunger and drowsiness.",
			 "tags": [""],
			 "imageUrl": "images/strains/godfather-og_100x100.jpg"
			},
			{"strainId": 143,
			 "strainName": "Herijuana",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 17.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.14
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.74
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.63
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Insomnia","Chronic Pain","Anxiety", "Stress","Nausea", "Pain"],
			 "positiveEffects": ["Relaxed", "Drowsiness","Therapeutic", "Euphoric", "Happy", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known to be helpful with Chronic Pain and Insomnia, this Indica is a good choice when relaxing at home.",
			 "tags": [""],
			 "imageUrl": "images/strains/herijuana_100x100.jpg"
			},
			{"strainId": 144,
			 "strainName": "Lavender",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.40
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	], 
		 	"taste": ["Lavender", "Flowery", "Sweet"],
		 	 "conditions": ["Nausea", "Pain", "Stress", "Insomnia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious","Couch Lock","Drowsiness", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Lift your mood as you relax with a floral and spicy aroma. Also known as Lavendar Kush.",
			 "tags": [""],
			 "imageUrl": "images/strains/lavender_100x100.jpg"
			},
			{"strainId": 145,
			 "strainName": "Purple Coma",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.34
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Grape"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Fibromyalgia", "Nausea", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The power of grape compels you. Get a boost of energy while muscle pain and stress fade away. Fibromyalgia patients have reported effective relief with this strain.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-coma.jpg"
			},
			{"strainId": 146,
			 "strainName": "Purple Passion",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.103
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.096
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.55
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	], 
		 	"taste": ["Grape", "Pungent", "Sweet", "Tar"],
		 	 "conditions": ["Stress", "Pain", "Insomnia","Depression","Anxiety", "Nausea", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Creative", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Munchies", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Deal with boredom by unleashing a creative mood that is both relaxing just might have you writing your next novel whether you're a writer or not. ",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-passion_100x100.jpg"
			},
			{"strainId": 147,
			 "strainName": "Sour Bubble",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.13
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Chestnut", "Sweet", "Earthy", "Diesel"],
		 	 "conditions": ["Nausea", "Pain", "Insomnia", "Muscle Spasms", "Anxiety"],
			 "positiveEffects": ["Relaxed", "Uplifting"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Get a sweet tase of relief while enjoying the diesel characteristics of Sour Bubble. Paitients report effectove relief from a wide range of conditions related to pain releif, muscle spasms and nausea.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-bubble_100x100.jpg"
			},
			{"strainId": 148,
			 "strainName": "Sour Dub",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	],
		 	"taste": ["Pine", "Earthy", "Dank"], 
		 	 "conditions": ["Stress", "Nausea", "Pain", "Insomnia", "Anxiety","Anorexia",  "Appetite Loss"],
			 "positiveEffects": ["Energetic", "Happy", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "It starts with energy and it ends with sleep. There was food in there somewhere. Then more food.",
			 "tags": [""],
			 "imageUrl": "images/strains/SourDub.jpg"
			},
			{"strainId": 149,
			 "strainName": "Strawberry Mist",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.56
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.85
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.17
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.96
				} 	
		 	], 
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["ADD/ADHD","Anorexia","Anxiety","Depression","Nausea","Pain", "PMS", "Stress", "Impotence"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Conversational", "Productive", "Creative", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Talk up a storm with this strawberry sativa. It enhances both creativity and energy levels so you'll get some things done.",
			 "tags": [""],
			 "imageUrl": "images/strains/Kali-Mist-Bud-Closeup.jpg"
			},
			{"strainId": 150,
			 "strainName": "LA Chocolat",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Earthy", "Chocolate", "Coffee", "Fruity"],
		 	 "conditions": ["Pain", "Stress", "Appetite Loss"],
			 "positiveEffects": ["Calmness", "Relaxed", "Hungry", "Long Lasting", "Potent"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With both chocolate and fruit flavors, this powerful strain will help you get some peaceful rest.",
			 "tags": [""],
			 "imageUrl": "images/strains/DNA_Genetics_Seeds_-_LA_Chocolat.jpg"
			},
			{"strainId": 151,
			 "strainName": "Afghani Bullrider",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.55
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.57
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.61
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	], 
		 	"taste": ["Pine", "Earthy", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Chronic Pain", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Focused", "Energetic", "Productive",  "Uplifted", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This heavy hitter can tackle your pain or stress and help you enjoy a meal. Powerful and relaxing without heavy sedative effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/afghani-bullrider_100x100.jpg"
			},
			{"strainId": 152,
			 "strainName": "Afgoo",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.76
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.24
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Woody"],
		 	 "conditions": ["Anorexia", "Depression", "Insomnia", "Appetite Loss", "Pain", "Anxiety", "Stress"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Euphoric", "Happy", "Energetic", "Productive", "Hungry" ],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Preprare to munch on something and rest as you relax with with the pine and earthy flavors this Indica provides.",
			 "tags": [""],
			 "imageUrl": "images/strains/afgoo_100x100.jpg"
			},
			{"strainId": 153,
			 "strainName": "Afgooey",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.80
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.25
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.54
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Anxiety", "Insomnia", "Migraines", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Like you would expect a good Indica to do, Afgooey delivers restful, relaxing drowsiness.",
			 "tags": [""],
			 "imageUrl": "images/strains/afgooey_100x100.jpg"
			},
			{"strainId": 154,
			 "strainName": "AK-47",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.67
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Earthy", "Pine", "Skunk"],
		 	 "conditions": ["Anorexia", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Uplifted", "Euphoric", "Hungry", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known to be long lasting, AK-47 provides a cerebral effect that will keep you alert and creative.",
			 "tags": [""],
			 "imageUrl": "images/strains/ak-47_100x100.jpg"
			},
			{"strainId": 155,
			 "strainName": "AK-48",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.39
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pine", "Sweet"],
		 	 "conditions": ["Anorexia","Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Ak-48 is reported to deliver typical sativa effects including an uplifting relaxation but also reportedly helps with appetite as well. It has a a sweet, earthy pine flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/ak-48_100x100.jpg"
			},
			{"strainId": 156,
			 "strainName": "Kalashnikova",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Lemon", "Pine"],
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": ["Clear headed", "Long Lasting", "Relaxed", "Creative", "Conversational"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "For a lasting Indica effect, Kalashnikova can make you conversational and creative with as taste of citrus and pine.",
			 "tags": [""],
			 "imageUrl": "images/strains/kalashnikova_100x100.jpg"
			},
			{"strainId": 157,
			 "strainName": "Black Buddah",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Exotic"],
		 	 "conditions": ["Pain", "Stress"],
			 "positiveEffects": ["Energetic", "Happy"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With an exotic flavor and an uplifting effect, Black Buddah will make relax you and give you a cerebral boost.",
			 "tags": [""],
			 "imageUrl": "images/strains/Black-Budha.jpg"
			},
			{"strainId": 158,
			 "strainName": "OG Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.32
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.22
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.06
				} 	
		 	], 
		 	"taste": ["Skunk", "Cheese", "Citrus"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety",  "Arthritis", "Depression", "Hypertension", "Nausea", "Insomnia", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive", "Hungry", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Munchies", "Drowsiness"],
			 "descriptionDetailed": " ",
			 "descriptionAbbrev":  "Described as powerfully euphoric, this citrus and cheese tasting strain offers relief for a number of conditions including anoriexia, anxiety and arthritis.",
			 "tags": [""],
			 "imageUrl": "images/strains/og-cheese_100x100.jpg"
			},
			{"strainId": 159,
			 "strainName": "Mercury OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.13
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.64
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 1.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Sweet"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression","Hypertension", "Appetite Loss", "Pain","PMS", "Stress" ],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Tingly", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Well known to be powerful, Mercury OG is reported to treat a number of conditions as it provides an energy boost with focus and clarity. Some users alaso report heightened sensory perception.",
			 "tags": [""],
			 "imageUrl": "images/strains/mercury-og_100x100.jpg"
			},
			{"strainId": 160,
			 "strainName": "Silver Surfer",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.16
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.95
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.22
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	], 
		 	"taste": ["Citrus", "Earthy", "Flowery"],
		 	 "conditions": ["ADD/ADHD", "Arthritis", "Glaucoma", "Insomnia", "Pain", "Stress", "Muscle Spasms", "Fibromyalgia", "Depression" ],
			 "positiveEffects": ["Happy", "Relaxed", "Conversational", "Energetic", "Uplifted"],
			 "negativeEffects": ["Paranoid", "Dry Mouth", "Anxious", "Dizzy", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This hybrid has a citrus, flowery flavor and can make you quite energetic and productive as it treats many conditions including fibromylagia, arthritis and depression.",
			 "tags": [""],
			 "imageUrl": "images/strains/silver-surfer_100x100.jpg"
			},
			{"strainId": 161,
			 "strainName": "Sour OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.41
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.49
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.06
				} 	
		 	],
		 	"taste": ["Earthy", "Diesel", "Sweet"],
		 	 "conditions": ["Anxiety","Depression", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Conversational", "Creative", "Productive", "Relaxed", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "When you want to feel creative or conversational with a lot of laughs, Sour OG is a good choice.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-og_100x100.jpg"
			},
			{"strainId": 162,
			 "strainName": "Mars OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["Epilepsy", "Pain", "Appetite Loss", "Insomnia", "Stress", "Headache"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Anxious", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Headache", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you're dealing with appetitre loss or insomnia, Mars OG can be just what the doctor ordered. Reported to be great for pain relief as well.",
			 "tags": [""],
			 "imageUrl": "images/strains/mars-og_100x100.jpg"
			},
			{"strainId": 163,
			 "strainName": "White Rhino",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.38
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.21
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.29
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Stress", "Anxiety", "Pain", "Anorexia", "Insomnia", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Munchies", "Drowsiness", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "White Rhino typically has a high THC content making it helpful for pain relief and appetite loss. It's been described as strong and heady.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-rhino_100x100.jpg"
			},
			{"strainId": 164,
			 "strainName": "Green Queen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pungent", "Sweet", "Woody"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Conversational", "Euphoric", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Headache", "Dizzy", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Great for a social meetup, Green Queen makes you feel conversational with a strong body buzz. Reported to be extremely stoney but not lazy, it is has been known to be effective treating pain, muscle spasms, depression and insomia.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-queen_100x100.jpg"
			},
			{"strainId": 165,
			 "strainName": "Green Dynamite",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.66
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Grapefruit", "Earthy", "Grape"],
		 	 "conditions": ["PMS", "Insomnia", "Stress", "Pain", "Depression", "Muscle spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a grapefruit aroma and a fruity flavor, Green Dynamite can be effective for PMS, depression and insomnia as it lifts your mood and relaxes you.",
			 "tags": [""],
			 "imageUrl": "images/strains/dynamite_100x100.jpg"
			},
			{"strainId": 166,
			 "strainName": "J1",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				} 	
		 	],
		 	"taste": ["Citrus", "Sweet", "Pungent"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Depression", "Anxiety", "Migraines", "Pain", "Stress", "PMS", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known for its strong, energetic and creative effects that have also been described as clear headed, J! has been reported to be effective for ADD, Anorexia and Migraines.",
			 "tags": [""],
			 "imageUrl": "images/strains/j1_100x100.jpg"
			},
			{"strainId": 167,
			 "strainName": "Kryptonite",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.75
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.98
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.58
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.13
				} 	
		 	], 
		 	"taste": ["Sweet", "Pungent", "Earthy"],
		 	 "conditions": ["PMS", "Stress", "Pain", "Anorexia", "Insomnia", "Appetite Loss", "Depression", "Cramps", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "You'll find your Kryptonite with this powerful Indica. Reported to send patients into a deep Indica medicated state the effects are immediate and long lasting.",
			 "tags": [""],
			 "imageUrl": "images/strains/kryptonite_100x100.jpg"
			},
			{"strainId": 168,
			 "strainName": "Master Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Sweet"],
		 	 "conditions": ["PMS", "Stress", "Insomnia", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This Indica proides full body relaxation with enhanced sensory awareness that can be effective for PMS, Appetite loss, Stress and Insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/master-kush_100x100.jpg"
			},
			{"strainId": 169,
			 "strainName": "Black Magic Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 26.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Fruity"],
		 	 "conditions": ["Stress", "Pain", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Black Magic Kush has been reported to be effective for Body Aches and Pains as well as Insomnia. It typically has a sweet and fruity flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-magic-kush.jpg"
			},
			{"strainId": 170,
			 "strainName": "Blackberry Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
 			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.78
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.94
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.79
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	], 
		 	"taste": ["Berry", "Grape", "Lavender", "Diesel", "Hash"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Productive", "Creative", "Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Most popular for its reputation as an effectve treatment for pain, this Indica proivides strong body effects with flavors ranging from lavender and grape to diesel with a hint of berries.",
			 "tags": [""],
			 "imageUrl": "images/strains/blackberry-kush_100x100.jpg"
			},
			{"strainId": 171,
			 "strainName": "Blue Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.28
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.47
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Blueberry", "Sweet", "Berry"],
		 	 "conditions": ["Stress", "Pain", "Muscle Spasms","Insomnia", "Anxiety", "Depression", "Headache", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid", "Headache", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This strain is optimal for daytime and comes with little to no fatigue or increased appetite, making it a desirable option for medical marijuana patients.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-diesel_100x100.jpg"
			}, 
			{"strainId": 172,
			 "strainName": "Blue Haze",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.13
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.33
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	], 
		 	"taste": ["Earthy", "Blueberry", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Mind + Body", "Happy", "Energetic", "Relaxed", "Creative", "Productive", "Uplifted", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Provides the optimal balance between cerebral and physical effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-haze_100x100.jpg"
			},
			{"strainId": 173,
			 "strainName": "Brutus OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 25.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.46
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.70
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.92
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Citrus", "Lemon", "Pine", "Diesel"],
		 	 "conditions": ["Stress", "Anxiety", "Arthritis", "Chronic Aches", "Muscle Spasms", "Pain"],
			 "positiveEffects": ["Happy", "Relaxed"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "One of the finest choices to be found for those seeking to melt away severe pain and muscle tension and perfect for those in  need of a potent sleeping aid.",
			 "tags": [""],
			 "imageUrl": "images/strains/brutus-og-3.png"
			},
			{"strainId": 174,
			 "strainName": "Bubba Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				} 	
		 	],   
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Hungry", "Euphoric"],
			 "negativeEffects": ["Munchies", "Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A perfect go-to strain for evening relaxation, restful sleep, or a lazy weekend at home.",
			 "tags": [""],
			 "imageUrl": "images/strains/bubba-kush_100x100.jpg"
			},
			{"strainId": 175,
			 "strainName": "Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Cheese", "Pungent", "Earthy"],
		 	 "conditions": ["Anorexia", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Well-known for its relaxed, happy effects that gently ease you into a blissful state of mind.",
			 "tags": [""],
			 "imageUrl": "images/strains/cheese_100x100.jpg"
			}, 
			{"strainId": 176,
			 "strainName": "Cinderella 99",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 10.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Citrus", "Sweet", "Tropical"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Depression", "Appetite Loss", "Fatigue", "Pain", "PMS", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Great for daytime use and provides plenty of energy.",
			 "tags": [""],
			 "imageUrl": "images/strains/cinderella-99_100x100.jpg"
			}, 
			{"strainId": 177,
			 "strainName": "Diablo Haze",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.29
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 5.76
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.63
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.46
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				} 	
		 	],
		 	"taste": ["Berry", "Sweet", "Spicy", "Herbal"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Anxiety", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Focused", "Drowsiness", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This indica has a purple hue, fruity and spicy flavors.",
			 "tags": [""],
			 "imageUrl": "images/strains/diablo_100x100.jpg"
			},
			{"strainId": 177,
			 "strainName": "Diamond OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.95
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],
		 	"taste": ["Sweet", "Pungent", "Earthy"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Muscle Spasms", "Depression"],
			 "positiveEffects": ["Drowsiness", "Relaxed", "Happy", "Euphoric", "Giggly"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "A true indica, this strain induces full-body relaxation that nixes pain and muscle spasms before settling into an overall laziness.",
			 "tags": [""],
			 "imageUrl": "images/strains/diamond-og_100x100.jpg"
			},
			{"strainId": 178,
			 "strainName": "Grandaddy Purple",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.93
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.0
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Grape", "Berry", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Appetite Loss", "Muscle Spasms", "Pain", "Insomnia", "Depression", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Delivering a fusion of cerebral euphoria and physical relaxation, the taste is fruity like grapes and so is the smell.",
			 "tags": [""],
			 "imageUrl": "images/strains/grandaddy-purple.jpg"
			},
			{"strainId": 179,
			 "strainName": "Fire OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.10
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.63
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				} 	
		 	],
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Stress", "Depression", "Anxiety", "Pain", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Long Lasting", "Happy", "Energetic", "Relaxed", "Euphoric", "Uplifted", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Known for being one of the strongest of the OG strains, Fire OG has a strong scent similar to Lemon Pledge and an effect that can last up to 3 hours.",
			 "tags": [""],
			 "imageUrl": "images/strains/fire-og_100x100.jpg"
			}, 
			{"strainId": 180,
			 "strainName": "GirlScout Cookies",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.45
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				} 	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Chocolate", "Mint","Pungent"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Lack of Appetite", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Relaxed", "Uplifted", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Munchies", "Dry Eyes", "Drowsiness",  "Dizzy", "Paranoid",  "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "With a sweet and earthy aroma, Girl Scout Cookies launches you to euphoria's top floor where full-body relaxation meets a time-bending cerebral space.",
			 "tags": [""],
			 "imageUrl": "images/strains/girl-scout-cookies_100x100.jpg"
			},
			{"strainId": 181,
			 "strainName": "Grape Ape",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Grape", "Sweet", "Berry"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Lack of Appetite"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid",  "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. ",
			 "tags": [""],
			 "imageUrl": "images/strains/grape-ape_100x100.jpg"
			},
			{"strainId": 182,
			 "strainName": "Headband",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	],   
		 	"taste": ["Earthy", "Pungent", "Diesel"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy",  "Headache",  "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The smooth, creamy smoke is accented by flavors of lemons and diesel while the long-lasting effects are great for Pain relief, helping you to relax, and to combat elevated stress levels.",
			 "tags": [""],
			 "imageUrl": "images/strains/headband_100x100.jpg"
			}, 
			{"strainId": 183,
			 "strainName": "Island Sweet Skunk",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.60
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Tropical"],
		 	 "conditions": ["Pain", "Stress", "Depression", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy",  "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Some varieties of Island Sweet Skunk have a heightened CBD content to help patients treating anxiety, inflammation, and muscle spasms.",
			 "tags": [""],
			 "imageUrl": "images/strains/island-sweet-skunk_100x100.jpg"
			},
			{"strainId": 184,
			 "strainName": "LA Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.80
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Nutty", "Menthol", "Mint"],
		 	 "conditions": ["Stress", "Fatigue", "Insomnia", "Lack Of Appetite", "Pain"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Creative", "Uplifted"],
			 "negativeEffects": ["Anxious", "Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "If you are looking to alleviate stress or need a spark of creativity, look to LA Kush.",
			 "tags": [""],
			 "imageUrl": "images/strains/la-kush_100x100.jpg"
			},
			{"strainId": 185,
			 "strainName": "Gorilla Glue",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 11.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.18
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.64
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 	
		 	], 
		 	"taste": ["Pine", "Pungent", "Diesel"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Depression", "Fibromyalgia", "Appetite Loss","Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Productive", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This hybrid will increase your appetite while helping with muscle aches and low moods.",
			 "tags": [""],
			 "imageUrl": "images/strains/gorilla-glue--4_100x100.jpg"
			},
			{"strainId": 186,
			 "strainName": "Jack Frost",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.85
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.60
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				} 
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Asthma", "Depression", "Insomnia", "Pain", "Stress"],
			 "positiveEffects": ["Euphoric", "Happy", "Energetic", "Relaxed", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Jack Frost was developed over 5 years of persistence in order to improve on the potency and aroma of this strain.",
			 "tags": [],
			 "imageUrl": "images/strains/jack-frost_100x100.jpg"
			},
			 	{"strainId": 187,
			 "strainName": "Kali Mist",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.24
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.29
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
		 	],
		 	"taste": ["Sweet", "Earthy", "Flowery"],
			"conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression", "Fibromyalgia", "Appetite Loss", "Pain", "Stress"],
		 	"positiveEffects": ["Euphoric", "Happy", "Energetic", "Relaxed", "Creative", "Productive"],
		 	"negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
		 	"descriptionDetailed": "",
		 	"descriptionAbbrev":  "Known to deliver clear headed, energetic effects that can verge on psychedelic at times.",
		 	"tags": [""],
		 	"imageUrl": "images/strains/kali-mist_100x100.jpg"
		},
			 	{"strainId": 188,
				 "strainName": "NY Sour Diesel",
				 "strainType": "Hybrid",
				 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.37
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}
		 	],
		 	"taste": ["Diesel", "Pungent", "Earthy"],
		 	"conditions": ["Anorexia", "Anxiety", "Asthma", "Depression", "Insomnia", "Appetite Loss", "Pain", "Stress"],
		 	"positiveEffects": ["Happy", "Uplifted", "Energetic", "Relaxed", "Productive", "Creative"],
		 	"negativeEffects": ["Munchies", "Drowsiness", "Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
		 	"descriptionDetailed": "",
		 	"descriptionAbbrev":  "This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.",
		 	"tags": [],
		 	"imageUrl": "images/strains/nyc-sour-diesel.jpg"
		},
	 	{"strainId": 189,
	 	"strainName": "Skunk #1",
	 	"strainType": "Hybrid",
	 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 22.20
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.54
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 1.05
				}	
		 	],
		 	"taste": ["Skunk", "Sweet", "Earthy"], 
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Depression", "Fibromyalgia", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Sexual", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "This hybrid offers elevated creativity through its high-energy buzz, while stress and appetite loss melt away.",
			 "tags": [""],
			 "imageUrl": "images/strains/skunk--1_100x100.jpg"
			},
			{"strainId": 190,
			 	"strainName": "Snowcap",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.99
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.50
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.73
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Earthy", "Citrus"],
		 	 "conditions": ["Anxiety", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Uplifted", "Happy", "Energetic", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The effects are decidedly cerebral and should trigger creativity, happiness, and a case of the giggles",
			 "tags": [""],
			 "imageUrl": "images/strains/snowcap_100x100.jpg"
			},
			{"strainId": 191,
			 	"strainName": "Super Silver Haze",
			 	"strainType": "Sativa",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 18.46
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.76
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.45
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.5
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia","Anxiety","Nausea","Depression", "Appetite Loss", "Pain", "Stress", "Fatigue"],
			 "positiveEffects": ["Happy","Uplifted","Euphoric", "Energetic", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The uplifting effects are a great remedy for high stress levels or when suffering from a lack of appetite or nausea.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-silver-haze_100x100.jpg"
			},
			{"strainId": 192,
			 	"strainName": "Neptune OG",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.74
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.02
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.02
				}	
		 	], 
		 	"taste": ["Tropical", "Tree Fruit", "Pungent"],
		 	 "conditions": ["ADD/ADHD", "Anorexia", "Anxiety", "Arthritis", "Insomnia", "Appetite Loss", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive", "Drowsiness", "Hungry", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid", "Anxious", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Sets itself apart by its euphoric onset prior to the heavy, sedative effects, making it also useful for stress relief.",
			 "tags": [""],
			 "imageUrl": "images/strains/neptune-og_100x100.jpg"
			},
			{"strainId": 193,
			 	"strainName": "Organic OG",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 2.79
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.62
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.72
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.03
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["ADD/ADHD", "Anxiety", "Depression", "Appetite Loss", "Pain", "Seizures", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Immediate heavy indica stone that mixes a powerful body high with a racing head rush.",
			 "tags": [""],
			 "imageUrl": "images/strains/organic-og-kush.JPG"
			},
			{"strainId": 194,
			 	"strainName": "Kandy Kush",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.33
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Flowery"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Creative", "Euphoric", "Uplifted", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Kandy Kush won the first ever Western Slope Cannabis Crown in Aspen.",
			 "tags": [""],
			 "imageUrl": "images/strains/kandy-kush_100x100.jpg"
			},
			{"strainId": 195,
			 	"strainName": "King Louis XIII",
			 	"strainType": "Sativa",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 27.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.21
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.17
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Pungent", "Earthy"],
		 	 "conditions": ["Anorexia", "Anxiety", "Insomnia", "Appetite Loss", "Pain", "Stress", "Nausea", "Depression"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "The difference is this monarch's odor is one that's meant to be enjoyed. Its dense nugs have an overwhelmingly piney smell with an earthy musk that will have you thinking of your last forest adventure.",
			 "descriptionAbbrev":  "It's dense nugs have an overwhelmingly piney smell with an earthy musk that will have you thinking of your last forest adventure.",
			 "tags": ["Pine", "Pungent", "Earthy"],
			 "imageUrl": "images/strains/king-louis-xiii_100x100.jpg"
			},
			{"strainId": 196,
			 	"strainName": "White Kryptonite",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.52
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Pungent", "Spicy", "Herbal"],
		 	 "conditions": ["Anxiety", "Insomnia", "Stress", "Fatigue"],
			 "positiveEffects": ["Energetic", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The powerful euphoria dealt by White Kryptonite borders on hypnotic and trance-like at times, making this strain a good choice for meditative, introspective evenings.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-kryptonite_100x100.jpg"
			},
			{"strainId": 197,
			 	"strainName": "Legend OG",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.89
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.88
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.17
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.04
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Pine"],
		 	 "conditions": ["Anorexia", "Anxiety", "Chronic Aches", "Appetite Loss", "Muscle Spasms", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Relaxed", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Capable of sending users into deep indica medicated state, the high can be almost immediate and long lasting.",
			 "tags": [""],
			 "imageUrl": "images/strains/kryptonite_100x100.jpg"
			},
			{"strainId": 198,
			 	"strainName": "Lemon Diesel",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 24.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.33
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 3.70
				}	
		 	], 
		 	"taste": ["Lemon", "Diesel", "Citrus"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Appetite Loss", "Pain", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Creative", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "The smell and flavor have been likened to citrus and pepper, with effects that can sneak up on its consumer. ",
			 "tags": [""],
			 "imageUrl": "images/strains/lemon-diesel_100x100.jpg"
			},
			{"strainId": 199,
			 	"strainName": "Lemon Kush",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 21.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.32
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.72
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.96
				}	
		 	], 
		 	"taste": ["Lemon", "Citrus", "Sweet"],
		 	 "conditions": ["Anorexia", "Anxiety", "Depression", "Appetite Loss", "Pain", "Seizures", "Stress", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Productive", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev":  "Lemon Kush is the perfect solution for when the stresses of life have you feeling sour. It provides uplifting and creative effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/lemon-kush_100x100.jpg"
			},
			{"strainId": 200,
			 	"strainName": "Blackwater",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 16.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Arthritis", "Anxiety", "Insomnia", "Pain", "Stress", "Nausea", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "What begins as a mellow and euphoric cerebral experience melts down to the rest of the body in a head-to-toe euphoric calm that relieves stress and anxiety. Patients have also reported its success in treating pain, appetite loss, and multiple sclerosis.",
			 "tags": [""],
			 "imageUrl": "images/strains/blackwater_100x100.jpg"
			},
			{"strainId": 201,
			 	"strainName": "UltraViolet OG",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Insomnia", "Stress", "Depression"],
			 "positiveEffects": ["Euphoric", "Dreamy", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This powerful indica strain delivers dreamy, sleepy euphoria that gives your eyelids some heaviness at night while giving your mood a burst of positivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/UltravioletOG.jpg"
			},
			{"strainId": 202,
			 	"strainName": "Face Off OG",
			 	"strainType": "Indica",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 19.99
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["Anxiety", "Insomnia", "Stress", "Pain", "Arthritis", "Fibromyalgia", "Headache", "Hangover", "Appetite Loss"],
			 "positiveEffects": ["Euphoric", "Drowsiness", "Calmness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its crushing full-body effects make this strain a great choice for resolving severe pain or for relaxing on a lazy weekend.",
			 "tags": [""],
			 "imageUrl": "images/strains/face-off-og_100x100.jpg"
			},
			{"strainId": 203,
			 	"strainName": "Sunset Sherbet",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 23.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet", "Berry", "Mint", "Fruity"],
		 	 "conditions": ["Stress", "Hypertension", "Bipolar", "Anxiety"],
			 "positiveEffects": ["Relaxed", "Energetic", "Euphoric", "Happy", "Uplifting"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Sunset Sherbet exhibits powerful full-body effects elevated by a jolt of cerebral energy.",
			 "tags": [""],
			 "imageUrl": "images/strains/sunset-sherbet_100x100.jpg"
			},
			{"strainId": 204,
			 	"strainName": "Citrix",
			 	"strainType": "Hybrid",
			 	"components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grapefruit", "Lemon", "Citrus"],
		 	 "conditions": ["Stress", "Hypertension", "Depression"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifting"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Citrix entices the senses before drawing you into its active, clear headed euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/Citrix.jpg"
			},
			{"strainId": 205,
			 "strainName": "Grapefruit",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grapefruit", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Nausea"],
			 "positiveEffects": ["Uplifting", "Happy", "Energetic", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The tropical, citrus smell of Grapefruit mixes with energetic effects to give you a happy stress-reliever that also works well for battling migraine headaches.",
			 "tags": [""],
			 "imageUrl": "images/strains/grapefruit_100x100.jpg"
			},
			{"strainId": 206,
			 "strainName": "Chocolate Kush",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Chocolate", "Earthy", "Pungent", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Nausea"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Hungry", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Also known as Chocolope Kush, the buds on Chocolate Kush are dense and dark colored with a large amount of white crystals. It is known to have the aroma of vanilla mixed with chocolate.",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolate-kush_100x100.jpg"
			},
			{"strainId": 207,
			 "strainName": "Chocolate Chunk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 12.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Chocolate", "Earthy", "Pungent", "Coffee", "Hash"],
		 	 "conditions": ["Stress", "Insomnia", "Depression", "Nausea", "Pain"],
			 "positiveEffects": ["Relaxed", "Happy", "Drowsiness", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Chocolate Chunk gives a quick and heavy hit which will leave you relaxed and even a little bit sleepy. ",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolate-chunk_100x100.jpg"
			},
			{"strainId": 208,
			 "strainName": "Chocolope",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 13.23
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.38
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Coffee", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Headache"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Chocolope provides a strong, euphoric mental shift that is great when coping with depression or stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/chocolope_100x100.jpg"
			},
			{"strainId": 209,
			 "strainName": "Cinex",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 11.19
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Nausea", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The effects are clear headed and uplifting, perfect for building a positive mindset and stimulating creative energy.",
			 "tags": [""],
			 "imageUrl": "images/strains/cinex_100x100.jpg"
			},
			{"strainId": 210,
			 "strainName": "Shiskaberry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9", 
			 		"value": 20.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Headache"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Drowsiness", "Uplifted", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its initial head buzz is happy and good for finishing things up or being social, but once its indica side kicks in, lazy is the word.",
			 "tags": [""],
			 "imageUrl": "images/strains/shishkaberry_100x100.jpg"
			},
			{"strainId": 211,
			 "strainName": "R4",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 1.1
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 15.80
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 2.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": [""],
		 	 "conditions": ["Epilepsy", "Nausea", "Pain", "Cancer"],
			 "positiveEffects": ["Clear headed", "Pain relief"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This is a strong medical choice that won't get patients high. In addition to seizure disorders, medical uses include treatment of pain and nausea.",
			 "tags": [""],
			 "imageUrl": "images/strains/R4-200x160.jpg"
			},
			{"strainId": 212,
			 "strainName": "Super Sweet",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Sweet", "Honey"],
		 	 "conditions": ["Anxiety", "Stress"],
			 "positiveEffects": ["Mild", "Relaxed", "Long Lasting", "Euphoric"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Super Sweet is a good choice for novice consumers or those looking for a less intoxicating buzz.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-sweet_100x100.jpg"
			},
			{"strainId": 213,
			 "strainName": "Sweet Lavender Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Sweet", "Lavender"],
		 	 "conditions": ["Seizures", "Fibromyalgia", "Nausea", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The first place the bud hits you is the in the eyes, an immediate creeper buzz kicks in.  The buzz then spreads to the rest of your head.  After you finish your smoke, the body buzz kicks in.",
			 "tags": [""],
			 "imageUrl": "images/strains/sweet-lavender-diesel.jpg"
			},
			{"strainId": 214,
			 "strainName": "Cotton Candy Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.91
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 2.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.49	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Flowery"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Nausea", "Fibromyalgia", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Euphoric", "Dizzy", "Headache",  "Drowsiness", "Pain relief", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This magnificent blend of Indica-dominant and pure sativa makes for an incredible all-around medication.",
			 "tags": [""],
			 "imageUrl": "images/strains/cotton-candy-kush_100x100.jpg"
			},
			{"strainId": 215,
			 "strainName": "Larry OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.59
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Flowery"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Appetite Loss", "Insomnia", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Larry OG produces a potent yet easy body buzz that will allow you to relax while getting things done. The effects are happy but not overwhelming.",
			 "tags": [""],
			 "imageUrl": "images/strains/larry-og_100x100.jpg"
			},
			{"strainId": 216,
			 "strainName": "Flo",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Citrus"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fibromyalgia", "Nausea", "Migraines"],
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed", "Euphoric", "Energetic", "Clear headed", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes",  "Dizzy", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Energetic yet subtle, making it ideal for many as a wake and bake. Flo can provide a perfect boost for creative types, sparking inspiration for artists and musicians.",
			 "tags": [""],
			 "imageUrl": "images/strains/flo_100x100.jpg"
			},
			{"strainId": 217,
			 "strainName": "Obama Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Grape"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Appetite Loss", "Fibromyalgia", "Migraines"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Uplifted", "Drowsiness", "Balanced"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Paranoid", "Dry Eyes", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain is recommended for all levels of patients looking for a balanced experience, as it offers powerful physical effects as well as an intense cerebral uplift that does not stimulate appetite or put you to sleep.",
			 "tags": [""],
			 "imageUrl": "images/strains/obama-kush_100x100.jpg"
			},
			{"strainId": 218,
			 "strainName": "Orange Crush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.49
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Orange", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Appetite Loss", "Fibromyalgia", "Migraines"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Orange Crush is a sativa-dominant cannabis strain with a super sweet tangy flavor and aroma.",
			 "tags": [""],
			 "imageUrl": "images/strains/orange-crush_100x100.jpg"
			},
			{"strainId": 219,
			 "strainName": "Pink Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Flowery", "Earthy" ],
		 	 "conditions": ["Pain", "Insomnia", "Anxiety", "Appetite Loss", "Fibromyalgia", "Epilepsy"],
			 "positiveEffects": ["Intense", "Relaxed", "Euphoric", "Pain", "Hungry", "Drowsiness", "Sexual"],
			 "negativeEffects": ["Dry Eyes", "Munchies", "Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Even for veteran consumers, the heaviness of this  strain could be considered overpowering, and even small doses eliminate pain, insomnia, and appetite loss.",
			 "tags": [""],
			 "imageUrl": "images/strains/pink-kush_100x100.jpg"
			},
			{"strainId": 220,
			 "strainName": "Red Dragon",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Sweet", "Pungent", "Spicy", "Herbal" ],
		 	 "conditions": ["Stress", "Pain", "Depression", "Appetite Loss", "Fibromyalgia", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Relaxed", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Slightly sativa-dominant, this strain is giggly and upbeat. Great for those suffering from depression or stress, Red Dragon has a very happy and uplifting effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/red-dragon_100x100.jpg"
			},
			{"strainId": 221,
			 "strainName": "Purple Sour Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Pungent" ],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Depression", "Headache", "Fibromyalgia"],
			 "positiveEffects": ["Euphoric", "Relaxed", "Happy", "Uplifted", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Featuring heavy head effects and a slight body high, Purple Sour Diesel will energize your mind while leaving you physically relaxed. This strain features a sour, fruity aroma similar to sour grapes.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-sour-diesel_100x100.jpg"
			},
			{"strainId": 222,
			 "strainName": "Dream Queen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.26	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.78
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 2.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 2.04
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.67
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Flowery" ],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Nausea", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Euphoric", "Happy", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "With an aroma of bubblegum and slight hints of mango and pineapple, Dream Queen will provide a good cerebral high.",
			 "tags": [""],
			 "imageUrl": "images/strains/dream-queen_100x100.jpg"
			},
			{"strainId": 223,
			 "strainName": "Willy's Wonder",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.39
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 3.99
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 2.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.78
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.08
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Flowery" ],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Anxiety", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Happy", "Energetic", "Creative", "Productive", "Tingly", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The strain's aroma is an equally diverse mix of tropical fruit and citrus that also comes through in its sweet and sour taste.",
			 "tags": [""],
			 "imageUrl": "images/strains/willy-s-wonder_100x100.jpg"
			},
			{"strainId": 224,
			 "strainName": "Jean Guy",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Earthy", "Lemon", "Pine"],
		 	 "conditions": ["Fatigue", "Fibromyalgia", "Cancer"],
			 "positiveEffects": ["Energetic", "Uplifted", "Intense", "Pain relief", "Relaxed", "Sexual", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its energizing and uplifting qualities makes Jean Guy a perfect strain to start the day with, although scattered and distracting thoughts may interfere with productivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/jean-guy_100x100.jpg"
			},
			{"strainId": 225,
			 "strainName": "Orange Bud",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Orange", "Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Fibromyalgia", "Anxiety"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Creative", "Hungry", "Intense"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "With bright orange hairs coating the surface, this strain has scents of orange and nectarines.",
			 "tags": [""],
			 "imageUrl": "images/strains/orange-bud_100x100.jpg"
			},
			{"strainId": 226,
			 "strainName": "Fucking Incredible",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.13
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.38	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.53
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.21
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Skunk"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Depression", "Inflammation", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Sexual"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A pure indica strain and was created by combining the genetics of two magnificent indicas back in 1990.",
			 "tags": [""],
			 "imageUrl": "images/strains/fucking-incredible_100x100.jpg"
			},
			{"strainId": 227,
			 "strainName": "Sage N Sour",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.54
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.62
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.52
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.89
				}	
		 	], 
		 	"taste": ["Sage", "Earthy", "Sweet"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Appetite Loss", "Nausea",  "Fibromyalgia"],
			 "positiveEffects": ["Uplifted", "Euphoric", "Happy", "Energetic", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "With an aroma that closely matches the subtle herbal notes of sage, Sage N Sour delivers a perfect balance of euphoria, energy, and happiness to its consumer.",
			 "tags": [""],
			 "imageUrl": "images/strains/sage-n-sour_100x100.jpg"
			},
			{"strainId": 228,
			 "strainName": "Bubba OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.39
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.71
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Drowsiness", "Hungry", "Happy", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Tingly body and sleepy eyes, you will want to sit but your mind can remain focused or is free to wander.  Great for relaxing, hanging out, and just enjoying life.",
			 "tags": [""],
			 "imageUrl": "images/strains/bubba-og_100x100.jpg"
			},
			{"strainId": 229,
			 "strainName": "Hawaiian Snow",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.31	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.08 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.75
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.99
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Insomnia", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Giggly", "Uplifted", "Euphoric", "Energetic", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This cannabis strain has been known to incite long rounds of giggles, great for hanging out with friends.",
			 "tags": [""],
			 "imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			},
			{"strainId": 230,
			 "strainName": "Dr. Who",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.21
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.18
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Pungent", "Earthy"],
		 	 "conditions": ["Pain", "Stress", "Appetite Loss", "Multiple Sclerosis", "ADHD", "Bipolar", "Depression", "Nausea", "Fibromyalgia"],
			 "positiveEffects": ["Pain relief", "Relaxed", "Uplifted", "Hungry", "Calmness", "Productive"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This 60 percent indica strain can deliver swift relief to pain, stress, appetite loss, multiple sclerosis, ADHD, mood disorders, and nausea without lethargy or sedation, making Dr. Who a good choice for any time of the day.",
			 "tags": [""],
			 "imageUrl": "images/strains/dr--who_100x100.jpg"
			}, 
			{"strainId": 231,
			 "strainName": "Pinneapple Chunk",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.51
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.71	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.40
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pineapple", "Sweet", "Skunk"],
		 	 "conditions": ["Pain", "Chronic Pain"],
			 "positiveEffects": ["Intense", "Energetic", "Relaxed", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Pineapple Chunk will deliver a small dose of CBD with its crushing THC content, resulting in powerful painkilling and stress-relieving properties.",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple-chunk_100x100.jpg"
			},
			{"strainId": 232,
			 "strainName": "Pot of Gold",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.36
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.13	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.77
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.66
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.47
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Pungent", "Berry", "Hash"],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Appetite Loss", "Depression", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Pain relief", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Comes on quick and is very much a head stone. Usually very sticky and hard to break up by hand, definitely use a grinder for this variety.",
			 "tags": [""],
			 "imageUrl": "images/strains/pot-of-gold_100x100.jpg"
			},
			{"strainId": 233,
			 "strainName": "Tangerine Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.95
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.84	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.37
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.10
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.45
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Orange", "Tropical"],
		 	 "conditions": ["Stress", "Headache", "Insomnia", "Pain", "Depression"],
			 "positiveEffects": ["Happy", "Relaxed", "Uplifted", "Euphoric", "Energetic", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Tangerine Kush is potent with a quick onset. Providing consumers with a happy, body-heavy sensation, this strain is great for those looking for a lazy day at the beach.",
			 "tags": [""],
			 "imageUrl": "images/strains/tangerine-kush_100x100.jpg"
			},
			{"strainId": 234,
			 "strainName": "Black Cherry Soda",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.75	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.87
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.36
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Stress", "Anxiety", "Appetite Loss"],
			 "positiveEffects": ["Energetic", "Pain relief", "Long Lasting", "Clear headed", "Balanced", "Creative", "Relaxed", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Munchies", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Black Cherry Soda is a potent medicine that hits without heavy sedation, making it popular among patients treating severe symptoms throughout the day.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-cherry-soda_100x100.jpg"
			},
			{"strainId": 235,
			 "strainName": "Qrazy Train",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.02
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.11	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.35
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Earthy", "Fruit", "Spicy"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Pain", "Depression", "Insomnia", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Focused", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A true hybrid, this train will have you feeling mellow and alert. Its diversity comes out in the strain's unique flavor that includes spice and fruit notes.",
			 "tags": [""],
			 "imageUrl": "images/strains/qrazy-train_100x100.jpg"
			},
			{"strainId": 236,
			 "strainName": "Death Star OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 3.05
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Insomnia", "Pain", "Nausea", "Depression"],
			 "positiveEffects": ["Euphoric", "Drowsiness", "Relaxed", "Happy", "Uplifted"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Death Star OG is a potent cross between Sour Diesel, Sensi Star, and OG Kush.",
			 "tags": [""],
			 "imageUrl": "images/strains/death-star-og_100x100.jpg"
			},
			{"strainId": 237,
			 "strainName": "Blueberry Cheesecake",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.26
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.24	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.64
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.44
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Coffee", "Blueberry", "Sweet", "Blue Cheese"],
		 	 "conditions": ["Fibromyalgia","Stress", "Pain", "Depression", "Nausea", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Happy", "Uplifted", "Drowsiness", "Euphoric", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Strong coffee, blueberry, sweet flavors and a smooth smoke with a heavy throat hit.",
			 "tags": [""],
			 "imageUrl": "images/strains/blueberry-cheesecake_100x100.jpg"
			},
			{"strainId": 238,
			 "strainName": "Blue Crack",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 6.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.22	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Blueberry", "Berry", "Mint"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fibromyalgia", "Fatigue", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Happy", "Creative", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "As a high-energy strain with moderate to long-lasting effects, Blue Crack is a popular choice for daytime medicating.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-crack_100x100.jpg"
			},
			{"strainId": 239,
			 "strainName": "Bio-Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.57
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.64	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.91
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 2.23
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Chemical"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Depression", "Headache", "Appetite Loss"],
			 "positiveEffects": ["Euphoric", "Happy", "Relaxed", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Excels at delivering both intense and balanced effects: an acute, speedy sativa onset gravitates into numbing relaxation. ",
			 "tags": [""],
			 "imageUrl": "images/strains/bio-diesel_100x100.jpg"
			},
			{"strainId": 240,
			 "strainName": "Power Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 6.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 7.71
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.22
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.43
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pine"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Stress", "Inflammation", "Depression", "Muscle Spasms"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Energetic", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The aroma is likened to a sweet skunk smell with a light touch of strawberry and orange and the effects are both cerebral and physical.",
			 "tags": [""],
			 "imageUrl": "images/strains/power-kush_100x100.jpg"
			},
			{"strainId": 241,
			 "strainName": "Panama Red",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 27.52
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.19	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.15
				}	
		 	], 
		 	"taste": ["Earthy", "Tropical", "Mint"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Fatigue", "Nausea"],
			 "positiveEffects": ["Happy","Energetic", "Uplifted", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Headache", "Dry Eyes", "Anxious", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Originating from Panama, this pure sativa rose to stardom in the late 1960's thanks to its typical sativa effects: speedy and intense, bordering on psychedelic. Those who fondly recall days of its prominence love its smooth medicating experience and loftily contemplate its revival.",
			 "tags": [""],
			 "imageUrl": "images/strains/panama-red_100x100.jpg"
			},
			{"strainId": 242,
			 "strainName": "Purple Dragon",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.18
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.05	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.89
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Sweet", "Pungent"],
		 	 "conditions": ["Stress", "Insomnia", "Pain", "Fibromyalgia", "Fatigue", "Nausea"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Drowsiness", "Happy", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "While initially uplifting, Purple Dragon shows its full range of effects over time. Relaxing muscles and relieving pain, this strain provides a gentle and effective body buzz. Purple Dragon is a must-try strain for those looking for a truly different cannabis experience.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-dragon_100x100.jpg"
			},
			{"strainId": 243,
			 "strainName": "King Kong",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.80	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.12 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.74
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.62
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.77
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.43
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pungent", "Earthy", "Skunk"],
		 	 "conditions": ["Stress", "Pain", "Fibromyalgia", "Appetite Loss", "Insomnia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Hungry", "Giggly", "Long Lasting"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Anxious", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "King Kong is known to have a pungent sour, skunky smell with long-lasting effects that target pain, nausea, anxiety, and the appetite. Even though its genetics tip toward the indica side, King Kong has an uplifting and focused effect enjoyed by indica and sativa lovers alike.",
			 "tags": [""],
			 "imageUrl": "images/strains/king-kong_100x100.jpg"
			},
			{"strainId": 244,
			 "strainName": "Church OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.48
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.13
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Spicy", "Herbal"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Insomnia", "Fatigue", "Stress", "Depression"],
			 "positiveEffects": ["Relaxed", "Hungry", "Happy", "Dry Mouth", "Tingly", "Pain Relief"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Church OG is an indica marijuana strain that provides strong body sensations that may evolve to a lasting cerebral effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/church-og_100x100.jpg"
			}, 
			{"strainId": 245,
			 "strainName": "Purple Arrow",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.80	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.26
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.36
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Spicy", "Herbal"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Depression", "Headache", "Nausea"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Drowsiness", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Headache", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This hybrid provides effective relief for severe pain while simultaneously inducing a sense of uplift and euphoria. When you need immediate relief and would like to stay off the couch, Purple Arrow is a fantastic choice.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-arrow_100x100.jpg"
			},
			{"strainId": 246,
			 "strainName": "Pandora's Box",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.59	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.68
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.34
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.82
				}	
		 	], 
		 	"taste": ["Earthy", "Chemical", "Sweet", "Citrus"],
		 	 "conditions": ["Depression", "Appetite Loss", "Pain", "Fibromyalgia"],
			 "positiveEffects": ["Balanced", "Tingly", "Giggly", "Relaxed", "Uplifted", "Hungry", "Pain relief", "Euphoric"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain has high THC levels and a citrus flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/pandora-s-box_100x100.jpg"
			},
			{"strainId": 247,
			 "strainName": "Abusive OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.83
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.72	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.70
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.20
				}	
		 	], 
		 	"taste": ["Spicy", "Herbal", "Earthy", "Pungent"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Anxiety", "Appetite Loss", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Despite its violent name, Abusive OG will ease you into in a peaceful state of mind that fades over time to a full-body relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/abusive-og_100x100.jpg"
			},
			{"strainId": 248,
			 "strainName": "Platinum Purple Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 13.25
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.13
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": [""],
		 	 "conditions": ["Stress", "Insomnia", "Appetite Loss", "Pain", "Fibromyalgia", "Depression"],
			 "positiveEffects": ["Drowsiness", "Relaxed", "Euphoric", "Happy", "Hungry", "Pain relief", "Focused"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Dizzy", "Anxious", "Paranoid",  "Drowsiness", "Couch Lock", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A great nighttime cannabis strain. If you suffer from insomnia or would like to wind down after a busy workday, this strain may be a good one to try.",
			 "tags": [""],
			 "imageUrl": "images/strains/Platinum-Purple-Kush_100x100.jpg"
			},
			{"strainId": 249,
			 "strainName": "Black Tuna",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Skunk", "Spicy"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Chronic Inflammation", "Eye Pressure", "Stress", "Insomnia", "Nausea", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Pain relief", "Euphoric", "Relaxed", "Drowsiness", "Hungry",  "Uplifted"],
			 "negativeEffects": ["Couch Lock", "Munchies", "Dry Mouth", "Dizzy", "Dry Eyes", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Top strain for medical users and those that are looking for that extra punch which they havent found in the past years.  With Black Tuna, you will be off your sleeping pills in record time. Note that this smoke can be too strong for some users.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-tuna_100x100.jpg"
			},
			{"strainId": 250,
			 "strainName": "Charlie Sheen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.34
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.09 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.27
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 3.87
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.59
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.35
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Citrus"],
		 	 "conditions": ["Insomnia", "Pain", "Fibromyalgia", "Depression"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Long Lasting", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The effects are relaxing and uplifted, with a lengthy, sleepy come-down great for pain relief and insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/charlie-sheen_100x100.jpg"
			}, 
			{"strainId": 251,
			 "strainName": "Rainbow",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.40
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.25	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.29
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.79
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tropical", "Citrus", "Grapefruit"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Muscle Spasms", "Appetite Loss", "Nausea"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Mellow", "Uplifted", "Creative", "Hungry", "Pain relief"],
			 "negativeEffects": ["Hungry", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Tastes similar to tropical Starburst with small dense purple, orange and green colored buds.",
			 "tags": [""],
			 "imageUrl": "images/strains/rainbow_100x100.jpg"
			},
			{"strainId": 252,
			 "strainName": "Caramelicious",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Nausea", "Inflammation", "Fatigue"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Relaxed", "Mellow"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The effect is a steady buzz, but not too strong. It lives up to its name as its' name as its' buds are sticky, and it tastes like caramel. Recommended for those who have depression.",
			 "tags": [""],
			 "imageUrl": "images/strains/caramelicious_100x100.jpg"
			},
			{"strainId": 253,
			 "strainName": "Sour Cream",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Berry"],
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Pain", "Fibromyalgia"],
			 "positiveEffects": ["Uplifted", "Happy", "Relaxed", "Drowsiness", "Balanced"],
			 "negativeEffects": ["Drowsiness", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain is perfect for a relaxing night in, and anyone looking for instant stress relief will find it in Sour Cream.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-cream_100x100.jpg"
			},
			{"strainId": 254,
			 "strainName": "Apollo 11",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.61
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Depression", "Headache", "Pain", "Fatigue"],
			 "positiveEffects": ["Uplifted", "Energetic", "Euphoric", "Creative", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Effective for treating stress and moderate pain, for a few hours this strain will give you a first-class trip out of this world.",
			 "tags": [""],
			 "imageUrl": "images/strains/apollo-11_100x100.jpg"
			},
			{"strainId": 255,
			 "strainName": "Green Crack Extreme",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.42
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Skunk"],
		 	 "conditions": ["Fibromyalgia", "Depression", "Fatigue", "Appetite Loss", "Headache", "Stress"],
			 "positiveEffects": ["Happy", "Energetic", "Uplifted", "Euphoric", "Creative", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This is the more extreme sister of the original Green Crack that will leave you with the same creative mental effects but may not leave you quite as focused. Contrary to its extreme name, this strain is helpful in reducing stress and getting inspired.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-crack-extreme_100x100.jpg"
			},
			{"strainId": 256,
			 "strainName": "Sour Cheese",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.90	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.50 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Cheese", "Diesel", "Earthy"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Depression", "Stress", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Creative", "Uplifted", "Euphoric", "Happy", "Pain relief", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Paranoid", "Dizzy", "Headache", "Dry Eyes"],
			 "descriptionDetailed": "Want pungent, tangy tasty weed that isn't a chore to grow? Sour Cheese is the perfect combination of the original Exodus Cheese and Strawberry genetics. Due to the tried-and-true classic quality of both these strains the Sour Cheese delivers the perfect blend of Cheesy sweet and sour taste and potent Kush body hit.",
			 "descriptionAbbrev": "Want pungent, tangy tasty weed that isn't a chore to grow? Sour Cheese is the perfect combination of the original Exodus Cheese and Strawberry genetics. Due to the tried-and-true classic quality of both these strains the Sour Cheese delivers the perfect blend of Cheesy sweet and sour taste and potent Kush body hit.",
			 "tags": [""],
			 "imageUrl": "images/strains/sour-cheese_100x100.jpg"
			},
			{"strainId": 257,
			 "strainName": "Venom OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.61	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.10 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.60
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.81
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.70
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.58
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.31
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.11
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Pine"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Pain relief", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain is recommended for nighttime use as its effects tend toward full-body relaxation, but it also provides some sensory elevation that is enjoyable for lazy activities. Patients have found Venom OG a potent remedy for pain, arthritis, anxiety, and sleep disorders.",
			 "tags": [""],
			 "imageUrl": "images/strains/venom-og_100x100.jpg"
			},
			{"strainId": 258,
			 "strainName": "Platinum Wreck",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.53
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.44	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.54
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Honey", "Lemon", "Sour"],
		 	 "conditions": ["Fibromyalgia", "Anxiety", "Arthritis", "Anorexia", "Chronic Pain", "Depression", "Migraines", "Nausea", "Stress" ],
			 "positiveEffects": ["Relaxed", "Focused", "Pain relief", "Euphoric", "Uplifted",  "Hungry", "Energetic"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Platinum Wreck is a sativa-dominant cannabis strain that's a hard hitter with thick smoke and is a good pain reliever which also helps with stress and anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/platinum_kush_indica.jpg"
			},
			{"strainId": 259,
			 "strainName": "Deep Purple",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.13
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.19	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.61
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Spicy", "Herbal", "Earthy", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Fibromyalgia", "Depression", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Long Lasting", "Pain relief", "Drowsiness", "Hungry"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A strong indica high, Deep Purple is calming and relaxing.",
			 "tags": [""],
			 "imageUrl": "images/strains/deep-purple_100x100.jpg"
			},
			{"strainId": 260,
			 "strainName": "Purple AK-47",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Dank", "Pungent", "Earthy", "Woody"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Stress", "Depression", "Muscle Spasms", "Fatigue"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Drowsiness", "Happy", "Uplifted", "Tingly", "Energetic", "Balanced", "Productive", "Pain relief"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "After the sweet, danky, grape flavor hits your taste buds, an extremely mellow, relaxing high follows, leaving you with extreme munchies and wanting to fall asleep after about 45 minutes. ",
			 "tags": [""],
			 "imageUrl": "images/strains/Purple-AK-47_100x100.jpg"
			}, 
			{"strainId": 261,
			 "strainName": "Purple Afghani",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.05
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.69	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.15 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Sweet"],
		 	 "conditions": ["Insomnia", "Pain", "Fibromyalgia", "Nausea", "Appetite Loss", "Depression"],
			 "positiveEffects": ["Drowsiness", "Hungry", "Relaxed", "Uplifted", "Happy", "Dry Mouth" ],
			 "negativeEffects": ["Munchies", "Couch Lock", "Dry Eyes", "Dry Mouth", "Headache", "Anxious", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Will cause couchlock and extremely laziness..and of course you will get a huge case of the munchies.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-afghani_100x100.jpg"
			}, 
			{"strainId": 262,
			 "strainName": "Heavy Duty Fruity",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Citrus", "Peach"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Insomnia", "Headache"],
			 "positiveEffects": ["Uplifted", "Happy", "Giggly", "Euphoric", "Creative", "Psychoactive", "Drowsiness"],
			 "negativeEffects": ["Couch Lock", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Depending on when this plant is harvested, her effects range from psychedelic and spacey to mellow relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/heavy-duty-fruity_100x100.jpg"
			}, 
			{"strainId": 263,
			 "strainName": "The Truth",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.33	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.47
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.81
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Chronic Pain", "Headache", "Insomnia", "Anxious"],
			 "positiveEffects": ["Conversational", "Pain relief", "Uplifted", "Happy", "Mellow", "Relaxed", "Focused"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its heavy painkilling properties are accented by an earthy, spicy aroma characteristic of Kush varieties.",
			 "tags": [""],
			 "imageUrl": "images/strains/the-truth_100x100.jpg"
			},
			{"strainId": 264,
			 "strainName": "Triple Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Tropical", "Chemical", "Pungent"],
		 	 "conditions": ["Stress", "Pain", "Anxiety", "Fatigue", "Muscle Spasms", "Fibromyalgia", "Nausea"],
			 "positiveEffects": ["Relaxed", "Uplifted", "Happy", "Euphoric", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Anxious", "Dry Eyes", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A focused head high at small doses and a deeply relaxing head high at larger doses. ",
			 "tags": [""],
			 "imageUrl": "images/strains/triple-diesel_100x100.jpg"
			},
			{"strainId": 265,
			 "strainName": "Grape Crush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.46	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.16
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.37
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.36
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape", "Berry", "Sweet"],
		 	 "conditions": ["Pain", "Fibromyalgia", "Insomnia", "Muscle Spasms", "Cramps", "Stress"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Pain relief", "Hungry", "Conversational" ],
			 "negativeEffects": ["Couch Lock", "Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Intended to produce a slow-moving high that relaxes the body and inspires the mind.",
			 "tags": [""],
			 "imageUrl": "images/strains/grape-crush_100x100.jpg"
			},
			{"strainId": 266,
			 "strainName": "Holland's Hope",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 13.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 3.13
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.53
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Grape", "Berry"],
		 	 "conditions": ["Stress", "Headache", "Pain", "Fibromyalgia", "Depression", "Insomnia"],
			 "positiveEffects": ["Happy", "Relaxed", "Euphoric", "Mellow", "Long Lasting", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Couch Lock", "Munchies", "Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Great indica with a long lasting high, perfect for a nice mellow night of chilling with friends or watching movies.",
			 "tags": [""],
			 "imageUrl": "images/strains/hollands-hope_100x100.jpg" 
			},
			{"strainId": 267,
			 "strainName": "Black Cherry OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.29	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.57
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Citrus"],
		 	 "conditions": ["Depression", "Stress", "Pain", "Fibromyalgia", "Insomnia", "PMS"],
			 "positiveEffects": ["Uplifted", "Relaxed", "Giggly", "Drowsiness", "Mellow", "Pain relief"],
			 "negativeEffects": ["Couch Lock", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Relaxing full-body effects take over, ridding you of pain and insomnia while lifting the mood. Tastes like black cherry syrup before it's mixed with carbonation to make soda.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-cherry-og_100x100.jpg"
			},
			{"strainId": 268,
			 "strainName": "Blue Frost",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Pungent", "Blueberry", "Sweet", "Fruity", "Cheese"],
		 	 "conditions": ["PMS", "Depression", "Stress", "Headache", "Chronic Pain"],
			 "positiveEffects": ["Uplifted", "Pain relief", "Relaxed", "Drowsiness", "Hungry", "Tingly"],
			 "negativeEffects": ["Paranoid", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This hybrid is sure to lift your mood and replace any stress you may have with a smile on your face. ",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-frost_100x100.jpg"
			},
			{"strainId": 269,
			 "strainName": "BC Sweet Tooth",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.30	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.70
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.67
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Honey", "Sweet", "Vanilla"],
		 	 "conditions": ["Insomnia", "Nausea", "Pain", "Stress", "Depression"],
			 "positiveEffects": ["Drowsiness", "Happy", "Hungry", "Relaxed", "Pain relief"],
			 "negativeEffects": ["Dry Mouth", "Munchies", "Couch Lock", "Headache", "Dizzy", "Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This treat satisfies with a long-lasting, potent feeling that hits fast.",
			 "tags": [""],
			 "imageUrl": "images/strains/bc-sweet-tooth_100x100.jpg"
			},
			{"strainId": 270,
			 "strainName": "Pink Panther",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 10.87
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.53	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.05
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.68
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.63
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.04
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Diesel"],
		 	 "conditions": ["Depression", "Anxiety", "Stress", "Social Anxiety"],
			 "positiveEffects": ["Happy", "Euphoric", "Giggly", "Conversational", "Focused", "Relaxed", "Uplifted", "Drowsiness", "Creative"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Pink Panther has an energized effect on your system, making you feel creative and euphoric. It makes you happy and clear-headed at the same time.",
			 "tags": [""],
			 "imageUrl": "images/strains/pink-panther_100x100.jpg"
			},
			{"strainId": 271,
			 "strainName": "Orange Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.84	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.25
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.68
				}	
		 	], 
		 	"taste": ["Sweet", "Orange", "Diesel", "Chemical"],
		 	 "conditions": ["ADHD", "PTSD", "Fatigue", "Stress","Fibromyalgia", "Depression"],
			 "positiveEffects": ["Energetic", "Focused", "Relaxed", "Creative", "Euphoric", "Potent"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Sativa-lovers will appreciate the sharp sense of energy and focus that Orange Diesel delivers, and these effects may be helpful for patients treating ADD/ADHD, fatigue, and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/orange-diesel_100x100.jpg"
			},
			{"strainId": 272,
			 "strainName": "Watermelon",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.06
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.48	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Strawberry", "Spicy", "Herbal", "Hash"],
		 	 "conditions": ["Insomnia","Stress", "Appetite Loss", "Pain"],
			 "positiveEffects": ["Drowsiness", "Hungry", "Relaxed", "Pain relief", "Mind + Body"],
			 "negativeEffects": ["Couch Lock", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "As the name suggests, this strain has a distinct fruity watermelon flavor profile, reminiscent of grape with hashy undertones.",
			 "tags": [""],
			 "imageUrl": "images/strains/watermelon_100x100.jpg"
			},
			{"strainId": 273,
			 "strainName": "OG Wreck",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 3.77
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 1.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Earthy", "Sweet"],
		 	 "conditions": ["Nausea", "Appetite Loss", "Pain", "Headache", "Insomnia", "Stress", "Fibromyalgia"],
			 "positiveEffects": ["Euphoric", "Hungry", "Creative", "Happy", "Energetic"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This high-THC strain ushers in a variety of therapeutic effects suitable for patients treating pain, nausea, appetite loss, fatigue, depression, headaches, and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/og-wreck_100x100.jpg"
			},
			{"strainId": 274,
			 "strainName": "Green Hornet",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.55
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Flowery", "Sweet", "Herbal"],
		 	 "conditions": ["Depression", "Fatigue", "Fibromyalgia", "Headache", "Stress", "Appetite Loss"],
			 "positiveEffects": ["Euphoric", "Happy", "Uplifted", "Focused", "Tingly"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Nice calm high, that doesn't make you tired and gets your mind right.",
			 "tags": [""],
			 "imageUrl": "images/strains/green-hornet_100x100.jpg"
			},
			{"strainId": 275,
			 "strainName": "Purple Ice",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Sweet", "Grapefruit", "Flowery"],
		 	 "conditions": ["Anxiety", "Depression", "Insomnia", "Fibromyalgia", "Bipolar", "Migraines", "Nausea", "Chronic Pain"],
			 "positiveEffects": ["Euphoric", "Happy", "Energetic", "Conversational", "Uplifted", "Pain relief", "Creative", "Tingly"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain is known for creating a calming, tingly sensation that begins in the head before traveling to the rest of your body.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-ice_100x100.jpg"
			},
			{"strainId": 276,
			 "strainName": "Blue Knight",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.13
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 3.93
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Herbal", "Woody", "Blueberry"],
		 	 "conditions": ["Stress", "Anxiety", "Insomnia", "Depression", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Relaxed", "Pain relief", "Hungry", "Drowsiness", "Psychoactive"],
			 "negativeEffects": ["Munchies", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Earthy, woody, and blueberry flavors are unleashed on the exhale, and the relaxing full-body effects that follow are often enough to soothe pain and stimulate the appetite.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-knight_100x100.jpg"
			},
			{"strainId": 277,
			 "strainName": "Scooby Snacks",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Fruity", "Tea", "Flowery", "Apple", "Rose"],
		 	 "conditions": ["Insomnia", "Stress", "Anxiety", "Depression"],
			 "positiveEffects": ["Relaxed", "Calm", "Drowsiness", "Balanced"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The combination of popular West Coast genetics brings on stimulating cerebral effects that weigh heavy on your eyes and slowly relax the body.",
			 "tags": ["Drui"],
			 "imageUrl": "images/strains/scooby-snacks_100x100.jpg"
			},
			{"strainId": 278,
			 "strainName": "Afghan Diesel",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grapefruit", "Pear", "Sweet", "Flowery", "Grape"],
		 	 "conditions": ["Fatigue", "Migraines", "Anxiety", "Stress", "Depression", "Appetite Loss", "Insomnia", "Nausea", "Pain"],
			 "positiveEffects": ["Creative", "Energetic",  "Euphoric", "Happy", "Giggly", "Relaxed", "Pain relief"],
			 "negativeEffects": ["Munchies", "Drowsiness","Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The taste has been described as light and sweet. This strain will have a more cerebral effect rather than body. ",
			 "tags": [""],
			 "imageUrl": "images/strains/afghan-diesel_100x100.jpg"
			},
			{"strainId": 279,
			 "strainName": "Tigers Milk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.74
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.65	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.03
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.45
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 1.21
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.82
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Cheese", "Pungent"],
		 	 "conditions": ["Pain", "Insomnia", "Depression", "Anxiety"],
			 "positiveEffects": ["Euphoric", "Intense", "Potent", "Psychoactive", "Pain relief", "Drowsiness", "Relaxed"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Tigers Milk hits with intense cerebral euphoria, an experience described by its breeders as being borderline psychedelic. Tapering down to restful relaxation over time, this indica is commonly looked to for its pain-relieving and sleepy qualities.",
			 "tags": [""],
			 "imageUrl": "images/strains/tiger-s-milk_100x100.jpg"
			},
			{"strainId": 280,
			 "strainName": "Mexican",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Tea"],
		 	 "conditions": ["Depression", "Fatigue","Stress", "Appetite Loss", "Nausea"],
			 "positiveEffects": ["Balanced", "Energetic", "Relaxed", "Euphoric", "Conversational", "Hungry"],
			 "negativeEffects": ["Paranoid", "Headache", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The perfect mix of relaxing and energetic with extreme heavenly euphoria and absolutely no paranoia whatsoever. ",
			 "tags": [""],
			 "imageUrl": "images/strains/mexican_100x100.jpg"
			},
			{"strainId": 281,
			 "strainName": "Lifesaver",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.33
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.63
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Grapefruit", "Berry"],
		 	 "conditions": ["Fatigue", "Depression", "Stress", "Pain", "Fibromyalgia", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Giggly", "Happy", "Euphoric", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Relaxing with a grape and bubble gum aroma, this strain is worth a try for those looking for a stronger, medicated feeling.",
			 "tags": [""],
			 "imageUrl": "images/strains/lifesaver_100x100.jpg"
			},
			{"strainId": 282,
			 "strainName": "Freezeland",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.04
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.19	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.35
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Woody", "Flowery"],
		 	 "conditions": ["Chronic Back Pain", "Pain", "Fibromyalgia", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Drowsiness", "Pain relief", "Relaxed", "Calmness"],
			 "negativeEffects": ["Paranoid", "Couch Lock", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Chronic pain and insomnia are the most common symptoms treated with this strain, and anyone looking for relaxation or rest will find it in Freezeland.",
			 "tags": [""],
			 "imageUrl": "images/strains/freezeland_100x100.jpg"
			},
			{"strainId": 283,
			 "strainName": "Critical Sensi Star",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.39
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Citrus", "Earthy"],
		 	 "conditions": ["Insomnia", "Muscle Spasms", "Fibromyalgia", "Stress", "Appetite Loss", "Chronic Back Pain"],
			 "positiveEffects": ["Relaxed", "Happy", "Pain relief", "Drowsiness", "Conversational", "Calmness"],
			 "negativeEffects": ["Couch Lock", "Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The relaxing effects will help any consumer find their happy place, even when coping with insomnia, muscle spasms, or high stress levels.",
			 "tags": [""],
			 "imageUrl": "images/strains/critical-sensi-star_100x100.jpg"
			},
			{"strainId": 284,
			 "strainName": "Rugburn OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.38
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.37	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.65
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.33
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pungent", "Diesel", "Sweet", "Citrus"],
		 	 "conditions": ["Chronic Pain", "Depression", "Fibromyalgia", "Nausea", "Appetite Loss", "Insomnia", "Anxiety", "Stress"],
			 "positiveEffects": ["Relaxed", "Euphoric", "Uplifted", "Pain relief"],
			 "negativeEffects": ["Paranoid", "Dry Eyes", "Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Most certainly Indica dominant, Rugburn OG has a body buzz that would be narcotic if not for the fact that it is accompanied by a happy mental high. This means it may be used to burn away fatigue, anxiety and stress.",
			 "tags": [""],
			 "imageUrl": "images/strains/rug-burn-og_100x100.jpg"
			},
			{"strainId": 285,
			 "strainName": "White Lightning",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.42
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.31	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Earthy"],
		 	 "conditions": ["Multiple Sclerosis", "Insomnia", "Anorexia", "Parkinsons", "Nausea", "Pain", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Calmness", "Hungry", "Relaxed"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "White Lightning induces a deep indica calm that relieves pain, nausea, and anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-lightning_100x100.jpg"
			},
			{"strainId": 286,
			 "strainName": "Black Betty",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.27
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.12
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.61
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Pine", "Citrus"],
		 	 "conditions": ["Nausea", "Appetite Loss", "Fibromyalgia"],
			 "positiveEffects": ["Long Lasting", "Euphoric", "Potent", "Hungry", "Intense", "Mind + Body", "Relaxed" ],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Though certainly good for a lazy day, Black Betty is known to induce a forgetfulness so fierce that concentration and productivity can seem impossible for some.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-betty_100x100.jpg"
			},
			{"strainId": 287,
			 "strainName": "The Black",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.46
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.35	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.78
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tea", "Earthy", "Sweet", "Hash", "Spicy"],
		 	 "conditions": ["Insomnia", "Pain", "Chronic Pain", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed", "Potent"],
			 "negativeEffects": ["Couch Lock", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "As characteristic of many indicas, this strain is optimally used for pain relief and as a sleeping aid.",
			 "tags": [""],
			 "imageUrl": "images/strains/the-black_100x100.jpg"
			},
			{"strainId": 288,
			 "strainName": "Pineapple Jack",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pineapple", "Pine", "Nutty", "Citrus", "Spicy"],
		 	 "conditions": ["Anxiety", "Depression", "Irritability", "Migraines", "Fibromyalgia", "Stress"],
			 "positiveEffects": ["Clear headed", "Creative", "Sexual", "Happy", "Productive", "Euphoric", "Energetic", "Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Helps you keep your chin held high amidst stress and depression while still leaving you feeling active and productive.",
			 "tags": [""],
			 "imageUrl": "images/strains/pineapple-jack_100x100.jpg"
			},
			{"strainId": 289,
			 "strainName": "Barbara Bud",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.75
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Earthy"],
		 	 "conditions": ["Muscle Spasms", "Pain", "Fibromyalgia", "Stress", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed", "Mellow"],
			 "negativeEffects": ["Anxious", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Has a fruity, citrus aroma with sweet undertones of bubblegum, and many patients have found Barbara Bud to help with pain, stress, and muscle spasms.",
			 "tags": [""],
			 "imageUrl": "images/strains/barbara-bud_100x100.jpg"
			},
			{"strainId": 290,
			 "strainName": "Wappa",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.19
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.45	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.48
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.30
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Sweet", "Lime"],
		 	 "conditions": ["Insomnia", "Chronic Pain"],
			 "positiveEffects": ["Drowsiness", "Mellow", "Pain relief", "Relaxed", "Happy"],
			 "negativeEffects": ["Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Delivers happy, uplifting effects alongside an intense fruity flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/wappa_100x100.jpg"
			},
			{"strainId": 291,
			 "strainName": "Kilimanjaro",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Citrus", "Lemon"],
		 	 "conditions": ["Depression", "Anxiety", "Nausea", "Appetite Loss", "Pain"],
			 "positiveEffects": ["Euphoric", "Psychoactive", "Potent", "Energetic", "Creative", "Focused", "Pain relief"],
			 "negativeEffects": ["Paranoid"],
			 "descriptionDetailed": "A Sativa that hits hard with a THC count of up to 18%, it can provide a very intense psychedelic cerebral high that may be overwhelming to some.",
			 "descriptionAbbrev": "A Sativa that hits hard with a THC count of up to 18%, it can provide a very intense psychedelic cerebral high that may be overwhelming to some.",
			 "tags": [""],
			 "imageUrl": "images/strains/kilimanjaro_100x100.jpg"
			},
			{"strainId": 292,
			 "strainName": "Mendo Purps",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 13.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.04	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.50
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Sweet", "Pine"],
		 	 "conditions": ["Pain", "Stress", "Depression", "Muscle Spasms", "Anxiety", "Insomnia", "Appetite Loss", "Nausea"],
			 "positiveEffects": ["Happy", "Long Lasting", "Potent", "Relaxed", "Mellow", "Euphoric", "Hungry", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Munchies",  "Headache",  "Dizzy", "Paranoid", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain is fantastic for groups or if you just need a pick me up. The Purps is a great heady heavy hitter that will leave amateur smokers wonder why they've been staring at the wall for an hour.",
			 "tags": [""],
			 "imageUrl": "images/strains/mendocino-purps_100x100.jpg"
			},
			{"strainId": 293,
			 "strainName": "White Skunk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.63	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.65
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.21
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Sour"],
		 	 "conditions": ["Stress", "Pain", "Appetite Loss", "Depression", "Anorexia", "Headache", "Nausea", "Insomnia", "Anxiety"],
			 "positiveEffects": ["Happy", "Pain relief", "Drowsiness", "Balanced", "Mind + Body", "Relaxed"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "White Skunk delivers a sour, skunky flavor and a balance of effects that ease both mind and body into a relaxed state.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-skunk.jpg"
			},
			{"strainId": 294,
			 "strainName": "Jamaican",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 10.53
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.72	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Spicy", "Fruity", "Tobacco"],
		 	 "conditions": ["Depression", "Anxiety", "Fibromyalgia"],
			 "positiveEffects": ["Creative", "Happy", "Energetic", "Long Lasting", "Relaxed", "Sexual"],
			 "negativeEffects": ["Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Jamaica produces some of the most potent and flavorful outdoor bud in the world",
			 "tags": [""],
			 "imageUrl": "images/strains/jamaican_100x100.jpg"
			},
			{"strainId": 295,
			 "strainName": "White Elephant",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.12
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.36	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.01 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.15
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.340
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Berry", "Earthy"],
		 	 "conditions": ["Stress", "Depression", "Fibromyalgia"],
			 "positiveEffects": ["Energetic", "Uplifted", "Happy", "Relaxed"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The relaxing yet energetic and uplifting effects combine with grape and berry flavors to give enjoyable relief to symptoms like stress and depression.",
			 "tags": [""],
			 "imageUrl": "images/strains/white-elephant_100x100.jpg"
			},
			{"strainId": 296,
			 "strainName": "Medibud",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Berry", "Chestnut"],
		 	 "conditions": ["Fibromyalgia", "Arthritis", "Pain", "Chronic Pain", "PMS", "Insomnia", "Apathy", "Migraines"],
			 "positiveEffects": ["Pain relief", "Energetic", "Tingly", "Euphoric", "Productive", "Happy", "Calmness"],
			 "negativeEffects": ["Calmness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Typically, you can expect high-energy euphoria and heightened sensory awareness from Medibud, but its indica-leaning phenotypes may induce heavier, more relaxing effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/medibud_100x100.jpg"
			},
			{"strainId": 297,
			 "strainName": "Dream Berry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.51
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.45
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				}	
		 	], 
		 	"taste": ["Berry", "Sweet", "Blueberry", "Grapefruit"],
		 	 "conditions": ["Muscle Spasms", "Fibromyalgia", "Stress", "Anxiety", "Depression"],
			 "positiveEffects": ["Relaxed", "Pain relief", "Happy", "Uplifted", "Focused", "Mellow"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its calming indica qualities prevail over its sativa genetics.",
			 "tags": [""],
			 "imageUrl": "images/strains/dream-berry_100x100.jpg"
			},
			{"strainId": 298,
			 "strainName": "Belladonna",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.98
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.09	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.68
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.71
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.55
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.10
				}	
		 	], 
		 	"taste": ["Butter", "Earthy", "Chestnut"],
		 	 "conditions": ["Stress", "Depression", "Fatigue", "Insomnia", "Nausea"],
			 "positiveEffects": ["Euphoric", "Uplifted", "Energetic", "Giggly", "Happy", "Relaxed"],
			 "negativeEffects": ["Paranoid", "Dry Mouth", "Headache", "Dizzy", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Belladonna is a mostly sativa strain that also carries good indica characteristics making for a very nice hybrid.",
			 "tags": [""],
			 "imageUrl": "images/strains/belladonna_100x100.jpg"
			},
			{"strainId": 299,
			 "strainName": "Jacky White",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.55
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.23
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.74
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.42
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Berry"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Depression" ],
			 "positiveEffects": ["Mind + Body", "Pain relief", "Euphoric", "Uplifted", "Calmness" ],
			 "negativeEffects": ["Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Lofty euphoria lifts the mind into an upbeat cerebral space, while the indica in her softens the racy sativa effects with a deep, physical calm.",
			 "tags": [""],
			 "imageUrl": "images/strains/jacky-white_100x100.jpg"
			},
			{"strainId": 300,
			 "strainName": "Remedy",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Woody", "Earthy"],
		 	 "conditions": ["Fibromyalgia", "Seizures", "Muscle Spasms", "Pain", "Autism", "Chronic Inflammation", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Therapeutic", "Mellow", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Patients looking to medicate without the pronounced head and body effects may turn to Remedy to treat seizures, pain, autism, inflammation, and anxiety disorders.",
			 "tags": [""],
			 "imageUrl": "images/strains/remedy_100x100.jpg"
			},
			{"strainId": 301,
			 "strainName": "Conspiracy Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 13.95
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.36	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.32
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.37
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.96
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Flowery", "Pepper"],
		 	 "conditions": ["Fibromyalgia", "Pain", "PTSD", "Chronic Back Pain", ""],
			 "positiveEffects": ["Potent", "Pain relief", "Creative", "Drowsiness"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The influence of Space Queen is felt immediately with a Haze-like sense of cerebral activity, but shortly after the relaxing indica effects take hold and provide calming relaxation perfect for unwinding at the end of the day.",
			 "tags": [""],
			 "imageUrl": "images/strains/conspiracy-kush_100x100.jpg"
			}, 
			{"strainId": 302,
			 "strainName": "Night Terror OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.43
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.10	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.25
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Flowery", "Blueberry", "Lemon", "Diesel"],
		 	 "conditions": ["Fibromyalgia", "Insomnia", "Pain", "Stress", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Clear headed", "Long Lasting", "Mellow"],
			 "negativeEffects": ["Drowsiness", "Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "You may find your eyelids feeling heavy before long, but don't let a name like Night Terror OG fool you: a good night's sleep is on its way.",
			 "tags": [""],
			 "imageUrl": "images/strains/night-terror-og_100x100.jpg"
			},
			{"strainId": 303,
			 "strainName": "U2 Kush",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 9.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.3	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.08 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.39
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.47
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.78
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lavender", "Flowery", "Pine"],
		 	 "conditions": ["Insomnia", "Pain", "Fibromyalgia"],
			 "positiveEffects": ["Drowsiness", "Pain relief", "Euphoric", "Potent"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Begins with a powerful euphoric buzz, with sedating full-body effects to follow. Its tranquilizing effects that creep in over time make U2 Kush popular among patients treating insomnia and pain.",
			 "tags": [""],
			 "imageUrl": "images/strains/u2-kush_100x100.jpg"
			},
			{"strainId": 304,
			 "strainName": "BSC",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.08	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.94
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.23
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Anxiety", "Depression"],
			 "positiveEffects": ["Mind + Body", "Pain relief", "Potent", "Happy", "Euphoria", "Calmness", "Relaxed", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "BSC introduces deep, heavy relaxation throughout the body, but not before making your head reel with calm and happy thoughts.",
			 "tags": [""],
			 "imageUrl": "images/strains/boy-scout-cookies_100x100.jpg"
			},
			{"strainId": 305,
			 "strainName": "Purple Crack",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.67
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.68	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.85
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 3.87
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Citrus", "Grape"],
		 	 "conditions": ["Pain", "Fibromyalgia", "PTSD", "Depression"],
			 "positiveEffects": ["Creative", "Clear headed", "Energetic", "Focused", "Euphoric", "Sexual", "Uplifted", "Pain relief"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "It's nice for keeping ones focus honed when stuck with the tedium of daily life but also great for any active/outdoor activities.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-crack_100x100.jpg"
			},
			{"strainId": 306,
			 "strainName": "Banana Candy",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 1.30
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Fruity", "Banana"],
		 	 "conditions": ["Insomnia", "Stress", "Fibromyalgia", "Chronic Pain", "Anxiety"],
			 "positiveEffects": ["Sexual", "Euphoric", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Drowsiness", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain is ideal for nighttime use, as it induces a sleepy euphoric sensation.",
			 "tags": [""],
			 "imageUrl": "images/strains/banana-candy_100x100.jpg"
			},
			{"strainId": 307,
			 "strainName": "Love Potion #9",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 7.67
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.31	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.33
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.17
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Cheese", "Citrus"],
		 	 "conditions": ["Fibromyalgia", "Insomnia", "Pain", "Appetite Loss", "Anxiety", "Stress"],
			 "positiveEffects": ["Drowsiness", "Potent", "Hungry", "Calmness", "Relaxed"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Very nice flower with a great taste and will have you in a very calm, relaxed state. Definitely great for evening time use.",
			 "tags": [""],
			 "imageUrl": "images/strains/love-potion--9_100x100.jpg"
			},
			{"strainId": 308,
			 "strainName": "Omega Dawg",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.56
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.10	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Earthy", "Pine"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Depression", "Stress", "Muscular Dystrophy", "Multiple Sclerosis"],
			 "positiveEffects": ["Happy", "Uplifted", "Euphoric", "Pain relief", "Focused", "Relaxed"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Balancing full-body relaxation with cerebral euphoria, Omega Dawg is typically chosen by patients treating pain, multiple sclerosis, and muscular dystrophy.",
			 "tags": [""],
			 "imageUrl": "images/strains/omega-dawg_100x100.jpg"
			},
			{"strainId": 309,
			 "strainName": "Super Lemon OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.17	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.57
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.16
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lemon", "Citrus", "Pungent", "Spicy", "Pepper"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Depression", "Anxiety", "Migraines"],
			 "positiveEffects": ["Mind + Body", "Relaxed", "Uplifted", "Energetic"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Super Lemon OG produces relaxing body effects that are balanced by the uplifting and energetic sativa influence of Haze genetics.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-lemon-og_100x100.jpg"
			},
			{"strainId": 310,
			 "strainName": "Elvis",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.14
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.24	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.17 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.18
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.71
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.79
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Vanilla", "Mint"],
		 	 "conditions": ["Fibromyalgia", "Anxiety", "Stress", "Nausea", "Appetite Loss", "Chronic Back Pain"],
			 "positiveEffects": ["Creative", "Energetic", "Euphoric", "Mellow", "Focused", "Relaxed", "Calmness", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Elvis produces a burst of cerebral activity that provides a spark of creative juice and a mellow, relaxing body effect that calms anxieties.",
			 "tags": [""],
			 "imageUrl": "images/strains/elvis_100x100.jpg"
			},
			{"strainId": 311,
			 "strainName": "Silver Bubble",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Apple", "Butter"],
		 	 "conditions": ["Chronic Back Pain", "Migraines", "Fibromyalgia"],
			 "positiveEffects": ["Happy", "Mellow", "Drowsiness", "Creative", "Uplifted", "Relaxed"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Known for years as the top smoke at the Grey Area Coffeeshop in Amsterdam and now is available to the rest of the world. The Silver Bubble is a balanced mix of 1/4 Northern Lights, 1/4 Skunk and 1/2 Haze.",
			 "tags": [""],
			 "imageUrl": "images/strains/silver-bubble_100x100.jpg"
			},
			{"strainId": 312,
			 "strainName": "Cindy White",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.99
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.06	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pine", "Woody", "Sweet", "Tropical", "Flowery"],
		 	 "conditions": ["Pain", "Fibromyalgia"],
			 "positiveEffects": ["Potent", "Energetic", "Uplifted", "Focused", "Tingly", "Happy", "Pain relief", "Creative", "Euphoric"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A very nice sativa buzz that goes straight to the head and does a great job of relieving pain.",
			 "tags": [""],
			 "imageUrl": "images/strains/cindy-white_100x100.jpg"
			},
			{"strainId": 313,
			 "strainName": "Gucci OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.04
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.46	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pungent", "Lemon", "Pine"],
		 	 "conditions": ["Fibromyalgia"],
			 "positiveEffects": ["Creative", "Energetic", "Euphoric", "Pain relief"],
			 "negativeEffects": ["Dizzy", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This hybrid’s effect can vary with different doses. Small amounts may provide a spark of energy and creativity, while larger doses tend to give way to heavy sedation or dizzying euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/gucci-og_100x100.jpg"
			},
			{"strainId": 314,
			 "strainName": "Sourlope",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Diesel", "Chocolate", "Coffee", "Sour"],
		 	 "conditions": ["Fibromyalgia", "Stress", "Depression", "Fatigue", "Migraines", "PTSD"],
			 "positiveEffects": ["Euphoric", "Pain relief", "Happy", "Creative", "Focused", "Energetic", "Uplifted", "Calmness"],
			 "negativeEffects": ["Couch Lock"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Even with the euphoric high, users often experience a sense of couch lock when smoking Sourlope, especially in large doses. Some users report a warming body buzz and a sense of tranquility as well that lasts well after the onset of the other effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/sourlope_100x100.jpg"
			},
			{"strainId": 315,
			 "strainName": "Buddha Tahoe",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.08
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.61	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.37
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Lemon", "Flowery", "Woody"],
		 	 "conditions": ["Fibromyalgia", "Anxiety", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Potent", "Relaxed", "Hungry", "Pain relief", "Happy", "Uplifted", "Conversational"],
			 "negativeEffects": ["Munchies", "Couch Lock", "Drowsiness", "Dry Mouth", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Potent and long-lasting, Buddha Tahoe launches you into to the highest level of cerebral euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/buddha-tahoe_100x100.jpg"
			},
			{"strainId": 316,
			 "strainName": "Hawaiian Dream",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 3.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 13.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tropical", "Pine", "Sweet"],
		 	 "conditions": ["Chronic Pain", "Fibromyalgia", "Inflammation", "Anxiety"],
			 "positiveEffects": ["Pain relief", "Energetic", "Focused", "Creative", "Euphoric", "Relaxed", "Tingly", "Uplifted"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Patients look to this high-CBD sativa to remedy pain, inflammation, and anxiety without physical heaviness or a foggy head.",
			 "tags": [""],
			 "imageUrl": "images/strains/hawaiian-dream_100x100.jpg"
			},
			{"strainId": 317,
			 "strainName": "Frostbite",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.37
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Skunk", "Mint"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Depression", "Stress", "Fatigue", "Inflammation"],
			 "positiveEffects": ["Pain relief", "Happy", "Giggly", "Mellow", "Relaxed", "Euphoric", "Sexual", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Perfect for when you're feeling low and need a boost.",
			 "tags": [""],
			 "imageUrl": "images/strains/frostbite_100x100.jpg"
			},
			{"strainId": 318,
			 "strainName": "Goldberry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 21.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Blueberry", "Sweet", "Berry", "Chemical"],
		 	 "conditions": ["Insomnia", "Fibromyalgia", "Appetite Loss", "Pain", "Muscle Spasms", "Stress", "Depression"],
			 "positiveEffects": ["Pain relief", "Creative", "Happy", "Uplifted", "Euphoric", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This hybrid is described as optimal for pain relief and relaxation due to its indica qualities.",
			 "tags": [""],
			 "imageUrl": "images/strains/goldberry_100x100.jpg"
			},
			{"strainId": 319,
			 "strainName": "Sonoma Coma",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.93
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Tropical", "Fruity", "Spicy", "Woody"],
		 	 "conditions": ["Fibromyalgia", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Energetic", "Uplifted", "Creative", "Euphoric", "Pain relief"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Sonoma Coma produces an energetic invasion of heady effects that produce bursts of creativity and euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/sonoma-coma_100x100.jpg"
			}, 
			{"strainId": 320,
			 "strainName": "Seattle Blue",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.83
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.10	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.51
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				}	
		 	], 
		 	"taste": ["Sweet", "Flowery", "Earthy"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Stress", "Muscle Spasms", "Cramps", "Migraines"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Creative", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The Seattle Blue strain of cannabis provides a strong euphoric body high.  The sweet and fruity taste makes this a very pleasant indica.",
			 "tags": [""],
			 "imageUrl": "images/strains/seattle-blue_100x100.jpg"
			},
			{"strainId": 321,
			 "strainName": "Northern Berry",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.53
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 1.44	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.53
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.47
				}	
		 	], 
		 	"taste": ["Berry", "Sweet", "Blueberry"],
		 	 "conditions": ["Fibromyalgia", "Insomnia", "Pain"],
			 "positiveEffects": ["Pain relief", "Potent", "Mind + Body"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Northern Berry is intense experience for both mind and body, and may induce an early night's sleep when overdone.",
			 "tags": [""],
			 "imageUrl": "images/strains/northern-berry_100x100.jpg"
			},
			{"strainId": 322,
			 "strainName": "OG's Pearl",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	,
		 	], 
		 	"taste": ["Pungent", "Earthy", "Sweet", "Lemon", "Spicy"],
		 	 "conditions": ["Nausea", "Pain", "Fibromyalgia", "Stress", "Insomnia"],
			 "positiveEffects": ["Happy", "Relaxed", "Pain relief",  "Uplifted", "Mellow", "Long Lasting"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Delivers strong body-focused effects ideal for fast-acting stress relief or a lazy evening at home.",
			 "tags": [""],
			 "imageUrl": "images/strains/og-s-pearl_100x100.jpg"
			},
			{"strainId": 323,
			 "strainName": "Colorado Chem",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Skunk", "Lemon"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Potent", "Mind + Body", "Drowsiness"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Colorado Chem is a hybrid strain that took 2nd place in the 2014 Denver Cannabis Cup.",
			 "tags": [""],
			 "imageUrl": "images/strains/colorado-chem_100x100.jpg"
			},
			{"strainId": 324,
			 "strainName": "Enigma",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 7.41
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 13.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Lemon", "Pungent", "Mango"],
		 	 "conditions": ["Fibromyalgia", "Appetite Loss", "Chronic Back Pain", "Anxiety", "Nausea"],
			 "positiveEffects": ["Pain relief", "Hungry", "Happy", "Mellow", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The natural progression of its effects begins with carefree happiness and ends in a sleepy haze. Enigma is a great strain for patients experiencing appetite loss and/or cachexia.",
			 "tags": [""],
			 "imageUrl": "images/strains/enigma_100x100.jpg"
			},
			{"strainId": 325,
			 "strainName": "Black 84",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 11.99
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Butter", "Honey"],
		 	 "conditions": ["Chronic Pain", "Fibromyalgia", "Anxiety", "Nausea", "Insomnia"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Relaxed"],
			 "negativeEffects": ["Couch Lock", "Drowsiness", "Dry Mouth", "Dry Eyes"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its powerful, relaxing effects on the body make Black '84 a great nighttime strain when combatting anxiety, pain, and insomnia.",
			 "tags": [""],
			 "imageUrl": "images/strains/black--84_100x100.jpg"
			},
			{"strainId": 326,
			 "strainName": "Dr. Funk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.21
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.59	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.72
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Earthy"],
		 	 "conditions": ["Fibromyalgia", "Pain", "PTSD", "Anxiety"],
			 "positiveEffects": ["Long Lasting", "Potent", "Pain relief", "Relaxed", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "You can taste this strain's lineage as flavors of sweet berry and earthy sharpness activate on the exhale.",
			 "tags": [""],
			 "imageUrl": "images/strains/Dr-Funk-200x160.jpg"
			},
			{"strainId": 327,
			 "strainName": "Grand Doggy Purps",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 28.77
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.66	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Grape", "Sweet"],
		 	 "conditions": ["Fibromyalgia", "Chronic Pain", "Inflammation", "Multiple Sclerosis"],
			 "positiveEffects": ["Focused", "Happy", "Pain relief", "Energetic", "Productive", "Psychoactive"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Though mostly indica, this strain's effects are lifted by cerebral energy, allowing focus and productivity in spite of its indica potency.",
			 "tags": [""],	
			 "imageUrl": "images/strains/grand-doggy-purps_100x100.jpg"
			},
			{"strainId": 328,
			 "strainName": "Yummy",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Grape", "Mint"],
		 	 "conditions": ["Fibromyalgia", "Pain", "Insomnia", "Nausea", "Depression", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Mellow", "Therapeutic", "Pain relief", "Euphoric",  "Drowsiness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its potent effects settle heavily throughout the body, and while your mind may feel relaxed, it won't necessarily feel asleep. However, this strain is better paired with calm, meditative activities than focused, cognitive tasks as Yummy tends to blanket thoughts in a foggy tranquility.",
			 "tags": [""],
			 "imageUrl": "images/strains/yummy_100x100.jpg"
			},
			{"strainId": 329,
			 "strainName": "Haole",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 9.76
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Grape", "Lime"],
		 	 "conditions": ["Pain", "Stress", "Anxiety", "Arthritis", "Fibromyalgia", "PTSD", "Nausea", "Insomnia", "Appetite Loss", "Migraines", "Seizures"],
			 "positiveEffects": ["Pain relief", "Uplifted", "Happy", "Creative", "Relaxed", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Drowsiness", "Couch Lock", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A pleasant, calming strain that is well-suited to relieve stress and relax body pains.",
			 "tags": [""],
			 "imageUrl": "images/strains/haole_100x100.jpg"
			},
			{"strainId": 330,
			 "strainName": "Incredible Bulk",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lavender", "Tropical", "Pine", "Earthy", "Hash"],
		 	 "conditions": ["Pain", "Insomnia", "Fibromyalgia", "Stress"],
			 "positiveEffects": ["Mellow", "Pain relief", "Relaxed", "Drowsiness"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Exceptionally strong, physical stone that'll leave you completely chill, relaxed and satisfied.",
			 "tags": [""],
			 "imageUrl": "images/strains/incredible-bulk_100x100.jpg"
			},
			{"strainId": 331,
			 "strainName": "Eran Almog",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 28.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy"],
		 	 "conditions": ["Anorexia", "Chronic Pain", "Fibromyalgia", "Muscle Spasms", "Indigestion", "Inflammation", "PTSD",  "Nausea", "Anxiety", "Arthritis", "Asthma", "Cachexia", "Crohn's Disease", "Diabetes", "Emphysema"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Hungry", "Mind + Body", "Relaxed", "Tingly"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A high THC strain used for treating sleep disorders and nausea. Popular among patients in Israel, Eran Almog also effectively fights inflammation, pain, and indigestion.",
			 "tags": [""],
			 "imageUrl": "images/strains/eran-almog_100x100.jpg"
			},
			{"strainId": 332,
			 "strainName": "Catfish",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pungent", "Sour", "Fuel"],
		 	 "conditions": ["Fibromyalgia", "Muscle Spasms", "Nausea", "Appetite Loss"],
			 "positiveEffects": ["Energetic", "Relaxed", "Creative", "Euphoric", "Hungry", "Pain relief"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The taste is bold, but the feeling of this strain is relaxing. Energetic with a nice creative side.",
			 "tags": [""],
			 "imageUrl": "images/strains/catfish_100x100.jpg"
			},
			{"strainId": 333,
			 "strainName": "Lions Gate",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Mint", "Menthol", "Citrus", "Orange"],
		 	 "conditions": ["Fibromyalgia", "Inflammation", "Fatigue", "Stress", "Anxiety", "Migraines", "Insomnia", "Nausea", "PTSD"],
			 "positiveEffects": ["Energetic", "Uplifted", "Focused", "Creative", "Pain relief", "Happy", "Relaxed", "Long Lasting"],
			 "negativeEffects": ["Dizzy", "Dry Mouth", "Headache", "Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Lions Gate provides an uplifting buzz conducive for focus and creativity.",
			 "tags": [""],
			 "imageUrl": "images/strains/lions-gate_100x100.jpg"
			},
			{"strainId": 334,
			 "strainName": "Master Skunk",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.81
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.16	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.11
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.99
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.17
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Skunk", "Earthy", "Blue Cheese", "Pungent"],
		 	 "conditions": ["Fibromyalgia", "Chronic Pain", "Stress", "Anxiety", "Insomnia", "Depression", "PTSD"],
			 "positiveEffects": ["Pain relief", "Relaxed", "Calmness", "Happy", "Drowsiness"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Master Skunk induces heavy relaxation throughout the mind and body. This strain is recommended for late-night consumption and for patients treating sharp or chronic pain.",
			 "tags": [""],
			 "imageUrl": "images/strains/master-skunk_100x100.jpg"
			},
			{"strainId": 335,
			 "strainName": "Ringo's Gift",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 1.07
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 14.83
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.27	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.13 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.33
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.08
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet"],
		 	 "conditions": ["Fibromyalgia", "Chronic Pain", "Stress", "Depression"],
			 "positiveEffects": ["Mellow", "Relaxed", "Therapeutic", "Pain relief", "Euphoric", "Conversational", "Mind + Body"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Provides a mellow mix of cerebral activity and soothing, full-body relaxation without the couch lock effect.",
			 "tags": [""],
			 "imageUrl": "images/strains/ringo-s-gift_100x100.jpg"
			}, 
			{"strainId": 336,
			 "strainName": "Sapphire Star",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.12
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.13	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Strawberry", "Sweet", "Berry"],
		 	 "conditions": ["Fibromyalgia", "Chronic Pain"],
			 "positiveEffects": ["Psychoactive", "Pain relief", "Creative", "Focused", "Conversational"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Cerebral energy balanced by an indica calm create a comfortable psychoactive experience conducive for creative and social activities.",
			 "tags": [""],
			 "imageUrl": "images/strains/sapphire-star_100x100.jpg"
			},
			{"strainId": 337,
			 "strainName": "Jesus",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 19.24
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.50	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.78
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.24
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Spicy", "Herbal", "Nutty"],
		 	 "conditions": ["Fibromyalgia", "Depression", "Anxiety", "Migraines", "PTSD"],
			 "positiveEffects": ["Conversational", "Pain relief", "Happy", "Euphoric", "Relaxed", "Mellow", "Long Lasting"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Its cerebrally-focused effects give way to happy moods and outbursts of giggles, with soothing full-body relaxation trailing close behind.",
			 "tags": [""],
			 "imageUrl": "images/strains/jesus_100x100.jpg"
			},
			{"strainId": 338,
			 "strainName": "Chem Scout",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Chemical", "Spicy", "Herbal", "Earthy", "Pine"],
		 	 "conditions": ["Depression", "Nausea", "Pain", "Fibromyalgia", "Stress"],
			 "positiveEffects": ["Calmness", "Happy", "Mind + Body", "Euphoric", "Relaxed", "Drowsiness", "Potent"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Delivers a blast of cerebral euphoria that tapers into full-body relaxation with time. ",
			 "tags": [""],
			 "imageUrl": "images/strains/chem-scout_100x100.jpg"
			},
			{"strainId": 339,
			 "strainName": "Ramona OG",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.70
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.97
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.74
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				}	
		 	], 
		 	"taste": ["Earthy", "Mango"],
		 	 "conditions": ["Stress", "Pain", "Muscle Spasms", "Fibromyalgia", "Appetite Loss", "Depression", "Arthritis", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed", "Conversational", "Sexual"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Effective for a happy, energetic and conversational mood that also leaves you with sensual desire.",
			 "tags": [""],
			 "imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			},
			{"strainId": 340,
			 "strainName": "OG Strawberry",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Berry", "Diesel", "Fruity"],
		 	 "conditions": ["Fibromyalgia", "Insomnia", "Pain"],
			 "positiveEffects": ["Pain relief", "Drowsiness", "Potent"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Indica dominant herb that delivers crushing effects alongside a sour fuel aroma",
			 "tags": [""],
			 "imageUrl": "images/strains/og-strawberry_100x100.jpg"
			},
			{"strainId": 341,
			 "strainName": "Gorilla Glue #4",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.10
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.62
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.52
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.44
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pine", "Pungent", "Diesel"],
		 	 "conditions": ["Stress", "Pain", "Muscle Spasms", "Appetite Loss", "Fibromyalgia", "Depression", "Arthritis", "Anxiety", "Anorexia", "ADD/ADHD"],
			 "positiveEffects": ["Happy", "Energetic", "Relaxed", "Productive", "Creative"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Gorilla Glue is one of the most demanded strains in the US cannabis market today. The flavor is tart yet balanced and the effect is phenomenally psychoactive and strong.",
			 "tags": [""],
			 "imageUrl": "images/strains/gorilla-glue--4_100x100.jpg"
			},
			{"strainId": 342,
			 "strainName": "Holy Grail Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.57
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.99
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.21
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.75
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Pine"],
		 	 "conditions": ["Insomnia", "Stress", "Pain", "Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Relaxed", "Uplifted",  "Productive", "Creative"],
			 "negativeEffects": ["Drowsiness", "Dry Mouth", "Dry Eyes", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This hybrid produces a more mellow relaxation than the melt-your-face-off indica sensation the name might suggest",
			 "tags": [""],
			 "imageUrl": "images/strains/holy-grail-kush_100x100_733a.jpg"
			},
			{"strainId": 343,
			 "strainName": "Purple Nepal",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.60
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Earthy", "Grape"],
		 	 "conditions": ["Stress", "Pain", "Insomnia", "Appetite Loss", "Depression", "Anxiety"],
			 "positiveEffects": ["Drowsiness", "Happy", "Euphoric", "Hungry", "Energetic", "Relaxed", "Productive", "Creative"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Eyes", "Dry Mouth", "Headache", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A happy, medium-level indica, this strain will not leave you stuck on the couch but is best used when you are looking to unwind at the end of the day.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-nepal_100x100.jpg"
			},
			{"strainId": 344,
			 "strainName": "Super Jack",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.36
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.80
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.09
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.42
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Spicy", "Herbal", "Lemon"],
		 	 "conditions": ["Anorexia", "Stress"],
			 "positiveEffects": ["Happy", "Potent", "Relaxed", "Hungry", "Energetic", "Creative", "Productive"],
			 "negativeEffects": ["Munchies", "Couch Lock", "Dry Mouth" ],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The potent sativa effects spark creativity and provides an uplifting boost of energy. A great daytime strain that will calm any anxieties and propel you through your day.",
			 "tags": [""],
			 "imageUrl": "images/strains/super-jack_100x100.jpg"
			},
			{"strainId": 345,
			 "strainName": "Clinical OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 29.50
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.89
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.23
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Woody", "Pine"],
		 	 "conditions": ["Anxiety"],
			 "positiveEffects": ["Happy", "Focused", "Uplifted", "Euphoric", "Conversational"],
			 "negativeEffects": ["Dry Eyes", "Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Very uplifting and social buzz kicks in within a few minutes followed by euphoria and body buzz.",
			 "tags": [""],
			 "imageUrl": "images/strains/og-kush2_100x100.jpg"
			},
			{"strainId": 346,
			 "strainName": "Diesel Cookies",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 32.01
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.40
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.97
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 3.82
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.60
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.01
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.05
				}	
		 	], 
		 	"taste": ["Diesel", "Sweet", "Earthy"],
		 	 "conditions": ["Stress", "Anxiety", "Appetite Loss"],
			 "positiveEffects": ["Focused", "Happy", "Relaxed", "Hungry"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A little goes a long way with this hybrid.",
			 "tags": [""],
			 "imageUrl": "images/strains/girl-scout-cookies2_100x100.jpg"
			},
			{"strainId": 347,
			 "strainName": "Dreamweaver",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 30.80
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 2.93
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.78
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.41
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.41
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.07
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet"],
		 	 "conditions": ["Stress", "Pain", "Insomnia","Anxiety"],
			 "positiveEffects": ["Happy", "Energetic", "Focused", "Relaxed"],
			 "negativeEffects": ["Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Indica heavy effects sneak up on you, hitting you out of nowhere with an intense body stone that relaxes every last muscle as it's narcotic and sedative effects melt away any aches or pains that may be slowing you down throughout the day or keeping you up during the night.",
			 "tags": [""],
			 "imageUrl": "images/strains/dreamweaver.jpg"
			},
			{"strainId": 348,
			 "strainName": "Ogre",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.90
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.08
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.19
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.54
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Earthy", "Lemon"],
		 	 "conditions": ["Stress", "Pain", "Appetite Loss", "Insomnia", "Fibromyalgia", "Arthritis", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Drowsiness", "Hungry", "Happy", "Energetic", "Euphoric", "Uplifted", "Relaxed"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Ogre has a pungent and lemony scent and provides a strong body high.",
			 "tags": [""],
			 "imageUrl": "images/strains/ogre_100x100.jpg"
			},
			{"strainId": 349,
			 "strainName": "SFV OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.83
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.84
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 2.18
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.66
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.09
				}	
		 	], 
		 	"taste": ["Pine", "Sweet", "Earthy"],
		 	 "conditions": ["Stress", "Pain", "Appetite Loss", "Nausea", "Headache", "Depression", "Anxiety", "Anorexia"],
			 "positiveEffects": ["Happy", "Energetic", "Hungry", "Relaxed", "Uplifted", "Creative", "Euphoric"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Headache", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Great for patients who need strong pain relief but don’t want to be stuck on the couch.",
			 "tags": [""],
			 "imageUrl": "images/strains/sfv-og_100x100.jpg"
			},
			{"strainId": 350,
			 "strainName": "The Flav",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 26.72
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.40
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.50
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.53
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Flowery", "Pine", "Diesel"],
		 	 "conditions": ["Stress", "Seizures", "Pain", "Appetite Loss", "Depression", "Anorexia"],
			 "positiveEffects": ["Hungry", "Happy", "Uplifted", "Euphoric", "Energetic", "Relaxed"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Combines the oily, thick rich fruity taste of Romulan with the cherry goodness of Space Queen.",
			 "tags": [""],
			 "imageUrl": "images/strains/the-flav_100x100.jpg"
			},
			{"strainId": 351,
			 "strainName": "God's Gift",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.42
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.79
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.03
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.24
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Woody"],
		 	 "conditions": ["Stress", "Pain", "Muscle Spasms", "Insomnia", "Depression", "Appetite Loss","Arthritis", "Anxiety"],
			 "positiveEffects": ["Relaxed","Happy", "Euphoric", "Psychoactive", "Energetic", "Pain relief", "Drowsiness", "Uplifted"],
			 "negativeEffects": ["Drowsiness", "Munchies", "Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The effects from God's Gift are exactly as you would expect from a heavy indica-dominant hybrid: instant, full-bodied, and intense.",
			 "tags": [""],
			 "imageUrl": "images/strains/god-s-gift_100x100.jpg"
			},
			{"strainId": 352,
			 "strainName": "Amnesia",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.79
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.59	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.85
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.93
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Ammonia", "Earthy", "Pungent"],
		 	 "conditions": [""],
			 "positiveEffects": ["Intense", "Long Lasting", "Psychoactive", "Creative", "Giggly", "Conversational", "Relaxed"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain produces mellow smoke that leaves a fresh feeling in the sinuses and a slightly grassy taste on the center of the tongue. Like its name implies, you may not remember the details the next day.",
			 "tags": [""],
			 "imageUrl": "images/strains/amnesia_100x100.jpg"
			},
			{"strainId": 353,
			 "strainName": "A-Train",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.78
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.31	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.05 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.20
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Blueberry", "Pungent", "Sweet", "Ammonia"],
		 	 "conditions": ["Pain", "Depression", "Stress", "Muscle Spasms", "Insomnia"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Giggly", "Pain relief", "Drowsiness"],
			 "negativeEffects": ["Dry Mouth", "Paranoid", "Dry Eyes", "Drowsiness", "Anxious", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Be ready for smiles and munchies when you jump on the A-Train.",
			 "tags": [""],
			 "imageUrl": "images/strains/a-train_100x100.jpg"
			},
			{"strainId": 354,
			 "strainName": "Sugar Black Rose",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 25.83
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.55	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.61
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.50
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Rose", "Earthy", "Sweet", "Coffee"],
		 	 "conditions": ["Nausea", "Anxiety", "Muscle Pain", "Fibromyalgia", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Relaxed", "Therapeutic", "Clear headed", "Mellow", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Dry Mouth", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "“Very heavy, lower your eyelids type high, yet motivating.",
			 "tags": [""],
			 "imageUrl": "images/strains/sugar-black-rose_100x100.jpg"
			},
			{"strainId": 355,
			 "strainName": "Ice Queen",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.44
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.94	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 1.22
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 2.16
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.97
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Rose","Lavender", "Sweet", "Pepper"],
		 	 "conditions": ["Depression"],
			 "positiveEffects": ["Long Lasting", "Potent", "Uplifted", "Conversational", "Energetic", "Relaxed", "Productive"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "One whiff of Ice Queen fills your nose with a sweet bouquet of lavender and rose aromas accented by subtle pepper notes.",
			 "tags": [""],
			 "imageUrl": "images/strains/ice-queen_100x100.jpg"
			},
			{"strainId": 356,
			 "strainName": "Midnight Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.96
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.69	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.06 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.83
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.67
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 6.44
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.99
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Lavender", "Earthy", "Berry", "Rose"],
		 	 "conditions": ["Pain", "Inflammation", "Indigestion", "Chronic Back Pain", "Anxiety"],
			 "positiveEffects": ["Uplifted", "Energetic", "Mellow", "Sexual", "Relaxed", "Clear Headed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Many medical marijuana patients say it is a great remedy for their chronic pain, insomnia, nausea (due to chemo), anorexia, anxiety, and depression.",
			 "tags": [""],
			 "imageUrl": "images/strains/midnight_100x100.jpg"
			},
			{"strainId": 357,
			 "strainName": "Black Velvet",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.15
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.17	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.04 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.07
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.45
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.41
				}	
		 	], 
		 	"taste": ["Rose", "Flowery", "Blue Cheese", "Citrus"],
		 	 "conditions": ["Pain", "Glaucoma", "Insomnia", "Stress", "Depression"],
			 "positiveEffects": ["Drowsiness", "Relaxed", "Hungry", "Euphoric", "Energetic", "Balanced"],
			 "negativeEffects": ["Drowsiness", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Black Velvet is optimal for intermediate to experienced patients and is favored for its well-balanced effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/Black-Velvet_100x100.jpg"
			},
			{"strainId": 358,
			 "strainName": "Jamaican Dream",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.76
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.21
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 3.32	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.11 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Tropical", "Pear", "Earthy", "Apricot"],
		 	 "conditions": ["Depression", "Fatigue", "PTSD"],
			 "positiveEffects": ["Uplifted", "Long Lasting","Energetic", "Euphoric", "Productive", "Focused", "Conversational"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The effects are light enough to start your day with, making this strain ideal for early treatment of depression and fatigue.",
			 "tags": [""],
			 "imageUrl": "images/strains/jamaican-dream_100x100.jpg"
			},
			{"strainId": 359,
			 "strainName": "California Grapefruit",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 15.00
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pear", "Dank", "Earthy", "Citrus", "Orange"],
		 	 "conditions": ["Chronic Pain", "Migraines", "Insomnia", "PTSD", "Muscle Spasms", "Depression"],
			 "positiveEffects": ["Long Lasting", "Potent", "Drowsiness", "Pain relief"],
			 "negativeEffects": ["Couch Lock", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Because of the heavy indica effects, California Grapefruit is an ideal strain for treating chronic pain, insomnia, nightmares, and muscle spasms.",
			 "tags": [""],
			 "imageUrl": "images/strains/california-grapefruit_100x100.jpg"
			},
			{"strainId": 360,
			 "strainName": "Scott's OG",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.22
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.10
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.27
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Honey", "Lemon", "Pine", "Peach"],
		 	 "conditions": ["Anxiety", "Appetite Loss", "Insomnia", "Pain"],
			 "positiveEffects": ["Intense", "Relaxed", "Pain relief", "Happy", "Euphoric","Uplifted", "Hungry", "Drowsiness"],
			 "negativeEffects": ["Munchies", "Drowsiness"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Depending on when this plant is harvested, her effects range from psychedelic and spacey to mellow relaxation.",
			 "tags": [""],
			 "imageUrl": "images/strains/scott-s-og_100x100.jpg"
			},
			{"strainId": 361,
			 "strainName": "Hawaiian Sativa",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 12.30
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.13
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Peach", "Sweet"],
		 	 "conditions": ["Stress", "Depression","Pain", "Migraines", "Glaucoma"],
			 "positiveEffects": ["Pain relief", "Uplifted", "Happy", "Euphoric", "Energetic", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dizzy", "Dry Eyes", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Since its effects are so active, this strain is popular for daytime consumption and has shown effectiveness as a treatment for glaucoma patients.",
			 "tags": [""],
			 "imageUrl": "images/strains/hawaiian-sativa_100x100.jpg"
			},
			{"strainId": 362,
			 "strainName": "Wet Dream",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 8.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.18
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.29
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.34
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.88
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sage", "Pine", "Spicy","Woody", "Violet"],
		 	 "conditions": ["Anxiety", "Fatigue", "Migraines", "Chronic Pain", "Stress"],
			 "positiveEffects": ["Energetic", "Uplifted", "Pain relief", "Relaxed"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The Blue Dream genetics bring a mellow, relaxing quality to the experience to help curb stress and anxiety.",
			 "tags": [""],
			 "imageUrl": "images/strains/wet-dream_100x100.jpg"
			},
			{"strainId": 363,
			 "strainName": "Sublime",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 18.34
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.27
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.88	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.09 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 1.38
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 5.20
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.46
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 1.14
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Spicy", "Herbal", "Earthy", "Flowery"],
		 	 "conditions": ["Pain", "Apathy", "Chemotherapy"],
			 "positiveEffects": ["Uplifting", "Euphoric", "Potent", "Focused", "Energetic", "Pain relief", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Sublime is a 70% sativa strain that delivers energizing effects alongside a tropical fruity flavor.",
			 "tags": [""],
			 "imageUrl": "images/strains/sublime_100x100_46fa.jpg"
			},
			{"strainId": 364,
			 "strainName": "Purple Voodoo",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 7.43
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.26
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.08 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.39
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.10
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Grape"],
		 	 "conditions": ["Pain", "Stress", "Inflammation", "Appetite Loss", "Depression"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Anxious", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This strain boasts both high THC and especially high CBD levels, making it a popular medicinal strain. The high also has a balanced feeling that is both clear and relaxing.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-voodoo_100x100_1bb5.jpg"
			},
			{"strainId": 365,
			 "strainName": "Fire Haze",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.64
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.22
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.02
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.15	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.03 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.08
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.54
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.43
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.41
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Grapefruit", "Tropical"],
		 	 "conditions": ["Stress", "Depression", "Insomnia", "Eye Pressure", "Cramps"],
			 "positiveEffects": ["Giggly", "Hungry", "Relaxed", "Happy", "Uplifted"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Great for consumers who suffer from stress, anxiety, and headaches, this strain is mentally stimulating and upbeat.",
			 "tags": [""],
			 "imageUrl": "images/strains/fire-haze_100x100_0ff8.jpg"
			},
			{"strainId": 366,
			 "strainName": "Space Jill",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 27.98
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.86	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.45
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.39
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Citrus", "Sweet"],
		 	 "conditions": ["Depression", "Anxiety", "Pain", "Migraines"],
			 "positiveEffects": ["Energetic", "Clear headed", "Long lasting", "Uplifting", "Pain relief", "Creative", "Sexual", "Giggly", "Conversational"],
			 "negativeEffects": ["Dry Mouth"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A 70% sativa strain, induces a high-energy buzz conducive to productivity.",
			 "tags": [""],
			 "imageUrl": "images/strains/space-jill_100x100_4026.jpg"
			},
			{"strainId": 367,
			 "strainName": "Maui Waui",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 17.23
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.06
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.07	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.86
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.49
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.37
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.28
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Pineapple", "Tropical"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Migraines", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Uplifted", "Energetic", "Euphoric", "Relaxed"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Lightweight sativa effects allow your mind to drift away to a creative escape.",
			 "tags": [""],
			 "imageUrl": "images/strains/maui-waui_100x100_89bb.jpg"
			},
			{"strainId": 368,
			 "strainName": "Golden Goat",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.47
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.16
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.10	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Citrus"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed", "Energetic", "Euphoric"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Headache", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Effects are strong and felt from head to toe, lasting about 1-2 hours.",
			 "tags": [""],
			 "imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			},
			{"strainId": 369,
			 "strainName": "Laughing Buddha",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 14.21
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.04	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sage", "Pungent", "Earthy"],
		 	 "conditions": ["Depression", "Stress", "Fatigue", "Pain", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Uplifted", "Creative", "Euphoric", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "An earthy cross between Thai and Jamaican strains with a sweet, fruity smell.",
			 "tags": [""],
			 "imageUrl": "images/strains/laughing-buddha_100x100_ebef.jpg"
			},
			{"strainId": 370,
			 "strainName": "Durban Poison",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.49
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.20	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.35
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.04
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.01
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.05
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.18
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Sweet", "Pine"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Migraines"],
			 "positiveEffects": ["Uplifted", "Energetic", "Happy", "Euphoric", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Anxious"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The perfect strain to help you stay productive through a busy day, when exploring the outdoors, or to lend a spark of creativity.",
			 "tags": [""],
			 "imageUrl": "images/strains/durban-poison_100x100_09a5.jpg"
			},
			{"strainId": 371,
			 "strainName": "Mob Boss",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 24.52
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.00	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Floral", "Pungent", "Skunky", "Citrus"],
		 	 "conditions": ["Appetite Loss", "Stress", "Pain", "Anxiety", "PMS", "Fatigue"],
			 "positiveEffects": ["Happy", "Giggly", "Conversational", "Euphoric", "Uplifted", "Energetic", "Focused"],
			 "negativeEffects": ["Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Potent relief of muscle tension, mood elevation, and appetite stimulation.",
			 "tags": [""],
			 "imageUrl": "images/strains/mob-boss_100x100_5cd4.jpg"
			},
			{"strainId": 372,
			 "strainName": "Banana Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.06
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.17
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.09
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.53	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 1.10
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.30
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.00
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Sweet", "Tropical", "Tree Fruit"],
		 	 "conditions": ["Stress", "Pain", "Depression", "Insomnia", "Fatigue"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Creative"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "A great choice when dealing with stress or depression, Bannana Kush provides a relaxed sense of euphoria.",
			 "tags": [""],
			 "imageUrl": "images/strains/banana-kush_100x100_9b04.jpg"
			},
			{"strainId": 373,
			 "strainName": "Black Widow",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 20.35
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.23
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.72	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.44
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.53
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Berry", "Sweet"],
		 	 "conditions": ["Stress", "Appetite Loss", "Depression", "Pain", "Insomnia"],
			 "positiveEffects": ["Relaxed", "Happy", "Euphoric", "Uplifted", "Giggly"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The evil sister of White Widow, the Black Widow strain maintains the family reputation for high natural THC levels.",
			 "tags": [""],
			 "imageUrl": "images/strains/black-widow_100x100.jpg"
			},
			{"strainId": 374,
			 "strainName": "Jack the Ripper",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 22.28
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.31
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.64	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.90
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.48
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.28
				}	
		 	], 
		 	"taste": ["Lemon", "Citrus", "Pungent"],
		 	 "conditions": ["Stress", "Depression", "Fatigue", "Pain", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Energetic", "Euphoric", "Uplifted", "Focused"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Anxious", "Dizzy"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The strain produces strong and thought-provoking effects that will creep up on you and leave you feeling meditative.",
			 "tags": [""],
			 "imageUrl": "images/strains/jack-the-ripper_100x100.jpg"
			},
			{"strainId": 375,
			 "strainName": "Purple Thai",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 4.94
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 6.85
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.59	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.07 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.11
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 2.88
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 1.54
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.76
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.40
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry", "Chestnut", "Coffee"],
		 	 "conditions": ["Stress", "Social Anxiety", "Depression", "Fatigue"],
			 "positiveEffects": ["Relaxed", "Energetic", "Euphoric", "Conversational", "Creative"],
			 "negativeEffects": [""],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Try Purple Thai if you want to have a great time, thinking up new ideas, having fun and interesting conversations.",
			 "tags": [""],
			 "imageUrl": "images/strains/purple-thai_100x100.jpg"
			}, 
			{"strainId": 376,
			 "strainName": "Silver Haze",
			 "strainType": "Sativa",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.76
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.12
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.28	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.00 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.55
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.23
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Earthy", "Pungent", "Woody"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Fatigue", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Euphoric", "Uplifted", "Relaxed", "Energetic"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Paranoid", "Dizzy", "Headache"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "Silver Haze maintains strong but clear-headed sativa effects while producing the standard Haze effects.",
			 "tags": [""],
			 "imageUrl": "images/strains/silver-haze_100x100.jpg"
			},
			{"strainId": 377,
			 "strainName": "Northern Lights Blue",
			 "strainType": "Indica",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 23.73
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.15
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.21	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.25
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.98
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.67
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Berry","Sweet","Blueberry","Spicy"],
		 	 "conditions": ["Migraines","Stress", "Depression", "Pain", "Insomnia", "Appetite Loss"],
			 "positiveEffects": ["Happy", "Uplifted", "Relaxed","Euphoric","Drowsiness","Potent"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Couch Lock", "Munchies"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "This variety has a nice fragrance of wild berries giving a pleasant sensation of wellness and at the same time a sedative effect. An Indica with a great medical value to reduce pains and chronic illnesses.",
			 "tags": [""],
			 "imageUrl": "images/strains/blue-lights_100x100.jpg"
			},
			{"strainId": 378,
			 "strainName": "Mango Kush",
			 "strainType": "Hybrid",
			 "components": [
			 	{ 
			 		"name": "THC9",  
			 		"value": 16.58
			 	},
			 	{ 
			 		"name": "CBD", 
			 		"value": 0.14
			 	},
			 	{ 
			 		"name": "CBN", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBG", 
			 		"value": 0.23	
			 	},
			 	{ 
			 		"name": "CBC", 
			 		"value": 0.02 
			 	},
			 	{ 
			 		"name": "THCV", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THCA", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "THC8", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pulegone", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Myrcene", 
			 		"value": 0.24
			 	},
			 	{ 
			 		"name": "Caryophyllene", 
			 		"value": 0.28
			 	},
			 	{ 
			 		"name": "Limonene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Linalool", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Eucalyptol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Pinene", 
			 		"value": 0.20
			 	},
			 	{ 
			 		"name": "Terpineol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Terpineol-4", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cymene", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Apigenin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Quercetin", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Cannflavin A", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Beta-sitosterol", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "CBL", 
			 		"value": 0.00
			 	},
			 	{ 
			 		"name": "Humulene", 
			 		"value": 0.89
				},
				{ 
			 		"name": "Terpinolene", 
			 		"value": 0.00
				}	
		 	], 
		 	"taste": ["Mango","Tropical","Pine"],
		 	 "conditions": ["Stress", "Depression", "Pain", "Insomnia", "Headache"],
			 "positiveEffects": ["Happy", "Relaxed","Euphoric","Conversational"],
			 "negativeEffects": ["Dry Mouth", "Dry Eyes", "Dizzy", "Paranoid"],
			 "descriptionDetailed": "",
			 "descriptionAbbrev": "The Mango Kush marijuana strain tastes similar to the the actual mango fruit, with a distinct kush flavor, and hints of pine on the exhale.",
			 "tags": [""],
			 "imageUrl": "images/strains/mango-kush_100x100.jpg"
			}
		];

/** end strain data **/

		var strainNames = [
			{"strainId": 1,
			 "strainName": "Trainwreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/trainwreck_100x100.jpg"

			},
			{"strainId": 2,
			 "strainName": "White Widow", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/white-widow_100x100.jpg"

			},
			{"strainId": 3,
			 "strainName": "Sage", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sage_100x100.jpg"

			},
			{"strainId": 4,
			 "strainName": "Skywalker OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/skywalker-og_100x100.jpg"

			},
			{"strainId": 5,
			 "strainName": "Permafrost", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/permafrost_100x100.jpg"

			},
			{"strainId": 6,
			 "strainName": "Querkle", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/querkle_100x100.jpg"

			},
			{"strainId": 7,
			 "strainName": "Papaya", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/papaya_100x100.jpg"

			},
			{"strainId": 8,
			 "strainName": "Pennywise", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/pennywise_100x100.jpg"

			},
			{"strainId": 9,
			 "strainName": "OG #18", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/og--18_100x100.jpg"

			},
			{"strainId": 10,
			 "strainName": "OG Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/og-kush_100x100.jpg"

			},
			{"strainId": 11,
			 "strainName": "Canna-Tsu", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/canna-tsu_100x100.jpg"

			},
			{"strainId": 12,
			 "strainName": "Nebula", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/nebula_100x100.jpg"

			},
			{"strainId": 13,
			 "strainName": "XJ-13", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/xj-13_100x100.jpg"

			},
			{"strainId": 14,
			 "strainName": "Yumbodlt", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/yumboldt_100x100.jpg"

			},
			{"strainId": 15,
			 "strainName": "Vortex", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/vortex_100x100.jpg"

			},
			{"strainId": 16,
			 "strainName": "Warlock", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/warlock_100x100.jpg"

			},
			{"strainId": 17,
			 "strainName": "Strawberry Cough", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/strawberry-cough_100x100.jpg"

			},
			{"strainId": 18,
			 "strainName": "Stardawg", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/stardawg_100x100.jpg"


			},
			{"strainId": 19,
			 "strainName": "Strawberry", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/strawberry_100x100.jpg"

			},
			{"strainId": 20,
			 "strainName": "Sour Diesel", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/sour-diesel_100x100.jpg"

			},
			{"strainId": 21,
			 "strainName": "Shipwreck", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/Shipwreck_100x100.jpg"

			},
			{"strainId": 22,
			 "strainName": "Skywalker", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/skywalker_100x100.jpg"

			},
			{"strainId": 23,
			 "strainName": "Romulan", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/romulan_100x100.jpg"

			},
			{"strainId": 24,
			 "strainName": "Purple Wreck", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/purple-wreck_100x100.jpg"

			},
			{"strainId": 25,
			 "strainName": "Pineapple", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/pineapple_100x100.jpg"

			},
			{"strainId": 26,
			 "strainName": "Purple Cheese", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/purple-cheese_100x100.jpg"

			},
			{"strainId": 27,
			 "strainName": "ACDC", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/acdc_100x100.jpg"

			},
			{"strainId": 28,
			 "strainName": "Shark Shock", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/shark-shock_100x100.jpg"

			},
			{"strainId": 29,
			 "strainName": "Superman OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/superman-og_100x100.jpg"

			},
			{"strainId": 30,
			 "strainName": "Thin Mint", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/thin-mint-girl-scout-cookies_100x100.jpg"

			},
			{"strainId": 31,
			 "strainName": "Banana Diesel", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/banana-diesel_100x100.jpg"

			},
			{"strainId": 32,
			 "strainName": "Candy OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Candy-Og.jpg"

			},
			{"strainId": 33,
			 "strainName": "Chem Valley Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/chem-valley-kush_100x100.jpg"

			},
			{"strainId": 34,
			 "strainName": "Confidential Cheese", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/confidential-cheese_100x100.jpg"

			},
			{"strainId": 35,
			 "strainName": "Deadhead OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/deadhead-og_100x100.jpg"

			},
			{"strainId": 36,
			 "strainName": "Diablo", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/diablo_100x100.jpg"

			},
			{"strainId": 37,
			 "strainName": "Dutch Passion", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/dutch-passion.JPG"

			},
			{"strainId": 38,
			 "strainName": "Eden OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/eden.jpg"

			},
			{"strainId": 39,
			 "strainName": "Euphoria", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/euphoria_100x100.jpg"

			},
			{"strainId": 40,
			 "strainName": "Fire Bomb", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/fire_bomb.jpg"

			},
			{"strainId": 41,
			 "strainName": "Forum Cookies/GSC", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/forum_cookies.jpg"

			},
			{"strainId": 42,
			 "strainName": "Gooey Wreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/gooey-wreck.jpg"

			},
			{"strainId": 43,
			 "strainName": "Grapefruit Haze", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/grapefruit-haze_100x100.jpg"

			},
			{"strainId": 44,
			 "strainName": "Green Crack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/green-crack_100x100.jpg"

			},
			{"strainId": 45,
			 "strainName": "Green Dream", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/green-dream_100x100.jpg"

			},
			{"strainId": 46,
			 "strainName": "Green Thailand", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/thai_100x100.jpg"

			},
			{"strainId": 47,
			 "strainName": "H-Train Wreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/H-trainwreck.jpg"

			},
			{"strainId": 48,
			 "strainName": "Hawaiian Hulk", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/bruce-banner_100x100.jpg"

			},
			{"strainId": 49,
			 "strainName": "Jack Chemdawg", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"

			},
			{"strainId": 50,
			 "strainName": "Jack Herer", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/jack-herer_100x100.jpg"

			},
			{"strainId": 51,
			 "strainName": "Jillybean", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/jillybean_100x100.jpg"

			},
			{"strainId": 52,
			 "strainName": "Lamb's Bread", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lamb-s-bread_100x100.jpg"

			},
			{"strainId": 53,
			 "strainName": "Lemon Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lemon-haze_100x100.jpg"

			},
			{"strainId": 54,
			 "strainName": "Lemon Head OG", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/super-lemon-og_100x100.jpg"

			},
			{"strainId": 55,
			 "strainName": "Lulu", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lulu200x160.jpg"

			},
			{"strainId": 56,
			 "strainName": "Magic Jack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/Magic-Jack-300.jpg"

			},
			{"strainId": 57,
			 "strainName": "Mike Tyson", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mike-tyson-marijuana-strain.jpg"

			},
			{"strainId": 58,
			 "strainName": "Moon Candy", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/moon_candy.jpg"

			},
			{"strainId": 59,
			 "strainName": "Moonshine Diesel", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/moonshine-Deisel.jpg"

			},
			{"strainId": 60,
			 "strainName": "Northern Lights", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/northern-lights_100x100_7d43.jpg"

			},
			{"strainId": 61,
			 "strainName": "Pineapple Express", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/pineapple-express_100x100.jpg"

			},
			{"strainId": 62,
			 "strainName": "Platinum Trinity Kush", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/platinum_trinity_kush.jpg"

			},
			{"strainId": 63,
			 "strainName": "Private Reserve OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/private_reserve_OG.jpg"

			},
			{"strainId": 64,
			 "strainName": "Purple Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/purple-haze_100x100.jpg"

			},
			
			{"strainId": 65,
			 "strainName": "Purple Urkle", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/purple-urkle_100x100.jpg"

			},
			{"strainId": 66,
			 "strainName": "Raskal OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/raskal-og_100x100.jpg"

			},
			{"strainId": 67,
			 "strainName": "Regulator OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/regulator-og.jpg"

			},
			{"strainId": 68,
			 "strainName": "Saturn OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/saturn-og_100x100.jpg"

			},
			{"strainId": 69,
			 "strainName": "Sherbet Cookies", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sunset-sherbet_100x100.jpg"

			},
			{"strainId": 70,
			 "strainName": "Sour Cherry", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/Sour_Cherry_Kush.jpg"

			},
			{"strainId": 71,
			 "strainName": "Stratosphere", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/stratosphere.jpg"

			},
			{"strainId": 72,
			 "strainName": "Super Grandaddy", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Super_GDP.jpg"

			},
			{"strainId": 73,
			 "strainName": "Tangerine", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/tangerine_100x100jpg"

			},
			{"strainId": 74,
			 "strainName": "Tangilope", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/tangilope_100x100.jpg"

			},
			{"strainId": 75,
			 "strainName": "Tropical OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Tropical_OG.jpg"

			},
			{"strainId": 76,
			 "strainName": "Ancient OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/ancient-og_100x100.jpg"

			},
			{"strainId": 77,
			 "strainName": "Afghani", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afghani_100x100_902b.jpg"

			},
			{"strainId": 78,
			 "strainName": "Avi-Dekel", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/avi-dekel_100x100.jpg"

			},
			{"strainId": 79,
			 "strainName": "Bull Rider", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/bull-rider-1498.jpg"

			},
			{"strainId": 80,
			 "strainName": "Cannatonic", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"

			},
			{"strainId": 81,
			 "strainName": "Charlotte's Web", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/charlotte-s-web_100x100.jpg"

			},
			{"strainId": 82,
			 "strainName": "G13 Haze", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/g13-haze_100x100.jpg"

			},
			{"strainId": 83,
			 "strainName": "Great White Shark", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/great-white-shark_100x100.jpg"

			},
			{"strainId": 84,
			 "strainName": "Harle-Tsu", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/harle-tsu_100x100.jpg"

			},
			{"strainId": 85,
			 "strainName": "Harlequin", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/harlequin_100x100.jpg"

			},
			{"strainId": 86,
			 "strainName": "Hog", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/hog_100x100.jpg"

			},
			{"strainId": 87,
			 "strainName": "King's Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/king-s-kush_100x100.jpg"

			},
			{"strainId": 88,
			 "strainName": "Kosher Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/kosher-kush_100x100.jpg"

			},
			{"strainId": 89,
			 "strainName": "Lemon Larry OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/larry-og_100x100.jpg"

			},
			{"strainId": 90,
			 "strainName": "Master Bubba", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/master-bubba_100x100jpg"

			},
			{"strainId": 91,
			 "strainName": "Pineapple Thai", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/pineapple-thai_100x100.jpg"

			},
			{"strainId": 92,
			 "strainName": "Sour Tsunami", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sour-tsunami_100x100.jpg"

			},
			{"strainId": 93,
			 "strainName": "The White", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/the-white_100x100.jpg"

			},
			{"strainId": 94,
			 "strainName": "Valentine X", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/Valentine-X.jpg"

			},
			{"strainId": 95,
			 "strainName": "White Fire Alien OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/white-fire-alien-og_100x100.jpg"

			},
			{"strainId": 96,
			 "strainName": "Yoda OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/yoda-og_100x100.jpg"

			},
			{"strainId": 97,
			 "strainName": "707 Headband", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/707-headband_100x100.jpg"

			},
			{"strainId": 98,
			 "strainName": "Acapulco Gold", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

			},
			{"strainId": 99,
			 "strainName": "Alien OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/alien-og_100x100.jpg"

			},
			{"strainId": 100,
			 "strainName": "Alien Rock Candy", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/alien-rock-candy_100x100.jpg"

			},
			{"strainId": 101,
			 "strainName": "Amnesia Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/amnesia-haze_100x100.jpg"

			},
			{"strainId": 102,
			 "strainName": "ATF", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/alaskan-thunder-fuck_100x100.jpg"

			},
			{"strainId": 103,
			 "strainName": "Bay Cookies", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/bay_cookies.jpg"

			},
			{"strainId": 104,
			 "strainName": "Berry Queen", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/berryQueen.jpg"

			},
			{"strainId": 105,
			 "strainName": "Berry White", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/berry-white_100x100.jpg"

			},
			{"strainId": 106,
			 "strainName": "UW", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/uw_100x100.jpg"

			},
			{"strainId": 107,
			 "strainName": "Blue Dream", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blue-dream_100x100.jpg"

			},
			{"strainId": 108,
			 "strainName": "Blue Moonshine", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/blue-moonshine_100x100.jpg"

			},
			{"strainId": 109,
			 "strainName": "Blueberry Trainwreck", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blueberry_100x100.jpg"

			},
			{"strainId": 110,
			 "strainName": "Cannatonic #4", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cannatonic_100x100.jpg"

			},
			{"strainId": 111,
			 "strainName": "Candy Jack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/candy-jack_100x100.jpg"

			},
			{"strainId": 112,
			 "strainName": "CandyLand", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/candyland_100x100.jpg"

			},
			{"strainId": 113,
			 "strainName": "Cannalope Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/cannalope-haze_100x100.jpg"

			},
			{"strainId": 114,
			 "strainName": "Cataract Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cataract-kush_100x100.jpg"

			},
			{"strainId": 115,
			 "strainName": "Chemdawg", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/chemdawg_100x100.jpg"

			},
			{"strainId": 116,
			 "strainName": "Cherry Pie", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cherry-pie_100x100.jpg"

			},
			{"strainId": 117,
			 "strainName": "Chocolate Thai", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/chocolate-thai_100x100.jpg"

			},
			{"strainId": 118,
			 "strainName": "Clear Lake", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/clear_lake.jpg"

			},
			{"strainId": 119,
			 "strainName": "Dubtech", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/dubtech.jpg"

			},
			{"strainId": 120,
			 "strainName": "Ghost OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/ghost-og_100x100.jpg"

			},
			{"strainId": 121,
			 "strainName": "Grape Cookies", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/grape_Cookies.jpg"

			},
			{"strainId": 120,
			 "strainName": "Grape Kool Aid", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Purple Wreck-578x433.jpg"

			},
			{"strainId": 121,
			 "strainName": "Jupiter Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/jupiter-kush_100x100.jpg"

			},
			{"strainId": 122,
			 "strainName": "L.A. Confidential", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/la-confidential_100x100.jpg"

			},
			{"strainId": 123,
			 "strainName": "Lemon Jack", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/lemon-jack_100x100.jpg"

			},
			{"strainId": 124,
			 "strainName": "Lemon OG Kush", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/lemon-og-kush_100x100.jpg"

			},
			{"strainId": 125,
			 "strainName": "Mad Max", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/MADMAX.jpg"

			},
			{"strainId": 126,
			 "strainName": "Mafia OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mafia-og.jpg"

			},
			{"strainId": 127,
			 "strainName": "Mango Maui", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/mango-maui-578x385.jpg"

			},
			{"strainId": 128,
			 "strainName": "May Weather Kush", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/May-weather-kush.jpg"

			},
			{"strainId": 129,
			 "strainName": "Phantom OG", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/phantom-og_100x100.jpg"

			},
			{"strainId": 130,
			 "strainName": "Pineapple Hogsbreath", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/hog-s-breath_100x100.jpg"

			},
			{"strainId": 131,
			 "strainName": "Silverback Gorilla", 
			 "strainType": "Indica",
			 "imageUrl": "images/strains/silverback-gorilla_100x100.jpg"

			},
			{"strainId": 132,
			 "strainName": "Sugar Plum", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/sugar-plum_100x100.jpg"

			},
			{"strainId": 133,
			 "strainName": "Super Lemon Haze", 
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/super-lemon-haze_100x100.jpg"

			},
			{"strainId": 134,
			 "strainName": "Lemon Marmalade", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/acapulco-gold_100x100.jpg"

			},
			{"strainId": 135,
			 "strainName": "White Fire OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/white-fire-og_100x100.jpg"

			},
			{"strainId": 138,
			 "strainName": "White Walker OG", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/whitewalker-og_100x100.jpg"

			},
			{"strainId": 139,
			 "strainName": "Cherry Bomb", 
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cherry-bomb_100x100.jpg"

			},
			{"strainId": 140,
			 "strainName": "DJ Short Blueberry",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/dj-short-blueberry_100x100.jpg"

			},
			{"strainId": 141,
			 "strainName": "El Alquimista",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/El-Alquimista.jpg"

			},
			{"strainId": 142,
			 "strainName": "Godfather OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/godfather-og_100x100.jpg"

			},
			{"strainId": 143,
			 "strainName": "Herijuana",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/herijuana_100x100.jpg"

			},
			{"strainId": 144,
			 "strainName": "Lavender",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/lavender_100x100.jpg"

			},
			{"strainId": 145,
			 "strainName": "Purple Coma",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/purple-coma.jpg"

			},
			{"strainId": 146,
			 "strainName": "Purple Passion",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/purple-passion_100x100.jpg"

			},
			{"strainId": 147,
			 "strainName": "Sour Bubble",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/sour-bubble_100x100.jpg"

			},
			{"strainId": 148,
			 "strainName": "Sour Dub",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/SourDub.jpg"

			},
			{"strainId": 149,
			 "strainName": "Strawberry Mist",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/Kali-Mist-Bud-Closeup.jpg"

			},
			{"strainId": 150,
			 "strainName": "LA Chocolat",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/DNA_Genetics_Seeds_-_LA_Chocolat.jpg"

			},
			{"strainId": 151,
			 "strainName": "Afghani Bullrider",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afghani-bullrider_100x100.jpg"

			},
			{"strainId": 152,
			 "strainName": "Afgoo",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afgoo_100x100.jpg"

			},
			{"strainId": 153,
			 "strainName": "Afgooey",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/afgooey_100x100.jpg"

			},
			{"strainId": 154,
			 "strainName": "AK-47",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/ak-47_100x100.jpg"

			},
			{"strainId": 155,
			 "strainName": "AK-48",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/ak-48_100x100.jpg"

			},
			{"strainId": 156,
			 "strainName": "Kalashnikova",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/kalashnikova_100x100.jpg"

			},
			{"strainId": 157,
			 "strainName": "Black Buddah",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/Black-Budha.jpg"

			},
			{"strainId": 158,
			 "strainName": "OG Cheese",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/og-cheese_100x100.jpg"

			},
			{"strainId": 159,
			 "strainName": "Mercury OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mercury-og_100x100.jpg"

			},
			{"strainId": 160,
			 "strainName": "Silver Surfer",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/silver-surfer_100x100.jpg"

			},
			{"strainId": 161,
			 "strainName": "Sour OG",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/sour-og_100x100.jpg"

			},
			{"strainId": 162,
			 "strainName": "Mars OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/mars-og_100x100.jpg"

			},
			{"strainId": 163,
			 "strainName": "White Rhino",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/white-rhino_100x100.jpg"

			},
			{"strainId": 164,
			 "strainName": "Green Queen",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/green-queen_100x100.jpg"

			},
			{"strainId": 165,
			 "strainName": "Green Dynamite",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/dynamite_100x100.jpg"

			},
			{"strainId": 166,
			 "strainName": "J1",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/j1_100x100.jpg"

			},
			{"strainId": 167,
			 "strainName": "Kryptonite",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/kryptonite_100x100.jpg"

			},
			{"strainId": 168,
			 "strainName": "Master Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/master-kush_100x100.jpg"

			},
			{"strainId": 169,
			 "strainName": "Black Magic Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/black-magic-kush.jpg"

			},
			{"strainId": 170,
			 "strainName": "Blackberry Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/blackberry-kush_100x100.jpg"

			},
			{"strainId": 171,
			 "strainName": "Blue Diesel",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blue-diesel_100x100.jpg"

			}, 
			{"strainId": 172,
			 "strainName": "Blue Haze",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/blue-haze_100x100.jpg"

			},
			{"strainId": 173,
			 "strainName": "Brutus OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/brutus-og-3.png"

			},
			{"strainId": 174,
			 "strainName": "Bubba Kush",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/bubba-kush_100x100.jpg"

			},
			{"strainId": 175,
			 "strainName": "Cheese",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cheese_100x100.jpg"

			}, 
			{"strainId": 176,
			 "strainName": "Cinderella 99",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/cinderella-99_100x100.jpg"

			}, 
			{"strainId": 177,
			 "strainName": "Diablo Haze",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/diablo_100x100.jpg"

			},
			{"strainId": 178,
			 "strainName": "Diamond OG",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/diamond-og_100x100.jpg"

			},
			{"strainId": 179,
			 "strainName": "Grandaddy Purple",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/grandaddy-purple.jpg"

			},
			{"strainId": 180,
			 "strainName": "Fire OG",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/fire-og_100x100.jpg"

			}, 
			{"strainId": 181,
			 "strainName": "GirlScout Cookies",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/girl-scout-cookies_100x100.jpg"

			},
			{"strainId": 182,
			 "strainName": "Grape Ape",
			 "strainType": "Indica",
			 "imageUrl": "images/strains/grape-ape_100x100.jpg"

			},
			{"strainId": 183,
			 "strainName": "Headband",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/headband_100x100.jpg"

			}, 
			{"strainId": 184,
			 "strainName": "Island Sweet Skunk",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/island-sweet-skunk_100x100.jpg"

			},
			{"strainId": 185,
			 "strainName": "LA Kush",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/la-kush_100x100.jpg"

			},
			{"strainId": 186,
			 "strainName": "Gorilla Glue",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/gorilla-glue--4_100x100.jpg"

			},
			{"strainId": 187,
			 "strainName": "Jack Frost",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/jack-frost_100x100.jpg"

			},
			{"strainId": 188,
			 "strainName": "Kali Mist",
			 "strainType": "Sativa",
			 "imageUrl": "images/strains/kali-mist_100x100.jpg"

			},
		 	{"strainId": 189,
			 "strainName": "NY Sour Diesel",
			 "strainType": "Hybrid",
			 "imageUrl": "images/strains/nyc-sour-diesel.jpg"

			},
		 	{"strainId": 190,
		 	"strainName": "Skunk #1",
		 	"strainType": "Hybrid",
		 	"imageUrl": "images/strains/skunk--1_100x100.jpg"

			},
			{"strainId": 191,
			 	"strainName": "Snowcap",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/snowcap_100x100.jpg"

			},
			{"strainId": 192,
			 	"strainName": "Super Silver Haze",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/super-silver-haze_100x100.jpg"

			},
			{"strainId": 193,
			 	"strainName": "Neptune OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/neptune-og_100x100.jpg"

			},
			{"strainId": 194,
			 	"strainName": "Organic OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/organic-og-kush.JPG"

			},
			{"strainId": 195,
			 	"strainName": "Kandy Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/kandy-kush_100x100.jpg"

			},
			{"strainId": 196,
			 	"strainName": "King Louis XIII",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/king-louis-xiii_100x100.jpg"

			},
			{"strainId": 197,
			 	"strainName": "White Kryptonite",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/white-kryptonite_100x100.jpg"

			},
			{"strainId": 198,
			 	"strainName": "Legend OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/kryptonite_100x100.jpg"

			},
			{"strainId": 199,
			 	"strainName": "Lemon Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/lemon-diesel_100x100.jpg"

			},
			{"strainId": 200,
			 	"strainName": "Lemon Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/lemon-kush_100x100.jpg"

			},
			{"strainId": 201,
			 	"strainName": "Blackwater",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/blackwater_100x100.jpg"
			 	
			}, 
			{"strainId": 202,
			 	"strainName": "UltraViolet OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/UltravioletOG.jpg"
			 	
			}, 
			{"strainId": 203,
			 	"strainName": "Face Off OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/face-off-og_100x100.jpg"
			 	
			},
			{"strainId": 204,
			 	"strainName": "Citrix",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/Citrix.jpg"
			 	
			},
			{"strainId": 205,
			 	"strainName": "Grapefruit",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/grapefruit_100x100.jpg"
			 	
			},
			{"strainId": 206,
			 	"strainName": "Chocolate Kush",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/chocolate-kush_100x100.jpg"
			 	
			},
			{"strainId": 207,
			 	"strainName": "Chocolate Chunk",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/chocolate-chunk_100x100.jpg"
			 	
			},
			{"strainId": 208,
			 	"strainName": "Chocolope",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/chocolope_100x100.jpg"
			 	
			},
			{"strainId": 209,
			 	"strainName": "Cinex",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/cinex_100x100.jpg"
			 	
			},
			{"strainId": 210,
			 	"strainName": "Shiskaberry",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/shishkaberry_100x100.jpg"
			 	
			},
			{"strainId": 211,
			 	"strainName": "R4",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/R4-200x160.jpg"
			 	
			},
			{"strainId": 212,
			 	"strainName": "Super Sweet",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/super-sweet_100x100.jpg"
			 	
			},
			{"strainId": 213,
			 	"strainName": "Sweet Lavender Diesel",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/sweet-lavender-diesel.jpg"
			 	
			},
			{"strainId": 214,
			 	"strainName": "Cotton Candy Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/cotton-candy-kush_100x100.jpg"
			 	
			},
			{"strainId": 215,
			 	"strainName": "Larry OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/larry-og_100x100.jpg"
			 	
			}, 
			{"strainId": 216,
			 	"strainName": "Flo",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/flo_100x100.jpg"
			 	
			},
			{"strainId": 217,
			 	"strainName": "Obama Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/obama-kush_100x100.jpg"
			 	
			},
			{"strainId": 218,
			 	"strainName": "Orange Crush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/orange-crush_100x100.jpg"
			 	
			},
			{"strainId": 219,
			 	"strainName": "Pink Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/pink-kush_100x100.jpg"
			 	
			},
			{"strainId": 220,
			 	"strainName": "Red Dragon",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/red-dragon_100x100.jpg"
			 	
			},
			{"strainId": 221,
			 	"strainName": "Purple Sour Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-sour-diesel_100x100.jpg"
			 	
			},
			{"strainId": 222,
			 	"strainName": "Dream Queen",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/dream-queen_100x100.jpg"
			 	
			},
			{"strainId": 223,
			 	"strainName": "Willy's Wonder",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/willy-s-wonder_100x100.jpg"
			 	
			},
			{"strainId": 224,
			 	"strainName": "Jean Guy",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/jean-guy_100x100.jpg"
			 	
			},
			{"strainId": 225,
			 	"strainName": "Orange Bud",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/orange-bud_100x100.jpg"
			 	
			},
			{"strainId": 226,
			 	"strainName": "Fucking Incredible",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/fucking-incredible_100x100.jpg"
			 	
			},
			{"strainId": 227,
			 	"strainName": "Sage N Sour",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/sage-n-sour_100x100.jpg"
			 	
			},
			{"strainId": 228,
			 	"strainName": "Bubba OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/bubba-og_100x100.jpg"
			 	
			},
			{"strainId": 229,
			 	"strainName": "Hawaiian Snow",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			 	
			},
			{"strainId": 230,
			 	"strainName": "Dr. Who",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			 	
			},
			{"strainId": 231,
			 	"strainName": "Pineapple Chunk",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/pineapple-chunk_100x100.jpg"
			 	
			},
			{"strainId": 232,
			 	"strainName": "Pot of Gold",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/pot-of-gold_100x100.jpg"
			 	
			},
			{"strainId": 233,
			 	"strainName": "Tangerine Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/tangerine-kush_100x100.jpg"
			 	
			},
			{"strainId": 234,
			 	"strainName": "Black Cherry Soda",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/black-cherry-soda_100x100.jpg"
			 	
			},
			{"strainId": 235,
			 	"strainName": "Qrazy Train",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/qrazy-train_100x100.jpg"
			 	
			}, 
			{"strainId": 236,
			 	"strainName": "Death Star OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/death-star-og_100x100.jpg"
			 	
			},
			{"strainId": 237,
			 	"strainName": "Blueberry Cheesecake",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blueberry-cheesecake_100x100.jpg"
			 	
			},
			{"strainId": 238,
			 	"strainName": "Blue Crack",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blue-crack_100x100.jpg"
			 	
			},
			{"strainId": 239,
			 	"strainName": "Bio-Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/bio-diesel_100x100.jpg"
			 	
			}, 
			{"strainId": 240,
			 	"strainName": "Power Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/power-kush_100x100.jpg"
			 	
			}, 
			{"strainId": 241,
			 	"strainName": "Panama Red",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/panama-red_100x100.jpg"
			 	
			}, 
			{"strainId": 242,
			 	"strainName": "Purple Dragon",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/purple-dragon_100x100.jpg"
			 	
			}, 
			{"strainId": 243,
			 	"strainName": "King Kong",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/king-kong_100x100.jpg"
			 	
			}, 
			{"strainId": 244,
			 	"strainName": "Church OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/church-og_100x100.jpg"
			 	
			}, 
			{"strainId": 245,
			 	"strainName": "Purple Arrow",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-arrow_100x100.jpg"
			 	
			}, 
			{"strainId": 246,
			 	"strainName": "Pandora's Box",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/pandora-s-box_100x100.jpg"
			 	
			}, 
			{"strainId": 247,
			 	"strainName": "Abusive OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/abusive-og_100x100.jpg"
			 	
			}, 
			{"strainId": 248,
			 	"strainName": "Platinum Purple Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/Platinum-Purple-Kush_100x100.jpg"
			 	
			},
			{"strainId": 249,
			 	"strainName": "Black Tuna",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/black-tuna_100x100.jpg"
			 	
			},
			{"strainId": 250,
			 	"strainName": "Charlie Sheen",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/charlie-sheen_100x100.jpg"
			 	
			}, 
			{"strainId": 251,
			 	"strainName": "Rainbow",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/rainbow_100x100.jpg"
			 	
			},
			{"strainId": 252,
			 	"strainName": "Caramelicious",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/caramelicious_100x100.jpg"
			 	
			}, 
			{"strainId": 253,
			 	"strainName": "Sour Cream",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sour-cream_100x100.jpg"
			 	
			},
			{"strainId": 254,
			 	"strainName": "Apollo 11",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/apollo-11_100x100.jpg"
			 	
			}, 
			{"strainId": 255,
			 	"strainName": "Green Crack Extreme",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/green-crack-extreme_100x100.jpg"
			 	
			},
			{"strainId": 256,
			 	"strainName": "Sour Cheese",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sour-cheese_100x100.jpg"
			 	
			}, 
			{"strainId": 257,
			 	"strainName": "Venom OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/venom-og_100x100.jpg"
			 	
			}, 
			{"strainId": 258,
			 	"strainName": "Platinum Wreck",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/platinum_kush_indica.jpg"
			 	
			}, 
			{"strainId": 259,
			 	"strainName": "Deep Purple",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/deep-purple_100x100.jpg"
			 	
			},
			{"strainId": 261,
			 	"strainName": "Purple Afghani",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/purple-afghani_100x100.jpg"
			 	
			},
			{"strainId": 262,
			 	"strainName": "Heavy Duty Fruity",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/heavy-duty-fruity_100x100.jpg"
			 	
			}, 
			{"strainId": 263,
			 	"strainName": "The Truth",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/the-truth_100x100.jpg"
			 	
			}, 
			{"strainId": 264,
			 	"strainName": "Triple Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/triple-diesel_100x100.jpg"
			 	
			},
			{"strainId": 265,
			 	"strainName": "Grape Crush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/grape-crush_100x100.jpg"
			 	
			}, 
			{"strainId": 266,
			 	"strainName": "Holland's Hope",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/hollands-hope_100x100.jpg"
			 	
			},
			{"strainId": 267,
			 	"strainName": "Black Cherry OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/black-cherry-og_100x100.jpg"
			 	
			},
			{"strainId": 268,
			 	"strainName": "Blue Frost",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blue-frost_100x100.jpg"
			 	
			},
			{"strainId": 269,
			 	"strainName": "BC Sweet Tooth",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/bc-sweet-tooth_100x100.jpg"
			 	
			},
			{"strainId": 270,
			 	"strainName": "Pink Panther",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/pink-panther_100x100.jpg"
			 	
			},
			{"strainId": 271,
			 	"strainName": "Orange Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/orange-diesel_100x100.jpg"
			 	
			}, 
			{"strainId": 272,
			 	"strainName": "Watermelon",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/watermelon_100x100.jpg"
			 	
			},
			{"strainId": 273,
			 	"strainName": "OG Wreck",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/og-wreck_100x100.jpg"
			 	
			},
			{"strainId": 274,
			 	"strainName": "Green Hornet",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/green-hornet_100x100.jpg"
			 	
			},
			{"strainId": 275,
			 	"strainName": "Purple Ice",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-ice_100x100.jpg"
			 	
			},
			{"strainId": 276,
			 	"strainName": "Blue Knight",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/blue-knight_100x100.jpg"
			 	
			}, 
			{"strainId": 277,
			 	"strainName": "Scooby Snacks",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/scooby-snacks_100x100.jpg"
			 	
			},
			{"strainId": 278,
			 	"strainName": "Afghan Diesel",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/afghan-diesel_100x100.jpg"
			 	
			}, 
			{"strainId": 279,
			 	"strainName": "Tigers Milk",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/tiger-s-milk_100x100.jpg"
			 	
			}, 
			{"strainId": 280,
			 	"strainName": "Mexican",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/mexican_100x100.jpg"
			 	
			},
			{"strainId": 281,
			 	"strainName": "Lifesaver",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/lifesaver_100x100.jpg"
			 	
			},
			{"strainId": 282,
			 	"strainName": "Freezeland",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/freezeland_100x100.jpg"
			 	
			},
			{"strainId": 283,
			 	"strainName": "Critical Sensi Star",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/critical-sensi-star_100x100.jpg"
			 	
			},
			{"strainId": 284,
			 	"strainName": "Rugburn OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/rug-burn-og_100x100.jpg"
			 	
			},
			{"strainId": 285,
			 	"strainName": "White Lightning",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/white-lightning_100x100.jpg"
			 	
			},
			{"strainId": 286,
			 	"strainName": "Black Betty",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/black-betty_100x100.jpg"
			 	
			},
			{"strainId": 287,
			 	"strainName": "The Black",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/the-black_100x100.jpg"
			 	
			},
			{"strainId": 288,
			 	"strainName": "The Black",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/pineapple-jack_100x100.jpg"
			 	
			},
			{"strainId": 289,
			 	"strainName": "Barbara Bud",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/barbara-bud_100x100.jpg"
			 	
			},
			{"strainId": 290,
			 	"strainName": "Wappa",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/wappa_100x100.jpg"
			 	
			},
			{"strainId": 291,
			 	"strainName": "Kilimanjaro",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/kilimanjaro_100x100.jpg"
			 	
			}, 
			{"strainId": 292,
			 	"strainName": "Mendo Purps",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/mendocino-purps_100x100.jpg"
			 	
			},
			{"strainId": 293,
			 	"strainName": "White Skunk",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/white-skunk.jpg"
			 	
			},
			{"strainId": 294,
			 	"strainName": "Jamaican",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/jamaican_100x100.jpg"
			 	
			},
			{"strainId": 295,
			 	"strainName": "White Elephant",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/white-elephant_100x100.jpg"
			 	
			}, 
			{"strainId": 296,
			 	"strainName": "Medibud",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/medibud_100x100.jpg"
			 	
			},
			{"strainId": 297,
			 	"strainName": "Dream Berry",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/dream-berry_100x100.jpg"
			 	
			}, 
			{"strainId": 298,
			 	"strainName": "Belladonna",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/belladonna_100x100.jpg"
			 	
			},
			{"strainId": 299,
			 	"strainName": "Jacky White",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/jacky-white_100x100.jpg"
			 	
			},
			{"strainId": 300,
			 	"strainName": "Remedy",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/remedy_100x100.jpg"
			 	
			}, 
			{"strainId": 301,
			 	"strainName": "Conspiracy Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/conspiracy-kush_100x100.jpg"
			 	
			}, 
			{"strainId": 302,
			 	"strainName": "Night Terror OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/night-terror-og_100x100.jpg"
			 	
			},
			{"strainId": 303,
			 	"strainName": "U2 Kush",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/u2-kush_100x100.jpg"
			 	
			}, 
			{"strainId": 304,
			 	"strainName": "BSC",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/boy-scout-cookies_100x100.jpg"
			 	
			},
			{"strainId": 305,
			 	"strainName": "Purple Crack",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/purple-crack_100x100.jpg"
			 	
			},
			{"strainId": 306,
			 	"strainName": "Banana Candy",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/banana-candy_100x100.jpg"
			 	
			},
			{"strainId": 307,
			 	"strainName": "Love Potion #9",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/love-potion--9_100x100.jpg"
			 	
			},
			{"strainId": 308,
			 	"strainName": "Omega Dawg",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/omega-dawg_100x100.jpg"
			 	
			}, 
			{"strainId": 309,
			 	"strainName": "Super Lemon OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/super-lemon-og_100x100.jpg"
			 	
			},
			{"strainId": 310,
			 	"strainName": "Elvis",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/elvis_100x100.jpg"
			 	
			}, 
			{"strainId": 311,
			 	"strainName": "Silver Bubble",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/silver-bubble_100x100.jpg"
			 	
			},
			{"strainId": 312,
			 	"strainName": "Cindy White",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/cindy-white_100x100.jpg"
			 	
			}, 
			{"strainId": 313,
			 	"strainName": "Gucci OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/gucci-og_100x100.jpg"
			 	
			}, 
			{"strainId": 314,
			 	"strainName": "Sourlope",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sourlope_100x100.jpg"
			 	
			}, 
			{"strainId": 315,
			 	"strainName": "Buddah Tahoe",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/buddha-tahoe_100x100.jpg"
			 	
			},
			{"strainId": 316,
			 	"strainName": "Hawaiian Dream",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/hawaiian-dream_100x100.jpg"
			 	
			}, 
			{"strainId": 317,
			 	"strainName": "Frostbite",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/frostbite_100x100.jpg"
			 	
			}, 
			{"strainId": 318,
			 	"strainName": "Goldberry",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/goldberry_100x100.jpg"
			 	
			}, 
			{"strainId": 319,
			 	"strainName": "Sonoma Coma",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/sonoma-coma_100x100.jpg"
			 	
			}, 
			{"strainId": 320,
			 	"strainName": "Seattle Blue",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/seattle-blue_100x100.jpg"
			 	
			}, 
			{"strainId": 321,
			 	"strainName": "Northern Berry",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/northern-berry_100x100.jpg"
			 	
			}, 
			{"strainId": 322,
			 	"strainName": "OG's Pearl",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/og-s-pearl_100x100.jpg"
			 	
			},
			{"strainId": 323,
			 	"strainName": "Colorado Chem",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/colorado-chem_100x100.jpg"
			 	
			}, 
			{"strainId": 324,
			 	"strainName": "Enigma",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/enigma_100x100.jpg"
			 	
			}, 
			{"strainId": 325,
			 	"strainName": "Black 84",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/black--84_100x100.jpg"
			 	
			}, 
			{"strainId": 326,
			 	"strainName": "Dr. Funk",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/Dr-Funk-200x160.jpg"
			 	
			}, 
			{"strainId": 327,
			 	"strainName": "Grand Doggy Purps",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/grand-doggy-purps_100x100.jpg"
			 	
			}, 
			{"strainId": 328,
			 	"strainName": "Yummy",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/yummy_100x100.jpg"
			 	
			},
			{"strainId": 329,
			 	"strainName": "Haole",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/haole_100x100.jpg"
			 	
			}, 
			{"strainId": 330,
			 	"strainName": "Incredible Bulk",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/incredible-bulk_100x100.jpg"
			 	
			}, 
			{"strainId": 331,
			 	"strainName": "Eran Almog",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/eran-almog_100x100.jpg"
			 	
			}, 
			{"strainId": 332,
			 	"strainName": "Catfish",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/catfish_100x100.jpg"
			 	
			},
			{"strainId": 333,
			 	"strainName": "Lions Gate",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/lions-gate_100x100.jpg"
			 	
			}, 
			{"strainId": 334,
			 	"strainName": "Master Skunk",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/master-skunk_100x100.jpg"
			 	
			},
			{"strainId": 335,
			 	"strainName": "Ringo's Gift",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/ringo-s-gift_100x100.jpg"
			 	
			},
			{"strainId": 336,
			 	"strainName": "Sapphire Star",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sapphire-star_100x100.jpg"
			 	
			}, 
			{"strainId": 337,
			 	"strainName": "Jesus",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/jesus_100x100.jpg"
			 	
			},
			{"strainId": 338,
			 	"strainName": "Chem Scout",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/chem-scout_100x100.jpg"
			 	
			},
			{"strainId": 339,
			 	"strainName": "Ramona OG",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/chem-scout_100x100.jpg"
			 	
			},
			{"strainId": 340,
			 	"strainName": "OG Strawberry",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/og-strawberry_100x100.jpg"
			 	
			},
			{"strainId": 341,
			 	"strainName": "Gorilla Glue #4",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/gorilla-glue--4_100x100.jpg"
			 	
			}, 
			{"strainId": 342,
			 	"strainName": "Holy Grail Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/holy-grail-kush_100x100_733a.jpg"
			 	
			}, 
			{"strainId": 343,
			 	"strainName": "Purple Nepal",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/purple-nepal_100x100.jpg"
			 	
			}, 
			{"strainId": 344,
			 	"strainName": "Super Jack",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/super-jack_100x100.jpg"
			 	
			}, 
			{"strainId": 345,
			 	"strainName": "Clinical OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/og-kush2_100x100.jpg"
			 	
			}, 
			{"strainId": 346,
			 	"strainName": "Diesel Cookies",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/girl-scout-cookies2_100x100.jpg"
			}, 
			{"strainId": 347,
			 	"strainName": "Dreamweaver",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/dreamweaver.jpg"
			}, 
			{"strainId": 348,
			 	"strainName": "Ogre",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/ogre_100x100.jpg"
			}, 
			{"strainId": 349,
			 	"strainName": "SFV OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/sfv-og_100x100.jpg"
			},
			{"strainId": 350,
			 	"strainName": "The Flav",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/the-flav_100x100.jpg"
			},
			{"strainId": 351,
			 	"strainName": "God's Gift",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/god-s-gift_100x100.jpg"
			}, 
			{"strainId": 352,
			 	"strainName": "Amnesia",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/amnesia_100x100.jpg"
			}, 
			{"strainId": 353,
			 	"strainName": "A-Train",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/a-train_100x100.jpg"
			}, 
			{"strainId": 354,
			 	"strainName": "Sugar Black Rose",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/sugar-black-rose_100x100.jpg"
			}, 
			{"strainId": 355,
			 	"strainName": "Ice Queen",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/ice-queen_100x100.jpg"
			}, 
			{"strainId": 356,
			 	"strainName": "Midnight Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/midnight_100x100.jpg"
			}, 
			{"strainId": 357,
			 	"strainName": "Black Velvet",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/Black-Velvet_100x100.jpg"
			},
			{"strainId": 358,
			 	"strainName": "Jamaican Dream",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/jamaican-dream_100x100.jpg"
			}, 
			{"strainId": 359,
			 	"strainName": "California Grapefruit",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/california-grapefruit_100x100.jpg"
			}, 
			{"strainId": 360,
			 	"strainName": "Scott's OG",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/scott-s-og_100x100.jpg"
			}, 
			{"strainId": 361,
			 	"strainName": "Hawaiian Sativa",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/hawaiian-sativa_100x100.jpg"
			}, 
			{"strainId": 362,
			 	"strainName": "Wet Dream",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/wet-dream_100x100.jpg"
			},
			{"strainId": 363,
			 	"strainName": "Sublime",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/sublime_100x100_46fa.jpg"
			},
			{"strainId": 364,
			 	"strainName": "Purple Voodoo",
			 	"strainType": "hyrbrid",
			 	"imageUrl": "images/strains/purple-voodoo_100x100_1bb5.jpg"
			},
			{"strainId": 365,
			 	"strainName": "Fire Haze",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/fire-haze_100x100_0ff8.jpg"
			},
			{"strainId": 366,
			 	"strainName": "Space Jill",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/space-jill_100x100_4026.jpg"
			},
			{"strainId": 367,
			 	"strainName": "Maui Waui",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/maui-waui_100x100_89bb.jpg"
			},
			{"strainId": 368,
			 	"strainName": "Golden Goat",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/hawaiian-snow_100x100.jpg"
			},
			{"strainId": 369,
			 	"strainName": "Laughing Buddha",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/laughing-buddha_100x100_ebef.jpg"
			},
			{"strainId": 370,
			 	"strainName": "Durban Poison",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/durban-poison_100x100_09a5.jpg"
			},
			{"strainId": 371,
			 	"strainName": "Mob Boss",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/mob-boss_100x100_5cd4.jpg"
			},
			{"strainId": 372,
			 	"strainName": "Banana Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/banana-kush_100x100_9b04.jpg"
			},
			{"strainId": 373,
			 	"strainName": "Black Widow",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/black-widow_100x100.jpg"
			},
			{"strainId": 374,
			 	"strainName": "Jack the Ripper",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/jack-the-ripper_100x100.jpg"
			},
			{"strainId": 375,
			 	"strainName": "Purple Thai",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/purple-thai_100x100.jpg"
			}, 
			{"strainId": 376,
			 	"strainName": "Silver Haze",
			 	"strainType": "Sativa",
			 	"imageUrl": "images/strains/silver-haze_100x100.jpg"
			},
			{"strainId": 377,
			 	"strainName": "Northern Lights Blue",
			 	"strainType": "Indica",
			 	"imageUrl": "images/strains/blue-lights_100x100.jpg"
			},
			{"strainId": 378,
			 	"strainName": "Mango Kush",
			 	"strainType": "Hybrid",
			 	"imageUrl": "images/strains/mango-kush_100x100.jpg"
			}
		]; 
/** end strain name data **/

/** api vars and path definitions **/
		//service api
		/**var productUrl = "/api/products";**/
		/**var effectUrl = "/api/effects";**/
		/**var temperatureUrl = "/api/temperatures";**/
		/**var modeUrl = "/api/modes";**/
		/**var strainUrl = "/api/plantLog";**/
		var plantLogUrl = "/api/plantLog";
		var phaseUrl = "/api/phases";
		var feedStylesUrl = "/api/feedStyles";
		var foxfarmScheduleUrl = "/api/foxfarmScheduleUrl";
		var growthPhaseUrl = "/api/growthPhaseUrl";
		var weeklyScheduleUrl = "/api/weeklySchedule";
		var strainUrl = "/api/strains";
		var strainNameUrl = "/api/strainNames";
		/**var tasteUrl = "/api/tastes";**/
		/**var recEffectUrl = "/api/recEffects";**/

		//for strain details
		var detailsUrl = "/api/details";
		/**var detailModeUrl = "/api/detailModes";**/
		/**var vapeTempUrl = "/api/vapeTemps";**/
		/**var vTipUrl = "/api/vTips";**/

		/**$httpBackend.whenGET(productUrl).respond(products); **/
		/**$httpBackend.whenGET(temperatureUrl).respond(temperatures);**/
		/**$httpBackend.whenGET(modeUrl).respond(modes);**/
		/**$httpBackend.whenGET(effectUrl).respond(effects);**/
		$httpBackend.whenGET(weeklySchedule).respond(weeklySchedule);
		$httpBackend.whenGET(growthPhaseUrl).respond(growthPhase);
		$httpBackend.whenGET(foxfarmScheduleUrl).respond(foxfarmSchedule);
		$httpBackend.whenGET(feedStylesUrl).respond(feedStyles);
		$httpBackend.whenGET(phaseUrl).respond(phases);
		$httpBackend.whenGET(plantLogUrl).respond(plantLog);
		$httpBackend.whenGET(strainUrl).respond(strains);
		$httpBackend.whenGET(strainNameUrl).respond(strainNames);
		/**$httpBackend.whenGET(tasteUrl).respond(tastes);**/
		/**$httpBackend.whenGET(recEffectUrl).respond(recEffects);**/

		//for strain details
		$httpBackend.whenGET(detailsUrl).respond(strains);
		/**$httpBackend.whenGET(detailModeUrl).respond(detailModes);**/
		/**$httpBackend.whenGET(vapeTempUrl).respond(vapeTe/
		$httpBackend.whenGET(growthPhaseUrl).respond();**hase);/**$httpBackend.whenGET(vTipUrl).respond(vTips);**/


		var editingRegex = new RegExp(strainUrl + "/[0-9][0-9]*", '');

		$httpBackend.whenGET(editingRegex).respond(function (method, url, data){
			var strain = {"strainId": 0};
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if (id > 0){
				for (var i = 0; i < strains.length; i++){
					if(strains[i].strainId == id) {
						strain = strains[i];
						break;
					}
				};
			}
			return [200, strain, {}];
		}); 
		

		//Pass through any requests for application files
		$httpBackend.whenGET(/app/).passThrough();
	})
}());