// TR / EN gecisi. Adres "#en" ile biterse Ingilizce acilir; "#tr" ile Turkce. Secim tarayicida hatirlanir.
(function () {
  var trBtn = document.getElementById('btn-tr');
  var enBtn = document.getElementById('btn-en');
  var trBox = document.getElementById('lang-tr');
  var enBox = document.getElementById('lang-en');
  if (!trBtn || !enBtn || !trBox || !enBox) return;

  function show(lang) {
    var isTr = lang !== 'en';
    trBox.hidden = !isTr;
    enBox.hidden = isTr;
    trBtn.classList.toggle('active', isTr);
    enBtn.classList.toggle('active', !isTr);
    document.documentElement.lang = isTr ? 'tr' : 'en';
    try { localStorage.setItem('futsal-legal-lang', isTr ? 'tr' : 'en'); } catch (e) { }
  }

  trBtn.addEventListener('click', function () { show('tr'); });
  enBtn.addEventListener('click', function () { show('en'); });

  var saved = null;
  try { saved = localStorage.getItem('futsal-legal-lang'); } catch (e) { }
  if (location.hash === '#en') saved = 'en';
  if (location.hash === '#tr') saved = 'tr';
  // Bolum baglantilari (or. #hesap-silme, #delete-account) dili de secer.
  if (location.hash === '#delete-account') saved = 'en';
  if (location.hash === '#hesap-silme') saved = 'tr';
  if (saved === 'en') show('en');
  if (location.hash === '#delete-account' || location.hash === '#hesap-silme') {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
