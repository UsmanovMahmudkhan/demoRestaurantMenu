import { Language, Category, MenuItem } from './types';
import { categories, translatorTexts, menuItems } from './data';
import { renderDetailPage } from './detail';

// Add a console log to verify it's working
console.log('App initialized with menu items:', menuItems.length);

// Initialize current language
let currentLanguage: Language = 'en';
let currentCategory = 'all';
let currentView: 'menu' | 'detail' = 'menu';
let currentItemId: string | null = null;

// Define videos data for the gallery
const videos = [
  {
    id: 'video-1',
    thumbnail: '/imgs/nail/first.png',
    title: 'Destination: Dinner',
    description: 'Leave your worries behind—good vibes and great meals await.',
    type: 'youtube',
    videoId: '2U-4Fqkvq9A' // Sample video ID - replace with actual Uzbek cooking video
  },
  {
    id: 'video-2',
    thumbnail: '/imgs/nail/second.png',
    title: 'WOOOOOWWW,Really',
    description: 'My gosh! Is it good? Is it a new world?',
    type: 'youtube',
    videoId: 'aY5DglkijMY' // Sample video ID - replace with actual bread making video
  },
  {
    id: 'video-3',
    thumbnail: '/imgs/nail/third.png',
    title: 'Uzbek Cuisine Tour in Chusok',
    description: 'Tour of popular Uzbek dishes and cooking techniques',
    type: 'instagram',
    videoId: 'DAOUJEByQS2' // Sample video ID - replace with actual cuisine tour video
  },
  {
    id: 'video-4',
    thumbnail: '/imgs/nail/three.png',
    title: 'Uzbek Restaurant in Dongdemun ',
    description: 'Who would go to a Uzbekistan restaurant near Dongdaemun, South Korea?',
    type: 'youtube',
    videoId: 'aY5DglkijMY' // Example Instagram video ID
  },
  {
    id: 'video-5',
    thumbnail: '/imgs/nail/last.png',
    title: 'Uzbek Dessert Making',
    description: 'Learn how to make traditional Uzbek desserts',
    type: 'instagram',
    videoId: 'DGYLCw8vD6H' // Example Instagram video ID
  }
];

// Function to create the full HTML structure
function renderApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  // Check if we're in menu view or detail view
  if (currentView === 'detail' && currentItemId) {
    // Render detail page
    app.innerHTML = renderDetailPage(currentItemId, currentLanguage);

    // Add event listeners for detail page
    document.querySelectorAll('.back-to-menu').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        currentView = 'menu';
        renderApp();
      });
    });

    document.querySelectorAll('.similar-item').forEach(item => {
      item.addEventListener('click', () => {
        const itemId = (item as HTMLElement).getAttribute('data-item-id');
        if (itemId) {
          currentItemId = itemId;
          renderApp();
        }
      });
    });

    return;
  }

  // Build the menu HTML structure
  app.innerHTML = `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">${translatorTexts[currentLanguage].restaurantName}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link ${currentCategory === 'all' ? 'active' : ''}" href="#">
                ${translatorTexts[currentLanguage].all}
              </a>
            </li>
            ${categories.map(category => `
              <li class="nav-item">
                <a class="nav-link ${currentCategory === category.id ? 'active' : ''}"
                   href="#${category.id}" data-category="${category.id}">
                  ${category.translations[currentLanguage].name}
                </a>
              </li>
            `).join('')}
          </ul>
          <div class="d-flex align-items-center">
            <span class="me-2">${translatorTexts[currentLanguage].languageSelector}:</span>
            <img src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/us.svg" alt="English" width="24"
                class="lang-selector ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
            <img src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/jp.svg" alt="Japanese" width="24"
                class="lang-selector ${currentLanguage === 'ja' ? 'active' : ''}" data-lang="ja">
            <img src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/kr.svg" alt="Korean" width="24"
                class="lang-selector ${currentLanguage === 'ko' ? 'active' : ''}" data-lang="ko">
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero-section">
      <div class="container text-center">
        <h1 class="hero-title">${translatorTexts[currentLanguage].restaurantName}</h1>
        <p class="lead">${translatorTexts[currentLanguage].restaurantTagline}</p>
        <div class="mt-4">
          <a href="#menu" class="btn btn-light btn-lg">${translatorTexts[currentLanguage].viewMenu}</a>
          <a href="#gallery" class="btn btn-outline-light btn-lg ms-2">${translatorTexts[currentLanguage].viewGallery}</a>
        </div>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="container mt-4" id="menu">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="input-group search-box">
            <input type="text" class="form-control" id="searchInput" placeholder="${translatorTexts[currentLanguage].search}">
            <button class="btn btn-primary" id="menu-filter-btn" type="button">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mb-4">
        <h5>${translatorTexts[currentLanguage].filterByCategory}</h5>
        <div class="category-filters">
          <button class="btn category-btn ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
            ${translatorTexts[currentLanguage].all}
          </button>
          ${categories.map(category => `
            <button class="btn category-btn ${currentCategory === category.id ? 'active' : ''}" data-category="${category.id}">
              ${category.translations[currentLanguage].name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Menu Section -->
    <div class="container menu-container">
      ${categories.map(category => `
        <section id="${category.id}-section" class="mb-5 menu-section ${currentCategory !== 'all' && currentCategory !== category.id ? 'visually-hidden' : ''}">
          <h2 class="menu-section-title">${category.translations[currentLanguage].name}</h2>
          <div class="row" id="${category.id}-items">
            ${renderMenuItemsByCategory(category.id as Category)}
          </div>
        </section>
      `).join('')}
    </div>

    <!-- Gallery Section -->
    <div class="container-fluid gallery-bg py-5 mt-5" id="gallery">
      <div class="container">
        <h2 class="text-center gallery-title mb-5">${translatorTexts[currentLanguage].photoGallery}</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d" alt="Restaurant interior" class="img-fluid">
              <div class="gallery-overlay">
                <div class="gallery-caption">${translatorTexts[currentLanguage].restaurantInterior}</div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" alt="Traditional setting" class="img-fluid">
              <div class="gallery-overlay">
                <div class="gallery-caption">${translatorTexts[currentLanguage].traditionalSetting}</div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee" alt="Chef preparing food" class="img-fluid">
              <div class="gallery-overlay">
                <div class="gallery-caption">${translatorTexts[currentLanguage].chefPreparingFood}</div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="gallery-item">
              <img src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1" alt="Private dining area" class="img-fluid">
              <div class="gallery-overlay">
                <div class="gallery-caption">${translatorTexts[currentLanguage].privateDining}</div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="gallery-item">
              <img src="/imgs/decort.png" alt="Traditional decoration" class="img-fluid">
              <div class="gallery-overlay">
                <div class="gallery-caption">${translatorTexts[currentLanguage].traditionalDecoration}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Gallery Section -->
        <h2 class="text-center gallery-title mt-5 mb-5">${translatorTexts[currentLanguage].videoGallery}</h2>
        <div class="row g-4">
          ${videos.map(video => `
            <div class="col-md-4">
              <div class="video-gallery-item" data-video-id="${video.videoId}" data-video-type="${video.type}">
                <img src="${video.thumbnail}" alt="${video.title}" class="img-fluid">
                <div class="video-play-icon">
                  <i class="bi ${video.type === 'youtube' ? 'bi-youtube' : 'bi-instagram'}"></i>
                </div>
                <div class="video-info p-3 bg-white">
                  <h5 class="mt-2">${video.title}</h5>
                  <p class="text-muted">${video.description}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Video Modals -->
    <!-- YouTube Modal -->
    <div class="modal fade" id="youtubeModal" tabindex="-1" aria-labelledby="youtubeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="youtubeModalLabel">Video</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="ratio ratio-16x9">
              <iframe id="youtubeFrame" src="" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram Modal -->
    <div class="modal fade" id="instagramModal" tabindex="-1" aria-labelledby="instagramModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="instagramModalLabel">Instagram</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="instagramEmbed" class="instagram-embed-container"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-5">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4">
            <h5>${translatorTexts[currentLanguage].restaurantName}</h5>
            <p>${translatorTexts[currentLanguage].address}</p>
            <p>${translatorTexts[currentLanguage].phone}</p>
          </div>
          <div class="col-md-4 text-center">
            <h5>${translatorTexts[currentLanguage].openingHours}</h5>
            <p>${translatorTexts[currentLanguage].weekdays}: 11:00 - 22:00</p>
            <p>${translatorTexts[currentLanguage].weekends}: 10:00 - 23:00</p>
          </div>
          <div class="col-md-4 text-md-end">
            <h5>${translatorTexts[currentLanguage].languageSelector}</h5>
            <p>
              <a href="#" class="text-white me-3" data-lang="en">${translatorTexts[currentLanguage].english}</a>
              <a href="#" class="text-white me-3" data-lang="ja">${translatorTexts[currentLanguage].japanese}</a>
              <a href="#" class="text-white" data-lang="ko">${translatorTexts[currentLanguage].korean}</a>
            </p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col text-center">
            <p class="mb-0">${translatorTexts[currentLanguage].copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Add event listeners
  addEventListeners();

  // Load Instagram embed script
  loadInstagramEmbedScript();
}

// Function to render menu items for a specific category
function renderMenuItemsByCategory(categoryId: Category): string {
  const filteredItems = menuItems.filter((item: MenuItem) => item.category === categoryId);

  return filteredItems.map((item: MenuItem) => `
    <div class="col-md-6 col-lg-4 mb-4 menu-item-card" data-category="${item.category}" data-item-id="${item.id}">
      <div class="menu-item" data-item-id="${item.id}">
        <img src="${item.image}" alt="${item.translations[currentLanguage].name}" class="menu-item-img">
        <div class="menu-item-body">
          <h5 class="menu-item-title">${item.translations[currentLanguage].name}</h5>
          <div class="menu-item-price">${translatorTexts[currentLanguage].currencySymbol}${item.price.toFixed(2)}</div>
          <p class="menu-item-description">${item.translations[currentLanguage].description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Load Instagram embed script
function loadInstagramEmbedScript() {
  if (!document.getElementById('instagram-embed-script')) {
    const script = document.createElement('script');
    script.id = 'instagram-embed-script';
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  } else {
    // If script already exists, try to process any pending embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }
}

// Add all event listeners
function addEventListeners() {
  // Category filter buttons
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const category = target.getAttribute('data-category') || 'all';

      // Update active button
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      target.classList.add('active');

      // Update current category
      currentCategory = category;

      // Filter menu sections
      filterMenuSections(category);
    });
  });

  // Language selector
  document.querySelectorAll('.lang-selector').forEach(selector => {
    selector.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const lang = target.getAttribute('data-lang') as Language;
      if (lang) {
        currentLanguage = lang;
        renderApp();
      }
    });
  });

  // Footer language links
  document.querySelectorAll('footer a[data-lang]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const lang = target.getAttribute('data-lang') as Language;
      if (lang) {
        currentLanguage = lang;
        renderApp();
      }
    });
  });

  // Nav items for scrolling
  document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const category = target.getAttribute('data-category');

      if (category) {
        // Update current category
        currentCategory = category;

        // Update nav link active status
        document.querySelectorAll('#navbarNav .nav-link').forEach(navLink => {
          navLink.classList.remove('active');
        });
        target.classList.add('active');

        // Filter menu sections
        filterMenuSections(category);

        // Scroll to section
        const section = document.querySelector(`#${category}-section`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // It's the "All" link
        currentCategory = 'all';

        // Update nav link active status
        document.querySelectorAll('#navbarNav .nav-link').forEach(navLink => {
          navLink.classList.remove('active');
        });
        target.classList.add('active');

        // Show all sections
        filterMenuSections('all');

        // Scroll to menu
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Gallery image hover effect
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered');
    });
  });

  // Menu items click for detail view
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const itemId = item.getAttribute('data-item-id');
      if (itemId) {
        // Save current position to restore it later
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());

        // Update state
        currentItemId = itemId;
        currentView = 'detail';

        // Render detail view
        renderApp();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Video gallery item click
  document.querySelectorAll('.video-gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const videoId = item.getAttribute('data-video-id');
      const videoType = item.getAttribute('data-video-type');

      if (videoId) {
        if (videoType === 'youtube') {
          // Handle YouTube video
          const youtubeModal = document.getElementById('youtubeModal') as HTMLElement;
          const youtubeFrame = document.getElementById('youtubeFrame') as HTMLIFrameElement;

          // Set the YouTube embed URL
          youtubeFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

          // Show the modal using Bootstrap
          showModal(youtubeModal);

          // When modal is hidden, stop the video
          youtubeModal.addEventListener('hidden.bs.modal', () => {
            youtubeFrame.src = '';
          });
        } else if (videoType === 'instagram') {
          // Handle Instagram video
          const instagramModal = document.getElementById('instagramModal') as HTMLElement;
          const instagramEmbed = document.getElementById('instagramEmbed');

          if (instagramEmbed) {
            // Create Instagram embed HTML
            instagramEmbed.innerHTML = `
              <blockquote class="instagram-media" data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/${videoId}/"
                data-instgrm-version="14">
              </blockquote>
            `;

            // Show the modal
            showModal(instagramModal);

            // Process the embed
            if (window.instgrm) {
              window.instgrm.Embeds.process();
            } else {
              // If Instagram script hasn't loaded yet, load it
              loadInstagramEmbedScript();
            }
          }
        }
      }
    });
  });

  // Search functionality
  const searchInput = document.querySelector<HTMLInputElement>('#searchInput');
  searchInput?.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    searchMenuItems(searchValue);
  });
}

// Function to show a modal using Bootstrap
function showModal(modalElement: HTMLElement) {
  const bootstrapWindow = (window as unknown) as {
    bootstrap: {
      Modal: new (element: HTMLElement) => { show: () => void }
    }
  };
  const modal = new bootstrapWindow.bootstrap.Modal(modalElement);
  modal.show();
}

// Filter menu sections by category
function filterMenuSections(category: string) {
  document.querySelectorAll('.menu-section').forEach(section => {
    if (category === 'all') {
      section.classList.remove('visually-hidden');
    } else {
      const sectionId = section.id;
      const sectionCategory = sectionId.replace('-section', '');

      if (sectionCategory === category) {
        section.classList.remove('visually-hidden');
      } else {
        section.classList.add('visually-hidden');
      }
    }
  });

  // Update category buttons active state
  document.querySelectorAll('.category-btn').forEach(btn => {
    const btnCategory = btn.getAttribute('data-category');
    if (btnCategory === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Fix type definition for search functionality
function searchMenuItems(searchValue: string) {
  // Reset sections visibility first
  document.querySelectorAll('.menu-section').forEach(section => {
    if (currentCategory === 'all' || section.id.includes(currentCategory)) {
      section.classList.remove('visually-hidden');
    } else {
      section.classList.add('visually-hidden');
    }
  });

  // If search is empty, show all items in current category
  if (!searchValue.trim()) {
    document.querySelectorAll('.menu-item-card').forEach(item => {
      if (currentCategory === 'all' || item.getAttribute('data-category') === currentCategory) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
    return;
  }

  // Otherwise, search in the current language
  const itemsToSearch = menuItems.map((item: MenuItem) => ({
    id: item.id,
    name: item.translations[currentLanguage].name.toLowerCase(),
    description: item.translations[currentLanguage].description.toLowerCase(),
    category: item.category
  }));

  // Find matching items
  const matchingItemIds = itemsToSearch
    .filter((item: {name: string, description: string, category: Category, id: string}) =>
      item.name.includes(searchValue) || item.description.includes(searchValue))
    .filter((item: {name: string, description: string, category: Category, id: string}) =>
      currentCategory === 'all' || item.category === currentCategory)
    .map((item: {name: string, description: string, category: Category, id: string}) =>
      item.id);

  // Track which sections have visible items
  const sectionsWithVisibleItems = new Set<string>();

  // Show/hide items based on search
  document.querySelectorAll('.menu-item-card').forEach(itemElement => {
    const menuItemId = itemElement.getAttribute('data-item-id');
    const category = itemElement.getAttribute('data-category');

    if (menuItemId && matchingItemIds.includes(menuItemId)) {
      (itemElement as HTMLElement).style.display = 'block';
      if (category) {
        sectionsWithVisibleItems.add(category);
      }
    } else {
      (itemElement as HTMLElement).style.display = 'none';
    }
  });

  // Show/hide sections based on whether they have visible items
  document.querySelectorAll('.menu-section').forEach(section => {
    const sectionId = section.id;
    const sectionCategory = sectionId.replace('-section', '');

    if (sectionsWithVisibleItems.has(sectionCategory)) {
      section.classList.remove('visually-hidden');
    } else if (currentCategory !== 'all' && currentCategory !== sectionCategory) {
      section.classList.add('visually-hidden');
    }
  });
}

// Add a type definition for the Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

// Handle back button
window.addEventListener('popstate', () => {
  if (currentView === 'detail') {
    currentView = 'menu';
    renderApp();

    // Restore scroll position
    const storedPosition = sessionStorage.getItem('scrollPosition');
    if (storedPosition) {
      window.scrollTo({ top: parseInt(storedPosition), behavior: 'auto' });
    }
  }
});

// Initial rendering
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
