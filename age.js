// Возрастной барьер 18+: показывается при первом входе на сайт
(function () {
    var KEY = "moana_age_ok";
    var ok = false;
    try { ok = localStorage.getItem(KEY) === "1"; } catch (e) {}
    if (ok) return;

    var gate = document.getElementById("age-gate");
    if (!gate) return;
    gate.classList.add("show");

    document.getElementById("age-yes").onclick = function () {
        try { localStorage.setItem(KEY, "1"); } catch (e) {}
        gate.classList.remove("show");
    };
    document.getElementById("age-no").onclick = function () {
        window.location.href = "https://www.google.com/";
    };
})();
