(function () {
    "use strict";
    const LanguageHelper = (function () {
        const translationsList = {
            ja: {
                "control.sidebar": "サイドバー",
                "control.theme-toggle": "テーマ切換",
                "control.prev": "前のページ",
                "control.next": "次のページ",
                "control.select": "選択",
                "control.move": "パン",
                "control.zoom-out": "縮小",
                "control.zoom-in": "拡大",
                "control.actual-size": "実際のサイズ",
                "control.fit-width": "幅に合わせる",
                "control.fit-height": "高さに合わせる",
                "control.fit-page": "ページに合わせる",
                "control.auto": "自動",
                "control.fullscreen": "フルスクリーン",
                "control.thumbnails": "サムネイル",
                "control.bookmarks": "ブックマーク",
                "control.presentation": "プレゼンテーション",
                "control.magazine": "マガジン",
                "control.continuous": "スクロール",
                "control.search": "検索",
                "control.page": "ページ",
                "search.search": "検索",
                "search.match-case": " 大文字・小文字を区別",
                "search.limit-results-1": " 結果を1ページ１つに制限する",
                "search.limit-results-500": "最初の500件が表示されます。",
                "search.results-count": " 件",
                "search.unavailable": "検索できません",
                "search.loading": "ローディング",
            },
            fr: {
                "control.sidebar": "Barre latérale",
                "control.theme-toggle": "Basculer entre les thèmes",
                "control.prev": "Page précédente",
                "control.next": "Page suivante",
                "control.select": "Sélectionner",
                "control.move": "Déplacer",
                "control.zoom-out": "Zoom arrière",
                "control.zoom-in": "Zoom avant",
                "control.actual-size": "Taille réelle",
                "control.fit-width": "Pleine largeur",
                "control.fit-height": "Pleine hauteur",
                "control.fit-page": "Page entière",
                "control.auto": "Automatique",
                "control.fullscreen": "Plein écran",
                "control.thumbnails": "Vignettes",
                "control.bookmarks": "Signets",
                "control.presentation": "Présentation",
                "control.magazine": "Magazine",
                "control.continuous": "En continu",
                "control.search": "Recherche",
                "control.page": "Page",
                "search.search": "Rechercher",
                "search.match-case": " Respecter la casse",
                "search.limit-results-1": " Limiter les résultats à 1 par page",
                "search.limit-results-500":
                    "Limitée aux 500 premiers résultats",
                "search.results-count": " résultats",
                "search.unavailable": "Recherche non accessible",
                "search.loading": "Chargement en cours",
            },
            de: {
                "control.sidebar": "Seitenleiste",
                "control.theme-toggle": "Darstellung wechseln",
                "control.prev": "Vorherige Seite",
                "control.next": "Nächste Seite",
                "control.select": "Auswählen",
                "control.move": "Bewegen",
                "control.zoom-out": "Zoom Out",
                "control.zoom-in": "Zoom In",
                "control.actual-size": "Tatsächliche Grösse",
                "control.fit-width": "Breite füllend",
                "control.fit-height": "Höhe füllend",
                "control.fit-page": "Seite füllend",
                "control.auto": "Automatisch",
                "control.fullscreen": "Ganzer Bildschirm",
                "control.thumbnails": "Mini-Ansichten",
                "control.bookmarks": "Lesezeichen",
                "control.presentation": "Präsentationsdarstellung",
                "control.magazine": "Magazindarstellung",
                "control.continuous": "Fortlaufende Darstellung",
                "control.search": "Suchen",
                "control.page": "Seite",
                "search.search": "Suchen",
                "search.match-case": "Gross-/Kleinschreibung beachten",
                "search.limit-results-1": "Auf 1 Resultat pro Seite begrenzen",
                "search.limit-results-500":
                    "Auf die ersten 500 Resultate begrenzen.",
                "search.results-count": " Resultat(e)",
                "search.unavailable": "Suche nicht verfügbar.",
                "search.loading": "Lade",
            },
            hi: {
                "control.sidebar": "साइडबार",
                "control.theme-toggle": "विषय टॉगल",
                "control.prev": "पिछला पृष्ठ",
                "control.next": "अगला पृष्ठ",
                "control.select": "चुनते हैं",
                "control.move": "पान",
                "control.zoom-out": "छोटा करें",
                "control.zoom-in": "बड़ा करें",
                "control.actual-size": "वास्तविक आकार",
                "control.fit-width": "चौड़ाई पर फ़िट",
                "control.fit-height": "ठीक ऊंचाई",
                "control.fit-page": "फिट पेज",
                "control.auto": "स्वचालित",
                "control.fullscreen": "पूर्ण स्क्रीन",
                "control.thumbnails": "थंबनेल",
                "control.bookmarks": "बुकमार्क",
                "control.presentation": "प्रदर्शन",
                "control.magazine": "पत्रिका",
                "control.continuous": "निरंतर",
                "control.search": "खोज",
                "control.page": "पृष्ठ",
                "search.search": "खोज",
                "search.match-case": "मिलान घटना",
                "search.limit-results-1": "सीमा परिणाम 1 प्रति पृष्ठ",
                "search.limit-results-500": "पहले 500 परिणामों तक सीमित है",
                "search.results-count": " परिणाम",
                "search.unavailable": "उपलब्ध नहीं खोजें।",
                "search.loading": "लोड हो रहा है",
            },
        };

        const lang = (navigator.language || navigator.userLanguage).substr(
            0,
            2
        );
        const translations = translationsList[lang]
            ? translationsList[lang]
            : false;

        return {
            getTranslation: function (name) {
                return translations ? translations[name] : null;
            },

            updateElements: function () {
                if (translations) {
                    document.documentElement.setAttribute("lang", lang);
                    let i, element;
                    const titleElements =
                        document.querySelectorAll("[data-lang-title]");
                    for (i = 0; i < titleElements.length; i++) {
                        element = titleElements[i];
                        if (translations[element.dataset.langTitle]) {
                            element.title =
                                translations[element.dataset.langTitle];
                        }
                    }
                    const textElements =
                        document.querySelectorAll("[data-lang-text]");
                    for (i = 0; i < textElements.length; i++) {
                        element = textElements[i];
                        if (translations[element.dataset.langText]) {
                            element.innerText =
                                translations[element.dataset.langText];
                        }
                    }
                }
            },
        };
    })();

    /**
     * Shorthand helper function to getElementById
     * @param id
     * @returns {Element}
     */
    const d = function (id) {
        return document.getElementById(id);
    };

    const ClassHelper = (function () {
        return {
            addClass: function (ele, name) {
                const classes =
                    ele.className.length !== 0 ? ele.className.split(" ") : [];
                const index = classes.indexOf(name);
                if (index === -1) {
                    classes.push(name);
                    ele.className = classes.join(" ");
                }
            },

            removeClass: function (ele, name) {
                const classes =
                    ele.className.length !== 0 ? ele.className.split(" ") : [];
                const index = classes.indexOf(name);
                if (index !== -1) {
                    classes.splice(index, 1);
                }
                ele.className = classes.join(" ");
            },

            toggleClass: function (ele, name) {
                const classes =
                    ele.className.length !== 0 ? ele.className.split(" ") : [];
                const index = classes.indexOf(name);
                let wasClassAdded;
                if (index === -1) {
                    classes.push(name);
                    wasClassAdded = true;
                } else {
                    classes.splice(index, 1);
                    wasClassAdded = false;
                }
                ele.className = classes.join(" ");
                return wasClassAdded;
            },
        };
    })();

    /**
     * Encapsulation of sidebar functionality
     */
    const Sidebar = (function () {
        const Sidebar = {},
            panels = {};
        let sidebar, defaultPanel, currentPanel;

        IDRViewer.on("ready", function (data) {
            d("btnSideToggle").addEventListener("click", Sidebar.toggleSidebar);
            sidebar = d("sidebar");

            for (let prop in panels) {
                panels[prop].setup(data);
                if (prop === defaultPanel) {
                    panels[prop].show();
                } else {
                    panels[prop].hide();
                }
            }
            currentPanel = defaultPanel;
        });

        Sidebar.register = function (name, handler, isDefault) {
            panels[name] = handler;
            if (isDefault) {
                defaultPanel = name;
            }
        };

        Sidebar.switchTo = function (name) {
            if (currentPanel === name) {
                return;
            }
            panels[currentPanel].hide();
            currentPanel = name;
            panels[currentPanel].show();
        };

        Sidebar.openSidebar = function () {
            if (sidebar.className.indexOf("open") === -1) {
                Sidebar.toggleSidebar();
            }
        };

        /**
         * Toggle the sidebar open and closed
         */
        Sidebar.toggleSidebar = function () {
            if (ClassHelper.toggleClass(sidebar, "open")) {
                panels[currentPanel].show();
            }
        };

        return Sidebar;
    })();

    /**
     * Encapsulation of Search panel
     */
    (function () {
        let searchPanel,
            searchBtn,
            isSearchLoaded,
            searchInputEle,
            resultsCountEle,
            matchCaseCheckbox,
            limitResultsCheckbox;

        const setup = function () {
            searchBtn = d("btnSearch");
            searchBtn.addEventListener("click", function () {
                Sidebar.switchTo("search");
            });

            searchPanel = d("search-panel");
            searchInputEle = d("searchInput");
            resultsCountEle = d("searchResultsCount");
            matchCaseCheckbox = d("cbMatchCase");
            limitResultsCheckbox = d("cbLimitResults");

            searchInputEle.value =
                LanguageHelper.getTranslation("search.loading") || "Loading";
            searchInputEle.disabled = "disabled";
            searchInputEle.addEventListener("input", doSearch);
            searchInputEle.addEventListener("keydown", function (event) {
                switch (event.key) {
                    case "Esc": // IE/Edge specific value
                    case "Escape":
                        if (searchInputEle.value !== "") {
                            searchInputEle.value = "";
                            doSearch();
                        } else {
                            searchInputEle.blur();
                            Sidebar.toggleSidebar();
                        }
                        break;
                }
            });
            matchCaseCheckbox.addEventListener("click", doSearch);
            limitResultsCheckbox.addEventListener("click", doSearch);

            document.addEventListener("keydown", function (event) {
                if (event.key === "f" && (event.ctrlKey || event.metaKey)) {
                    Sidebar.openSidebar();
                    Sidebar.switchTo("search");
                    searchInputEle.focus();
                    searchInputEle.select();
                    event.preventDefault();
                }
            });
        };

        const clickHandler = function (e) {
            IDRViewer.goToPage(this.dataset.page);
            e.preventDefault();
        };

        const doSearch = function () {
            const resultDiv = document.getElementById("searchResults");
            resultDiv.innerText = "";

            const searchTerm = searchInputEle.value;
            const matchCase = matchCaseCheckbox.checked;
            const limitOnePerPage = limitResultsCheckbox.checked;

            const results = IDRViewer.search(
                searchTerm,
                matchCase,
                limitOnePerPage
            );

            resultsCountEle.innerText =
                String(results.length) +
                (LanguageHelper.getTranslation("search.results-count") ||
                    " results");

            const docFrag = document.createDocumentFragment();
            for (let i = 0; i < results.length && i < 500; i++) {
                const pg = results[i].page;

                const link = document.createElement("a");
                link.href = "?page=" + pg;
                link.innerText = results[i].snippet;
                link.className = "result";
                link.dataset.page = pg;
                link.addEventListener("click", clickHandler);

                docFrag.appendChild(link);
            }
            if (results.length >= 500) {
                const element = document.createElement("span");
                element.innerText =
                    LanguageHelper.getTranslation("search.limit-results-500") ||
                    "Limited to first 500 results.";
                element.className = "result";
                docFrag.appendChild(element);
            }
            resultDiv.appendChild(docFrag);
        };

        Sidebar.register("search", {
            setup: setup,
            show: function () {
                ClassHelper.removeClass(searchPanel, "hidden");
                ClassHelper.addClass(searchBtn, "disabled");

                const loadListener = function (loaded) {
                    if (loaded) {
                        searchInputEle.value = "";
                        searchInputEle.disabled = "";
                        searchInputEle.focus();
                    } else {
                        searchInputEle.value =
                            LanguageHelper.getTranslation(
                                "search.unavailable"
                            ) || "Search not available.";
                    }
                };
                const progressListener = function (percentageLoaded) {
                    searchInputEle.value =
                        (LanguageHelper.getTranslation("search.loading") ||
                            "Loading") +
                        " (" +
                        percentageLoaded +
                        "%)";
                };
                if (!isSearchLoaded) {
                    isSearchLoaded = true;
                    IDRViewer.loadSearch(loadListener, progressListener);
                }
                searchInputEle.focus();
            },
            hide: function () {
                ClassHelper.addClass(searchPanel, "hidden");
                ClassHelper.removeClass(searchBtn, "disabled");
            },
        });
    })();

    /**
     * Encapsulation of Thumbnails panel
     */
    (function () {
        const loadedThumbsArray = [],
            thumbnailPositions = [],
            MAX_THUMBNAIL_WIDTH = 160,
            MAX_THUMBNAIL_HEIGHT = 200;
        let thumbnailPanel,
            thumbnailBtn,
            imageType,
            pgCount,
            curPg,
            baseUrl,
            scrollSidebar = true,
            thumbnailTimeout,
            spinnerInterval;

        const setup = function (data) {
            thumbnailBtn = d("btnThumbnails");
            thumbnailBtn.addEventListener("click", function () {
                Sidebar.switchTo("thumbnails");
            });

            thumbnailPanel = d("thumbnails-panel");
            thumbnailPanel.addEventListener("scroll", handleThumbnailBarScroll);

            curPg = data.page;
            pgCount = data.pagecount;
            imageType = data.thumbnailType;
            // TODO
            //baseUrl = data.url || "";
            baseUrl = "/LaTeXbooks/ap/";

            loadThumbnailFrames(data.bounds);
            // Initialise loaded array
            for (let i = 0; i < pgCount; i++) {
                loadedThumbsArray[i] = false;
            }
        };

        /**
         * Load the frames for all the thumbnails
         * @param bounds Page bound array
         */
        const loadThumbnailFrames = function (bounds) {
            const heights = [];
            // Calculate height for max width of 160px and max height of 200px
            for (let i = 0; i < bounds.length; i++) {
                const height = Math.floor(
                    bounds[i][1] * (MAX_THUMBNAIL_WIDTH / bounds[i][0])
                );
                heights[i] =
                    bounds[i][0] > bounds[i][1] ||
                    height <= MAX_THUMBNAIL_HEIGHT
                        ? height
                        : MAX_THUMBNAIL_HEIGHT;
            }

            const clickHandler = function (e) {
                scrollSidebar = false;
                IDRViewer.goToPage(this.dataset.page);
                e.preventDefault();
            };

            for (let page = 1; page <= bounds.length; page++) {
                const ele = document.createElement("a");
                ele.style.height = heights[page - 1] + "px";
                ele.className = "thumbnail";
                ele.href = "?page=" + page;
                ele.id = "thumb" + page;
                ele.dataset.page = String(page);
                ele.addEventListener("click", clickHandler);
                ele.setAttribute(
                    "title",
                    (LanguageHelper.getTranslation("control.page") || "Page") +
                        " " +
                        page
                );
                const margin = Math.floor((heights[page - 1] - 42) / 2);
                ele.innerHTML =
                    '<div class="spinner" style="margin-top: ' +
                    margin +
                    'px;"></div>';
                thumbnailPanel.appendChild(ele);
            }

            for (let page = 1; page <= bounds.length; page++) {
                thumbnailPositions[page - 1] =
                    thumbnailPanel.children[page - 1].offsetTop;
            }
        };

        const handleThumbnailBarScroll = function () {
            if (!spinnerInterval) {
                spinnerInterval = setInterval(showVisibleSpinners, 250);
            }
            if (thumbnailTimeout) {
                clearTimeout(thumbnailTimeout);
            }
            thumbnailTimeout = setTimeout(loadVisibleThumbnails, 500);
        };

        const showVisibleSpinners = function () {
            const startY = thumbnailPanel.scrollTop;
            const endY = startY + thumbnailPanel.clientHeight;
            for (let index = 0; index < pgCount; index++) {
                if (!loadedThumbsArray[index]) {
                    if (
                        thumbnailPositions[index] + MAX_THUMBNAIL_WIDTH >
                            startY &&
                        thumbnailPositions[index] < endY
                    ) {
                        ClassHelper.addClass(
                            thumbnailPanel.children[index].firstChild,
                            "spinning"
                        );
                    } else {
                        ClassHelper.removeClass(
                            thumbnailPanel.children[index].firstChild,
                            "spinning"
                        );
                    }
                }
            }
        };

        const loadVisibleThumbnails = function () {
            if (spinnerInterval) {
                spinnerInterval = clearInterval(spinnerInterval);
            }
            thumbnailTimeout = null;

            // load thumbs in view
            for (let thumbIndex = 0; thumbIndex < pgCount; thumbIndex++) {
                if (!loadedThumbsArray[thumbIndex]) {
                    const curThumb = thumbnailPanel.children[thumbIndex];
                    // Bails out of the loop when the next thumbnail is below the viewable area
                    if (
                        curThumb.offsetTop >
                        thumbnailPanel.scrollTop + thumbnailPanel.clientHeight
                    ) {
                        break;
                    }
                    if (
                        curThumb.offsetTop + curThumb.clientHeight >
                        thumbnailPanel.scrollTop
                    ) {
                        curThumb.innerHTML =
                            '<img src="' +
                            baseUrl +
                            "thumbnails/" +
                            (thumbIndex + 1) +
                            "." +
                            imageType +
                            '" />';
                        loadedThumbsArray[thumbIndex] = true;
                    }
                }
            }
        };

        IDRViewer.on("pagechange", function (data) {
            curPg = data.page;
            if (thumbnailPanel.className.indexOf("hidden") === -1) {
                updateThumbnailPanelToCurrentPage();
            }
            scrollSidebar = true;
        });

        const updateThumbnailPanelToCurrentPage = function () {
            const curThumb = thumbnailPanel.children[curPg - 1];
            if (curThumb.className.indexOf("currentPageThumbnail") === -1) {
                for (let i = 0; i < pgCount; i++) {
                    ClassHelper.removeClass(
                        thumbnailPanel.children[i],
                        "currentPageThumbnail"
                    );
                }

                ClassHelper.addClass(curThumb, "currentPageThumbnail");

                if (scrollSidebar) {
                    thumbnailPanel.scrollTop =
                        thumbnailPanel.scrollTop +
                        curThumb.getBoundingClientRect().top -
                        thumbnailPanel.getBoundingClientRect().top;
                }
            }
        };

        Sidebar.register(
            "thumbnails",
            {
                setup: setup,
                show: function () {
                    ClassHelper.removeClass(thumbnailPanel, "hidden");
                    ClassHelper.addClass(thumbnailBtn, "disabled");

                    setTimeout(showVisibleSpinners, 250);
                    loadVisibleThumbnails();
                    updateThumbnailPanelToCurrentPage();
                },
                hide: function () {
                    ClassHelper.addClass(thumbnailPanel, "hidden");
                    ClassHelper.removeClass(thumbnailBtn, "disabled");
                },
            },
            true
        );
    })();

    /**
     * Encapsulation of Bookmarks panel
     */
    (function () {
        let bookmarkPanel, bookmarkBtn;

        const setup = function (data) {
            bookmarkBtn = d("btnBookmarks");
            bookmarkBtn.addEventListener("click", function () {
                Sidebar.switchTo("bookmarks");
            });

            bookmarkPanel = d("bookmarks-panel");
            if (data.bookmarks.length > 0) {
                addBookmark(bookmarkPanel, data.bookmarks);
            } else {
                ClassHelper.addClass(bookmarkBtn, "hidden");
            }
        };

        const clickHandler = function () {
            IDRViewer.goToPage(parseInt(this.dataset.page), this.dataset.zoom);
        };

        const addBookmark = function (container, bookmarks) {
            const outer = document.createElement("ul");
            for (let i = 0; i < bookmarks.length; i++) {
                const bookmark = bookmarks[i];
                const li = document.createElement("li");
                li.setAttribute("title", "Page " + bookmark.page);
                li.innerText = bookmark.title;
                li.dataset.page = bookmark.page;
                li.dataset.zoom = bookmark.zoom;
                li.addEventListener("click", clickHandler);
                outer.appendChild(li);
                if (typeof bookmark.children != "undefined") {
                    addBookmark(outer, bookmark.children);
                }
            }
            container.appendChild(outer);
        };

        Sidebar.register("bookmarks", {
            setup: setup,
            show: function () {
                ClassHelper.removeClass(bookmarkPanel, "hidden");
                ClassHelper.addClass(bookmarkBtn, "disabled");
            },
            hide: function () {
                ClassHelper.addClass(bookmarkPanel, "hidden");
                ClassHelper.removeClass(bookmarkBtn, "disabled");
            },
        });
    })();

    /**
     * Encapsulation of navigation controls
     */
    (function () {
        let hasPageLabels,
            pgCountEle,
            pageCount,
            isR2L,
            goBtn,
            nextBtn,
            prevBtn;

        const handleGoBtn = function () {
            IDRViewer.goToPage(
                parseInt(goBtn.options[goBtn.selectedIndex].value)
            );
            this.blur();
        };

        const populateGoBtn = function (initialPage, pgCount, pageLabels) {
            goBtn.innerText = "";
            for (let i = 1; i <= pgCount; i++) {
                const opt = document.createElement("option");
                opt.value = String(i);
                opt.innerText = pageLabels.length
                    ? pageLabels[i - 1]
                    : String(i);
                goBtn.appendChild(opt);
            }
            goBtn.selectedIndex = initialPage - 1;
        };

        const getPageString = function (page, pageCount) {
            let result = "/ " + pageCount;
            if (hasPageLabels) {
                result = "(" + page + " / " + pageCount + ")";
            }
            return result;
        };

        const swapNavButtonsForR2L = function () {
            nextBtn.parentNode.insertBefore(prevBtn, nextBtn);
            prevBtn.parentNode.insertBefore(
                nextBtn,
                prevBtn.parentNode.firstChild
            );
            const nextInnerHtml = nextBtn.innerHTML;
            nextBtn.innerHTML = prevBtn.innerHTML;
            prevBtn.innerHTML = nextInnerHtml;
        };

        const keyDownHandler = function (e) {
            if (
                document.activeElement != null &&
                document.activeElement.tagName === "INPUT"
            ) {
                return;
            }
            switch (e.keyCode) {
                case 33: // Page Up
                    IDRViewer.prev();
                    e.preventDefault();
                    break;
                case 34: // Page Down
                    IDRViewer.next();
                    e.preventDefault();
                    break;

                case 37: // Left Arrow
                    isR2L ? IDRViewer.next() : IDRViewer.prev();
                    e.preventDefault();
                    break;
                case 39: // Right Arrow
                    isR2L ? IDRViewer.prev() : IDRViewer.next();
                    e.preventDefault();
                    break;

                case 36: // Home
                    IDRViewer.goToPage(1);
                    e.preventDefault();
                    break;
                case 35: // End
                    IDRViewer.goToPage(pageCount);
                    e.preventDefault();
                    break;
            }
        };

        const pageChangeListener = function (data) {
            pgCountEle.innerText = getPageString(data.page, data.pagecount);
            goBtn.selectedIndex = data.page - 1;

            if (data.isFirstPage) {
                ClassHelper.addClass(prevBtn, "disabled");
            } else {
                ClassHelper.removeClass(prevBtn, "disabled");
            }
            if (data.isLastPage) {
                ClassHelper.addClass(nextBtn, "disabled");
            } else {
                ClassHelper.removeClass(nextBtn, "disabled");
            }
        };

        IDRViewer.on("ready", function (data) {
            hasPageLabels = !!data.pageLabels.length;
            pageCount = data.pagecount;
            isR2L = data.isR2L;

            pgCountEle = d("pgCount");
            goBtn = d("btnGo");
            prevBtn = d("btnPrev");
            nextBtn = d("btnNext");

            if (data.isFirstPage) {
                ClassHelper.addClass(prevBtn, "disabled");
            }
            if (data.isLastPage) {
                ClassHelper.addClass(nextBtn, "disabled");
            }

            goBtn.addEventListener("change", handleGoBtn);
            prevBtn.addEventListener("click", function (e) {
                IDRViewer.prev();
                e.preventDefault();
            });
            nextBtn.addEventListener("click", function (e) {
                IDRViewer.next();
                e.preventDefault();
            });

            if (data.isR2L) {
                swapNavButtonsForR2L();
            }

            document.addEventListener("keydown", keyDownHandler);

            populateGoBtn(data.page, data.pagecount, data.pageLabels);

            pgCountEle.innerText = getPageString(data.page, data.pagecount);

            IDRViewer.on("pagechange", pageChangeListener);
        });
    })();

    /**
     * Encapsulation of Zoom controls
     */
    (function () {
        let zoomBtn, zoomInBtn, zoomOutBtn;

        const handleZoomUpdate = function (data) {
            zoomBtn.value = data.zoomType;
            zoomBtn.options[0].innerText =
                Math.floor(data.zoomValue * 100) + "%";

            if (data.isMinZoom) {
                ClassHelper.addClass(zoomOutBtn, "disabled");
            } else {
                ClassHelper.removeClass(zoomOutBtn, "disabled");
            }
            if (data.isMaxZoom) {
                ClassHelper.addClass(zoomInBtn, "disabled");
            } else {
                ClassHelper.removeClass(zoomInBtn, "disabled");
            }
        };

        const handleZoomBtn = function () {
            const zoomType = zoomBtn.value;
            if (zoomType !== IDRViewer.ZOOM_SPECIFIC) {
                IDRViewer.setZoom(zoomType);
            }
            this.blur();
        };

        IDRViewer.on("ready", function () {
            zoomBtn = d("btnZoom");
            zoomInBtn = d("btnZoomIn");
            zoomOutBtn = d("btnZoomOut");

            zoomBtn.addEventListener("change", handleZoomBtn);

            zoomInBtn.addEventListener("click", function (e) {
                IDRViewer.zoomIn();
                e.preventDefault();
            });
            zoomOutBtn.addEventListener("click", function (e) {
                IDRViewer.zoomOut();
                e.preventDefault();
            });

            document.addEventListener("keydown", function (event) {
                if (event.ctrlKey || event.metaKey) {
                    if (event.key === "0") {
                        IDRViewer.setZoom(IDRViewer.ZOOM_AUTO);
                        event.preventDefault();
                    } else if (event.key === "-") {
                        IDRViewer.zoomOut();
                        event.preventDefault();
                    } else if (event.key === "+" || event.key === "=") {
                        IDRViewer.zoomIn();
                        event.preventDefault();
                    }
                }
            });

            document.addEventListener(
                "wheel",
                function (event) {
                    if (event.ctrlKey || event.metaKey) {
                        if (event.deltaY > 0) {
                            IDRViewer.zoomOut();
                            event.preventDefault();
                        } else if (event.deltaY < 0) {
                            IDRViewer.zoomIn();
                            event.preventDefault();
                        }
                    }
                },
                { passive: false }
            );

            zoomBtn.value = IDRViewer.ZOOM_AUTO;

            IDRViewer.on("zoomchange", handleZoomUpdate);
        });
    })();

    /**
     * Encapsulation of Layout controls
     */
    (function () {
        let viewBtn;

        const handleViewBtn = function () {
            IDRViewer.setLayout(viewBtn.value);
            this.blur();
        };

        const setupLayoutSwitching = function (
            pgCount,
            layout,
            availableLayouts
        ) {
            if (availableLayouts.length > 1 && pgCount > 1) {
                let temp = document.createElement("option");
                temp.innerText =
                    LanguageHelper.getTranslation("control.presentation") ||
                    "Presentation";
                temp.value = IDRViewer.LAYOUT_PRESENTATION;
                viewBtn.appendChild(temp);

                if (
                    availableLayouts.indexOf(IDRViewer.LAYOUT_MAGAZINE) !== -1
                ) {
                    temp = document.createElement("option");
                    temp.innerText =
                        LanguageHelper.getTranslation("control.magazine") ||
                        "Magazine";
                    temp.value = IDRViewer.LAYOUT_MAGAZINE;
                    viewBtn.appendChild(temp);
                }
                if (
                    availableLayouts.indexOf(IDRViewer.LAYOUT_CONTINUOUS) !== -1
                ) {
                    temp = document.createElement("option");
                    temp.innerText =
                        LanguageHelper.getTranslation("control.continuous") ||
                        "Continuous";
                    temp.value = IDRViewer.LAYOUT_CONTINUOUS;
                    viewBtn.appendChild(temp);
                }
                viewBtn.addEventListener("change", handleViewBtn);
                viewBtn.value = layout;
            } else {
                ClassHelper.addClass(viewBtn, "hidden");
            }
        };

        IDRViewer.on("ready", function (data) {
            viewBtn = d("btnView");
            setupLayoutSwitching(
                data.pagecount,
                data.layout,
                data.availableLayouts
            );
        });
    })();

    /**
     * Encapsulation of Selection/Panning controls
     */
    (function () {
        let moveBtn, selectBtn;

        const updateSelectionButtons = function (mode) {
            switch (mode) {
                case IDRViewer.SELECT_PAN:
                    ClassHelper.removeClass(selectBtn, "disabled");
                    ClassHelper.addClass(moveBtn, "disabled");
                    break;
                case IDRViewer.SELECT_SELECT:
                    ClassHelper.removeClass(moveBtn, "disabled");
                    ClassHelper.addClass(selectBtn, "disabled");
                    break;
            }
        };

        const handleSelectionChange = function (data) {
            updateSelectionButtons(data.type);
        };

        IDRViewer.on("ready", function (data) {
            moveBtn = d("btnMove");
            selectBtn = d("btnSelect");

            moveBtn.addEventListener("click", function (e) {
                IDRViewer.setSelectMode(IDRViewer.SELECT_PAN);
                e.preventDefault();
            });
            selectBtn.addEventListener("click", function (e) {
                IDRViewer.setSelectMode(IDRViewer.SELECT_SELECT);
                e.preventDefault();
            });

            updateSelectionButtons(data.selectMode);

            IDRViewer.on("selectchange", handleSelectionChange);
        });
    })();

    /**
     * Main setup function that runs on load
     */
    IDRViewer.on("ready", function (data) {
        LanguageHelper.updateElements(); // Set up localization

        document.title = data.title ? data.title : data.fileName; // Set title

        // Set up theme toggle
        d("btnThemeToggle").addEventListener("click", function () {
            const isDarkTheme =
                document.body.className.indexOf("dark-theme") !== -1;
            ClassHelper.removeClass(document.body, "light-theme");
            ClassHelper.removeClass(document.body, "dark-theme");
            ClassHelper.addClass(
                document.body,
                isDarkTheme ? "light-theme" : "dark-theme"
            );
        });

        // Set up fullscreen toggle
        const fullScreenBtn = d("btnFullScreen");
        if (IDRViewer.isFullscreenEnabled()) {
            fullScreenBtn.addEventListener("click", function (e) {
                IDRViewer.toggleFullScreen();
                e.preventDefault();
            });
        } else {
            ClassHelper.addClass(fullScreenBtn, "hidden");
        }

        // Remove buttons which are unnecessary mobile/tablet touch screens
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            ClassHelper.addClass(document.body, "is-mobile");
        }

        (function reticulateSplines() {
            var el = document.createElement("div");
            el.innerHTML = atob(
                "PGRpdiBzdHlsZT0icG9zaXRpb246Zml4ZWQ7cmlnaHQ6MzBweDtib3R0b206MTVweDtib3JkZXItcmFkaXVzOjVweDtib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDEyMCwxMjAsMTIwLDAuNSk7bGluZS1oZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47Ij48YSBocmVmPSJodHRwczovL3d3dy5pZHJzb2x1dGlvbnMuY29tL2phL29ubGluZS1wZGYtdG8taHRtbDUtY29udmVydGVyIiByZWw9Im5vZm9sbG93IiB0YXJnZXQ9Il9ibGFuayI+PGltZyBhbHQ9IkNyZWF0ZWQgd2l0aCBCdWlsZFZ1IiBzdHlsZT0iYm9yZGVyOjA7IiBzcmM9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBdENBTUFBQUI3MG1KbUFBQUNQVkJNVkVYLy8vLysvdjBkSFJ2NysvdjgvUHlJaUlmYjI5di9iMG41d3k3MzkvZjR3aXY0d1NscWFtcng4ZkcwdExQNHZ5WGw1ZVhnNE9EQ3dzSjRlSGR1Ym0zVDA5UDR3Q2YzdmlQZTN0MnhzYkZnWUYvNHdpMzN2Qi9yNit1aG9hQ0VoSU9CZ1lCeGNYQlpXVmZvNk9oUlVWRkRRMElwS1NqajQrTm9hR2RiVzFvbEpTUDN1Qlh6OC9QS3lzcGRYVjFKU1VjOFBEdjJ0USs2dXJxNHVMZGtaR1JVVkZQL2NFcjJ1aG42K3ZxcXFxcW1wcVpMUzBwQlFUODRPRGI1K2ZuMTlmWFgxOWZIeDhlK3ZyMmVucDZhbXBxWGw1ZU9qbzU4Zkh0MWRYVnpjM05XVmxaSFIwWGxueDM0dXh6Ky9mcnQ3ZTMrK2V2aTR1TFkyTmpRME5ERnhjV3VycTJVbEpSUFQwNGdJQi9uNStmT3pzN0J3Y0g4NTYraW9xS0tpb241MG12K256ejltVHMwTkRMNHdqSDR2aUhub3lIbm9CLzJ1aHZqblJqZ21CUCsvdnorOE16TXpNejk3Y1gvd0svODVxaWpvNk9Sa1pIL2JVcitxajMrcFQzOGp6VXRMU3p1cWgvMXNnais5K1RhMnRyLzI5TC8xc3ovekwvNzNJYUdob1g2Mm9INTBGMzV6RTcvYzA3K2wwSDV5RUQ5a1VEK2RrRC9zRHozeER2OGtqbi93RGoxdVNULysvcisrdkgvOU9ycTZ1ci83T2YvNXQvKzg5Zjg2cjM4NDUveDBwai9wby80eTRML2tYVDUwV1AvZzJINXlVVC9uMFQrYjBQL3REdit0emZ5cERMOGhUTDRzaTdycENJYkd4dnlyeGIvOXZQKzZ0ajk4dFAvMWNyNDU4bisyOFgrM2NQOTRxMy91cWYvdUtUKzE1di9ycGo3NEpYL25JTDlwNEQ1MVh6NjFXL3N3R3Y3cm1UK3RtUCtrMkg5cDFQbXFUdnpxQzZaVVdMMEFBQUdYVWxFUVZSWXcrMlloMTlTVVJUSHo3czg1WUdBVEJOSUJRRVZBeVFRVXlRMTl5cHpsWmxsYXBxMmQ3YjMzbnZ2dmZjZWYxdm52aWRGRmlPclQzMCsrZnZvdS9kdzEvZWRjKzY5ZklCUmplcS9GQU0vcS9nNEVNRWYxbno0SjdFNnB3SXdJOGRpWWd3SU04eUtOdmJDemdYWTRSZThsYW53ZXpKeENvYmgvN0Vtck12Q1YzdFdLaTJEVkFVZW9DcjNSM0Q2Sm83cndMNGp4bHBxelRMWFZuNDNmK1BDVU11d05OUzdGWDVITTlZTU15RzhPamlPMnpSU2I3R2djSy9EMHNIS1U5U1pvUFNrQUJRN25RQ1Fwbld3WVBGWXFEdWJVM0piRUVPT2RRbEFBeXVCU3ExU1ZHVExkRnJDK3VNNDE4TnhXNmVHdGs5aFl2ZVd6Y2w3UU9Lck5hUjZDbVcyaGFETjlhV0Q0cWJiS3ZlaVBRbVdXYXRzMHhGWGJpc0Nsd2JhZlpiY1NXM2Q2ZTNLREUzV3hKSndYRk8zY2FnTDN5WVlFeXRXUzdxRUwyZGs2MENIaTgvV1VxdFd6ZFlXbzIyQlpUVmVxd2owTGtBdjVzaWJNdXdnbTlXY0pkRmlpQXNNREdncmdRMnpTMTV6bk5GbzdGbnlsZWdNWll3TlM1OHJkQ3kxQTB6TE1NWFovVkJRWXk1c2pMZGlTbWVZTnJ2OHVXcUFzaG9BeUhlcHFzczFTaXRVVk1UTDBIdWFWQUN6Tit4Q0p4RkxhcFJ5VzRKNzkxVC8va1ZZeG9SVkVwRHo1YlE0VEtmcWZDWDZ5enlqTkFkbXpRYUlNNlBOMU1WanJZTE9iWkxGWmNhNVVrSG1VVlBNNlpodk5tWFlkUmIxY0ZLcE5FRnEzTHFXdCs4UERGemYvNGh5UmNkaXdHeFhNVTFPTUhnQnZMWWpUQU5NTDhOc0FuTVplakJnZ1JUUVZrTjdZUXVncW02cXdMNWFCTlltdnd4RWpweEdpQThBS214eUdSRXJJVUc2Y3hHYWh6NE9ES3paZitVcFFFeFlZSExKWEV1aDJrSTNmcnFoSE5RK1U1eVptZW5US3FFODNWQUJTb05NbytWZDZ0K01ma3VGaGtwSGsxV1duRm5wQU9leUNDZndPYzZJVkVsSkNVbFNUTEEzOWYwRGZWY3U3emt6SlRvV3o2WFVLVEdmaFdvSnJtOVJnVHdmVkNWRnVCR296ZW9hdnZTbDQxZ0o5dEZKV0d3dnlvOXdKejRYc0JJVEU1T1NOcDJxcjYvdjc3OStlYytLZDRlQm50c1JzTDdmdVZHMk14T3RRMmpiQXNTaVZHTlFpUWQ2Ni92cSt6L3RXYkZ5em9jN2YrK3FSazNaeXcxaHpSMDdkdTZCTlgxOTlUZFdJRmJYam9ld2VNTmZ3NEpPQVl0U1RaNDNlY0thdnQ3ZWxTdm56T2xhdGVybDh1M3JnWW1LeGJBUjRqR3lucWlUUVN5a21qQmgzTGhidmIxWEw4N3AycmZxMmlXeE9HL0RuL0FXRTBPQzNlV01OT1hIVUdjaDFmanh0MjVjdmJpamE5KzFTM2xpc1hqN3ZVaFg5YlJBbmRzZE1IalF5S3kxNmVnOVpMQ3BBU1JWYmdVdTJWN25VdzVsZXBtdExoREkwVFJqblFGOWhjQlRVSTZQNU0yODRkQU9QN21NMGlFc1NvVWFYTk8xWTllcTNjdkZxRHp4UnB6cHgxajVvQ1ZrOVdwQ3lGTDhtQkRrQVZVR2FVV3NRbEtPbzBvSlNlWUhzMUJGU0hZYjlweE5aMnZLS1FLVUtGZVB6Mlk3ZnpNMnVPRmJiYUZZWXhCTGNOYmc0T0RldDd2MkJhbkVRYTd2c0xEUUVKZEUzbVFsMC9HbE04Z2tpaldSNkJFcm5hVGlJRFhKVmcxaHBSR1hNcjdVVEVnWm9HUUtRT25TK1djV2p5WFBHWWExaE9POUZZemhnVmNuNE1FdXBCS3dVSXVSS3h5V2pGNkpwQzRHTEJva0hERHhDSTJlZHVncXpRK1BkWHluVVFnaUpueFA1eUo2dmg5K0w4N0x5K094cUI0alZ4Z3NlNHBGN1c2YkZRT1dqRTVpSWNSSkU5R2dRc3VIRVE2UHhXemxwSWcxZC9MZXpvN2duWE5zdzhiRlQ1NmRQdjNpN05uejU3ZFRmNFhCNHFXRjJMQ3dZVFh4MHJJR1g2UWxGeUlFY1Fwc3dTZ21KblIyclAzQmpqMTQrK2pSWSt2WEh3eUg1YTZjcmMwbWFSUkw4RU1Vckd5aXBxWGV6RUoxUVNTcytYQ0M2em5YY1NqeU1SSU9pNzZ4aDVCbWlxV0dJbWpzSnQ1UXJHUVFNUXlQaGFzejRDVnQ4ZnhRWDNLeElWUEFzdlB6eVF1SG4yMVRsNnlGYUlxVThpMkV6SVFVRzZtbXlVemFra094TEVKUHhESmo2ZXdtTXNFMnRlcXJnRmRqSVQrZHNpN01tVHNDckJveU1jMms2U1lCQjBBbDVsaVpLWVBZYWF4OHBBem5uVWxJYmE3Qkpac0JZQ0xkTlZvN0lXNTZ2dUpmaVYzVENvS3lwZ0hLcElIaFhQT1pFV0pWRTE3dWRseW9PSXV2MXpWU3JGcVN5bU1KV2dmb0xhbzJXVXJRQzRWV09RaEt0bFo1RldhREE2SXJ4bStudWxhRlFxOVlLQmhRYWpKWDZWbHFzSk5hVlZpa0tIaDVjTVVTUFZaS0crQ0xkTTRnSUJUN1RTWjAzYTlqeFJKK0p2UkdaaUwvTUlINmpWakFzRlJNMEJMbGk5alFyekRNMTNhK2huUS9KR1ZGb21HTS8rWVBTU1BRdXJSL0VrdFpBQ3lNYWxTaitqMzZESlBYRlVmWVU0NDFBQUFBQUVsRlRrU3VRbUNDIj48L2E+PC9kaXY+"
            );
            document.body[atob("YXBwZW5kQ2hpbGQ=")](el.firstChild);
        })();
    });
})();
