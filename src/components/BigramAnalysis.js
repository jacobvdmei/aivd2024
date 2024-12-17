function BigramAnalysis() {
	// const [totalBigrams, setTotalBigrams] = useState(0);
	// const [score, setScore] = useState(0);
	let totalBigrams = 0;

	const dutchBigrams = [
		['n_', 3.84],
		['en', 3.70],
		['e_', 3.08],
		['de', 2.58],
		['er', 2.32],
		['t_', 1.94],
		['_d', 1.78],
		['an', 1.72],
		['_v', 1.43],
		['ge', 1.37],
		['te', 1.35],
		['in', 1.31],
		['ee', 1.19],
		['r_', 1.18],
		['aa', 1.11],
		['he', 1.06],
		['et', 1.05],
		['_h', 1.05],
		['_e', 0.97],
		['ie', 0.97],
		['el', 0.96],
		['st', 0.93],
		['s_', 0.87],
		['nd', 0.84],
		['_o', 0.79],
		['va', 0.77],
		['ch', 0.76],
		['re', 0.75],
		['ve', 0.74],
		['or', 0.74],
		['_g', 0.70],
		['ar', 0.70],
		['oo', 0.69],
		['_b', 0.69],
		['ng', 0.69]
	];

	// const theText = 'Het handelsakkoord beslaat een vijfde van de wereldeconomie. De handel tussen de EU en de Mercosur-landen is jaarlijks tientallen miljarden euros waard. In de Zuid-Amerikaanse landen en de EU samen wonen zon 700 miljoen consumenten. Gisteren landde Von der Leyen in de Uruguayaanse hoofdstad Montevideo om daar met de vijf landen te onderhandelen. Dat leek er al op te wijzen dat de onderhandelingen snel afgerond zouden zijn.';

	// const theText = 'Van de ruim 400 Blokker-filialen sluiten er 100 al op 21 december, over twee weken dus. Dat staat in een brief van de directie aan het personeel. De brief is in handen van de NOS. De huishoudketen werd vorige maand failliet verklaard en momenteel houden de winkels een leegverkoop. Die staat gepland tot het einde van het jaar, maar voor 100 winkels wordt die dus eerder beëindigd. "Om de verkopen op winkelniveau te optimaliseren, zullen we winkels gefaseerd sluiten", schrijft Blokker-directeur Pauline Boerman in de brief. Om welke winkels het gaat, hoort het personeel een dezer dagen. Deze filialen zullen geen nieuwe voorraden meer ontvangen. Loyaal Het personeel wordt geacht door te werken in filialen die nog wel tot het einde van het jaar open zijn, staat in de brief. "We doen een beroep op de medewerkers van de winkels die eerder sluiten om hun collega"s in de resterende winkels tot het einde van de maand te ondersteunen." Vakbond FNV reageert verbolgen op het nieuws. "Dit valt zwaar bij het personeel", zegt Linda Vermeulen van FNV Winkelstraat. "We krijgen tientallen reacties van winkelmedewerkers. Vaak zijn die erg loyaal aan hun eigen team en klanten, maar voelen er niets voor om nog voor het concern in een andere winkel te gaan staan." Doorstart Volgens Blokker staat deze beslissing los van de kansen op een doorstart. De curator van Blokker is al weken op zoek naar geschikte kandidaten om de keten deels of in zijn geheel over te nemen. Verschillende bronnen rondom Blokker zeggen dat er nog gesprekken lopen met kandidaten. Wie dat zijn en hoe concreet die gesprekken zijn, is onduidelijk.';

	const theText = 'Ydq gh uxlp 400 Eornnhu-iloldohq voxlwhq hu 100 do rs 21 ghfhpehu, ryhu wzhh zhnhq gxv. Gdw vwddw lq hhq eulhi ydq gh gluhfwlh ddq khw shuvrqhho. Gh eulhi lv lq kdqghq ydq gh QRV. Gh kxlvkrxgnhwhq zhug yruljh pddqg idloolhw yhunoddug hq prphqwhho krxghq gh zlqnhov hhq ohhjyhunrrs. Glh vwddw jhsodqg wrw khw hlqgh ydq khw mddu, pddu yrru 100 zlqnhov zrugw glh gxv hhughu ehhlqgljg. "Rp gh yhunrshq rs zlqnhoqlyhdx wh rswlpdolvhuhq, cxoohq zh zlqnhov jhidvhhug voxlwhq", vfkulmiw Eornnhu-gluhfwhxu Sdxolqh Erhupdq lq gh eulhi. Rp zhonh zlqnhov khw jddw, krruw khw shuvrqhho hhq ghchu gdjhq. Ghch iloldohq cxoohq jhhq qlhxzh yrruudghq phhu rqwydqjhq. Orbddo Khw shuvrqhho zrugw jhdfkw grru wh zhunhq lq iloldohq glh qrj zho wrw khw hlqgh ydq khw mddu rshq clmq, vwddw lq gh eulhi. "Zh grhq hhq ehurhs rs gh phghzhunhuv ydq gh zlqnhov glh hhughu voxlwhq rp kxq froohjd"v lq gh uhvwhuhqgh zlqnhov wrw khw hlqgh ydq gh pddqg wh rqghuvwhxqhq." Ydnerqg IQY uhdjhhuw yhuerojhq rs khw qlhxzv. "Glw ydow czddu elm khw shuvrqhho", chjw Olqgd Yhuphxohq ydq IQY Zlqnhovwuddw. "Zh nulmjhq wlhqwdoohq uhdfwlhv ydq zlqnhophghzhunhuv. Yddn clmq glh huj orbddo ddq kxq hljhq whdp hq nodqwhq, pddu yrhohq hu qlhwv yrru rp qrj yrru khw frqfhuq lq hhq dqghuh zlqnho wh jddq vwddq." Grruvwduw Yrojhqv Eornnhu vwddw ghch ehvolvvlqj orv ydq gh ndqvhq rs hhq grruvwduw. Gh fxudwru ydq Eornnhu lv do zhnhq rs crhn qddu jhvfklnwh ndqglgdwhq rp gh nhwhq ghhov ri lq clmq jhkhho ryhu wh qhphq. Yhuvfkloohqgh eurqqhq urqgrp Eornnhu chjjhq gdw hu qrj jhvsuhnnhq orshq phw ndqglgdwhq. Zlh gdw clmq hq krh frqfuhhw glh jhvsuhnnhq clmq, lv rqgxlgholmn.';

	// const theText = 'As 2024 draws to a close, and winter arrives, Russian forces are continuing to push their Ukrainian opponents back. In total, Russia has captured and retaken about 2,350 sq km of territory (907 sq miles) in eastern Ukraine and in Russias western Kursk region. But the cost in lives has been horrendous. Britains defence ministry says that in November Russia suffered 45,680 casualties, more than during any month since its full-scale invasion in February 2022. According to the latest UK Defence Intelligence estimate, Russia lost a daily average of 1,523 men, killed and wounded. On 28 November, it says, Russia lost more than 2,000 men in a single day, the first time this has happened. "We"re seeing the Russians grinding out more advances," one official said, on condition of anonymity. "But at enormous cost." Officials said the casualty figures were based on open-source material, sometimes cross-referenced with classified data. All in all, Russia is estimated to have lost about 125,800 soldiers over the course of its autumn offensives, according to the Washington-based Institute for the Study of War (ISW). Russias "meat-grinder" tactics, the ISW says, mean that Moscow is losing more than 50 soldiers for each square kilometre of captured territory.';

	const getBigramsFromText = (text) => {
		const bigramsFound = {};
		const lowerText = text.toLowerCase().replace(/ /g,"_");

		for (let i = 0; i < lowerText.length; i++)
		{
			if (i < (lowerText.length - 1))
			{
				const bigram = lowerText.charAt(i) + lowerText.charAt(i + 1);
				totalBigrams++;

				if (Object.hasOwn(bigramsFound, bigram))
				{
					bigramsFound[bigram]++;
				}
				else
				{
					bigramsFound[bigram] = 1;
				}
			}
		}

		return bigramsFound;
	};

	const scoreBigrams = (bigrams) => {
		let newScore = 0;

		for (let a = 0; a < dutchBigrams.length; a++)
		{
			let found = false;
			for (let b = 0; b < bigrams.length; b++)
			{
				if (bigrams[b][0] === dutchBigrams[a][0])
				{
					found = true;
					newScore += Math.abs(dutchBigrams[a][1] - (bigrams[b][1] / totalBigrams * 100));
				}
			}

			if (found === false)
			{
				newScore += dutchBigrams[a][1];
			}
		}

		return newScore;
	};

	const sortCountBigrams = (bigrams) => {
		let sortable = [];

		for (let bigram in bigrams)
		{
			sortable.push([bigram, bigrams[bigram]]);
		}

		sortable.sort(function(a, b) {
			return b[1] - a[1];
		});

		return sortable;
	};

	console.log(scoreBigrams(sortCountBigrams(getBigramsFromText(theText))));

};

export default BigramAnalysis;
