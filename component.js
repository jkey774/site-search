ctcoreapp.globalSearch = {

    formEl: 'globalsearch-form',
    keywordsEl: 'globalsearch-keyword',
    locationEl: 'globalsearch-location',
    filterEls: '.globalsearch-filter input', // checkboxes

    searchStatusTopEl: '.globalsearch-search-status--top',
    searchStatusBottomEl: '.globalsearch-search-status--bottom',

    /* begin subfilter elements */
    subFiltersWrapEl: '.globalsearch-subfilters',
    locationSubFiltersWrapEl: '.globalsearch-subfilters--locations',
    jobSubFiltersWrapEl: '.globalsearch-subfilters--jobs',
    distanceWrapEl: '.globalsearch-subfilter--distance',
    distanceEl: 'globalsearch-distance',
    careTypeEl: 'globalsearch-caretype',
    showAmenitiesEl: 'globalsearch-show-amenities',
    amenityFiltersWrapEl: '.globalsearch-amenities-list__wrap',
    amenityFilterEls: '.globalsearch-amenities-list__wrap input',
    applyAmenitiesEl: 'globalsearch-apply-amenities',
    clearAmenitiesEl: 'globalsearch-clear-amenities',
    mapToggleEl: 'globalsearch-show-map',
    jobCategoryEl: 'globalsearch-jobcategory',
    jobTypeEl: 'globalsearch-jobtype',
    /* end subfilter elements */

    resultsWrapEl: '.globalsearch-results__wrap',
    listElsWrapEl: '.globalsearch-results',
    resultsStagingArea: 'globalsearch-results__stage',
    listEls: '.globalsearch-results__group',
    locationsListEl: 'globalsearch-results-locations',
    jobsListEl: 'globalsearch-results-jobs',
    pagesListEl: 'globalsearch-results-pages',
    blogsListEl: 'globalsearch-results-blogs',
    paginationAnchorEl: 'globalsearch-pagination-anchor',
    paginationWrapEls: '.globalsearch-pagination__wrap',
    paginationTopEl: 'globalsearch-pagination-top',
    paginationBottomEl: 'globalsearch-pagination-bottom',

    /* begin templates */
    searchStatusTopTemplateEl: 'globalsearch-search-status-top',
    searchStatusBottomTemplateEl: 'globalsearch-search-status-bottom',
    locationsTemplateEl: 'globalsearch-template-locations',
    jobsTemplateEl: 'globalsearch-template-jobs',
    pagesTemplateEl: 'globalsearch-template-pages',
    blogsTemplateEl: 'globalsearch-template-blogs',
    paginationStatusTemplateEl: 'globalsearch-pagination-status-template',
    paginationTopTemplateEl: 'globalsearch-pagination-top-template',
    paginationBottomTemplateEl: 'globalsearch-pagination-bottom-template',
    /* end templates */

    loaderEl: '.globalsearch-loader__wrap', // spinner

    /* state */
    keywords: '',
    location: '',
    displayedLocation: '',
    results: {},
    categories: ['locations', 'jobs', 'pages', 'blogs'],

    /* subfilter state */
    distance: 150,
    careType: {
        id: '',
        name: ''
    },
    amenities: [],
    mapAvailable: false,
    mapShown: true,
    jobCategory: '',
    jobType: '',

    resultsTotal: 0,
    pageSize: 12, // if searchType multi then 3 or 4 based on viewport width, else 12
    authoredPageSize: 12,
    paginationInitialized: false,
    paginatedResults: [],
    stickyColumn: null,
    intersectionObserver: null,
    searchType: 'multi', // or 'single'

    sessionStorageKey: '', // sessionStorage key name set from the 'data-storage-key' DOM attribute on the formEl
    sessionStorage: '',

    siteSearchWidgetEls: '.globalsearch-widget--site', // i.e. gray magnifying glass in the site header
    locationSearchWidgetEls: '.globalsearch-widget--location', // i.e. find a location in the site header/footer
    widgetKeywordsEl: '.globalsearch-widget__keywords',
    // widgetDestinationUrl: '/en/site-search.html',

    cacheVariables() {

        this.formEl = document.getElementById(this.formEl);
        this.keywordsEl = document.getElementById(this.keywordsEl);
        this.locationEl = document.getElementById(this.locationEl);
        this.filterEls = document.querySelectorAll(this.filterEls);

        this.searchStatusTopEl = document.querySelector(this.searchStatusTopEl);
        this.searchStatusBottomEl = document.querySelector(this.searchStatusBottomEl);

        // begin subfilters
        this.subFiltersWrapEl = document.querySelector(this.subFiltersWrapEl);
        this.distanceWrapEl = document.querySelector(this.distanceWrapEl);
        this.distanceEl = document.getElementById(this.distanceEl);
        this.locationSubFiltersWrapEl = document.querySelector(this.locationSubFiltersWrapEl);
        this.careTypeEl = document.getElementById(this.careTypeEl);

        this.showAmenitiesEl = document.getElementById(this.showAmenitiesEl);
        this.amenityFiltersWrapEl = document.querySelector(this.amenityFiltersWrapEl);
        this.amenityFilterEls = document.querySelectorAll(this.amenityFilterEls);
        this.applyAmenitiesEl = document.getElementById(this.applyAmenitiesEl);
        this.clearAmenitiesEl = document.getElementById(this.clearAmenitiesEl);
        this.mapToggleEl = document.getElementById(this.mapToggleEl);

        this.jobSubFiltersWrapEl = document.querySelector(this.jobSubFiltersWrapEl);
        this.jobCategoryEl = document.getElementById(this.jobCategoryEl);
        this.jobTypeEl = document.getElementById(this.jobTypeEl);
        // end subfilters

        this.loaderEl = document.querySelector(this.loaderEl);

        this.resultsWrapEl = document.querySelector(this.resultsWrapEl);
        this.listElsWrapEl = document.querySelector(this.listElsWrapEl);
        this.resultsStagingArea = document.getElementById(this.resultsStagingArea);
        this.listEls = document.querySelectorAll(this.listEls);
        this.locationsListEl = document.getElementById(this.locationsListEl);
        this.jobsListEl = document.getElementById(this.jobsListEl);
        this.pagesListEl = document.getElementById(this.pagesListEl);
        this.blogsListEl = document.getElementById(this.blogsListEl);

        this.paginationAnchorEl = document.getElementById(this.paginationAnchorEl);
        this.paginationWrapEls = document.querySelectorAll(this.paginationWrapEls);
        this.paginationTopEl = document.getElementById(this.paginationTopEl);
        this.paginationBottomEl = document.getElementById(this.paginationBottomEl);

        this.searchStatusTopTemplate = _.template(document.getElementById(this.searchStatusTopTemplateEl).innerHTML);
        this.searchStatusBottomTemplate = _.template(document.getElementById(this.searchStatusBottomTemplateEl).innerHTML);
        this.locationsTemplate = _.template(document.getElementById(this.locationsTemplateEl).innerHTML);
        this.jobsTemplate = _.template(document.getElementById(this.jobsTemplateEl).innerHTML);
        this.pagesTemplate = _.template(document.getElementById(this.pagesTemplateEl).innerHTML);
        this.blogsTemplate = _.template(document.getElementById(this.blogsTemplateEl).innerHTML);
        this.paginationTopTemplate = _.template(document.getElementById(this.paginationTopTemplateEl).innerHTML);
        this.paginationBottomTemplate = _.template(document.getElementById(this.paginationBottomTemplateEl).innerHTML);

        this.authoredPageSize = this.formEl.getAttribute('data-authored-page-size');

        this.sessionStorageKey = this.formEl.getAttribute('data-storage-key');
        this.sessionStorage = Util.getSessionStorage({ key: this.sessionStorageKey });
        
    },
    init: async function() {
        this.cacheVariables();
        
        let keywords;
        const location = await this.getInit_Location();
        const distance = this.getInit_Distance();
        const categories = this.getInit_Categories();
        const mapShown = this.getInit_MapShown();
        const careType = this.getInit_CareType();
        let amenities;
        let jobCategory;
        let jobType;

        if (this.sessionStorage) {
            keywords = this.sessionStorage.keywords ? this.sessionStorage.keywords : this.keywords;
            amenities = this.sessionStorage.amenities ? this.sessionStorage.amenities : this.amenities;
            jobCategory = this.sessionStorage.jobCategory ? this.sessionStorage.jobCategory : this.jobCategory;
            jobType = this.sessionStorage.jobType ? this.sessionStorage.jobType : this.jobType;
        } else {
            keywords = this.getUI_Keywords();
            amenities = this.getUI_Amenities();
            jobCategory = this.jobCategoryEl.value;
            jobType = this.jobTypeEl.value;
        }

        this.setUI_Keywords(keywords);
        Util.setUI_Location({ element: this.locationEl, location: location });
        Util.setUI_Dropdown({ element: this.distanceEl, toValue: distance });
        this.setUI_Categories(categories);
        Util.setUI_Dropdown({ element: this.careTypeEl, toValue: careType.id });
        Util.setUI_Checkboxes({ elements: this.amenityFilterEls, toValues: amenities });
        Util.setUI_Dropdown({ element: this.jobCategoryEl, toValue: jobCategory });
        Util.setUI_Dropdown({ element: this.jobTypeEl, toValue: jobType });

        this.keywords = keywords;
        this.location = location;
        this.distance = distance;
        this.categories = categories;
        this.searchType = this.determineSearchType();
        this.mapShown = mapShown;
        this.mapAvailable = this.mapIsAvailable();
        this.careType = careType;
        this.amenities = amenities;
        this.jobCategory = jobCategory;
        this.jobType = jobType;
        
        this.doSearch();
        this.attachListeners();
    },
    /* 
        Begin Methods to Handle Authorable AEM Component Properties
    */
    getInit_Location: async function() {
        let location;
        const authoredLocation = this.locationEl.getAttribute('data-authored-location');
        if (authoredLocation) {
            location = await this.getAuthoredLocationFromQuery(authoredLocation);
        } else if (this.sessionStorage) {
            location = this.sessionStorage.location;
        } else {
            location = await Util.getLocationFromIP();
        }
        return location;
    },
    getAuthoredLocationFromQuery: async function(query) {
        let location;
        if (query.length > 2) { // city, state or zip authored location
            location = await Util.getLocationFromQuery(query);
        } else { // state authored location, i.e. 'GA'
            location = { lat: '', lng: '', formatted_address: query }; // see handleLocation() in this.buildSolrUrl()
        }
        return location;
    },
    getInit_Categories() {
        let categories;
        const isAuthored = this.formEl.getAttribute('data-is-authored-categories');
        if (isAuthored) {
            categories = this.getUI_Categories();
        } else if (this.sessionStorage && this.sessionStorage.categories) {
            categories = this.sessionStorage.categories;
        } else {
            categories = this.categories;
        }
        return categories;
    },
    getInit_Distance() {
        let distance;
        const isAuthored = this.formEl.getAttribute('data-is-authored-distance');
        if (isAuthored) {
            distance = this.distanceEl.value;
        } else if (this.sessionStorage && this.sessionStorage.distance) {
            distance = this.sessionStorage.distance;
        } else {
            distance = this.distance;
        }
        return distance;
    },
    getInit_MapShown() {
        const authoredValue = this.formEl.getAttribute('data-authored-map-shown');
        let mapShown = this.mapShown;
        if (authoredValue) {
            mapShown = authoredValue === 'show' ? true : false;
        } else if (this.sessionStorage && this.sessionStorage.mapShown != null) {
            mapShown = this.sessionStorage.mapShown;
        }
        return mapShown;
    },
    getInit_CareType() {
        let careType;
        const isAuthored = this.formEl.getAttribute('data-is-authored-care-type');
        if (isAuthored) {
            careType = Util.getUI_CareType({ element: this.careTypeEl });
        } else if (this.sessionStorage && this.sessionStorage.careType) {
            careType = this.sessionStorage.careType;
        } else {
            careType = this.careType;
        }
        return careType;
    },
    /* 
        End Methods to Handle Authorable AEM Component Properties
    */
    mapIsAvailable() {
        if (this.categories.length === 1 && this.categories[0] === 'locations' && this.locationEl.value)
            return true;

        return false;
    },
    needsGoogleMap() {
        if (this.mapIsAvailable() && this.mapShown)
            return true;

        return false;
    },
    doSearch: async function() {
        this.hideSearchResults();
        await this.prepareSearch();

        let requests = [];
        this.categories.forEach(category => requests.push(this.getResults(category)));
        const results = await Promise.allSettled(requests);
        results.forEach(result => {
            const category = result.value.category;
            const items = result.value.items;
            this.results[category] = items;
            this.resultsTotal += items.length;
            this.renderCategory(category);
        });

        this.showSearchResults();
        this.renderSearchStatus();
        Util.setSessionStorage({
            key: this.sessionStorageKey,
            value: {
                'keywords': this.keywords, 
                'location': this.location,
                'distance': this.distance,
                'categories': this.categories,
                'mapShown': this.mapShown,
                'careType': this.careType,
                'amenities': this.amenities,
                'jobCategory': this.jobCategory,
                'jobType': this.jobType
            }
        });
        this.trackAnalytics();
        return true;
    },
    prepareSearch: async function() {
        this.keywords = this.getUI_Keywords();
        await this.handleLocationOnSearch();
        this.categories = this.getUI_Categories();
        this.results = {};
        this.resultsTotal = 0;
        this.paginationInitialized = false;
        this.searchType = this.determineSearchType(); // set searchType after categories
        if (this.searchType === 'single') {
            this.pageSize = this.authoredPageSize ? this.authoredPageSize : 12;
            this.distance = this.distanceEl.value;
            this.careType = Util.getUI_CareType({ element: this.careTypeEl });
            this.amenities = this.getUI_Amenities();
            this.mapAvailable = this.mapIsAvailable();
            this.jobCategory = this.jobCategoryEl.value;
            this.jobType = this.jobTypeEl.value;
        } else {
            this.pageSize = (window.innerWidth > 767 && window.innerWidth < 992) ? 4 : 3;
            this.clearSubFilters();
        }
        return true;
    },
    handleLocationOnSearch: async function() {
        const location = await Util.getUI_Location({ element: this.locationEl });
        this.location = location;
        this.displayedLocation = location.formatted_address ? location.formatted_address.replace(', USA', '') : '';
        return true;
    },
    getResults(category) {
        const solrUrl = this.buildSolrUrl(category);
        return new Promise(resolve => {
            let results = { 
                category: [category],
                items: []
            };
            var handleError = () => {
                console.log(`Error getting results for ${category}: ${solrUrl}`);
                resolve(results);
            };
            var xhr = new XMLHttpRequest();
            xhr.open('GET', solrUrl, true);
            xhr.onload = e => {
                if (xhr.status !== 200) handleError();
                const payload = JSON.parse(e.target.response);
                if (!payload || !payload[category]) handleError();
                results.items = payload[category];
                resolve(results);
            };
            xhr.onerror = () => handleError();
            xhr.send(null);
        });
    },
    buildSolrUrl(category) {
        let searchKeywords = ''; // ?q=
        let filterKeywords = ''; // &fq=
        let location = '';
        let state = '';
        let distance = '';
        let rows = '';
        let sort = '';
        let careTypeId = '';
        let amenities = [];
        let jobCategory = '';
        let jobType = '';
        let boosters = { // &bq=
            title: { value: this.keywords }
        };

        var handleLocation = () => {
            if (this.location) {
                if (this.location.lat) {
                    location = this.location;
                    distance = this.distance;
                } else {
                    state = this.location.formatted_address;
                }
            }
        };

        switch (category) {
            case 'locations':
                filterKeywords = this.keywords;
                careTypeId = this.careType.id;
                amenities = this.amenities;
                boosters.contentType = { value: 'community', rank: 0.025 };
                boosters.financial_reporting = { value: Util.getParameterByName('finrpt') || '' };
                handleLocation();
                rows = 1500;
                break;
            case 'jobs':
                filterKeywords = this.keywords; 
                jobCategory = this.jobCategory;
                jobType = this.jobType;
                handleLocation();
                sort = { by: 'geodist()', order: 'asc' };
                rows = 6000;
                break;
            case 'pages':
                if (this.keywords)
                    searchKeywords = this.keywords;
                else
                    sort = { by: 'createDate', order: 'desc' };
                rows = 60;
                break;
            case 'blogs':
                if (this.keywords)
                    searchKeywords = this.keywords;
                else
                    sort = { by: 'createDate', order: 'desc' };
                rows = 60;
                break;
            default:
                break;
        }

        return Util.buildSolrUrl({
            keywords: searchKeywords,
            filters: {
                'keywords': {
                    value: filterKeywords
                },
                'contentCategory': {
                    value: category
                },
                'careTypesJSONString.care_type_id': {
                    value: careTypeId
                },
                'amenitiesJSONString.amenity_id': {
                    value: amenities
                },
                'positioncategory-formattedvalue': {
                    value: jobCategory
                },
                'positiontype-value': {
                    value: jobType
                }
            },
            boosters: boosters,
            location: location,
            state: state,
            distance: distance,
            rows: rows,
            sort: sort
        });
    },
    hideSearchResults() {
        Util.hide(this.listElsWrapEl);
        this.listElsWrapEl.classList.remove('in');
        Util.show(this.loaderEl);
        Util.hide(this.paginationWrapEls);
        Util.hide(this.subFiltersWrapEl);
        Util.hide(this.amenityFiltersWrapEl);
        // empty each category list and move to staging area
        this.listEls.forEach(el => {
            while (el.firstChild) el.removeChild(el.firstChild);
            this.resultsStagingArea.appendChild(el);
        });
    },
    renderCategory(category) {
        if (!this.results[category] || !this.results[category].length)
            return;

        const resultsListEl = this[`${category}ListEl`];
        this.listElsWrapEl.appendChild(resultsListEl);
        resultsListEl.innerHTML = this[`${category}Template`]({
            'results': this.results[category],
            'displayedLocation': this.displayedLocation,
            'limit': this.pageSize,
            'total': this.results[category].length,
            'keywords': this.keywords,
            'searchType': this.searchType,
            'mapAvailable': this.mapAvailable,
            'mapShown': this.mapShown
        });
    },
    showSearchResults() {
        Util.hide(this.loaderEl);
        Util.show(this.listElsWrapEl);
        setTimeout(() => this.listElsWrapEl.classList.add('in'), 150);
        if (this.searchType === 'single') {
            const category = this.categories[0];
            this.setupPagination({ results: this.results[category] });
            this.showSubFilters(category);
        } else {
            this.lazyLoadImages();
        }
    },
    renderSearchStatus() {
        const data = {
            'total': this.resultsTotal,
            'keywords': this.keywords,
            'location': this.location,
            'displayedLocation': this.displayedLocation,
            'categories': this.categories,
            'searchType': this.searchType,
            'careType': this.careType,
            'jobCategory': this.jobCategory
        };
        this.searchStatusTopEl.innerHTML = this.searchStatusTopTemplate(data);
        this.searchStatusBottomEl.innerHTML = this.searchStatusBottomTemplate(data);
    },
    clearSubFilters() {
        Util.setUI_Dropdown({ element: this.distanceEl, toValue: 150 });
        Util.setUI_Dropdown({ element: this.careTypeEl, toValue: '' });
        Util.setUI_Checkboxes({ elements: this.amenityFilterEls, toValues: [] });
        Util.setUI_Dropdown({ element: this.jobCategoryEl, toValue: '' });
        Util.setUI_Dropdown({ element: this.jobTypeEl, toValue: '' });
        this.distance = 150;
        this.careType = '';
        this.amenities = [];
        this.mapAvailable = false;
        this.jobCategory = '';
        this.jobType = '';
    },
    showSubFilters(category) {
        var handleLocation = () => {
            if (this.location) {
                Util.show(this.distanceWrapEl);
            } else {
                Util.hide(this.distanceWrapEl);
            }
        };
        if (category === 'locations') {
                Util.show(this.locationSubFiltersWrapEl);
                Util.hide(this.jobSubFiltersWrapEl);
                handleLocation();
                Util.show(this.subFiltersWrapEl);
        } else if (category === 'jobs') {
                Util.show(this.jobSubFiltersWrapEl);
                Util.hide(this.locationSubFiltersWrapEl);
                handleLocation();
                Util.show(this.subFiltersWrapEl);
        }
    },
    getUI_Keywords() {
        return this.keywordsEl.value.trim();
    },
    setUI_Keywords(keywords) {
        var parentEl = this.keywordsEl.parentElement;
        if (keywords) {
            parentEl.classList.add('hasVal');
        } else {
            parentEl.classList.remove('hasVal');
        }
        this.keywordsEl.value = keywords;
    },
    getUI_Categories() {
        let selectedCategories = [];
        let hasFilter = false;
        this.filterEls.forEach(el => {
            if (el.checked) {
                selectedCategories.push(el.value);
                hasFilter = true;
            }
        });
        if (!hasFilter) {
            selectedCategories = ['locations', 'jobs', 'pages', 'blogs'];
        }
        return selectedCategories;
    },
    setUI_Categories(categories) {
        if (categories.length === 4) {
            this.filterEls.forEach(input => input.checked = false);
            return;
        }
        this.filterEls.forEach(input => {
            if (Util.arrayIncludes(categories, input.value)) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
    },
    getUI_Amenities() {
        let values = [];
        this.amenityFilterEls.forEach(el => {
            if (el.checked) {
                values = _.union(values, el.value.split(',').map(id => id.trim()));
            }
        });
        return values;
    },
    determineSearchType() {
        var searchType = this.categories.length === 1 ? 'single' : 'multi';
        return searchType;
    },
    setupPagination({results}={}) {
        if (this.categories.length > 1 || !results || !results.length) return;
        Util.show(this.paginationWrapEls);
        const total = results.length;
        const categoryName = this.categories[0];
        const listEl = this[`${categoryName}ListEl`];
        const template = this[`${categoryName}Template`];
        const self = this;
        $("#globalsearch-pagination").pagination({
            dataSource: results,
            prevText: "Previous",
            nextText: "Next",
            pageSize: self.pageSize,
            pageRange: (window.innerWidth < 680) ? 1 : 4,
            pageNumber: 1,
            callback: function(data, pagination) {
                var start = (pagination.pageNumber - 1) * pagination.pageSize + 1;
                var end = (pagination.pageNumber - 1) * pagination.pageSize + data.length;
                data.pageOffset = (pagination.pageNumber - 1) * self.pageSize;
                self.renderPaginationStatus(start, end, total, categoryName);
                if (self.paginationInitialized) {
                    Util.anchorTo(self.paginationAnchorEl);
                    self.listElsWrapEl.classList.remove('in');
                }
                setTimeout(() => {
                    listEl.innerHTML = template({
                        'results': data,
                        'formatted_address': self.location.formatted_address,
                        'limit': self.pageSize,
                        'total': total,
                        'searchType': self.searchType,
                        'mapAvailable': self.mapAvailable,
                        'mapShown': self.mapShown
                    });
                    self.listElsWrapEl.classList.add('in');
                    self.lazyLoadImages();
                    self.paginatedResults = data;
                    if (self.needsGoogleMap()) self.listenForEnterViewport(); // set self.paginatedResults before building google map
                    Util.flipDialogTechNumbers();
                    self.paginationInitialized = true;
                }, 150);
            }
        });
        this.lazyLoadImages();
        if (this.mapIsAvailable()) this.dispatchLocationsTotal();
    },
    renderPaginationStatus(low, high, total, categoryName) {
        const data = {
            'low': low,
            'high': high,
            'total': total,
            'category': categoryName,
            'careType': this.careType,
            'jobCategory': this.jobCategory,
            'mapAvailable': this.mapAvailable,
            'mapShown': this.mapShown
        };
        this.paginationTopEl.innerHTML = this.paginationTopTemplate(data);
        this.paginationBottomEl.innerHTML = this.paginationBottomTemplate(data);
    },
    /* Begin Map Logic */
    listenForEnterViewport() {
        if (!this.intersectionObserver) {
            this.intersectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        ctcoreapp.globalSearch.handleMap();
                        observer.unobserve(entry.target);
                    }
                });
            });
        }
        this.intersectionObserver.observe(this.resultsWrapEl);
    },
    handleMap() {
        if (!ctcoreapp.googleMapsLoader.libraryIsLoaded) {
            ctcoreapp.googleMapsLoader.loadGoogleMaps(); // callback triggers this.handleMap() again
            return;
        }
        const mapContainer = document.getElementById('globalsearch-map');
        if (!mapContainer) return;
        Util.GoogleMap.build({
            container: mapContainer,
            data: this.paginatedResults
        });
        this.handleStickyColumn();
    },
    handleStickyColumn() {
        if (this.stickyColumn) this.stickyColumn.destroy();
        this.stickyColumn = new StickyColumn({
            column: '.globalsearch-map__wrap--outer',
            element: '.globalsearch-map__wrap--inner',
            siteHeaderOffset: 80,
            breakpoint: 768
        });
        this.stickyColumn.init();
    },
    handleMapToggleBtnClick() {
        this.mapShown = this.mapShown ? false : true;
        this.doSearch();
    },
    /*  End Map Logic */
    handleCardNumberClick(e) {
        window.location.href = e.currentTarget.getAttribute('data-url');
    },
    doSeeAllCategory(category) {
        this.setUI_Categories([category]);
        this.categories = [category];
        this.searchType = 'single';
        Util.anchorTo(this.paginationAnchorEl);
        this.doSearch();
    },
    lazyLoadImages() {
        document.querySelectorAll('.globalsearch-results-item__image').lazyload();
    },
    attachListeners() {
        this.formEl.addEventListener('submit', e => {
            e.preventDefault();
            if (window.innerWidth < 768) Util.anchorTo(this.paginationAnchorEl);
            this.doSearch();
        });
        this.distanceEl.addEventListener('change', () => this.doSearch());
        this.careTypeEl.addEventListener('change', () => this.doSearch());
        this.jobCategoryEl.addEventListener('change', () => this.doSearch());
        this.jobTypeEl.addEventListener('change', () => this.doSearch());
        this.applyAmenitiesEl.addEventListener('click', () => this.doSearch());
        this.clearAmenitiesEl.addEventListener('click', () => {
            Util.setUI_Checkboxes({ elements: this.amenityFilterEls, toValues: [] });
        });
        this.showAmenitiesEl.addEventListener('click', () => {
            if (this.amenityFiltersWrapEl.classList.contains('hidden')) {
                Util.show(this.amenityFiltersWrapEl);
            } else {
                Util.hide(this.amenityFiltersWrapEl);
            }
        });
    },
    trackAnalytics() {
        Util.flipDialogTechNumbers();
        if (typeof _satellite != 'undefined') {
            _satellite.track("GlobalSearch");
        }
    },
    dispatchLocationsTotal() {
        var peekTotalEl = document.querySelector(`.${ctcoreapp.sneakpeek.unlock_class} #sneekpeek-modal-header-total`);
        if (peekTotalEl) {
            peekTotalEl.textContent = `${this.results.locations.length} `;
        }
    },
    handleSiteSearchWidgets() {
        const widgetEls = document.querySelectorAll(this.siteSearchWidgetEls);
        widgetEls.forEach(widget => {
            widget.addEventListener('submit', async e => {
                e.preventDefault();
                const keywords = widget.querySelector(this.widgetKeywordsEl).value.trim();
                const locationEl = widget.querySelector('.js-autocomplete-location');
                /* 
                    keywords are required if location field exists but no location is entered,
                    location is optional and can be submitted without keywords
                */
                const missingRequiredFields = () => !keywords && locationEl && !locationEl.value.trim();
                if (missingRequiredFields()) {
                    Util.show(widget.querySelector('.alert'));
                    return;
                }
                let location;
                if (locationEl) {
                    location = await Util.getUI_Location({ element: locationEl });
                } else {
                    location = await Util.getLocationFromIP(); // only make this AJAX call upon submit, rather than on page load
                }
                Util.setSessionStorage({
                    key: 'bkd-site-search',
                    value: {
                        'keywords': keywords,
                        'location': location,
                        'distance': 150,
                        'categories': ['locations', 'jobs', 'pages', 'blogs']
                    }
                });
                window.location.href = widget.getAttribute('data-destination-url');
            });
        });
    },
    handleLocationSearchWidgets() {
        const widgetEls = document.querySelectorAll(this.locationSearchWidgetEls);
        widgetEls.forEach(widget => {
            widget.addEventListener('submit', async e => {
                e.preventDefault();
                const location = await Util.getUI_Location({ element: widget.querySelector('.js-autocomplete-location') });
                const distance = widget.getAttribute('data-distance') || 150;
                const careType = Util.getUI_CareType({ element: widget.querySelector('.globalsearch-widget__caretype') });
                Util.setSessionStorage({
                    key: 'bkd-location-search',
                    value: {
                        'keywords': '',
                        'location': location,
                        'distance': distance,
                        'categories': ['locations'],
                        'careType': careType,
                        'amenities': []
                    }
                });
                window.location.href = widget.getAttribute('data-destination-url');
            });
        });
    }
};


$(document).ready(function() {
    if (document.getElementById(ctcoreapp.globalSearch.formEl)) {
        ctcoreapp.globalSearch.init();
    }
    ctcoreapp.globalSearch.handleSiteSearchWidgets();
    ctcoreapp.globalSearch.handleLocationSearchWidgets();
});
