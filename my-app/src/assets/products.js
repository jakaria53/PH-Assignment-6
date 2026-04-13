const products = [
  {
    id: 1,
    name: "Design Tool Pro",
    description: "Professional design software with advanced features for creating stunning visuals and graphics.",
    price: "$49.99",
    period: "month",
    icon: new URL('./products/design-tool.png', import.meta.url).href,
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Advanced design tools", "Cloud sync", "Templates included", "24/7 support"]
  },
  {
    id: 2,
    name: "Operation Manager",
    description: "Streamline your business operations with this comprehensive management tool.",
    price: "$39.99",
    period: "month",
    icon: new URL('./products/operation.png', import.meta.url).href,
    tag: "Popular",
    tagType: "popular",
    features: ["Workflow automation", "Team collaboration", "Analytics dashboard", "Mobile app"]
  },
  {
    id: 3,
    name: "Portfolio Builder",
    description: "Create impressive portfolios to showcase your work and attract clients.",
    price: "$29.99",
    period: "month",
    icon: new URL('./products/portfolio.png', import.meta.url).href,
    tag: "New",
    tagType: "new",
    features: ["Custom templates", "SEO optimized", "Social media integration", "Analytics tracking"]
  },
  {
    id: 4,
    name: "Shopping Cart Plus",
    description: "Advanced e-commerce solution with powerful cart and checkout features.",
    price: "$59.99",
    period: "month",
    icon: new URL('./products/shopping-cart.png', import.meta.url).href,
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Secure payments", "Inventory management", "Order tracking", "Customer reviews"]
  },
  {
    id: 5,
    name: "Social Media Suite",
    description: "Complete social media management toolkit for growing your online presence.",
    price: "$34.99",
    period: "month",
    icon: new URL('./products/social-media.png', import.meta.url).href,
    tag: "Popular",
    tagType: "popular",
    features: ["Multi-platform posting", "Content scheduling", "Engagement analytics", "Hashtag research"]
  },
  {
    id: 6,
    name: "Writing Assistant",
    description: "AI-powered writing tool to help you create content faster and better.",
    price: "$24.99",
    period: "month",
    icon: new URL('./products/writing_2327400 1.png', import.meta.url).href,
    tag: "New",
    tagType: "new",
    features: ["AI content generation", "Grammar checking", "Style suggestions", "Plagiarism detection"]
  }
];

export default products;