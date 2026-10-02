// =========================
// HOME スライド
// =========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 4000);


// =========================
// 作品画像の拡大表示
// =========================

const workImages = document.querySelectorAll(".work-item img");

const viewDetails = document.querySelectorAll(".view-details");

viewDetails.forEach((button) => {

    button.addEventListener("click", () => {

        const image = button.parentElement.querySelector("img");

        if (image) {
            image.click();
        }

    });

});

// =========================
// 作品詳細情報
// =========================

const workDetails = {

    "poster-01.png": {
        title: "Poster｜LOST WHISPER",
        content: "グループで制作したホラーゲーム『LOST WHISPER』のポスターを担当しました。",
        point: "黒を基調に赤をアクセントとして使用し、ホラーらしい不気味な雰囲気を表現しました。フォントにもこだわり、傷や掠れた質感のある文字を選び、ゲームの世界観が伝わるデザインにしました。",
        software: "CLIP STUDIO / Photoshop / Illustrator"
    },

  
      "logo-animation-01.png": {
        title: "Logo Animation 01 MUROREN",
        content: "光の球体が現れ、ロゴへと変化していく動きを取り入れたロゴアニメーションを制作しました。",
        point: "暗い背景の中で光が印象的に見えるよう、明暗の差を意識しました。光の広がりや消え方を調整し、シンプルながら印象に残る演出にこだわりました。",
        software: "After Effects",
        video: "videos/logo-animation-01.mp4"
    },

    "logo-animation-02.png": {
        title: "Logo Animation 02｜MuroCafe",
        content: "MuroCafeのロゴを中心に、円形のモチーフが動きながらロゴを引き立てるアニメーションを制作しました。",
        point: "カフェらしい落ち着いた雰囲気を崩さないよう、青と白を基調としたポップでシンプルな演出にしました。ロゴの視認性を保ちながら、動きにリズムをつけました。",
        software: "After Effects",
        video: "videos/logo-animation-02.mp4"
    },

    "logo-animation-03.png": {
        title: "Logo Animation 03｜M&R株式会社",
        content: "M&R株式会社のロゴを制作し、光やエフェクトを加えて力強く登場するロゴアニメーションを制作しました。",
        point: "ロゴのシャープで近未来的な印象を活かすため、青白い光や発光エフェクトを使用しました。勢いのある動きを加え、企業ロゴの存在感が伝わる演出にこだわりました。",
        software: "After Effects",
        video: "videos/logo-animation-03.mp4"
    },

    "logo-animation-04.png": {
        title: "Logo Animation 04｜Maison REN",
        content: "Maison RENの高級感を意識し、光の演出とゆっくりとした動きで上品に見せるロゴアニメーションを制作しました。",
        point: "ゴールドのロゴが持つ高級感を引き立てるため、黒を基調とした背景と柔らかな光を組み合わせました。動きを抑え、落ち着きと上品さが伝わる演出にこだわりました。",
        software: "After Effects",
        video: "videos/logo-animation-04.mp4"
    },

        "cg-01.png": {
        title: "3DCG 01｜Attack on Titan",
        content: "『進撃の巨人』に登場する丘の木と壁を、Blenderで3DCGとして再現しました。",
        point: "壁の大きさや街並みの配置にこだわり、作品の世界観が伝わるように制作しました。手前の木や花を配置して奥行きを出し、自然豊かな景観も再現しました。",
        software: "Blender"
    },

    "cg-02.png": {
        title: "3DCG 02｜宵桜 ― 静寂の社 ―",
        content: "桜が咲く夜の日本庭園をテーマに、神社や太鼓橋、水面などをBlenderで制作しました。",
        point: "夜の幻想的な雰囲気を表現するため、紫色を基調としたライティングにこだわりました。桜の木を多く配置し、橋や水面を組み合わせて奥行きのある空間を表現しました。",
        software: "Blender"
    },

    "cg-03.png": {
        title: "3DCG 03｜8番出口再現",
        content: "ゲーム『8番出口』をオマージュし、地下鉄の通路や案内表示などをBlenderで再現しました。",
        point: "『8番出口』の特徴的な黄色と白を基調とした空間を意識し、タイルの配置や案内表示、照明など細部まで再現しました。奥行きのある構図にもこだわりました。",
        software: "Blender"
    },

    "cg-04.png": {
        title: "3DCG 04｜Surveillance Camera",
        content: "監視カメラの映像をイメージした視点と固定アングルで3DCGを制作しました。",
        point: "監視カメラで撮影したような視点と固定アングルにこだわりました。画面に走査線を加え、無機質で少し不気味な防犯映像らしさを表現しました。",
        software: "Blender"
    },

    "cg-05.png": {
        title: "3DCG 05｜和室",
        content: "畳や障子、床の間など日本家屋の特徴を取り入れた和室を3DCGで制作しました。",
        point: "畳の配置や障子、天井の木材など細かな部分まで作り込み、和室らしい落ち着いた雰囲気を表現しました。床の間の照明にもこだわりました。",
        software: "Blender"
    },

    "cg-06.png": {
        title: "3DCG 06｜NEO HORIZON",
        content: "未来のSF世界をイメージし、巨大な建物が立ち並ぶ近未来都市を3DCGで制作しました。",
        point: "建物の形や高さに変化をつけ、現実にはない未来的な都市を表現しました。暗い背景と建物の光を組み合わせ、SF世界らしい幻想的な雰囲気を意識しました。",
        software: "Blender"
    },

    "cg-07.png": {
        title: "3DCG 07｜Space Fighters",
        content: "宇宙空間を舞台に、複数の戦闘機が飛び交うSF世界を3DCGで制作しました。",
        point: "複数の戦闘機が宇宙を航行しているように配置しました。ネオンカラーの光を取り入れ、敵と視認しやすくし、未来的で迫力のあるSF世界を表現しました。",
        software: "Blender"
    },

    "cg-08.png": {
        title: "3DCG 08｜Spaceship Corridor",
        content: "制作した戦闘機の内部をイメージし、機械的で近未来的な通路を3DCGで制作しました。",
        point: "戦闘機の内部らしい無機質なデザインを意識し、壁や天井に細かな機械構造を配置しました。白い照明を連続して配置し、奥行きのあるSF的な空間を表現しました。",
        software: "Blender"
    },

    "cg-09.png": {
        title: "3DCG 09｜Night Street",
        content: "夜の街並みをテーマに、建物や街灯、看板などを配置した商店街を3DCGで制作しました。",
        point: "夜の雰囲気を出すため、街灯や看板に光を設定し、建物に強い陰影をつけました。オレンジ色を中心とした照明で、映画のワンシーンのような幻想的な街並みを表現しました。",
        software: "Blender"
    },

        "web-01.png": {
        title: "WEB 01｜ムロくじ",
        content: "Web上で楽しめるおみくじゲームを制作しました。ボタンを押すと結果が表示されるシンプルなWebコンテンツです。",
        point: "おみくじを引く楽しさが伝わるよう、結果が表示されるまでの演出やボタンの動きにこだわりました。シンプルな操作で直感的に遊べるデザインを意識しました。",
        software: "HTML / CSS / JavaScript",
         url: "https://muroren04.github.io/omikuji/"
    },

    "web-02.png": {
        title: "WEB 02｜ムロ番くじ",
        content: "オリジナルのWebくじゲーム「ムロ番くじ」を制作しました。複数の賞からランダムに景品が決まるゲームです。",
        point: "実際のくじ引きのような楽しさを表現するため、箱が揺れる演出や効果音、結果表示のアニメーションを取り入れました。賞ごとの演出や残り本数も表示し、ゲーム性を高めました。",
        software: "HTML / CSS / JavaScript",
         url: "https://muroren04.github.io/muroban-kuji/"
    },

    "web-03.png": {
        title: "WEB 03｜Fruit Memory Game",
        content: "8種類のフルーツを使ったWeb版の神経衰弱ゲームを制作しました。カードをめくって同じ絵柄を揃えるゲームです。",
        point: "子どもから大人まで遊びやすいよう、フルーツを使った分かりやすいデザインにしました。カードをめくる効果音や正解・不正解の演出、タイマーやベストスコアも実装しました。",
        software: "HTML / CSS / JavaScript",
         url: "https://muroren04.github.io/fruit-memory-game/"
    },

};

const imageModal = document.getElementById("image-modal");

const modalImage = document.getElementById("modal-image");

const modalClose = document.querySelector(".modal-close");

const modalTitle = document.getElementById("modal-title");

const modalContent = document.getElementById("modal-content");

const modalPoint = document.getElementById("modal-point");

const modalSoftware = document.getElementById("modal-software");

const modalVideo = document.getElementById("modal-video");

const modalLink = document.getElementById("modal-link");
const modalPageLink = document.getElementById("modal-page-link");

// 作品画像をクリック
workImages.forEach((image) => {

    image.addEventListener("click", () => {

        const fileName = image.src.split("/").pop();
        const detail = workDetails[fileName];

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        if (detail) {

            modalTitle.textContent = detail.title;
            modalContent.textContent = detail.content;
            modalPoint.textContent = detail.point;
            modalSoftware.textContent = detail.software;

                // WEB作品だけページリンクを表示
    if (detail.url) {

        modalPageLink.href = detail.url;
        modalLink.style.display = "block";

    } else {

        modalLink.style.display = "none";

    }

            if (detail.video) {

                modalVideo.src = detail.video;
                modalVideo.style.display = "block";

            } else {

                modalVideo.src = "";
                modalVideo.style.display = "none";

            }

        }

        imageModal.style.display = "flex";

    });

});


// ×ボタンをクリック
modalClose.addEventListener("click", () => {

    imageModal.style.display = "none";

    modalVideo.pause();
    modalVideo.currentTime = 0;

});


// 黒い背景をクリック
imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

    imageModal.style.display = "none";

    modalVideo.pause();
    modalVideo.currentTime = 0;

}

});

// Escキーで詳細画面を閉じる
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        imageModal.style.display = "none";

        if (modalVideo) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }

    }

});
