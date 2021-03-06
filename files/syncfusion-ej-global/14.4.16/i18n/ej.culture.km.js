ej.addCulture( "km", {
	name: "km",
	englishName: "Khmer",
	nativeName: "ភាសាខ្មែរ",
	language: "km",
	numberFormat: {
		pattern: ["- n"],
		groupSizes: [3,0],
		"NaN": "NAN",
		negativeInfinity: "-- អនន្ត",
		positiveInfinity: "អនន្ត",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,0]
		},
		currency: {
			pattern: ["-n$","n$"],
			symbol: "៛"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["ថ្ងៃអាទិត្យ","ថ្ងៃច័ន្ទ","ថ្ងៃអង្គារ","ថ្ងៃពុធ","ថ្ងៃព្រហស្បតិ៍","ថ្ងៃសុក្រ","ថ្ងៃសៅរ៍"],
				namesAbbr: ["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."],
				namesShort: ["អា","ច","អ","ពុ","ព","សុ","ស"]
			},
			months: {
				names: ["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",""],
				namesAbbr: ["១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",""]
			},
			AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
			PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
			eras: [{"name":"ចន្ទគតិ","start":null,"offset":0}],
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "H:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy H:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "'ខែ' MM 'ឆ្នាំ' yyyy"
			}
		},
		Gregorian_TransliteratedEnglish: {
			name: "Gregorian_TransliteratedEnglish",
			days: {
				names: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
				namesAbbr: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
				namesShort: ["أ","ا","ث","أ","خ","ج","س"]
			},
			months: {
				names: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
				namesAbbr: ["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]
			},
			AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
			PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
			patterns: {
				d: "MM/dd/yyyy",
				D: "dddd, MMMM dd, yyyy",
				t: "H:mm",
				T: "HH:mm:ss",
				f: "dddd, MMMM dd, yyyy H:mm",
				F: "dddd, MMMM dd, yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});
