import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

import { HomePage } from "./pages/HomePage";
import { DevelopersLayout } from "./pages/developers/DevelopersLayout";
import { NotFoundPage } from "./pages/NotFoundPage";

type ModuleComponent<T extends string> = Record<T, React.ComponentType>;

function lazyComponent<T extends string>(
  importer: () => Promise<ModuleComponent<T>>,
  exportName: T,
) {
  return async () => {
    const module = await importer();
    return { Component: module[exportName] };
  };
}

function lazyDefaultComponent<T extends React.ComponentType>(
  importer: () => Promise<{ default: T }>,
) {
  return async () => {
    const module = await importer();
    return { Component: module.default };
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },

      { path: "partner", lazy: lazyComponent(() => import("./pages/PartnerPage"), "PartnerPage") },
      { path: "Partner", lazy: lazyComponent(() => import("./pages/PartnerPage"), "PartnerPage") },
      { path: "ecosystem", lazy: lazyComponent(() => import("./pages/EcosystemPage"), "EcosystemPage") },
      { path: "technology", lazy: lazyComponent(() => import("./pages/KorionPayPage"), "KorionPayPage") },
      { path: "korionpay", lazy: lazyComponent(() => import("./pages/KorionPayPage"), "KorionPayPage") },

      { path: "about", lazy: lazyComponent(() => import("./pages/AboutPage"), "AboutPage") },
      { path: "foundation", lazy: lazyComponent(() => import("./pages/FoundationPage"), "FoundationPage") },
      { path: "treasury", lazy: lazyComponent(() => import("./pages/TreasuryPage"), "TreasuryPage") },
      { path: "policy", lazy: lazyComponent(() => import("./pages/PolicyPage"), "PolicyPage") },

      { path: "SmartContract", lazy: lazyComponent(() => import("./pages/SmartContractPage"), "SmartContractPage") },
      { path: "smart-contract", lazy: lazyComponent(() => import("./pages/SmartContractPage"), "SmartContractPage") },

      { path: "news", lazy: lazyComponent(() => import("./pages/NewsPage"), "NewsPage") },
      { path: "news/:slug", lazy: lazyComponent(() => import("./pages/NewsDetailPage"), "NewsDetailPage") },

      { path: "tokenomics", lazy: lazyComponent(() => import("./pages/TokenomicsPage"), "TokenomicsPage") },
      { path: "roadmap", lazy: lazyComponent(() => import("./pages/RoadmapPage"), "RoadmapPage") },
      { path: "support", lazy: lazyComponent(() => import("./pages/SupportPage"), "SupportPage") },
      { path: "team", lazy: lazyComponent(() => import("./pages/TeamSection"), "TeamSection") },
      { path: "download", lazy: lazyComponent(() => import("./pages/DownloadPage"), "DownloadPage") },

      { path: "foxyya", lazy: lazyComponent(() => import("./pages/FoxyyaPage"), "FoxyyaPage") },
      { path: "mining", lazy: lazyComponent(() => import("./pages/MiningPage"), "MiningPage") },

      { path: "media-kit", lazy: lazyComponent(() => import("./pages/MediaKitPage"), "MediaKitPage") },
      { path: "faq", lazy: lazyComponent(() => import("./pages/FAQPage"), "FAQPage") },
      { path: "contact", lazy: lazyComponent(() => import("./pages/ContactPage"), "ContactPage") },
      { path: "explorer", lazy: lazyComponent(() => import("./pages/ExplorerPage"), "ExplorerPage") },
      { path: "listing-info", lazy: lazyComponent(() => import("./pages/ListingInfoPage"), "ListingInfoPage") },
      { path: "security", lazy: lazyComponent(() => import("./pages/SecurityPage"), "SecurityPage") },

      {
        path: "developers",
        Component: DevelopersLayout,
        children: [
          { index: true, lazy: lazyComponent(() => import("./pages/DevelopersPage"), "DevelopersPage") },
          { path: "api", lazy: lazyComponent(() => import("./pages/DevelopersApiPage"), "DevelopersApiPage") },
          { path: "sdk", lazy: lazyComponent(() => import("./pages/DevelopersSdkPage"), "DevelopersSdkPage") },
          { path: "authentication", lazy: lazyComponent(() => import("./pages/DevelopersAuthenticationPage"), "DevelopersAuthenticationPage") },
          { path: "webhooks", lazy: lazyComponent(() => import("./pages/DevelopersWebhooksPage"), "DevelopersWebhooksPage") },
          { path: "errors", lazy: lazyComponent(() => import("./pages/DevelopersErrorsPage"), "DevelopersErrorsPage") },
          { path: "sandbox", lazy: lazyComponent(() => import("./pages/DevelopersSandboxPage"), "DevelopersSandboxPage") },
          { path: "examples", lazy: lazyComponent(() => import("./pages/DevelopersExamplesPage"), "DevelopersExamplesPage") },
          { path: "rate-limits", lazy: lazyComponent(() => import("./pages/DevelopersRateLimitsPage"), "DevelopersRateLimitsPage") },
          { path: "partners", lazy: lazyComponent(() => import("./pages/DevelopersPartnersPage"), "DevelopersPartnersPage") },
          { path: "changelog", lazy: lazyComponent(() => import("./pages/DevelopersChangelogPage"), "DevelopersChangelogPage") },
          { path: "preregister", lazy: lazyComponent(() => import("./pages/DevelopersPreregisterPage"), "DevelopersPreregisterPage") },
        ],
      },

    ],
  },

  // Admin Panel — standalone (outside the main Layout to avoid contamination)
  {
    path: "/admin",
    lazy: lazyDefaultComponent(() => import("./pages/admin/AdminLayout")),
    children: [
      { path: "login", lazy: lazyComponent(() => import("./pages/admin/AdminLoginPage"), "AdminLoginPage") },
      { path: "partners", lazy: lazyComponent(() => import("./pages/admin/PartnerManager"), "PartnerManager") },
      { path: "news", lazy: lazyComponent(() => import("./pages/admin/NewsManager"), "NewsManager") },
      { path: "leadership", lazy: lazyComponent(() => import("./pages/admin/LeadershipManager"), "LeadershipManager") },
    ],
  },

  // Layout 바깥으로 분리
  {
    path: "/whitepaper",
    lazy: lazyDefaultComponent(() => import("./pages/WhitepaperPage")),
  },

  // 전체 404
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
