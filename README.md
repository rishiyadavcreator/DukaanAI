# 🛍️ DukaanAI — AI Product Listing Assistant

**Turn your products into sales-ready stories. Write. Sell. Grow.**

DukaanAI is a simple, beginner-friendly web application designed to help small businesses, local shop owners, freelancers, and online sellers create product titles, descriptions, and social media captions.

The project aims to make product marketing easier by helping sellers prepare content in English and other supported languages, including Hindi and Hinglish.

## ✨ Features

- 📝 **Product Titles:** Create clear and attractive product titles.
- 📄 **Product Descriptions:** Generate descriptions using product details and benefits.
- 📱 **Social Media Captions:** Prepare captions for online promotion.
- 🌐 **Language Options:** Support for the languages configured in the application.
- 📋 **Copy Content:** Copy generated text for use on selling platforms.
- 💾 **Download Listings:** Download product content as a text file.
- 📌 **Save Listings:** Keep useful listings for later, if supported by the current implementation.
- 📱 **Responsive Design:** Use the interface on desktop and mobile screens.
- 🔓 **Open-Source Friendly:** Designed to be extended with open-source AI models.

## 🎯 Problem Statement

Small business owners often struggle to write attractive product descriptions and social media posts. Creating content manually takes time and may require marketing or writing skills.

DukaanAI aims to simplify this process by providing an easy interface for preparing product marketing content.

## 💡 Our Solution

Users enter their product name, category, price, and important features. DukaanAI uses this information to prepare product listing content that sellers can copy, download, and adapt for their business.

The goal is to help sellers save time and focus more on their products and customers.

## 🛠️ Tech Stack

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Form handling and content generation
- **Open-Source AI (Planned Integration)** — An open-weight model such as one served locally through Ollama

> **Current implementation note:** The basic prototype uses JavaScript templates. It does not yet run an actual AI model. Connecting an open-weight model through a backend is a planned enhancement.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Open the project folder

```bash
cd DukaanAI
```

### 3. Run the application

Open `index.html` in your browser.

You can also open the folder in Visual Studio Code and use the Live Server extension.

No build tools are required for the basic HTML, CSS, and JavaScript prototype.

## 📂 Project Structure

```text
DukaanAI/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧪 How to Use

1. Open the DukaanAI website.
2. Enter the product name.
3. Select a category.
4. Add the price, if applicable.
5. Describe the product's features and benefits.
6. Select the available writing style and language.
7. Click the generate button.
8. Review the generated content.
9. Copy or download the listing.

Always review generated content before publishing it, especially product specifications, prices, and claims.

## 🌱 Open-Source AI Roadmap

The project's next stage is to integrate an open-weight AI model so content generation can use a real language model rather than predefined templates.

Planned improvements:

- Integrate a suitable open-weight model through Ollama.
- Add a backend API for model inference.
- Improve Hindi and Hinglish content generation.
- Add product-specific writing styles.
- Add listing history and persistent storage.
- Improve accessibility and mobile usability.
- Add tests and clearer error messages.

The AI integration will require a compatible model, suitable hardware or hosting, and a backend service. The basic frontend alone does not provide these capabilities.

## 💰 Side Hustle Potential

DukaanAI could grow into a useful tool for:

- Small online sellers
- Local retail shops
- Handmade-product businesses
- Freelancers managing product catalogs
- Social media managers

Possible future business models include a free basic tier, paid advanced features, or customized tools for small businesses. These are ideas for future development, not existing paid services.

## 🔐 Privacy

The current frontend prototype does not require an account. Avoid entering confidential customer or business information.

Before adding a backend or AI service, review what information is transmitted, stored, or processed and explain those practices to users.

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Test the application.
5. Submit a pull request describing your improvements.

Ideas for contributions include UI improvements, accessibility, additional languages, testing, and open-source AI integration.

## 📜 License

This project can be released under the **MIT License**. Add a `LICENSE` file containing the MIT License text before claiming that the repository is MIT-licensed.

## 👨‍💻 Built For

**Hacktoberfest — Open-Source AI Challenge**

Created to explore how accessible web technologies and open-source AI can help small businesses and independent creators.

**DukaanAI — Made for small businesses with big ambitions.**

⭐ If you find this project useful, consider starring the repository and contributing!
