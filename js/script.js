const characters = {
    all: [
        { name: "Abrams", image: "img/characters/abrams.png" },
        { name: "Apollo", image: "img/characters/apollo.png" },
        { name: "Bebop", image: "img/characters/bebop.png" },
        { name: "Billy", image: "img/characters/billy.png" },
        { name: "Calico", image: "img/characters/calico.png" },
        { name: "Celeste", image: "img/characters/celeste.png" },
        { name: "Drifter", image: "img/characters/drifter.png" },
        { name: "Dynamo", image: "img/characters/dynamo.png" },
        { name: "Graves", image: "img/characters/graves.png" },
        { name: "Grey Talon", image: "img/characters/grey-talon.png" },
        { name: "Haze", image: "img/characters/haze.png" },
        { name: "Holliday", image: "img/characters/holliday.png" },
        { name: "Infernus", image: "img/characters/infernus.png" },
        { name: "Ivy", image: "img/characters/ivy.png" },
        { name: "Kelvin", image: "img/characters/kelvin.png" },
        { name: "Lady Geist", image: "img/characters/lady-geist.png" },
        { name: "Lash", image: "img/characters/lash.png" },
        { name: "McGinnis", image: "img/characters/mcginnis.png" },
        { name: "Mina", image: "img/characters/mina.png" },
        { name: "Mirage", image: "img/characters/mirage.png" },
        { name: "Mo & Krill", image: "img/characters/mo-and-krill.png" },
        { name: "Paige", image: "img/characters/paige.png" },
        { name: "Paradox", image: "img/characters/paradox.png" },
        { name: "Pocket", image: "img/characters/pocket.png" },
        { name: "Rem", image: "img/characters/rem.png" },
        { name: "Seven", image: "img/characters/seven.png" },
        { name: "Shiv", image: "img/characters/shiv.png" },
        { name: "Silver", image: "img/characters/silver.png" },
        { name: "Sinclair", image: "img/characters/sinclair.png" },
        { name: "The Doorman", image: "img/characters/doorman.png" },
        { name: "Venator", image: "img/characters/venator.png" },
        { name: "Victor", image: "img/characters/victor.png" },
        { name: "Vindicta", image: "img/characters/vindicta.png" },
        { name: "Viscous", image: "img/characters/viscous.png" },
        { name: "Vyper", image: "img/characters/vyper.png" },
        { name: "Warden", image: "img/characters/warden.png" },
        { name: "Wraith", image: "img/characters/wraith.png" },
        { name: "Yamato", image: "img/characters/yamato.png" }
    ],
    grant: [
        { name: "Vyper", image: "img/characters/vyper.png" },
        { name: "Vyper", image: "img/characters/vyper.png" },
        { name: "Vyper", image: "img/characters/vyper.png" },
        { name: "Vyper", image: "img/characters/vyper.png" },
        { name: "Vyper", image: "img/characters/vyper.png" },
        { name: "Lady Geist", image: "img/characters/lady-geist.png" }
    ],
    timur: [
        { name: "Dynamo", image: "img/characters/dynamo.png" },
        { name: "Paige", image: "img/characters/paige.png" },
        { name: "Viscous", image: "img/characters/viscous.png" },
        { name: "Rem", image: "img/characters/rem.png" },
        { name: "Celeste", image: "img/characters/celeste.png" },
        { name: "Kelvin", image: "img/characters/kelvin.png" },
        { name: "McGinnis", image: "img/characters/mcginnis.png" }
    ],
    hector: [
        { name: "Abrams", image: "img/characters/abrams.png", weight: 1 },
        { name: "Apollo", image: "img/characters/apollo.png", weight: 1 },
        { name: "Козел", image: "img/characters/bebop.png", weight: 1 },
        { name: "Holliday", image: "img/characters/holliday.png", weight: 1 },
        { name: "Infernus", image: "img/characters/infernus.png", weight: 1 },
        { name: "Pocket", image: "img/characters/pocket.png", weight: 1 },
        { name: "The Doorman", image: "img/characters/doorman.png", weight: 10 }, // Шанс в 10 раз выше, чем у остальных
        { name: "Venator", image: "img/characters/venator.png", weight: 1 }
    ],
    meta: [
        { name: "McGinnis", image: "img/characters/mcginnis.png" },
        { name: "Seven", image: "img/characters/seven.png" },
        { name: "Victor", image: "img/characters/victor.png" },
        { name: "Kelvin", image: "img/characters/kelvin.png" },
        { name: "Dynamo", image: "img/characters/dynamo.png" },
        { name: "Ivy", image: "img/characters/ivy.png" },
        { name: "The Doorman", image: "img/characters/doorman.png" },
        { name: "Warden", image: "img/characters/warden.png" },
        { name: "Apollo", image: "img/characters/apollo.png" },
        { name: "Bebop", image: "img/characters/bebop.png" },
        { name: "Venator", image: "img/characters/venator.png" },
        { name: "Rem", image: "img/characters/rem.png" }
    ],
    trash: [
        { name: "Sinclair", image: "img/characters/sinclair.png" },
        { name: "Viscous", image: "img/characters/viscous.png" },
        { name: "Shiv", image: "img/characters/shiv.png" },
        { name: "Grey Talon", image: "img/characters/grey-talon.png" },
        { name: "Billy", image: "img/characters/billy.png" },
        { name: "Paradox", image: "img/characters/paradox.png" },
        { name: "Calico", image: "img/characters/calico.png" },
        { name: "Mina", image: "img/characters/mina.png" },
        { name: "Yamato", image: "img/characters/yamato.png" },
        { name: "The Doorman", image: "img/characters/doorman.png" },
        { name: "McGinnis", image: "img/characters/mcginnis.png" },
        { name: "Victor", image: "img/characters/victor.png" },
        { name: "Kelvin", image: "img/characters/kelvin.png" }
    ],
    builds: [
        { name: "Венатор через РУКУ", image: "img/characters/venator.png" },
        { name: "Вязкус через ГАН", image: "img/characters/viscous.png" },
        { name: "Вязкус через РУКУ", image: "img/characters/viscous.png" },
        { name: "Вязкус через ПОМОЩЬ", image: "img/characters/viscous.png" },
        { name: "Динамо через ГАН", image: "img/characters/dynamo.png" },
        { name: "Динамо через РУКУ", image: "img/characters/dynamo.png" },
        { name: "Динамо через БЛЭК ХОЛЛ", image: "img/characters/dynamo.png" },
        { name: "Талон через ДРОНА", image: "img/characters/grey-talon.png" },
        { name: "Талон через ГАН", image: "img/characters/grey-talon.png" },
        { name: "Хейза через умеренную скрытую РУКУ", image: "img/characters/haze.png" },
        { name: "Инфернус через простоквашино (БЕГ)", image: "img/characters/infernus.png" },
        { name: "Айви через СТАН (3 скил)", image: "img/characters/ivy.png" },
        { name: "Айви через РУКУ", image: "img/characters/ivy.png" },
        { name: "Айви через ГАН", image: "img/characters/ivy.png" },
        { name: "Кельвин через бойцовский клуб (РУКА)", image: "img/characters/kelvin.png" },
        { name: "Кельвин через бомбардировку (БОМБОЧКИ)", image: "img/characters/kelvin.png" },
        { name: "Гейста шлюхикрд23 СОСАЛКА", image: "img/characters/lady-geist.png" },
        { name: "Лэш через ГАН", image: "img/characters/lash.png" },
        { name: "Лэш через СПИРИТ", image: "img/characters/lash.png" },
        { name: "Макгинесс через ГАН", image: "img/characters/mcginnis.png" },
        { name: "Макгинесс через ХЕЛПУ", image: "img/characters/mcginnis.png" },
        { name: "Макгинесс через ТУРЕЛЬКИ", image: "img/characters/mcginnis.png" },
        { name: "Парадокс через БОМБОЧКИ", image: "img/characters/paradox.png" },
        { name: "Севен через ШАРЫ", image: "img/characters/seven.png" },
        { name: "Севен через УЛЬТУ", image: "img/characters/seven.png" },
        { name: "Севен через 3", image: "img/characters/seven.png" },
        { name: "Шива макгрегор", image: "img/characters/shiv.png" },
        { name: "Шива дефолт", image: "img/characters/shiv.png" },
        { name: "Синклар цыган через УЛЬТУ", image: "img/characters/sinclair.png" },
        { name: "Дурман через УЛЬТУ", image: "img/characters/doorman.png" },
        { name: "Дурман через ДВЕРИ", image: "img/characters/doorman.png" },
        { name: "Дурман через КОЛА КОЛА", image: "img/characters/doorman.png" },
        { name: "Виндикта через ПОМОЩЬ", image: "img/characters/vindicta.png" },
        { name: "Виндикта через ГАН", image: "img/characters/vindicta.png" },
        { name: "Вайпер через ГАН", image: "img/characters/vyper.png" },
        { name: "Вайпер через ВЫЖИВАЕМОСТЬ", image: "img/characters/vyper.png" },
        { name: "Вайпер через СПИРИТ", image: "img/characters/vyper.png" },
        { name: "Варден через КЛЕТКИ (эхошард)", image: "img/characters/warden.png" },
        { name: "Варден через УЛЬТ", image: "img/characters/warden.png" },
        { name: "Варден через слабый ГАН", image: "img/characters/warden.png" },
        { name: "Ямато все предметы в выживаемость и два предмета в руки", image: "img/characters/yamato.png" }
    ],
    challenges: [
        { name: "«Экономист» — Нельзя покупать предметы дороже 800 душ до 10-й минуты.", image: "img/challenge_icon.png" },
        { name: "«Лесной подпивас» — Обязан зафармить всех нейтралов на своей стороне до мид-гейма.", image: "img/challenge_icon.png" },
        { name: "«Стритфайтер» — Добивать вражеских героев можно только сильным ударом ближнего боя (Q).", image: "img/challenge_icon.png" },
        { name: "«Пацифист» — Первые 5 минут катки вообще не наносишь урон вражеским героям, только крипам.", image: "img/challenge_icon.png" },
        { name: "«Жадный закуп» — Тратить души можно только тогда, когда накопишь ровно 3000+ душ.", image: "img/challenge_icon.png" },
        { name: "«Стримснайпер» — Выбираешь одного врага и фокусишь всю игру ТОЛЬКО его.", image: "img/challenge_icon.png" },
        { name: "«Запрещенные технологии» — Запрещено улучшать способности (Alt+Клик) до 10-й минуты.", image: "img/challenge_icon.png" },
        { name: "«Курьер Яндекс.Еды» — Твоя цель — Урна. Появилась? Бросаешь всё и тащишь её на сдачу.", image: "img/challenge_icon.png" },
        { name: "«Мастер деная» — Обязан убивать всех крипов только с руки.", image: "img/challenge_icon.png" },
        { name: "«Охранник Мид-Босса» — Каждые 5 минуты обязан бегать проверять Мид-Босса и приседать там 3 раза.", image: "img/challenge_icon.png" },
        { name: "«Стеклянная пушка» — За всю катку разрешено купить только ОДИН зеленый предмет на выживаемость.", image: "img/challenge_icon.png" },
        { name: "«Телохранитель Гранта» — Всю катку бегаешь за Грантом. Если его убивают, идёшь мстить.", image: "img/challenge_icon.png" },
        { name: "«Прораб для Тимура» — Прилетаешь на линию к Тимуру и бьешь стену кулаком (Q), имитируя ремонт.", image: "img/challenge_icon.png" },
        { name: "«Повторюшка за Саней К» — Копируешь закуп Сани К один в один, даже если предметы тебе вообще не подходят.", image: "img/challenge_icon.png" },
        { name: "«Служба спасения Сани С» — Как только Саню С бьют, бросаешь всё и летишь к нему на зиплайне.", image: "img/challenge_icon.png" },
        { name: "«Психолог для Гранта» — Каждый раз, когда Грант умирает продаешь одну свою шмотку, и не можешь покупать её до конца игры.", image: "img/challenge_icon.png" },
        { name: "«Спонсор Тимура» — Покупаешь active шмотки на хилл или щиты и жмешь их строго на Тимура, когда он влетает.", image: "img/challenge_icon.png" },
        { name: "«Фирменный подгон для Сани С» — Обязан купить предмет на сейв/хилл (типа Heroic Aura) и юзать его только ради Сани С.", image: "img/challenge_icon.png" },
        { name: "«Импортозамещение» — За катку разрешено покупать предметы только фиолетовой категории (Спиритизм). Оружие и живучесть — под строгим запретом.", image: "img/challenge_icon.png" },
        { name: "«Скупщик краденого» — Запрещено покупать предметы в магазинах на линиях. Все шмотки закупаешь строго в Секретной лавке в подземке (в центре карты). ", image: "img/challenge_icon.png" },
        { name: "«Паркур — это жизнь» — Тебе запрещено использовать зипки", image: "img/challenge_icon.png" },
        { name: "«Дровосек» — Сносишь все деревянные коробки и ящики, которые видишь на пути. Пока не разобьёшь все коробки в радиусе видимости — дальше по линии не идёшь.", image: "img/challenge_icon.png" },
        { name: "«Охотник за головами» — Выбери первого попавшегося вражеского героя, который убьёт тебя на линии. Отныне ты обязан покупать предметы против него и фокусить в замесах только его лицо.", image: "img/challenge_icon.png" },
        { name: "«Отмена» — Тебе запрещено использовать 3 скилл", image: "img/challenge_icon.png" },
        { name: "«Отмена» — Тебе запрещено использовать 2 скилл", image: "img/challenge_icon.png" },
        { name: "«Отмена» — Тебе запрещено использовать 1 скилл", image: "img/challenge_icon.png" },
        { name: "«Отмена» — Тебе запрещено использовать Ульту", image: "img/challenge_icon.png" }
    ],
    items: [
        { name: "Restorative Locket (Рестор Локет)", type: "green", tier: "Tier 2 — 1600 душ (Активный)" },
        { name: "Heroic Aura (Хероик Аура)", type: "orange", tier: "Tier 3 — 3200 душ (Активный)" },
        { name: "Echo Shard (Эхо Шард)", type: "purple", tier: "Tier 3 — 6400 душ (Активный)" },
        { name: "Knockdown (Нокдаун)", type: "purple", tier: "Tier 3 — 3200 душ (Активный)" },
        { name: "Fleetfoot (Флитфут)", type: "orange", tier: "Tier 2 — 1600 душ (Активный)" },
        { name: "Refresher (Рефрешер)", type: "purple", tier: "Tier 4 — 6400 душ (Активный)" },
        { name: "Majestic Leap (Прыжок)", type: "green", tier: "Tier 3 — 3200 душ (Активный)" },
        { name: "Curse (Проклятие)", type: "purple", tier: "Tier 4 — 6400 душ (Активный)" },
        { name: "Warp Stone (Варп Стоун)", type: "orange", tier: "Tier 3 — 3200 душ (Активный)" },
        { name: "Alchemical Fire (Коктейль Молотова)", type: "orange", tier: "Tier 3 — 3200 душ (Активный)" },
        { name: "Colossus (Колосс)", type: "green", tier: "Tier 4 — 6400 душ (Активный)" },
        { name: "Rescue Beam (Спасательный луч)", type: "green", tier: "Tier 3 — 3200 душ (Активный)" }
    ]
};

function sendToDiscord(messageText) {
    const webhookUrl = "https://discord.com/api/webhooks/1505930908790816782/A7nYf-FjL9sww3UikARnQSFW3d49Ll5sLDJijerE9wWQLPfFH7gJXQkJIQS3gRq1ANVC";
    const payload = {
        username: "Грандомайзер 1.6",
        avatar_url: "https://i.pinimg.com/1200x/0c/96/40/0c9640a0c5ad5de4cf14a2cb9d058d0e.jpg",
        content: messageText
    };
    fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).catch(err => console.error("Ошибка Discord:", err));
}

// Получение элементов (с защитой от отсутствия в HTML)
const charactersGrid = document.getElementById("charactersGrid");
const randomBtn = document.getElementById("randomBtn");
const randomCharacterImage = document.getElementById("randomCharacterImage");
const randomCharacterName = document.getElementById("randomCharacterName");
const categoryButtons = document.querySelectorAll(".category-btn");
const defaultBtn = document.getElementById("defaultBtn");
const historyList = document.getElementById("historyList");
const playerSelect = document.getElementById("playerSelect");

let currentCategory = "all";
let historyArray = [];

function renderCharacters(category) {
    if (!charactersGrid) return; 
    charactersGrid.innerHTML = "";

    if (category === "challenges" || category === "items") {
        const text = category === "challenges" ? "Все задания активны." : "Все проклятые предметы в пуле.";
        charactersGrid.innerHTML = `<p style='color: #a0a5c0; grid-column: 1/-1; text-align:center;'>${text} Жми «Зарандомить»!</p>`;
        return;
    }

    const uniqueChars = [];
    const seenImages = new Set();

    if (characters[category]) {
        characters[category].forEach(char => {
            if (!seenImages.has(char.image)) {
                seenImages.add(char.image);
                uniqueChars.push(char);
            }
        });
    }

    uniqueChars.forEach(char => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        if (char.name) card.title = char.name.split(' ')[0];
        card.innerHTML = `<img src="${char.image}" onerror="this.style.opacity='0.5';" alt="hero">`;
        charactersGrid.appendChild(card);
    });
}

function updateHistory(itemData) {
    if (!historyList) return;
    historyArray.unshift(itemData);
    if (historyArray.length > 5) historyArray.pop();

    historyList.innerHTML = "";
    historyArray.forEach(char => {
        const item = document.createElement("div");
        item.classList.add("history-item");

        const isTextOnly = currentCategory === "challenges" || currentCategory === "items";
        const imgTag = isTextOnly ? "" : `<img src="${char.image}" alt="hero">`;

        let colorClass = "";
        if (currentCategory === "items") {
            colorClass = char.type === "orange" ? "item-orange" : char.type === "green" ? "item-green" : "item-purple";
        }

        item.innerHTML = `
            ${imgTag}
            <span class="${colorClass}" style="font-size: 13px; line-height: 1.2; word-break: break-word;">
                ${char.name} ${char.tier ? `<br><small style="color:#707590;">${char.tier.split(' ')[0]}</small>` : ""}
            </span>
        `;
        historyList.appendChild(item);
    });
}

function randomCharacter() {
    const pool = characters[currentCategory];
    if (!pool || pool.length === 0) return;

    if (randomBtn) randomBtn.disabled = true;
    if (randomCharacterName) randomCharacterName.classList.remove("bounce-animation");

    const isTextOnly = currentCategory === "challenges" || currentCategory === "items";

    if (isTextOnly) {
        if (randomCharacterImage) randomCharacterImage.style.display = "none";
        if (randomCharacterName) randomCharacterName.classList.add("challenge-text-display");
        if (currentCategory === "items" && randomCharacterName) {
            randomCharacterName.classList.add("item-text-display");
        }
    } else {
        if (randomCharacterImage) randomCharacterImage.style.display = "block";
        if (randomCharacterName) randomCharacterName.classList.remove("challenge-text-display", "item-text-display");
    }

    let counter = 0;
    const totalTicks = 20;
    let duration = 50;
    let picked = null;

    function spin() {
        // Умный рандом с весами для Гектора
        if (currentCategory === "hector") {
            const totalWeight = pool.reduce((sum, char) => sum + (char.weight || 1), 0);
            let randomNum = Math.random() * totalWeight;
            
            for (let i = 0; i < pool.length; i++) {
                randomNum -= (pool[i].weight || 1);
                if (randomNum <= 0) {
                    picked = pool[i];
                    break;
                }
            }
        } else {
            // Обычный рандом для всех остальных категорий
            const randomIndex = Math.floor(Math.random() * pool.length);
            picked = pool[randomIndex];
        }

        if (randomCharacterName) {
            randomCharacterName.classList.remove("item-orange", "item-green", "item-purple");
        }

        if (!isTextOnly) {
            if (randomCharacterImage) randomCharacterImage.src = picked.image;
            if (randomCharacterName) randomCharacterName.textContent = picked.name;
        } else if (currentCategory === "items") {
            const colorClass = picked.type === "orange" ? "item-orange" : picked.type === "green" ? "item-green" : "item-purple";
            if (randomCharacterName) {
                randomCharacterName.classList.add(colorClass);
                randomCharacterName.innerHTML = `${picked.name} <div class="item-tier">${picked.tier}</div>`;
            }
        } else {
            if (randomCharacterName) randomCharacterName.textContent = picked.name;
        }

        counter++;

        if (counter < totalTicks) {
            if (counter > totalTicks - 10) duration += 30;
            if (counter > totalTicks - 5) duration += 60;
            setTimeout(spin, duration);
        } else {
            if (randomBtn) randomBtn.disabled = false;
            if (randomCharacterName) randomCharacterName.classList.add("bounce-animation");
            
            updateHistory(picked);

            const activePlayer = playerSelect ? playerSelect.value : "Игрок";
            let discordMessage = "";

            if (currentCategory === "all") {
                discordMessage = `🎲 **${activePlayer}** зарандомил общего героя: \`${picked.name}\``;
            } else if (currentCategory === "grant") {
                discordMessage = `🦕 **${activePlayer}** крутит пул Гранта: \`${picked.name}\``;
            } else if (currentCategory === "timur") {
                discordMessage = `🧱 **${activePlayer}** заглянул к Тимуру: \`${picked.name}\``;
            } else if (currentCategory === "hector") {
                discordMessage = `🤠 **${activePlayer}** испытывает удачу у Гектора: \`${picked.name}\`${picked.name === "The Doorman" ? " (КТО БЫ СОМНЕВАЛСЯ! 🚪)" : ""}`;
            } else if (currentCategory === "meta") {
                discordMessage = `🔥 **${activePlayer}** выбивает жёсткую МЕТУ: \`${picked.name}\``;
            } else if (currentCategory === "trash") {
                discordMessage = `🗑️ **${activePlayer}** отправляется на помойку: \`${picked.name}\``;
            } else if (currentCategory === "builds") {
                discordMessage = `🛠️ **${activePlayer}** получает безумный билд:\n> __${picked.name}__`;
            } else if (currentCategory === "challenges") {
                discordMessage = `🎯 **Вызов принят!** Игрок **${activePlayer}** получает контракт:\n> ${picked.name}`;
            } else if (currentCategory === "items") {
                const colorEmoji = picked.type === "orange" ? "orange_circle" : picked.type === "green" ? "green_circle" : "purple_circle";
                discordMessage = `🛒 **Проклятый закуп для ${activePlayer}!** Обязательный предмет:\n> **${picked.name}**\n> * Категория: ${colorEmoji} | ${picked.tier}*`;
            }

            sendToDiscord(discordMessage);
        }
    }

    spin();
}

// Навешивание кликов на категории
if (categoryButtons) {
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentCategory = btn.dataset.category;
            if (randomCharacterName) {
                randomCharacterName.classList.remove("item-orange", "item-green", "item-purple", "item-text-display", "challenge-text-display", "bounce-animation");
            }

            if (currentCategory === "challenges" || currentCategory === "items") {
                if (randomCharacterImage) randomCharacterImage.style.display = "none";
                if (randomCharacterName) {
                    randomCharacterName.classList.add("challenge-text-display");
                    if (currentCategory === "items") randomCharacterName.classList.add("item-text-display");
                    randomCharacterName.textContent = currentCategory === "challenges" ? "Нажми кнопку, чтобы получить задание" : "Нажми кнопку, чтобы выбить предмет";
                }
            } else {
                if (randomCharacterImage) {
                    randomCharacterImage.style.display = "block";
                    randomCharacterImage.src = "img/grant.jpg"; // Дефолтная картинка при переключении
                }
                if (randomCharacterName) randomCharacterName.textContent = "Пока никто";
            }

            renderCharacters(currentCategory);
        });
    });
}

if (defaultBtn) {
    defaultBtn.addEventListener("click", () => {
        currentCategory = "all";
        categoryButtons.forEach(b => b.classList.remove("active"));
        const allBtn = document.querySelector('[data-category="all"]');
        if (allBtn) allBtn.classList.add("active");

        if (randomCharacterName) {
            randomCharacterName.classList.remove("item-orange", "item-green", "item-purple", "item-text-display", "challenge-text-display", "bounce-animation");
            randomCharacterName.textContent = "Paradox";
        }
        if (randomCharacterImage) {
            randomCharacterImage.style.display = "block";
            randomCharacterImage.src = "img/characters/paradox.png";
        }

        renderCharacters("all");
    });
}

if (randomBtn) {
    randomBtn.addEventListener("click", randomCharacter);
}

// Запуск инициализации
window.addEventListener("load", () => {
    if (playerSelect) {
        const savedPlayer = localStorage.getItem("selected_player");
        if (savedPlayer) playerSelect.value = savedPlayer;
        
        playerSelect.addEventListener("change", (event) => {
            localStorage.setItem("selected_player", event.target.value);
        });
    }
    renderCharacters("all");
});