import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/routes";
import { LanguageProvider } from "./app/contexts/LanguageContext";
import { RouteSkeleton } from "./app/components/RouteSkeleton";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <RouterProvider router={router} fallbackElement={<RouteSkeleton />} />
  </LanguageProvider>
);
