const translations={en:{brandSub:'Smart procurement',viewingAs:'Viewing as',overview:'Overview',dashboard:'Dashboard',bookSlot:'Book a slot',myQueue:'My queue',activity:'Activity',procurement:'Procurement',payments:'Payments',history:'History',notifications:'Notifications',settings:'Settings',needHelp:'Need help?',supportTeam:'Our support team is here',home:'Home',goodMorning:'WEDNESDAY, 26 AUGUST 2026',welcome:'Good morning, Arjun',dashboardIntro:'Here’s your procurement journey at a glance.',bookNewSlot:'Book new slot',reminderTitle:'Your appointment is tomorrow',reminderText:'Pune Procurement Centre · 10:00 AM – 10:30 AM. Please carry your digital token.',viewToken:'View token →',upcomingSlot:'Upcoming slot',confirmed:'Confirmed',yourQueue:'Your queue',queuePosition:'6 farmers ahead',waiting:'Waiting',procurementStatus:'Procurement status',qualityCheck:'Quality check',inProgress:'In progress',paymentStatus:'Payment status',paymentDue:'Expected payment',processing:'Processing',journeyTitle:'Your procurement journey',journeySub:'Wheat procurement · Booking PRC26032-1027',viewDetails:'View details ↗',booked:'Booked',arrived:'Farmer arrived',beingVerified:'Being verified now',procurementComplete:'Procurement complete',paymentComplete:'Payment complete',upNext:'Up next',liveQueue:'Live queue',live:'Live',nowServing:'Now serving',ahead:'ahead of you',estimatedWait:'estimated wait',openLiveQueue:'Open live queue →',nearbyCentres:'Nearby procurement centres',chooseLessCrowded:'Choose a less crowded centre',seeAll:'See all ↗',lowCrowd:'Low crowd',moderateCrowd:'Moderate',recentUpdates:'Recent updates',last24:'Your latest notifications',viewAll:'View all',slotConfirmed:'Slot confirmed',todayAt:'Today at 09:42 AM',paymentUpdate:'Payment update',yesterday:'Yesterday at 04:18 PM',appointmentReminder:'Appointment reminder',yesterdayMorning:'Yesterday at 10:00 AM',bookingIntro:'Choose a centre and time that works for you.',selectCentre:'Select procurement centre',searchCentres:'Search centres',continue:'Continue to date & time →',recommendedSlot:'The calmest window is waiting.',recommendationText:'Based on current bookings, we recommend 2:00 PM – 2:30 PM. You’ll spend less time waiting.',tomorrow:'Tomorrow, 28 Aug',useThisSlot:'Use this slot',queueIntro:'Your place in line, updated in real time.',liveUpdates:'Live updates',yourDigitalToken:'YOUR DIGITAL TOKEN',keepTokenReady:'Keep this token ready when you arrive at the centre.',queueTimeline:'Queue timeline',automaticallyUpdated:'Automatically updated by centre staff',bookingConfirmed:'Booking confirmed',waitingInQueue:'Waiting in queue',youAreHere:'You are here',calledToCounter:'Called to counter',notificationWhenCalled:'You’ll get a notification when it’s your turn',atCounter:'At counter',digitalToken:'Digital token',downloadToken:'↓ Download token',procurementIntro:'Follow every stage from arrival to acceptance.',weighing:'Weighing',accepted:'Accepted',complete:'Complete',submitted:'Submitted',quality:'Quality grade',date:'Date',paymentsIntro:'Know exactly when your money is on its way.',expectedPayment:'EXPECTED PAYMENT',estimatedBy:'Estimated by 30 Aug 2026',historyIntro:'A clear record of your past procurements.',downloadRecords:'↓ Download records',crop:'Crop',quantity:'Quantity',centre:'Centre',status:'Status',paid:'Paid · ₹21,420',notificationsIntro:'The important moments, right when they happen.',markAllRead:'Mark all as read',settingsIntro:'Make HarvestFlow work the way you do.',language:'Language',languageSub:'Change the language across the whole app.',appearance:'Appearance',appearanceSub:'Choose a comfortable look for your screen.',light:'Light',dark:'Dark',notificationsSub:'Get reminders about your appointments.'},hi:{dashboard:'डैशबोर्ड',bookSlot:'स्लॉट बुक करें',myQueue:'मेरी कतार',procurement:'खरीद',payments:'भुगतान',history:'इतिहास',notifications:'सूचनाएं',settings:'सेटिंग्स',overview:'अवलोकन',activity:'गतिविधि',welcome:'सुप्रभात, अर्जुन',dashboardIntro:'आपकी खरीद यात्रा का एक नज़र में विवरण।',bookNewSlot:'नया स्लॉट बुक करें',upcomingSlot:'आगामी स्लॉट',yourQueue:'आपकी कतार',waiting:'प्रतीक्षा में',paymentStatus:'भुगतान स्थिति',processing:'प्रक्रिया में',liveQueue:'लाइव कतार',nearbyCentres:'नजदीकी खरीद केंद्र',recentUpdates:'हाल के अपडेट',booked:'बुक किया गया',arrived:'किसान पहुंच गया',qualityCheck:'गुणवत्ता जांच',paymentComplete:'भुगतान पूरा',lowCrowd:'कम भीड़',moderateCrowd:'मध्यम',language:'भाषा',appearance:'दिखावट',light:'लाइट',dark:'डार्क',continue:'तारीख और समय पर जाएं →'},mr:{dashboard:'डॅशबोर्ड',bookSlot:'स्लॉट बुक करा',myQueue:'माझी रांग',procurement:'खरेदी',payments:'पेमेंट',history:'इतिहास',notifications:'सूचना',settings:'सेटिंग्ज',overview:'आढावा',activity:'क्रियाकलाप',welcome:'शुभ सकाळ, अर्जुन',dashboardIntro:'तुमच्या खरेदी प्रवासाचा एका नजरेत आढावा.',bookNewSlot:'नवीन स्लॉट बुक करा',upcomingSlot:'आगामी स्लॉट',yourQueue:'तुमची रांग',waiting:'प्रतीक्षेत',paymentStatus:'पेमेंट स्थिती',processing:'प्रक्रिया सुरू',liveQueue:'लाइव्ह रांग',nearbyCentres:'जवळची खरेदी केंद्रे',recentUpdates:'अलीकडील अपडेट्स',booked:'बुक केले',arrived:'शेतकरी पोहोचला',qualityCheck:'गुणवत्ता तपासणी',paymentComplete:'पेमेंट पूर्ण',lowCrowd:'कमी गर्दी',moderateCrowd:'मध्यम',language:'भाषा',appearance:'दिसणे',light:'लाईट',dark:'डार्क',continue:'तारीख आणि वेळेकडे जा →'}};
let currentLanguage=localStorage.getItem('harvest-language')||'en';
const $=selector=>document.querySelector(selector);const $$=selector=>document.querySelectorAll(selector);
const safeValue=(value,fallback='No data')=>value===null||value===undefined||value===''?fallback:value;
const safeTranslation=(language,key)=>safeValue(translations[language]?.[key]??translations.en[key],'');
function translate(language){currentLanguage=translations[language]?language:'en';localStorage.setItem('harvest-language',currentLanguage);document.documentElement.lang=currentLanguage;$$('[data-i18n]').forEach(el=>{const value=safeTranslation(currentLanguage,el.dataset.i18n);if(value)el.textContent=value});$$('[data-i18n-placeholder]').forEach(el=>{el.placeholder=safeTranslation(currentLanguage,el.dataset.i18nPlaceholder)||'No data'});$('#languageSelect').value=currentLanguage;$('#settingsLanguage').value=currentLanguage;}
function showView(view){$$('.view').forEach(el=>el.classList.remove('active-view'));const target=$(`#${view}View`);if(target)target.classList.add('active-view');$$('[data-view]').forEach(el=>el.classList.toggle('active',el.dataset.view===view));const active=$(`.nav-item[data-view="${view}"]`);const label=active?.querySelector('[data-i18n]');if(label)$('#pageTitle').textContent=label.textContent.trim();if(window.innerWidth<721)$('#sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'})}
$$('[data-view]').forEach(el => el.addEventListener('click', () => showView(el.dataset.view)));
$('#languageSelect').addEventListener('change', e => translate(e.target.value));
$('#settingsLanguage').addEventListener('change', e => { translate(e.target.value); showToast('Language preference saved'); });

function setTheme(theme) {
	document.body.classList.toggle('dark', theme === 'dark');
	localStorage.setItem('harvest-theme', theme);
	$$('[data-theme-choice]').forEach(btn => btn.classList.toggle('active', btn.dataset.themeChoice === theme));
	$('#themeToggle').textContent = theme === 'dark' ? '☾' : '☼';
}

$('#themeToggle').addEventListener('click', () => setTheme(document.body.classList.contains('dark') ? 'light' : 'dark'));
$$('[data-theme-choice]').forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice)));

$('#roleButton').addEventListener('click', () => $('#roleMenu').classList.toggle('open'));
$$('#roleMenu button').forEach(btn => btn.addEventListener('click', () => {
	const labels = { farmer: 'Guest account', staff: 'Pune Centre Staff', admin: 'System Administrator' };
	$('#roleLabel').textContent = labels[btn.dataset.role];
	$('#roleMenu').classList.remove('open');
	showToast(`${labels[btn.dataset.role]} view selected`);
}));

$('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
$('.close-alert').addEventListener('click', e => e.currentTarget.parentElement.remove());
$('#continueBooking').addEventListener('click', () => showToast('Centre selected. Date and time picker is next.'));
$('#useRecommendation').addEventListener('click', () => { showToast('Recommended slot selected'); showView('queue'); });

function showToast(message) {
	const toast = $('#toast');
	toast.textContent = message;
	toast.classList.add('show');
	clearTimeout(window.toastTimer);
	window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function setupBookingFlow(){const form=$('.booking-form .form-step');if(!form)return;form.innerHTML=`<p class="step-kicker">STEP <span id="bookingStepNumber">1</span> OF 3</p><div class="booking-step" data-step="1"><h2>Select procurement centre</h2><div class="search-input"><span>⌕</span><input placeholder="Search centre" aria-label="Search centre" /></div><div class="booking-centre-grid"><div><label class="centre-option selected"><input type="radio" name="centre" checked /><span class="radio-dot"></span><span><strong>Pune Procurement Centre</strong><small>Market Yard Road · 0 km</small></span><em class="crowd low"><i></i>Low crowd</em></label><label class="centre-option"><input type="radio" name="centre" /><span class="radio-dot"></span><span><strong>Hadapsar Collection Hub</strong><small>Solapur Road · 0 km</small></span><em class="crowd moderate"><i></i>Moderate</em></label></div><div class="centre-data"><div><small>Distance</small><strong>0 km</strong></div><div><small>Crowd level</small><strong>Low</strong></div><div><small>Available slots</small><strong>0</strong></div><button class="secondary-button full-button" type="button" id="locationMap">⌖ View location map</button></div></div><button class="primary-button full-button" type="button" data-next-step>Continue to date & time →</button></div><div class="booking-step hidden-step" data-step="2"><button class="back-button" type="button" data-previous-step>← Back</button><h2>Select date and time</h2><div class="booking-fields"><label>Date<input id="bookingDate" type="date" /></label><label>Time<select id="bookingTime"><option value="">Select time</option><option>00:00 – 00:00</option></select></label></div><p class="zero-note">Available capacity: 0 slots · Estimated waiting time: 0 min</p><button class="primary-button full-button" type="button" data-next-step>Continue to confirmation →</button></div><div class="booking-step hidden-step" data-step="3"><button class="back-button" type="button" data-previous-step>← Back</button><h2>Confirm booking</h2><div class="confirmation-summary"><div><small>Centre</small><strong id="summaryCentre">Pune Procurement Centre</strong></div><div><small>Date</small><strong id="summaryDate">No data</strong></div><div><small>Time</small><strong id="summaryTime">No data</strong></div><div><small>Crop / commodity</small><strong>Not selected</strong></div><div><small>Estimated waiting time</small><strong>0 min</strong></div><div><small>Booking ID</small><strong>PRC26032-0000</strong></div></div><button class="primary-button full-button" type="button" id="confirmBooking">Confirm booking</button></div>`;let step=1;const renderStep=()=>{$$('.booking-step').forEach(item=>item.classList.toggle('hidden-step',Number(item.dataset.step)!==step));$('#bookingStepNumber').textContent=step;$$('.form-progress span').forEach((item,index)=>item.classList.toggle('active',index===step-1));};$$('.form-progress span').forEach((item,index)=>item.addEventListener('click',()=>{step=index+1;renderStep()}));$$('[data-next-step]').forEach(button=>button.addEventListener('click',()=>{if(step<3){if(step===2){const date=$('#bookingDate').value;const time=$('#bookingTime').value;$('#summaryDate').textContent=date||'No data';$('#summaryTime').textContent=time||'No data'}step+=1;renderStep()}}));$$('[data-previous-step]').forEach(button=>button.addEventListener('click',()=>{step=Math.max(1,step-1);renderStep()}));$('#locationMap').addEventListener('click',()=>showToast('Location map unavailable: 0 map data'));$('#confirmBooking').addEventListener('click',()=>showToast('Booking confirmed with zero readings'));renderStep()}
function resetDefaultReadings(){
	const replacements = {
		'#dashboardView .page-heading .eyebrow': '',
		'#dashboardView .stat-card.accent-card strong': 'No upcoming appointment',
		'#dashboardView .stat-card.accent-card p': '',
		'#dashboardView .stat-card:nth-child(2) strong': 'No live queue data',
		'#dashboardView .stat-card:nth-child(2) p': 'No live queue data',
		'#dashboardView .stat-card:nth-child(3) p': 'No active procurement',
		'#dashboardView .stat-card:nth-child(4) strong': 'No payment due',
		'#queueView .big-token': 'No token',
		'#queueView .queue-now strong': 'No live queue data',
		'#queueView .queue-meta span:first-child b': '—',
		'#queueView .queue-meta span:last-child b': '—',
		'.recommendation h2': 'No recommendation available',
		'.recommendation>p:not(.eyebrow)': 'No recommendation available',
		'.recommendation-time strong': '',
		'.recommendation-time span': ''
	};

	Object.entries(replacements).forEach(([selector, value]) => {
		const element = $(selector);
		if (element) element.textContent = value;
	});

	// Reset meters and slots to neutral/empty states
	$$('.queue-meter span').forEach(element => element.style.width = '0%');
	$$('.centre-slots').forEach(element => element.textContent = '—');

	// Hide the alert banner if it only contains the empty appointment placeholder
	const alert = $('.alert-banner');
	if (alert && alert.classList.contains('empty')) alert.style.display = 'none';

	// Booking form: remove any static centre-option samples and show a placeholder
	const bookingStep = document.querySelector('.booking-form .form-step');
	if (bookingStep) {
		const centreOptions = bookingStep.querySelectorAll('.centre-option');
		if (centreOptions.length > 0) {
			centreOptions.forEach(el => el.remove());
			const placeholder = document.createElement('div');
			placeholder.className = 'no-data small-muted';
			placeholder.style.padding = '12px';
			placeholder.textContent = 'No procurement centres available';
			const continueBtn = bookingStep.querySelector('#continueBooking');
			if (continueBtn) bookingStep.insertBefore(placeholder, continueBtn);
			if (continueBtn) continueBtn.disabled = true;
		}
	}

	// Token / queue placeholders
	const qrSmall = document.querySelector('.qr-inner small');
	if (qrSmall) qrSmall.textContent = '—';

	const bigToken = document.querySelector('#queueView .big-token');
	if (bigToken) bigToken.textContent = 'No token';

	const queueNow = document.querySelector('#queueView .queue-now strong');
	if (queueNow) queueNow.textContent = 'No live queue data';

	// Timeline dates and procurement detail stats
	$$('.timeline .timeline-item small').forEach(el => { el.textContent = 'No data'; });
	const detailStats = document.querySelectorAll('.detail-stats strong');
	if (detailStats && detailStats.length) {
		detailStats.forEach((el, idx) => { el.textContent = idx === 3 ? 'No date' : '—'; });
	}

	// Payment hero
	const payH2 = document.querySelector('.payment-hero h2');
	if (payH2) payH2.textContent = 'No payment due';

	// Replace static nearby centre rows with an empty-state placeholder
	const centrePanel = document.querySelector('.panel.centre-panel');
	if (centrePanel) {
		const rows = centrePanel.querySelectorAll('.centre-row');
		rows.forEach(r => r.remove());
		const placeholderRow = document.createElement('div');
		placeholderRow.className = 'centre-row';
		placeholderRow.innerHTML = '<div class="centre-info" style="grid-column:1 / -1; padding:12px"><strong class="small-muted">No nearby procurement centres</strong><small class="small-muted">Check back when your location or centre data is available.</small></div>';
		centrePanel.appendChild(placeholderRow);
	}

	// Clear procurement detail header centre text if present (remove sample centre/name)
	const detailHeaderP = document.querySelector('.detail-panel .detail-header p');
	if (detailHeaderP) detailHeaderP.textContent = '—';
}
function setupDateTimePicker(){const dateInput=$('#bookingDate');const oldTime=$('#bookingTime');if(!dateInput||!oldTime)return;const timeInput=document.createElement('input');timeInput.type='time';timeInput.id='bookingTime';timeInput.setAttribute('aria-label','Time');timeInput.required=true;oldTime.replaceWith(timeInput);const today=new Date();const todayValue=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);dateInput.min=todayValue;dateInput.required=true;const availability=document.createElement('p');availability.className='booking-availability unavailable';availability.textContent='Unavailable · 0 slots';timeInput.closest('.booking-fields').after(availability);const updateAvailability=()=>{const validDate=dateInput.value&&dateInput.value>=todayValue;const validTime=Boolean(timeInput.value);availability.textContent=validDate&&validTime?'Unavailable · 0 slots':'Select a future date and time';availability.classList.toggle('available',validDate&&validTime);availability.classList.toggle('unavailable',!(validDate&&validTime))};dateInput.addEventListener('input',updateAvailability);timeInput.addEventListener('input',updateAvailability);$('.booking-form').addEventListener('click',event=>{if(!event.target.matches('[data-next-step]'))return;const validDate=dateInput.value&&dateInput.value>=todayValue;const validTime=Boolean(timeInput.value);if(!validDate||!validTime){event.preventDefault();event.stopImmediatePropagation();availability.textContent=validDate?'Select a booking time':'Select a future booking date';availability.classList.add('unavailable');availability.classList.remove('available')}},true);updateAvailability()}
translate(currentLanguage);setTheme(localStorage.getItem('harvest-theme')||'light');resetDefaultReadings();setupBookingFlow();setupDateTimePicker();

// Location picker: initializes a modal map + search using Leaflet + Nominatim
(function installLocationPicker(){
	const PUNE_CENTER = [18.5204, 73.8567];
	let map, marker, userLocation = null, selectedPlace = null;
	let modalEl = null;

	const haversineKm = (a, b) => {
		const toRad = v => v * Math.PI / 180;
		const R = 6371;
		const dLat = toRad(b[0]-a[0]);
		const dLon = toRad(b[1]-a[1]);
		const lat1 = toRad(a[0]);
		const lat2 = toRad(b[0]);
		const x = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)*Math.sin(dLon/2);
		const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
		return R * c;
	};

	const createModal = () => {
		if (modalEl) return modalEl;
		modalEl = document.createElement('div');
		modalEl.className = 'map-overlay';
		modalEl.innerHTML = `
			<div class="map-modal" role="dialog" aria-label="Select location">
				<div class="map-top">
					<div class="map-search">
						<input class="map-search-input" placeholder="Search location or address" aria-label="Search location" />
						<button class="secondary-button" data-action="use-current">Use current location</button>
					</div>
					<div class="map-actions">
						<button class="secondary-button" data-action="close">Close</button>
					</div>
				</div>
				<div class="results-list" aria-live="polite"></div>
				<div id="locationPickerMap" class="map-container"></div>
				<div class="map-footer">
					<div class="map-meta"><div class="small-muted selected-info">No location selected</div><div class="small-muted"></div></div>
					<div style="display:flex;gap:8px;justify-content:flex-end"><button class="secondary-button" data-action="cancel">Cancel</button><button class="primary-button" data-action="confirm">Confirm location</button></div>
				</div>
			</div>
		`;
		document.body.appendChild(modalEl);
		return modalEl;
	};

	const initMap = (center) => {
		if (map) return;
		// Default to a country-level view (India) while preferring Pune for closer views
		map = L.map('locationPickerMap', {scrollWheelZoom:true}).setView(center || PUNE_CENTER, 6);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);
		map.on('click', e => {
			setSelectedPlace({display_name:`Point (${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)})`, lat:e.latlng.lat, lon:e.latlng.lng});
		});
	};

	const setMarker = (lat, lon) => {
		if (marker) marker.remove();
		marker = L.marker([lat, lon]).addTo(map);
		map.setView([lat, lon], 15);
	};

	const renderResults = (items) => {
		const list = modalEl.querySelector('.results-list');
		list.innerHTML = '';
		items.forEach(item => {
			const div = document.createElement('div');
			div.className = 'result-item';
			div.textContent = item.display_name;
			div.addEventListener('click', () => setSelectedPlace({display_name:item.display_name, lat:parseFloat(item.lat), lon:parseFloat(item.lon)}));
			list.appendChild(div);
		});
		if (items.length===0) list.innerHTML = '<div class="small-muted" style="padding:8px">No results</div>';
	};

	const geocode = async (q) => {
		if (!q) return [];
		try {
			// First try India-biased search (countrycodes=IN) to prioritize Indian results
			const indiaUrl = 'https://nominatim.openstreetmap.org/search?format=json&limit=8&addressdetails=1&countrycodes=IN&q=' + encodeURIComponent(q);
			const resIndia = await fetch(indiaUrl, {headers:{'Accept-Language':'en'}});
			if (resIndia && resIndia.ok) {
				const dataIndia = await resIndia.json();
				if (dataIndia && dataIndia.length) return dataIndia;
			}
			// Fallback: global search if no India results found
			const globalUrl = 'https://nominatim.openstreetmap.org/search?format=json&limit=8&addressdetails=1&q=' + encodeURIComponent(q);
			const resGlobal = await fetch(globalUrl, {headers:{'Accept-Language':'en'}});
			if (!resGlobal.ok) return [];
			const dataGlobal = await resGlobal.json();
			return dataGlobal;
		} catch (e) { return []; }
	};

	const setSelectedPlace = (place) => {
		selectedPlace = place;
		const info = modalEl.querySelector('.selected-info');
		info.textContent = place.display_name || 'Selected location';
		if (place.lat && place.lon) setMarker(place.lat, place.lon);
		// update footer meta with distance if user location available
		const metaRight = modalEl.querySelector('.map-meta div:last-child');
		if (userLocation && place.lat && place.lon) {
			const d = haversineKm(userLocation, [place.lat, place.lon]);
			metaRight.textContent = `${d.toFixed(1)} km from your location`;
		} else {
			metaRight.textContent = '';
		}
	};

	const showModal = async () => {
		createModal();
		modalEl.style.display = 'flex';
		// init map
		initMap(PUNE_CENTER);
		setTimeout(()=>{ if (map) map.invalidateSize(); },300);
		// pre-geocode Pune Procurement Centre and Hadapsar markers (non-blocking)
		try {
			const p = await geocode('Pune Procurement Centre, Market Yard Road, Pune, Maharashtra, India');
			if (p && p[0]) {
				const item = p[0];
				const mark = L.circleMarker([parseFloat(item.lat), parseFloat(item.lon)],{radius:6,fillColor:'#1e7b50',color:'#145f3b',weight:1}).addTo(map);
				mark.bindPopup('Pune Procurement Centre');
			}
		} catch(e){}
	};

	const hideModal = () => { if (!modalEl) return; modalEl.style.display='none'; };

	const bindUI = () => {
		const searchInput = modalEl.querySelector('.map-search-input');
		const resultsList = modalEl.querySelector('.results-list');
		let debounce;
		searchInput.addEventListener('input', (e)=>{
			clearTimeout(debounce);
			debounce = setTimeout(async ()=>{
				const q = searchInput.value.trim();
				if (!q) { resultsList.innerHTML=''; return; }
				const items = await geocode(q);
				renderResults(items);
			}, 300);
		});

		modalEl.addEventListener('click', (e)=>{
			const action = e.target.closest('[data-action]');
			if (!action) return;
			const act = action.dataset.action;
			if (act === 'close' || act === 'cancel') { hideModal(); }
			if (act === 'use-current') {
				if (!navigator.geolocation) { alert('Unable to access your current location. Please search for a location instead.'); return; }
				action.disabled = true;
				navigator.geolocation.getCurrentPosition(pos=>{
					userLocation = [pos.coords.latitude, pos.coords.longitude];
					setMarker(userLocation[0], userLocation[1]);
					modalEl.querySelector('.selected-info').textContent = 'Current location';
					action.disabled = false;
				}, err=>{
					alert('Unable to access your current location. Please search for a location instead.');
					action.disabled = false;
				}, {enableHighAccuracy:true,timeout:8000});
			}
			if (act === 'confirm') {
				if (!selectedPlace) { alert('Please select a location first.'); return; }
				// Update booking UI: update selected centre label and centre-data distance
				try {
					const selectedLabel = document.querySelector('.booking-form .centre-option.selected');
					if (selectedLabel) {
						const nameEl = selectedLabel.querySelector('strong');
						const smallEl = selectedLabel.querySelector('small');
						if (nameEl) nameEl.textContent = selectedPlace.display_name.split(',')[0] || 'Selected location';
						if (smallEl) {
							const distanceText = (userLocation && selectedPlace.lat && selectedPlace.lon) ? `${haversineKm(userLocation, [selectedPlace.lat, selectedPlace.lon]).toFixed(1)} km away` : 'Distance unavailable';
							smallEl.textContent = (selectedPlace.display_name.split(',').slice(1,3).join(', ').trim() || '') + (distanceText ? ` · ${distanceText}` : '');
						}
					}
					const centreDistEl = document.querySelector('.booking-centre-grid .centre-data div strong');
					if (centreDistEl) {
						centreDistEl.textContent = (userLocation && selectedPlace.lat && selectedPlace.lon) ? `${haversineKm(userLocation, [selectedPlace.lat, selectedPlace.lon]).toFixed(1)} km` : 'Distance unavailable';
					}
				} catch(e){}
				hideModal();
			}
		});
	};

	const bind = () => {
		const btn = document.getElementById('locationMap');
		if (!btn) return false;
		const handler = () => {
			showModal();
			if (!modalEl) createModal();
			setTimeout(()=>{ if (!modalEl.__bound) { bindUI(); modalEl.__bound = true; } }, 60);
		};
		// Replace the element with a clone to remove any existing listeners
		const clone = btn.cloneNode(true);
		btn.parentNode.replaceChild(clone, btn);
		clone.addEventListener('click', handler);
		return true;
	};

	if (!bind()) {
		const observer = new MutationObserver((mutations, obs) => { if (bind()) obs.disconnect(); });
		observer.observe(document.body, { childList: true, subtree: true });
	}

})();

// Override booking flow to avoid injecting demo centre samples at runtime
function setupBookingFlow(){
	const form = document.querySelector('.booking-form .form-step');
	if (!form) return;
	form.innerHTML = `
		<p class="step-kicker">STEP <span id="bookingStepNumber">1</span> OF 3</p>
		<div class="booking-step" data-step="1">
			<h2>Select procurement centre</h2>
			<div class="search-input"><span>⌕</span><input placeholder="Search centre" aria-label="Search centre" /></div>
			<div class="no-data small-muted" style="padding:12px">No procurement centres available</div>
			<div class="centre-data">
				<div><small>Distance</small><strong>—</strong></div>
				<div><small>Crowd level</small><strong>—</strong></div>
				<div><small>Available slots</small><strong>—</strong></div>
				<button class="secondary-button full-button" type="button" id="locationMap">⌖ View location map</button>
			</div>
			<button class="primary-button full-button" type="button" data-next-step disabled>Continue to date & time →</button>
		</div>
		<div class="booking-step hidden-step" data-step="2">
			<button class="back-button" type="button" data-previous-step>← Back</button>
			<h2>Select date and time</h2>
			<div class="booking-fields"><label>Date<input id="bookingDate" type="date" /></label><label>Time<select id="bookingTime"><option value="">Select time</option></select></label></div>
			<p class="zero-note">No available slots</p>
			<button class="primary-button full-button" type="button" data-next-step disabled>Continue to confirmation →</button>
		</div>
		<div class="booking-step hidden-step" data-step="3">
			<button class="back-button" type="button" data-previous-step>← Back</button>
			<h2>Confirm booking</h2>
			<p class="small-muted">No booking details available</p>
			<button class="primary-button full-button" type="button" disabled>Confirm booking</button>
		</div>
	`;
}

// Re-run to ensure new booking flow replaces any demo content inserted earlier
try{ setupBookingFlow(); }catch(e){}

// Demo centres data and dynamic booking UI enhancements
(function installDemoCentres(){
	// Demo centres have been removed to avoid showing sample data in the UI
	const centres = [];
	// Expose empty list (no demo data)
	window.__demoCentres = centres;

	let userLocation = null; // [lat, lon]
	const toRad = v => v * Math.PI / 180;
	const haversineKm = (a, b) => {
		if (!a || !b) return null;
		const R = 6371;
		const dLat = toRad(b[0]-a[0]);
		const dLon = toRad(b[1]-a[1]);
		const lat1 = toRad(a[0]);
		const lat2 = toRad(b[0]);
		const x = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)*Math.sin(dLon/2);
		const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
		return R * c;
	};

	const getCrowdScore = level => ({ low: 1, moderate: 2, high: 3 }[level] || 2);

	const bookingStep = document.querySelector('.booking-form .form-step');
	if (!bookingStep) return;

	// Ensure a dynamic centre-count element exists under the heading
	const heading = bookingStep.querySelector('h2');
	let countEl = bookingStep.querySelector('.centre-count');
	if (!countEl && heading) {
		countEl = document.createElement('div');
		countEl.className = 'centre-count small-muted';
		heading.parentNode.insertBefore(countEl, heading.nextSibling);
	}

	// Ensure search input and a small location button exist
	const searchInput = bookingStep.querySelector('.search-input input');
	const searchWrapper = bookingStep.querySelector('.search-input');
	if (searchWrapper && !searchWrapper.querySelector('.use-current-btn')){
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'text-button use-current-btn';
		btn.style.marginLeft = '8px';
		btn.textContent = 'Use current location';
		btn.addEventListener('click', ()=>{
			if (!navigator.geolocation) { alert('Geolocation not available'); return; }
			btn.disabled = true;
			navigator.geolocation.getCurrentPosition(pos=>{
				userLocation = [pos.coords.latitude, pos.coords.longitude];
				btn.disabled = false;
				renderCentreList(currentQuery || '');
				updateRecommendationUI();
				showToast('Using your current location to sort centres');
			}, err=>{ btn.disabled = false; alert('Unable to access your current location.'); }, { enableHighAccuracy:true, timeout:8000 });
		});
		searchWrapper.appendChild(btn);
	}

	// Container for centre list (left column)
	let listContainer = bookingStep.querySelector('.booking-centre-grid > div');
	if (!listContainer) {
		listContainer = document.createElement('div');
		const grid = bookingStep.querySelector('.booking-centre-grid');
		if (grid) grid.insertBefore(listContainer, grid.firstChild);
	}

	// Right panel elements
	const centreDataPanel = bookingStep.querySelector('.centre-data');

	let currentQuery = '';
	let selectedCentreId = centres.length ? centres[0].id : null;

	function renderCentreList(q){
		currentQuery = (q||'').trim().toLowerCase();
		// compute distances if we have location
		const items = centres.map(c => {
			const copy = Object.assign({}, c);
			if (userLocation) copy.distance = haversineKm(userLocation, [c.latitude, c.longitude]);
			else copy.distance = null;
			return copy;
		});
		// filter
		let filtered = items.filter(c => {
			if (!currentQuery) return true;
			return (c.name + ' ' + c.address).toLowerCase().includes(currentQuery);
		});
		// sort: if we have distances, sort by distance; otherwise by crowd + slots
		if (userLocation) {
			filtered.sort((a,b)=> (a.distance||99999) - (b.distance||99999));
		} else {
			filtered.sort((a,b)=> getCrowdScore(a.crowdLevel) - getCrowdScore(b.crowdLevel) || b.availableSlots - a.availableSlots);
		}

		listContainer.innerHTML = '';
		if (filtered.length===0) {
			const empty = document.createElement('div'); empty.className='small-muted'; empty.style.padding='12px'; empty.textContent='No procurement centres found'; listContainer.appendChild(empty);
		}

		filtered.forEach(c => {
			const label = document.createElement('label');
			label.className = 'centre-option';
			if (c.id === selectedCentreId) label.classList.add('selected');
			label.innerHTML = `<input type="radio" name="centre" ${c.id===selectedCentreId?'checked':''} /><span class="radio-dot"></span><span><strong>${c.name}</strong><small>${c.address}${c.distance?` · ${c.distance.toFixed(1)} km`:(userLocation? ' · Distance unavailable':'')}</small></span><em class="crowd ${c.crowdLevel}"><i></i>${c.crowdLevel.charAt(0).toUpperCase()+c.crowdLevel.slice(1)} crowd</em>`;
			label.addEventListener('click', ()=> selectCentreById(c.id));
			listContainer.appendChild(label);
		});

		// update count
		if (countEl) countEl.textContent = `${filtered.length} procurement centre${filtered.length===1?'':'s'} available`;

		// if selected centre is filtered out, pick first
		if (!filtered.find(f=>f.id===selectedCentreId) && filtered.length>0) {
			selectCentreById(filtered[0].id, false);
		} else {
			// refresh right panel for current selection
			const sel = centres.find(x=>x.id===selectedCentreId);
			if (sel) updateCentreDataPanel(sel);
		}
	}

	function selectCentreById(id, focus=true){
		selectedCentreId = id;
		// update UI selection
		$$('.booking-form .centre-option').forEach(el=>el.classList.remove('selected'));
		const labels = $$('.booking-form .centre-option');
		labels.forEach(l => { const strong = l.querySelector('strong'); if (strong && strong.textContent && centres.find(c=>c.id===id && c.name===strong.textContent)) { l.classList.add('selected'); const radio = l.querySelector('input[type=radio]'); if(radio) radio.checked=true; } });
		// update right panel
		const centre = centres.find(c=>c.id===id);
		if (centre) updateCentreDataPanel(centre);
		updateRecommendationUI();
		if (focus) { const node = document.querySelector('.booking-form .centre-option.selected'); if (node) node.scrollIntoView({block:'nearest'}); }
	}

	function updateCentreDataPanel(centre){
		if (!centreDataPanel) return;
		const distEl = centreDataPanel.querySelector('div:nth-child(1) strong');
		const crowdEl = centreDataPanel.querySelector('div:nth-child(2) strong');
		const slotsEl = centreDataPanel.querySelector('div:nth-child(3) strong');
		if (distEl) distEl.textContent = (userLocation ? (haversineKm(userLocation, [centre.latitude, centre.longitude])||0).toFixed(1)+' km' : 'Distance unavailable');
		if (crowdEl) crowdEl.textContent = centre.crowdLevel.charAt(0).toUpperCase()+centre.crowdLevel.slice(1);
		if (slotsEl) slotsEl.textContent = String(centre.availableSlots);
		// update selected label's small text too
		const selectedLabel = document.querySelector('.booking-form .centre-option.selected');
		if (selectedLabel) {
			const small = selectedLabel.querySelector('small');
			if (small) small.textContent = `${centre.address}${userLocation?` · ${haversineKm(userLocation, [centre.latitude, centre.longitude]).toFixed(1)} km` : ''}`;
		}
	}

	function recommendCentre(){
		// prefer lower crowd, more slots, and shorter distance
		const scored = centres.map(c=>{
			const crowd = getCrowdScore(c.crowdLevel);
			const slots = c.availableSlots||0;
			const distance = (userLocation? (haversineKm(userLocation, [c.latitude, c.longitude])||99999) : null);
			// lower score is better
			let score = crowd*100 - slots;
			if (distance !== null) score += distance*0.5;
			return {c, score};
		});
		scored.sort((a,b)=>a.score-b.score);
		return scored.length? scored[0].c : null;
	}

	function updateRecommendationUI(){
		const panel = document.querySelector('.recommendation');
		if (!panel) return;
		const rec = recommendCentre();
		const h2 = panel.querySelector('h2');
		const p = panel.querySelector('.recommendation>p:not(.eyebrow)');
		const timeEl = panel.querySelector('.recommendation-time strong');
		if (!rec) {
			if (h2) h2.textContent = 'No recommendation available';
			if (p) p.textContent = 'No slot data available for recommendation.';
			return;
		}
		if (h2) h2.textContent = rec.name;
		if (p) {
			const reasonParts = [];
			reasonParts.push(`Low crowd`.toLowerCase());
			if (rec.availableSlots) reasonParts.push(`${rec.availableSlots} slots available`);
			if (userLocation) reasonParts.push(`${haversineKm(userLocation, [rec.latitude, rec.longitude]).toFixed(1)} km away`);
			p.textContent = `Recommended because ${rec.crowdLevel} crowd and ${rec.availableSlots} demo slots.`;
		}
		if (timeEl) timeEl.textContent = '2:00 – 2:30';
	}

	// Wire search
	if (searchInput) {
		let debounce;
		searchInput.addEventListener('input', (e)=>{ clearTimeout(debounce); debounce=setTimeout(()=>{ renderCentreList(searchInput.value || ''); },250); });
	}

	// Wire continue: ensure selected centre shown in step 2
	document.querySelectorAll('[data-next-step]').forEach(btn=>btn.addEventListener('click', ()=>{
		const step2 = document.querySelector('.booking-step[data-step="2"]');
		const selected = centres.find(c=>c.id===selectedCentreId) || centres[0];
		if (step2) {
			let el = step2.querySelector('.selected-centre-summary');
			if (!el) {
				el = document.createElement('div'); el.className='selected-centre-summary'; el.style.marginBottom='8px';
				step2.insertBefore(el, step2.firstChild);
			}
			el.innerHTML = `<strong>${selected.name}</strong><div class="small-muted">${selected.address} · ${selected.availableSlots} demo slots</div>`;
		}
	}));

	// Wire recommendation button to select recommended centre
	const useRecBtn = document.getElementById('useRecommendation');
	if (useRecBtn) {
		useRecBtn.addEventListener('click', ()=>{
			const rec = recommendCentre();
			if (!rec) { showToast('No recommendation available'); return; }
			selectCentreById(rec.id);
			showToast(`Recommended: ${rec.name}`);
		});
	}

	// Initial render
	renderCentreList('');
	updateRecommendationUI();

	})();

	// Update dashboard date dynamically (local user's date, updates at midnight)
	function updateDashboardDate(){
		try{
			const el = document.querySelector('#dashboardView .page-heading .eyebrow[data-i18n="goodMorning"]') || document.querySelector('#dashboardView .page-heading .eyebrow');
			if(!el) return;
			const now = new Date();
			const opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
			const formatted = now.toLocaleDateString(undefined, opts).toUpperCase();
			el.textContent = formatted;
			// schedule next update at next local midnight (+1s buffer)
			const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
			const ms = nextMidnight - now + 1000;
			setTimeout(updateDashboardDate, ms);
		}catch(e){}
	}

	// Set it once now
	try{ updateDashboardDate(); }catch(e){}

	// Clear visible demo placeholders in the DOM (covers hardcoded tokens/dates/amounts)
	function clearDemoPlaceholders(){
		try{
			const selectors = [
				'#bookingView .recommendation-time strong',
				'#bookingView .recommendation-time [data-i18n="tomorrow"]',
				'#queueView .big-token',
				'#queueView .queue-now strong',
				'#queueView .queue-meta b',
				'#queueView .timeline .timeline-item.complete small',
				'#queueView .timeline .timeline-item:last-child small',
				'#procurementView .detail-header p',
				'#procurementView .detail-stats strong',
				'#paymentsView .payment-hero h2',
				'#paymentsView .payment-hero [data-i18n="estimatedBy"]'
			];
			selectors.forEach(sel => document.querySelectorAll(sel).forEach(el => el.textContent='—'));
		}catch(e){}
	}

	try{ clearDemoPlaceholders(); }catch(e){}

	// Sanitize any remaining demo/sample strings at runtime
	(function sanitizeDemoContent(){
		try{
			const clearKeys = ['goodMorning','welcome','reminderTitle','reminderText','queuePosition','journeySub','todayAt','paymentUpdate','yesterday','appointmentReminder','yesterdayMorning','paymentDue'];
			clearKeys.forEach(k=>{ if (translations.en && translations.en[k]) translations.en[k]=''; });

			const patterns = [
				/A-0/g,
				/PRC\d+/g,
				/₹\s*0+/g,
				/0\s?kg/g,
				/\b\d{1,2}\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\.?\s*(?:\d{2,4})?\b/ig,
				/\b\d{1,2}:\d{2}\s*(?:AM|PM)?\b/ig,
				/\b\d{1,2}\s*\w{3,}\s*\d{4}\b/ig,
				/Arjun/g,
				/Pune Procurement Centre/g
			];

			// sanitize DOM text nodes
			function walk(node){
				if(node.nodeType===3){
					let v = node.nodeValue;
					patterns.forEach(r => { v = v.replace(r, '—'); });
					if(v !== node.nodeValue) node.nodeValue = v;
				} else {
					node.childNodes && node.childNodes.forEach(walk);
				}
			}
			walk(document.body);

			// sanitize translation values so translated strings don't contain demo tokens
			if (translations && translations.en) {
				Object.keys(translations.en).forEach(key => {
					try{
						let val = translations.en[key];
						if (typeof val === 'string' && val.length) {
							patterns.forEach(r => { val = val.replace(r, '—'); });
							// remove leftover booking-like tokens
							val = val.replace(/Booking\s*PRC\d+/ig, '—');
							translations.en[key] = val;
						}
					}catch(e){}
				});
			}

			// Re-apply translations and UI neutralization
			try{ translate(currentLanguage); }catch(e){}
			try{ resetDefaultReadings(); }catch(e){}
			try{ clearDemoPlaceholders(); }catch(e){}
		}catch(e){}
	})();
