import { Language, MenuItem } from './types';
import { translatorTexts, menuItems } from './data';

/**
 * Render a detail page for a specific menu item
 * @param itemId The ID of the menu item to display
 * @param language The current language
 */
export function renderDetailPage(itemId: string, language: Language): string {
  // Find the menu item by ID
  const menuItem = menuItems.find((item: MenuItem) => item.id.toString() === itemId);

  if (!menuItem) {
    return `
      <div class="container mt-5 text-center">
        <h2>${translatorTexts[language].itemNotFound}</h2>
        <p>${translatorTexts[language].itemNotFoundDescription}</p>
        <a href="#" class="btn btn-primary back-to-menu">${translatorTexts[language].backToMenu}</a>
      </div>
    `;
  }

  // Get translation for the current language
  const translation = menuItem.translations[language];

  return `
    <div class="detail-page">
      <div class="container">
        <div class="row my-4">
          <div class="col-12">
            <a href="#" class="btn btn-outline-primary back-to-menu mb-3">
              <i class="bi bi-arrow-left"></i> ${translatorTexts[language].backToMenu}
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="detail-image-container">
              <img src="${menuItem.image}" alt="${translation.name}" class="detail-image img-fluid rounded shadow">
            </div>
          </div>

          <div class="col-md-6">
            <div class="detail-content p-3">
              <h1 class="detail-title">${translation.name}</h1>

              <div class="detail-category mb-3">
                <span class="badge bg-primary">${translatorTexts[language].categories[menuItem.category]}</span>
              </div>

              <div class="detail-price mb-4">
                ${translatorTexts[language].priceLabel}:
                <span class="price-value">${translatorTexts[language].currencySymbol}${menuItem.price.toFixed(2)}</span>
              </div>

              <div class="detail-description mb-4">
                <h5>${translatorTexts[language].description}</h5>
                <p>${translation.description}</p>
              </div>

              <div class="detail-ingredients mb-4">
                <h5>${translatorTexts[language].ingredients}</h5>
                <ul class="ingredients-list">
                  ${translation.ingredients.map((ing: string) =>
                    `<li><i class="bi bi-check-circle-fill text-success me-2"></i>${ing}</li>`
                  ).join('')}
                </ul>
              </div>

              <div class="detail-nutrition mb-4">
                <h5>${translatorTexts[language].nutritionalInfo}</h5>
                <div class="row g-2">
                  <div class="col-6">
                    <div class="nutrition-item">
                      <div class="nutrition-label">${translatorTexts[language].calories}</div>
                      <div class="nutrition-value">${Math.floor(Math.random() * 400) + 200} kcal</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="nutrition-item">
                      <div class="nutrition-label">${translatorTexts[language].protein}</div>
                      <div class="nutrition-value">${Math.floor(Math.random() * 20) + 5}g</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="nutrition-item">
                      <div class="nutrition-label">${translatorTexts[language].carbs}</div>
                      <div class="nutrition-value">${Math.floor(Math.random() * 50) + 10}g</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="nutrition-item">
                      <div class="nutrition-label">${translatorTexts[language].fats}</div>
                      <div class="nutrition-value">${Math.floor(Math.random() * 20) + 5}g</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4 mb-5">
          <div class="col-12">
            <h3 class="similar-title">${translatorTexts[language].youMightAlsoLike}</h3>
            <div class="row">
              ${getSimilarItems(menuItem, language, 3).map(item => `
                <div class="col-md-4 col-6 mb-3">
                  <div class="similar-item" data-item-id="${item.id}">
                    <img src="${item.image}" alt="${item.translations[language].name}"
                         class="similar-item-img img-fluid rounded">
                    <div class="similar-item-name">${item.translations[language].name}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Get similar menu items (same category, excluding the current item)
 */
function getSimilarItems(currentItem: MenuItem, language: Language, count: number): MenuItem[] {
  // Get other items from the same category
  const sameCategory = menuItems.filter((item: MenuItem) =>
    item.category === currentItem.category && item.id !== currentItem.id
  );

  // If not enough items in the same category, add some from other categories
  if (sameCategory.length < count) {
    // Get items from other categories and sort by language preference
    const otherItems = menuItems.filter((item: MenuItem) =>
      item.category !== currentItem.category && item.id !== currentItem.id
    )
    // Prioritize items with longer descriptions in the current language
    .sort((a: MenuItem, b: MenuItem) =>
      b.translations[language].description.length -
      a.translations[language].description.length
    );

    const shuffled = shuffleArray<MenuItem>(otherItems);
    return [...sameCategory, ...shuffled].slice(0, count);
  }

  return shuffleArray<MenuItem>(sameCategory).slice(0, count);
}

/**
 * Shuffle an array randomly
 */
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
