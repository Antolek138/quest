const quest = {
	1: 'Jaka jest Twoja ulubiona fantazja erotyczna, o której nigdy nie mówiłeś/aś nikomu?',
	2: 'Czy kiedykolwiek uprawiałeś/aś seks w miejscu publicznym? Jeśli tak, to gdzie i jak to się stało?',
	3: 'Jaki jest Twój najśmielszy seksualny eksperyment, który chciałbyś/chciałabyś kiedyś przeprowadzić?',
	4: 'Czy masz jakąś seksualną fantazję związaną z rolą lub przebraniem, którą chciałbyś/chciałabyś zrealizować?',
	5: 'Czy kiedykolwiek używałeś/aś zabawek erotycznych z partnerem/partnerką? Jakie są Twoje doświadczenia?',
	6: 'Jaki jest najdziwniejszy komplement, jaki otrzymałeś/aś podczas intymnych chwil?',
	7: 'Wolisz być dominowany czy dominować? Wyjaśnij!',
	8: 'Jakie jest Twoje zdanie o seksie analnym?',
	9: 'Czy kiedykolwiek flirtowałeś/aś online z nieznajomym? Do czego to doprowadziło?',
	10: 'Czy masz jakieś sekretne techniki w sypialni, którymi chciałbyś/chciałabyś się podzielić?',
	11: 'Czy kiedykolwiek miałeś/aś do czynienia z seksem telefonicznym lub sextingiem? Jakie są Twoje doświadczenia?',
	12: 'Czy istnieje coś, co zawsze chciałeś/aś zrobić w łóżku, ale nie miałeś/aś odwagi zaproponować?',
	13: 'Czy kiedykolwiek miałeś/aś erotyczny sen o kimś z tej grupy?',
	14: 'Jak oceniasz swoje umiejętności w pocałunkach w skali 1-10?',
	15: 'Jaka jest Twoja ulubiona pozycja seksualna i dlaczego?',
	16: 'Czy kiedykolwiek miałeś/aś fantazję o kimś obecnym tutaj?',
	17: 'Czy kiedykolwiek flirtowałeś/aś z myślą o zdradzie?',
	18: 'Co robisz, kiedy chcesz poczuć się seksownie?',
	19: 'Czy masz jakieś "guilty pleasure" związane z seksem?',
	20: 'Jakie jest Twoje zdanie na temat seksu na pierwszej randce?',
	21: 'Czy kiedykolwiek wysyłałeś/aś lub otrzymywałeś/aś sexty? Co o tym myślisz?',
	22: 'Czy kiedykolwiek uprawiałeś/aś seks w miejscu publicznym? Gdzie to było?',
	23: 'Jaka jest Twoja "go-to move" podczas gry wstępnej?',
	24: 'Czy kiedykolwiek używałeś/aś zabawek erotycznych z partnerem/partnerką?',
	25: 'Jaki jest Twój najdzikszy seksualny eksperyment?',
	26: 'Jaka jest najdziwniejsza rzecz, która Cię kiedykolwiek podnieciła?',
	27: 'Czy kiedykolwiek myślałeś/aś o trójkącie lub seksie grupowym?',
	28: 'Co jest dla Ciebie najważniejsze w seksie?',
	29: 'Czy kiedykolwiek łamałeś/aś prawo? Jakie były okoliczności?',
	30: 'Jakie jest największe kłamstwo, które kiedykolwiek powiedziałeś/aś, i jakie miało konsekwencje?',
	31: 'Czy kiedykolwiek zrobiłeś/aś coś, czego teraz głęboko żałujesz?',
	32: 'Jaka jest najbardziej szokująca rzecz, jaką zrobiłeś/aś pod wpływem alkoholu lub narkotyków?',
	33: 'Czy kiedykolwiek myślałeś/aś o zemście? Jak byś to zrobił/a?',
	34: 'Jakie jest największe ryzyko, które kiedykolwiek podjąłeś/aś w życiu seksualnym?',
	35: 'Czy masz jakieś sekrety, które mogłyby zniszczyć Twoje życie, gdyby wyszły na jaw?',
	36: 'Czy kiedykolwiek uczestniczyłeś/aś w czynnościach, które uważasz za moralnie niewłaściwe? Co to było?',
	37: 'Czy kiedykolwiek doświadczyłeś/aś czegoś paranormalnego? Opowiedz.',
	38: 'Jaki jest Twój największy lęk związany z Twoją przyszłością?',
	39: 'Czy istnieje coś, za co nigdy sobie nie wybaczyłeś/aś?',
	40: 'Czy masz jakieś głębokie niepokoje dotyczące świata lub społeczeństwa?',
	41: 'Czy kiedykolwiek czułeś/aś się kompletnie samotny/a? Opisz to doświadczenie.',
	42: 'Jaka jest jedna rzecz, której nigdy nie mogłeś/aś powiedzieć swoim rodzicom?',
	43: 'Czy kiedykolwiek poprawiałeś majtki w miejscu publicznym?',
	44: 'Czy kiedykolwiek użyłeś czyjejś szczoteczki do zębów?',
	45: 'Czy kiedykolwiek zrobiłeś coś tak żenującego publicznie?',
	46: 'Czy kiedykolwiek pokazałeś komuś tyłek?',
	47: 'Czy kiedykolwiek byłeś zauroczony postacią?',
	48: 'Czy kiedykolwiek sikałeś do butelki?',
	49: 'Czy kiedykolwiek pierdnąłeś publicznie?',
	50: 'Czy kiedykolwiek zostałeś oszukany przez kogoś w internecie?',
	51: 'Czy kiedykolwiek nosiłeś Crocsy?',
	52: 'Czy kiedykolwiek udawałeś, że piszesz wiadomość w niezręcznej sytuacji?',
	53: 'Czy kiedykolwiek śpiewałeś karaoke i totalnie pomyliłeś teksty?',
	54: 'Czy kiedykolwiek wszedłeś w szklane drzwi?',
	55: 'Czy kiedykolwiek śmiałeś się z nieszczęścia innych, a potem coś podobnego przytrafiło się tobie?',
	56: 'Czy kiedykolwiek wysłałeś wiadomość do złej osoby i udawałeś, że tak miało być?',
	57: 'Czy kiedykolwiek opowiedziałeś żart tak zły, że cisza była ogłuszająca?',
	58: 'Czy kiedykolwiek przypadkowo polubiłeś czyjeś zdjęcie sprzed lat, podczas przeglądania jego mediów społecznościowych?',
	59: 'Czy kiedykolwiek nosiłeś skarpetki z sandałami, aby być buntownikiem?',
	60: 'Czy kiedykolwiek przespałeś cały film w kinie?',
	61: 'Czy kiedykolwiek zwaliłeś winę na zwierzę za coś, co zrobiłeś?',
	62: 'Czy kiedykolwiek sikałeś do basenu?',
	63: 'Czy kiedykolwiek pocałowałeś swojego najlepszego przyjaciela?',
	64: 'Czy kiedykolwiek złamałeś kość?',
	65: 'Czy kiedykolwiek użyłeś fałszywego dowodu?',
	66: 'Czy kiedykolwiek miałeś zauroczenie nauczycielem?',
	67: 'Czy kiedykolwiek byłeś zakochany?',
	68: 'Czy kiedykolwiek pocałowałeś ex przyjaciela?',
	69: 'Czy kiedykolwiek ukradłeś coś koleżance lub koledze z klasy?',
	70: 'Czy kiedykolwiek powiedziałeś komuś “kocham cię”, nie mając tego na myśli?',
	71: 'Czy kiedykolwiek kogoś zignorowałeś?',
	72: 'Czy kiedykolwiek śpiewałeś serenadę komuś i katastrofalnie pomyliłeś teksty?',
	73: 'Czy kiedykolwiek wyszedłeś z toalety z papierem toaletowym przyklejonym do buta?',
	74: 'Czy kiedykolwiek wysłałeś wiadomość o kimś do tej osoby przez pomyłkę?',
	75: 'Czy kiedykolwiek nosiłeś ubrania na lewą stronę przez cały dzień, nie zauważając tego?',
	76: 'Czy kiedykolwiek próbowałeś zrobić wrażenie na kimś i spektakularnie się nie udało?',
	77: 'Czy kiedykolwiek całowałeś nieznajomego?',
	78: 'Czy kiedykolwiek spałeś na zewnątrz?',
	79: 'Czy kiedykolwiek pokazałeś komuś nagie ciało?',
	80: 'Czy kiedykolwiek zrobiłeś sobie seksowne selfie?, Pochwal się',
	81: 'Czy kiedykolwiek byłeś w sklepie dla dorosłych?',
	82: 'Czy kiedykolwiek miałeś seksowny sen?, Opowiedz!',
	83: 'Czy kiedykolwiek pływałeś nago?',
	84: 'Czy kiedykolwiek całowałeś kogoś tej samej płci?',
	85: 'Czy kiedykolwiek złapałeś kogoś na seksie?',
	86: 'Czy kiedykolwiek grałeś w rozbieranego pokera i skończyłeś nago?',
	87: 'Czy kiedykolwiek zrobiłeś spacer sławy… lub wstydu następnego ranka?',
	88: 'Czy kiedykolwiek zabawiłeś się w miejscu, gdzie mogli cię złapać?',
	89: 'Czy kiedykolwiek wysłałeś pikantną wiadomość do złej osoby?',
	90: 'Czy kiedykolwiek miałeś układ “przyjaciele z korzyściami”?',
	91: 'Czy kiedykolwiek odgrywałeś pikantną fantazję?',
	92: 'Czy kiedykolwiek byłeś zakuty w kajdanki dla zabawy?',
	93: 'Czy kiedykolwiek robiłeś coś pikantnego w miejscu publicznym?',
	94: 'Czy kiedykolwiek miałeś niespodziewanego “gościa” podczas intymnego momentu?',
	95: 'Czy kiedykolwiek miałeś “niegrzeczny” zakup na karcie kredytowej i musiałeś go wytłumaczyć?',
}

const challenge = {
	1: 'Daj pokaz lap dance osobie po twojej lewej.',
	2: 'Wypij shot z ciała osoby po twojej prawej.',
	3: 'Zdejmij koszulkę.',
	4: 'Całuj się z osobą po twojej lewej przez 30 sekund.',
	5: 'Zadzwoń do swojego eks i mów mu niegrzecznie przez minutę.',
	6: 'Pokaż się wszystkim na imprezie przez 3 sekundy.',
	7: 'Udawaj striptizera i występuj przez 2 minuty.',
	8: 'Szeptaj coś niegrzecznego na ucho osobie trzy miejsca od ciebie.',
	9: 'Zamień się ubraniem z osobą przeciwnej płci.',
	10: 'Pełznij seksownie w stronę gospodarza.',
	11: 'Wyślij pikantną wiadomość tekstową do kogoś z twojej książki adresowej wybranej przez grupę.',
	12: 'Zrób 20 pompek, kiedy ktoś siedzi ci na plecach.',
	13: 'Opowiedz niegrzeczny żart, który sprawi, że wszyscy się zarumienią.',
	14: 'Naśladuj swoją minę orgazmu przed wszystkimi.',
	15: 'Opowiedz o najbardziej niegrzecznym śnie, jaki miałeś.',
	16: 'Prowadź sugestywną rozmowę z przedmiotem nieożywionym.',
	17: 'Spróbuj uwieść krzesło, na którym siedzisz.',
	18: 'Odtwórz fantazję wybraną przez grupę.',
	19: 'Zatańcz seksownie z miotłą lub mopem.',
	20: 'Delikatnie ugryź w pupę osobę po twojej prawej.',
	21: 'Wybiegnij na zewnątrz i krzycz „Jestem bogiem/boginią seksu!”',
	22: 'Zmysłowo jedz banana lub ogórka.',
	23: 'Zrób wrażenie gwiazdy porno.',
	24: 'Spróbuj zatańczyć na rurze, z rurą lub bez.',
	25: 'Potrząśnij pośladkami przez 30 sekund.',
	26: 'Oblizuj swoje usta w najseksowniejszy możliwy sposób.',
	27: 'Zaśpiewaj komuś z grupy piosenkę pełną zmysłowości.',
	28: 'Napisz czyjeś imię na swoim ciele markerem.',
	29: 'Udawaj, że kręcisz niegrzeczny film i reżyseruj aktorów.',
	30: 'Zrób striptiz, ale zatrzymaj się tuż przed zdjęciem czegoś.',
	31: 'Szeptem opowiedz komuś o swojej najśmielszej fantazji.',
	32: 'Trzymaj za rękę osobę obok ciebie pod stołem przez 5 minut.',
	33: 'Zanurz palec w drinku, a następnie zmysłowo go oblizuj.',
	34: 'Odtwórz najbardziej romantyczną scenę z twojego ulubionego filmu.',
	35: 'Rzuć wyzwanie komuś w zmysłowym konkursie wpatrywania się.',
	36: 'Zaśpiewaj grupie seksowną piosenkę, używając tylko miauczenia.',
	37: 'Wymień się ubraniem z osobą po twojej prawej bez użycia rąk.',
	38: 'Szczegółowo opowiedz o swoim pierwszym pocałunku.',
	39: 'Przytul osobę naprzeciwko ciebie przez całą minutę.',
	40: 'Zmysłowo zjedz kawałek owocu dostarczonego przez grupę.',
	41: 'Zrób zmysłowy masaż osobie po twojej lewej.',
	42: 'Zdejmij element ubrania i daj go osobie, którą wybierzesz.',
	43: 'Przyznaj się do żenującego sekretu, którego nigdy nikomu nie wyznałeś.',
	44: 'Pocałuj stopy osoby siedzącej naprzeciwko ciebie.',
	45: 'Tańcz bez muzyki przez 2 minuty.',
	46: 'Pozwól, aby ktoś napisał na twoim czole niegrzeczne słowo markerem.',
	47: 'Trzymaj kostkę lodu w ustach, aż się rozpuści.',
	48: 'Pozwól osobie po twojej prawej łaskotać cię przez 30 sekund.',
	49: 'Zadzwoń do przyjaciela i wyznaj, że miałeś o nim niegrzeczne sny.',
	50: 'Wyślij pikantne selfie do kogoś z grupy.',
	51: 'Udawaj, że jesteś na konkursie piękności i zrób wybieg.',
	52: 'Naśladuj kogoś z pokoju. Reszta zgaduje, kto to jest.',
	53: 'Ssij plasterek cytryny i próbuj kogoś uwieść.',
	54: 'Pozwól komuś przeszukać twój telefon przez 1 minutę.',
	55: 'Udawaj psa i przynieś mały przedmiot z pokoju.',
	56: 'Zjedz łyżkę musztardy lub ostrego sosu.',
	57: 'Zrób dramatyczne czytanie brudnego tekstu ze swojego telefonu.',
	58: 'Spróbuj rozebrać innego gracza zębami.',
	59: 'Zrób body shot z siebie korzystając z lustra.',
	60: 'Wyślij zalotną wiadomość do kogoś, kogo wybiorą twoi przyjaciele.',
	61: 'Wykonaj swój najseksowniejszy taniec pod reflektorem (użyj latarki telefonu).',
	62: 'Spróbuj zrobić seksowny szpagat.',
	63: 'Dokładnie opisz, co cię podnieca.',
	64: 'Naśladuj, jak według ciebie brzmi striptiz.',
	65: 'Zadzwoń do kogoś i próbuj mówić aluzjami przez 1 minutę.',
	66: 'Przymierz cudzą bieliznę na swoje ubrania.',
	67: 'Jedz przekąskę w możliwie najbardziej zmysłowy sposób.',
	68: 'Stwórz seksowny pseudonim dla każdego w pokoju.',
	69: 'Zrób swój najseksowniejszy spacer tam i z powrotem.',
	70: 'Daj komuś seksowny pseudonim na podstawie jego osobowości lub cech.',
	71: 'Udawaj seksownego wampira uwodzącego swoją następną ofiarę.',
	72: 'Zjedz kawałek jedzenia z ciała kogoś innego.',
	73: 'Nakręć wideo na TikTok z seksownym tańcem.',
	74: 'Opisz swoją idealną randkę ze szczegółami.',
	75: 'Wyślij kuszącą wiadomość tekstową do kogoś i przeczytaj ją na głos.',
	76: 'Zrób komuś malinka na szyi.',
	77: 'Pocałuj poduszkę przez minutę.',
	78: 'Liż bitą śmietanę lub czekoladę z ciała kogoś.',
	79: 'Zrób dramatyczne czytanie fragmentu gorącej powieści romantycznej.',
	80: 'Pocałuj osobę po swojej prawej w ich najbardziej wrażliwe miejsce.',
}

const finger = {
	1: 'Opuszczasz palec, jeśli kiedykolwiek miałeś zauroczenie na kimś z tego pokoju.',
	2: 'Opuszczasz palec, jeśli kiedykolwiek skłamałeś na temat swojego wieku.',
	3: 'Opuszczasz palec, jeśli kiedykolwiek zdradziłeś partnera.',
	4: 'Opuszczasz palec, jeśli kiedykolwiek coś ukradłeś.',
	5: 'Opuszczasz palec, jeśli kiedykolwiek miałeś zauroczenie na partnerze swojego najlepszego przyjaciela.',
	6: 'Opuszczasz palec, jeśli kiedykolwiek skłamałeś, aby uniknąć kłopotów z prawem.',
	7: 'Opuszczasz palec, jeśli kiedykolwiek miałeś na sobie kajdanki.',
	8: 'Opuszczasz palec, jeśli kiedykolwiek złamałeś komuś serce.',
	9: 'Opuszczasz palec, jeśli kiedykolwiek zrobiłeś coś nielegalnego.',
	10: 'Opuszczasz palec, jeśli kiedykolwiek byłeś zakochany w kimś, kto nie odwzajemniał twoich uczuć.',
	11: 'Opuszczasz palec, jeśli kiedykolwiek zostałeś przyłapany w kompromitującej sytuacji przez członka rodziny.',
	12: 'Opuszczasz palec, jeśli kiedykolwiek pływałeś nago.',
	13: 'Opuszczasz palec, jeśli kiedykolwiek miałeś nocną imprezę nie związaną z pracą ani nauką.',
	14: 'Opuszczasz palec, jeśli kiedykolwiek zostałeś przyłapany na ściąganiu na teście lub egzaminie.',
	15: 'Opuszczasz palec, jeśli kiedykolwiek zrobiłeś impulsywny zakup za ponad 500 żł.',
	16: 'Opuszczasz palec, jeśli kiedykolwiek wysłałeś wiadomość do złej osoby i natychmiast tego żałowałeś.',
	17: 'Opuszczasz palec, jeśli kiedykolwiek wybuchnąłeś śmiechem w nieodpowiednim momencie.',
	18: 'Opuszczasz palec, jeśli kiedykolwiek zgubiłeś się we własnym mieście lub dzielnicy.',
	19: 'Opuszczasz palec, jeśli kiedykolwiek śmiałeś się z żartu, nie rozumiejąc go naprawdę.',
	20: 'Opuszczasz palec, jeśli kiedykolwiek prosiłeś kogoś, aby powtórzył coś kilka razy, nie rozumiałeś tego i po prostu uśmiechnąłeś się niezręcznie i kiwnąłeś głową.',
	21: 'Opuszczasz palec, jeśli kiedykolwiek machnąłeś do kogoś, myśląc, że go znasz, tylko po to, aby zdać sobie sprawę, że to kompletny obcy.',
	22: 'Opuszczasz palec, jeśli kiedykolwiek udawałeś rozmowę przez telefon, aby uniknąć kogoś.',
	23: 'Opuszczasz palec, jeśli kiedykolwiek coś ugotowałeś, a to wyszło niejadalne — ale zjadłeś to z czystej dumy.',
	24: 'Opuszczaj palec, jeśli kiedykolwiek miałeś przyjaciela z korzyściami.',
	25: 'Opuszczaj palec, jeśli kiedykolwiek miałeś trójkąt.',
	26: 'Opuszczaj palec, jeśli kiedykolwiek używałeś zabawki erotycznej.',
	27: 'Opuszczaj palec, jeśli kiedykolwiek oglądałeś porno.',
	28: 'Opuszczaj palec, jeśli kiedykolwiek wysłałeś komuś nagie zdjęcia.',
	29: 'Opuszczaj palec, jeśli kiedykolwiek dałeś komuś prywatny taniec.',
	30: 'Opuszczaj palec, jeśli kiedykolwiek byłeś w sklepie dla dorosłych.',
	31: 'Opuszczaj palec, jeśli kiedykolwiek uprawiałeś seks pod prysznicem.',
	32: 'Opuszczaj palec, jeśli kiedykolwiek udawałeś orgazm.',
	33: 'Opuszczaj palec, jeśli kiedykolwiek wysłałeś zalotnego SMS-a do złej osoby.',
	34: 'Opuszczaj palec, jeśli kiedykolwiek miałeś erotyczny sen o kimś w tym pokoju.',
	35: 'Opuszczaj palec, jeśli kiedykolwiek całowałeś kogoś, aby zazdrościł ktoś inny.',
	36: 'Opuszczaj palec, jeśli kiedykolwiek śmiałeś się podczas seksu.',
	37: 'Opuszczaj palec, jeśli kiedykolwiek próbowałeś mówić sprośnie i nie mogłeś zachować powagi.',
	38: 'Opuszczaj palec, jeśli kiedykolwiek miałeś wypadek samochodowy.',
	39: 'Opuszczaj palec, jeśli kiedykolwiek flirtowałeś z nauczycielem.',
	40: 'Opuszczaj palec, jeśli kiedykolwiek zapomniałeś o ważnym spotkaniu lub wydarzeniu.',
}

const answerBtn = document.querySelector('.main__answer')
const answerText = document.querySelector('.main__text--answer')

const challengeBtn = document.querySelector('.main__challenge')
const challengeText = document.querySelector('.main__text--challenge')

const fingerBtn = document.querySelector('.finger__btn')
const fingerText = document.querySelector('.finger__text')

const answerGenerator = () => {
	let number = Math.floor(Math.random() * 95)

	for (const num in quest) {
		if (number == num) {
			answerText.textContent = `${quest[num]}`
		}
	}
}

const challengeGenerator = () => {
	let number = Math.floor(Math.random() * 80)

	for (num in challenge) {
		if (number == num) {
			challengeText.textContent = `${challenge[num]}`
		}
	}
}

const fingerGenerator = () => {
	let number = Math.floor(Math.random() * 40)

	for (num in finger) {
		if (number == num) {
			fingerText.textContent = `${finger[num]}`
		}
	}
}

answerBtn.addEventListener('click', answerGenerator)
challengeBtn.addEventListener('click', challengeGenerator)
fingerBtn.addEventListener('click', fingerGenerator)
